import { SharingServiceElection } from '../../SharingServiceElection';
import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild,
    OnDestroy,
} from '@angular/core';
import { Markers } from '../google-map/google-map.component';
import { loadModules } from 'esri-loader';
import esri = __esri; // Esri TypeScript Types
import { HttpClient } from '@angular/common/http';
import { ElectionFilterCategoryComponent } from '../../election-filter-category/election-filter-category.component';
import {
    ElectionAgentUserServiceProxy,
    ElectionPollingUnitResultServiceProxy,
    ElectionPollingUnitServiceProxy,
    ElectionReportSummaryDto,
} from '@shared/service-proxies/service-proxies';
import { NgxSpinnerService } from 'ngx-spinner';
import { Console } from 'console';

@Component({
    selector: 'app-votes',
    templateUrl: './votes.component.html',
    styleUrls: ['./votes.component.css'],
})
export class VotesComponent implements OnInit, OnChanges {
    @Output() mapLoadedEvent = new EventEmitter<boolean>();
    @Input() assignedPollingUnitData: any;
    data: any;
    pollingUnitActivity: any = {};
    electionReportSummaryAnalyticsResult: any;
    electionLocalCouncilDetails: any[] = [];
    @ViewChild('map') mapElement: any;

    @ViewChild('mapViewNode', { static: true })
    mapViewEl: ElementRef;
    markers: Markers[];
    googleMarkers: any[] = [];
    electionUnitsResult: any[] = [];
    electionCountries: any[] = [];
    electionStates: any[] = [];
    electionStatesForDropDown: any[] = [];
    electionLocalCouncils: any[] = [];
    electionLocalCouncilsForDropDown: any[] = [];
    electionWards: any[] = [];
    electionWardsForDropDown: any[] = [];
    map: google.maps.Map;
    selectedMarker: google.maps.Marker;
    infoWindow: google.maps.InfoWindow;
    selectedDriverId = 0;
    puResulted = 0;
    puWOResulted = 0;
    mapSwitch = true;
    satteliteSwitch = false;
    _center = [9.082, 8.6753];
    _basemap = 'streets-vector';
    _zoom = 4;
    _loaded = false;
    _view: esri.MapView = null;
    LocalGovtboundryLayer: any;
    StateboundryLayer: any;
    WardboundryLayer: any;
    gisPopUp: any;
    GISMAP = false;
    GOOGLEMAP = true;
    Location = true;
    Activities = false;
    pollingunitDataArray: any = [];
    pollingunitDataArrayBackup: any = [];
    pollingunitFilterDataArray: any = [];
    dataElectionResult: any;
    resultedData: boolean = false;
    withoutResultedData: boolean = false;
    get mapLoaded(): boolean {
        return this._loaded;
    }
    constructor(
        private http: HttpClient,
        private sharingService: SharingServiceElection,
        private spinnerService: NgxSpinnerService,
        private _electionPollingUnit: ElectionPollingUnitServiceProxy,
        private _electionAgentUser: ElectionAgentUserServiceProxy,
        private _electionPollingUnitResult: ElectionPollingUnitResultServiceProxy
    ) {}

    async initializeMap(gisPopUp: any, geoJsonPath: string, type: string) {
        try {
            // Load the modules for the ArcGIS API for JavaScript
            const [EsriMap, EsriMapView, FeatureLayer, GeoJSONLayer, Graphic] = await loadModules([
                'esri/Map',
                'esri/views/MapView',
                'esri/layers/FeatureLayer',
                'esri/layers/GeoJSONLayer',
                'esri/Graphic',
            ]);

            const mapProperties = {
                basemap: this._basemap,
            };

            const map = new EsriMap(mapProperties);
            let url: string = '';
            this.http.get(geoJsonPath, { responseType: 'blob' }).subscribe((res) => {
                url = URL.createObjectURL(res);
                const layer = new GeoJSONLayer({
                    url: url,
                    popupTemplate: gisPopUp,
                });

                map.add(layer);
                // Initialize the MapView
                const mapViewProperties: esri.MapViewProperties = {
                    container: this.mapViewEl.nativeElement,
                    center: this._center,
                    zoom: this._zoom,
                    map: map,
                };

                this._view = new EsriMapView(mapViewProperties);

                this._view.whenLayerView(layer).then((layerView) => {
                    if (type === 'LGB') this.LocalGovtboundryLayer = layerView;
                    else if (type == 'SB') this.StateboundryLayer = layerView;
                    else if (type == 'WB') this.WardboundryLayer = layerView;
                });
                // await this._view.when();
                return this._view;
            });
        } catch (error) {
            console.log('EsriLoader: ', error);
        }
    }

    ngOnInit(): void {
        this.filterByLocalBoundries();
        // this.GetAllPollingUnits();

        this.electionReportSummaryAnalyticsResult = new ElectionReportSummaryDto();
    }

    ngAfterViewInit() {
        this.initMap(8.9538, 7.2583);
    }

    initMap(lat: number, long: number, title: string = '') {
        this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
            zoom: 4,
            center: new google.maps.LatLng(lat, long),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        });
        this.Mapmarker();
        this.filterMarkers(title);
    }

    showMapPopUpAndActivity(item:any){
        this.initMap(item.latitude,item.longtitude, item.electionPollingUnitName);
        this.pollingUnitActivity = item;
        this.pollingUnitActivity.candidates = [];
        item.politicalPartyDetail.forEach((value, index) => {
            value.electionCandidate.forEach((value2, index) => {
                let obj:any = {};
                obj.candidateName = value2.candidateName;
                obj.candidatePhoto = value2.candidatePhoto;
                obj.totalElectionCandidateVote = value2.totalElectionCandidateVote;
                obj.partyName = value.partyName;
                obj.partyPhoto = value.partyPhoto;
                this.pollingUnitActivity.candidates.push(obj);
            });
        });
    }

    Mapmarker() {
        const trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(this.map);
        this.pollingunitDataArray.forEach((m) => {
            var marker = new google.maps.Marker({
                title: m.electionPollingUnitName,
                position: new google.maps.LatLng(Number(m.latitude), Number(m.longtitude)),
                icon: 'assets/Dashboard/mapicons/unit-40x.png',
                map: this.map,
            });

            let validPerc = 0;
            let cancelledPerc = 0;
            if(m.totalVote > 0){
                validPerc = m.totalValidVote/m.totalVote * 100;
                cancelledPerc = m.totalCancelled/m.totalVote * 100;
            }

            var markerInfo =
    '<div class="card bg-custom-mappopup" style="background: #F0EEFC;">' +
    '<div class="card-body p-5">' +
        '<div class="row">' +
            '<div class="col-md-4">' +
                '<h6 class="text-dark fs-10"><b>Polling Unit</b></h6>' +
            '</div>' +
            '<div class="col-md-7">' +
                '<marquee direction="left" class="text-dark fs-09" scrolldelay="600" behavior="loop"><h6 class="text-dark fs-09"><u><b>' + m.electionPollingUnitName + '</b></u></h6></marquee>' +
            '</div>' +
            '<div class="col-md-1">' +
                '<img class="br-50 custom-img-icon" width="20" src="'+ m.icon +'" />' +
            '</div>' +
            '<div class="col-md-6">' +
                '<h6 class="text-custom-primary fs-10">Total Valid Vote</h6>' +
                '<h6 class="text-dark text-muted fs-10">' + Math.round(validPerc) + '% Valid Votes</h6>' +
            '</div>' +
            '<div class="col-md-6">' +
                '<h6 class="text-custom-primary fs-10">Total Cancelled Vote</h6>' +
                '<h6 class="text-dark text-muted fs-10">'+ Math.round(cancelledPerc) + '% Cancelled Votes</h6>' +
            '</div>' +
        '</div>' +
        '<div class="card bg-custom-mappopup2" style="background: #E2E1FF;">' +
            '<div class="card-body p-0">' +
                '<div class="bg-custom-mappopup3 pt-2 pb-7" style="background: #F8F8F8;">' +
                   '<div class="col-md-4 pl-1">' +
                        '<h6 class="text-dark fs-10"><b>Region:</b></h6>' +
                    '</div>' +
                    '<div class="col-md-8">' +
                       '<marquee direction="left" class="text-dark fs-09" scrolldelay="600" behavior="loop"><h6 class="text-dark fs-09"><b>'+ m.address +'</b></h6></marquee>' +
                    '</div>' +
                '</div>' +
                '<div class="p-3">' +
                    '<div class="row">' +
                        '<div class="col-md-4">' +
                            '<div class="row">' +
                                '<div class="col-md-12">' +
                                    '<h6 class="text-custom-primary fs-09"><b>Total Votes</b></h6>' +
                                '</div>' +
                                '<div class="col-md-3">' +
                                    '<img src="/assets/svgfortabs/how_to_vote.svg" width="15" />' +
                                '</div>' +
                                '<div class="col-md-9">' +
                                    '<h6 class="text-dark fs-13"><b>' + m.totalVote + '</b></h6>' +

                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-md-4">' +
                            '<div class="row">' +
                                '<div class="col-md-12">' +
                                    '<h6 class="text-custom-primary fs-09"><b>Valid Votes</b></h6>' +
                                '</div>' +
                                '<div class="col-md-3">' +
                                    '<img src="/assets/svgfortabs/how_to_vote.svg" width="15" />' +
                                '</div>' +
                                '<div class="col-md-9">' +
                                    '<h6 class="text-dark fs-13"><b>' + m.totalValidVote + '</b></h6>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-md-4">' +
                            '<div class="row">' +
                            '<div class="col-md-12">' +
                                    '<h6 class="text-custom-primary fs-09"><b>Cancelled Votes</b></h6>' +
                                '</div>' +
                                '<div class="col-md-3">' +
                                    '<img src="/assets/svgfortabs/how_to_vote.svg" width="15" />' +
                                '</div>' +
                                '<div class="col-md-9">' +
                                    '<h6 class="text-dark fs-13"><b>' + m.totalCancelled + '</b></h6>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                   '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>' +
    '</div>' +
'</div>';
'<script src=""node_modules/chart.js/dist/chart.js""></script>';
                // '<div >' +
                // '<div style="width: 215px !important;">' +
                // '<div class="card" style="background-color: #F0EEFC;">' +
                // '<div class="" >' +
                // '<div class="col-md-12 text-center">' +
                // '<img src="assets/Dashboard/Ellipse-Activity.png" style="border-radius: 50%;" width="80">' +
                // '</div>' +
                // '<div class="col-md-6">' +
                // '<h6 style="font-size: 0.8rem;"><b>Polling Unit</b></h6>' +
                // '</div>' +
                // '<div class="col-md-6 pl-0 pr-3 text-right">' +
                // '<h6 style="font-size: 0.7rem;"><b>' +
                // m.electionPollingUnitName +
                // '</b></h6>' +
                // '</div>' +
                // '<div class="col-md-12">' +
                // '<div class="card" style="background-color: #ffffff;">' +
                // '<div class="row p-2">' +
                // '<div class="col-8">' +
                // '<button class="btn btn-sm btn-primary btn-block"><marquee direction="left" class="text-white fs-09" scrolldelay="600" behavior="loop">' +
                // m.electionWardName +
                // '</marquee></button>' +
                // '</div>' +
                // '<div class="col-4 pt-1 pr-6 text-right">' +
                // '<img src="assets/Dashboard/pink.png" width="16">' +
                // '</div>' +
                // '<div class="col-4 mt-3">' +
                // '<h6 style="font-size: 0.8rem;">Region</h6>' +
                // '</div>' +
                // '<div class="col-8 pl-0 pr-0 mt-3">' +
                // '<h6 style="font-size: 0.7rem;">' +
                // m.address +
                // '</h6>' +
                // '</div>' +
                // '</div>' +
                // '</div>' +
                // '</div>' +
                // '<div class="col-md-12 text-center">' +
                // '<div class="card" style="background-color: #E2E1FF;">' +
                // '<div class="">' +
                // '<div class="col-md-6 bg-activities-card3 custom-border-primary pl-0" style="border-bottom: 2px solid #6751ED">' +
                // '<div class="col-md-2 mt-6 pl-0">' +
                // '<i class="fa fa-solid fa-calendar text-custom-primary"></i>' +
                // '</div>' +
                // '<div class="col-md-10 mt-5 pl-2 mb-1 pr-0">' +
                // '<h6 class="text-custom-activities fs-09 mb-1">Total Votes</h6>' +
                // '<h6 class="text-custom-primary fs-09">' +
                // m.totalVote +
                // '</h6>' +
                // '</div>' +
                // '</div>' +
                // '<div class="col-md-6 bg-activities-card3 custom-border-primary pl-0" style="border-bottom: 2px solid #6751ED">' +
                // '<div class="col-md-2 mt-6 pl-0">' +
                // '<i class="fa fa-solid fa-calendar text-custom-primary"></i>' +
                // '</div>' +
                // '<div class="col-md-10 mt-5 pl-2 mb-1 pr-0">' +
                // '<h6 class="text-custom-activities fs-09 mb-1">Valid Votes</h6>' +
                // '<h6 class="text-custom-primary fs-09">' +
                // m.totalValidVote +
                // '</h6>' +
                // '</div>' +
                // '</div>' +
                // '<div class="col-md-12 bg-activities-card3 custom-border-primary pl-0" style="border-bottom: 2px solid #6751ED">' +
                // '<div class="col-md-2 mt-6 pl-0">' +
                // '<i class="fa fa-solid fa-calendar text-custom-primary"></i>' +
                // '</div>' +
                // '<div class="col-md-10 mt-5 pl-2 mb-1 pr-0">' +
                // '<h6 class="text-custom-activities fs-09 mb-1">Cancelled</h6>' +
                // '<h6 class="text-custom-primary fs-09">' +
                // m.totalCancelled +
                // '</h6>' +
                // '</div>' +
                // '</div>' +
                // '</div>' +
                // '</div>' +
                // '</div>' +
                // '</div>' +
                // '</div>' +
                // '</div>' +
                // '</div>';

            var iw = new google.maps.InfoWindow({
                content: markerInfo,
            });
            this.googleMarkers.push(marker);
            google.maps.event.addListener(marker, 'click', function (e) {
                iw.open(this.map, this);
            });
        });
    }

    filterMarkers(title) {
        var i;
        for (i = 0; i < this.googleMarkers.length; i++) {
            var marker = this.googleMarkers[i];
            if (marker.title === title) {
                new google.maps.event.trigger(marker, 'click');
            } else {
                // marker.setVisible(false);
            }
        }
    }



    GetData() {
        this.assignedPollingUnitData = this.sharingService.getData();
    }

    GetElectionReportSummaryAnalyticsData() {
        this.electionReportSummaryAnalyticsResult = this.sharingService.getData();
    }

    // GetElectionResultData() {
    //
    //     var data = this.sharingService.getData();
    //     this.electionLocalCouncilDetails = data[0].electionStateDetails[0].electionLocalCouncilDetails;
    //     this.Mapmarker();
    // }

    ngOnChanges(changes: SimpleChanges): void {}

    ngOnDestroy() {
        if (this._view) {
            // destroy the map view
            this._view.container = null;
        }
    }



    GetAllPollingUnits() {
        this._electionPollingUnit
            .getAll(
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined
            )
            .subscribe((data) => {
                this.electionUnitsResult = data.items;
            });
    }

    async filterByLocalBoundries() {
        const popuplocalBoundries = {
            title: 'GRID3_Nigeria_-_Local_Government_Area_Boundaries',
            content:
                '<table class="table table-striped">' +
                '<tbody>' +
                '<tr><td>OBJECTID</td><td>{OBJECTID}</td></tr>' +
                '<tr><td>lga_code</td><td>{lga_code}</td></tr>' +
                '<tr><td>state_code</td><td>{state_code}</td></tr>' +
                '<tr><td>lga_name_x</td><td>{lga_name_x}</td></tr>' +
                '<tr><td>mean</td><td>{mean}</td></tr>' +
                '<tr><td>Shape__Area</td><td>{Shape__Area}</td></tr>' +
                '<tr><td>Shape__Length</td><td>{Shape__Length}</td></tr>' +
                '</tbody></table>',
        };
        await this.initializeMap(
            popuplocalBoundries,
            '/assets/geojson/GRID3_Nigeria_-_Local_Government_Area_Boundaries.geojson',
            'LGB'
        ).then((mapView) => {
            // The map has been initialized
            // console.log('mapView ready: ', this._view.ready);
            this._loaded = undefined;
            this.mapLoadedEvent.emit(true);
        });
    }
    async filterByStateBoundries() {
        const popuplocalBoundries = {
            title: 'GRID3_Nigeria_-_State_Boundaries',
            content:
                '<table class="table table-striped">' +
                '<tbody>' +
                '<tr><td>FID</td><td>{FID}</td></tr>' +
                '<tr><td>globalid</td><td>{globalid}</td></tr>' +
                '<tr><td>uniq_id</td><td>{uniq_id}</td></tr>' +
                '<tr><td>statename</td><td>{statename}</td></tr>' +
                '<tr><td>statecode</td><td>{statecode}</td></tr>' +
                '<tr><td>capcity</td><td>{capcity}</td></tr>' +
                '<tr><td>geozone</td><td>{geozone}</td></tr>' +
                '</tbody></table>',
        };
        await this.initializeMap(
            popuplocalBoundries,
            '/assets/geojson/GRID3_Nigeria_-_State_Boundaries.geojson',
            'SB'
        ).then((mapView) => {
            // The map has been initialized
            // console.log('mapView ready: ', this._view.ready);
            this._loaded = undefined;
            this.mapLoadedEvent.emit(true);
        });
    }
    async filterByWardBoundries() {
        const popuplocalBoundries = {
            title: 'GRID3_Nigeria_-_Ward_Boundaries',
            content:
                '<table class="table table-striped">' +
                '<tbody>' +
                '<tr><td>OBJECTID</td><td>{OBJECTID}</td></tr>' +
                '<tr><td>ward_cd</td><td>{ward_cd}</td></tr>' +
                '<tr><td>stat_cd</td><td>{stat_cd}</td></tr>' +
                '<tr><td>lga_cod</td><td>{lga_cod}</td></tr>' +
                '<tr><td>wrd_nm_x</td><td>{wrd_nm_x}</td></tr>' +
                '<tr><td>mean</td><td>{mean}</td></tr>' +
                '<tr><td>Shape__Area</td><td>{Shape__Area}</td></tr>' +
                '<tr><td>Shape__Length</td><td>{Shape__Length}</td></tr>' +
                '</tbody></table>',
        };
        await this.initializeMap(
            popuplocalBoundries,
            '/assets/geojson/GRID3_Nigeria_-_Ward_Boundaries.geojson',
            'WB'
        ).then((mapView) => {
            // The map has been initialized
            console.log('mapView ready: ', this._view.ready);
            this._loaded = undefined;
            // this._loaded = this._view.ready;
            this.mapLoadedEvent.emit(true);
        });
    }

    filterByStateBoundry(state: string) {
        this.StateboundryLayer.filter = {
            where: "statename = '" + state + "'",
        };
    }

    mapLoadedEvent1(status: boolean) {
        console.log('The map loaded: ' + status);
    }
    MapTypeGoogleToGIS() {
        this.GISMAP = true;
        this.GOOGLEMAP = false;
    }
    MapTypeGISToGoogle() {
        this.GOOGLEMAP = true;
        this.GISMAP = false;
    }
    LocationToActivites() {
        this.Activities = true;
        this.Location = false;
    }
    ActivitiesToLocation() {
        this.Location = true;
        this.Activities = false;
    }
    GetResultedPollingUnit() {
        this.resultedData = true;
        this.withoutResultedData = false;
        this.pollingunitDataArray = this.pollingunitDataArrayBackup;
        this.pollingunitDataArray = this.pollingunitDataArray.filter((c) => c.totalVote > 0);
    }
    GetAllPollingUnit() {
        this.resultedData = true;
        this.withoutResultedData = false;
        this.pollingunitDataArray = this.pollingunitDataArrayBackup;
    }
    GetWithoutResultedPollingUnit() {
        this.resultedData = false;
        this.withoutResultedData = true;
        this.pollingunitDataArray = this.pollingunitDataArrayBackup;
        this.pollingunitDataArray = this.pollingunitDataArray.filter((c) => c.totalVote === 0);
    }

    GetAllData() {
        this.resultedData = false;
        this.withoutResultedData = false;
    }

    filterByCountry(countryId: number) {
        this.getElectionResultData();
        this.spinnerService.show();
        this.electionStatesForDropDown = this.electionStates.filter((s) => s.electionCountryId === countryId);
        if (countryId !== 0) {
            this.pollingunitDataArray = this.pollingunitDataArray.filter((c) => c.countryId === countryId);
            if (this.resultedData) {
                this.pollingunitDataArray = this.pollingunitDataArray.filter((c) => c.totalVote > 0);
            } else if (this.withoutResultedData) {
                this.pollingunitDataArray = this.pollingunitDataArray.filter((c) => c.totalVote === 0);
            }
            if (this.pollingunitDataArray.length > 0) {
                // this.initMap(this.pollingunitDataArray[0].latitude, this.pollingunitDataArray[0].longtitude);
                this.showMapPopUpAndActivity(this.pollingunitDataArray[0]);
            } else {
                this.initMap(8.9538, 7.2583);
            }
        }
        this.spinnerService.hide();
    }
    filterByState(stateId: number) {
        this.spinnerService.show();
        this.getElectionResultData();
        this.electionLocalCouncilsForDropDown = this.electionLocalCouncils.filter((s) => s.electionStateId === stateId);
        if (stateId !== 0) {
            this.pollingunitDataArray = this.pollingunitDataArray.filter((c) => c.stateId === stateId);
            if (this.resultedData) {
                this.pollingunitDataArray = this.pollingunitDataArray.filter((c) => c.totalVote > 0);
            } else if (this.withoutResultedData) {
                this.pollingunitDataArray = this.pollingunitDataArray.filter((c) => c.totalVote === 0);
            }
            if (this.pollingunitDataArray.length > 0) {
                // this.initMap(this.pollingunitDataArray[0].latitude, this.pollingunitDataArray[0].longtitude);
                this.showMapPopUpAndActivity(this.pollingunitDataArray[0]);
            } else {
                this.initMap(8.9538, 7.2583);
            }
        }
        this.spinnerService.hide();
    }
    filterByLocalCouncil(localCouncilId: number) {
        this.spinnerService.show();
        this.getElectionResultData();
        this.electionWardsForDropDown = this.electionWards.filter((s) => s.electionLocalCouncilId === localCouncilId);
        if (localCouncilId !== 0) {
            this.pollingunitDataArray = this.pollingunitDataArray.filter((c) => c.localCouncilId === localCouncilId);
            if (this.resultedData) {
                this.pollingunitDataArray = this.pollingunitDataArray.filter((c) => c.totalVote > 0);
            } else if (this.withoutResultedData) {
                this.pollingunitDataArray = this.pollingunitDataArray.filter((c) => c.totalVote === 0);
            }
            if (this.pollingunitDataArray.length > 0) {
                // this.initMap(this.pollingunitDataArray[0].latitude, this.pollingunitDataArray[0].longtitude);
                this.showMapPopUpAndActivity(this.pollingunitDataArray[0]);
            } else {
                this.initMap(8.9538, 7.2583);
            }
        }
        this.spinnerService.hide();
    }
    filterByWard(wardId: number) {
        this.spinnerService.show();
        this.getElectionResultData();
        this.pollingunitFilterDataArray = this.pollingunitDataArray.filter((s) => s.wardId === wardId);
        if (wardId !== 0) {
            this.pollingunitDataArray = this.pollingunitFilterDataArray.filter((c) => c.wardId === wardId);
            if (this.resultedData) {
                this.pollingunitDataArray = this.pollingunitDataArray.filter((c) => c.totalVote > 0);
            } else if (this.withoutResultedData) {
                this.pollingunitDataArray = this.pollingunitDataArray.filter((c) => c.totalVote === 0);
            }
            if (this.pollingunitDataArray.length > 0) {
                // this.initMap(this.pollingunitDataArray[0].latitude, this.pollingunitDataArray[0].longtitude);
                this.showMapPopUpAndActivity(this.pollingunitDataArray[0]);
            } else {
                this.initMap(8.9538, 7.2583);
            }
        }
        this.spinnerService.hide();
    }
    filterByPollingUnit(id: number) {
        this.getElectionResultData();
        this.spinnerService.show();
        if (id !== 0) {
            this.pollingunitDataArray = this.pollingunitDataArray.filter((c) => c.id === id);
            if (this.resultedData) {
                this.pollingunitDataArray = this.pollingunitDataArray.filter((c) => c.totalVote > 0);
            } else if (this.withoutResultedData) {
                this.pollingunitDataArray = this.pollingunitDataArray.filter((c) => c.totalVote === 0);
            }
            if (this.pollingunitDataArray.length > 0) {
                // this.initMap(this.pollingunitDataArray[0].latitude, this.pollingunitDataArray[0].longtitude);
                this.showMapPopUpAndActivity(this.pollingunitDataArray[0]);
            } else {
                this.initMap(8.9538, 7.2583);
            }
        }
        this.spinnerService.hide();
    }
    getElectionResultData() {
        try {
            this.spinnerService.show();
            this.pollingunitDataArray = [];
            this.electionCountries = [];
            this.electionStates = [];
            this.electionLocalCouncils = [];
            this.electionWards = [];
            let votingeDataObj: any = {};
            this.dataElectionResult = this.sharingService.getElectionResultData();
            this.dataElectionResult.forEach((value, index) => {
                this.electionCountries = value.electionCountryDetails;
                value.electionCountryDetails.forEach((value2, index2) => {
                    this.electionStates = this.electionStates.concat(value2.electionStateDetails);
                    value2.electionStateDetails.forEach((value3, index3) => {
                        this.electionLocalCouncils = this.electionLocalCouncils.concat(
                            value3.electionLocalCouncilDetails
                        );
                        value3.electionLocalCouncilDetails.forEach((value4, index4) => {
                            this.electionWards = this.electionWards.concat(value4.electionWardDetails);
                            value4.electionWardDetails.forEach((value5, index5) => {
                                value5.electionPollingUnitDetail.forEach((value6, index6) => {
                                    votingeDataObj.id = value6?.id;
                                    votingeDataObj.electionPollingUnitName = value6?.electionPollingUnitName;
                                    votingeDataObj.address = value6?.address;
                                    votingeDataObj.totalVote = value6?.electionResultDetails?.totalVote;
                                    votingeDataObj.totalValidVote = value6?.electionResultDetails?.totalValidVote;
                                    votingeDataObj.totalCancelled = value6?.electionResultDetails?.totalCancelled;
                                    votingeDataObj.totalAccreditedBvasVoters = value6?.electionResultDetails?.totalAccreditedBvasVoters;
                                    votingeDataObj.totalConfirmedAccreditedVoters = value6?.electionResultDetails?.totalConfirmedAccreditedVoters;
                                    votingeDataObj.electionWardName = value5?.electionWardName;
                                    votingeDataObj.numberOfPollingUnit = value5?.numberOfPollingUnit;
                                    votingeDataObj.latitude = value5?.latitude;
                                    votingeDataObj.longtitude = value5?.longtitude;
                                    votingeDataObj.countryId = value2?.id;
                                    votingeDataObj.stateId = value3?.id;
                                    votingeDataObj.localCouncilId = value4?.id;
                                    votingeDataObj.wardId = value5?.id;
                                    votingeDataObj.icon = votingeDataObj.totalVote > 0 ? "/assets/Dashboard/check_circle.png" : "/assets/Dashboard/hourglass_bottom.png";
                                    votingeDataObj.politicalPartyDetail = value6.politicalPartyDetail
                                    this.pollingunitDataArray.push(votingeDataObj);
                                    this.pollingunitDataArrayBackup = this.pollingunitDataArray;
                                    votingeDataObj = {};
                                });
                            });
                        });
                    });
                });
            });
            this.spinnerService.hide();
            // this.initMap(this.pollingunitDataArray[0].latitude, this.pollingunitDataArray[0].longtitude);
            this.showMapPopUpAndActivity(this.pollingunitDataArray[0]);
            if(this.pollingunitDataArray.length > 0){
                this.puResulted = this.pollingunitDataArrayBackup.filter(f => f.totalVote > 0).length;
                this.puWOResulted = this.pollingunitDataArrayBackup.filter(f => f.totalVote === 0).length;
            }
        } catch (ex) {
            console.log(ex);
        }
    }
}
