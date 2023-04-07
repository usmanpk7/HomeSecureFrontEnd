import { ElectionPollingUnitDetails } from './../../../../../shared/service-proxies/service-proxies';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ElectionSenatorialDistrictCouncilServiceProxy } from '@shared/service-proxies/service-proxies';
import { NgxSpinnerService } from 'ngx-spinner';
import { SharingServiceElection } from '../../SharingServiceElection';

@Component({
    selector: 'app-election-post',
    templateUrl: './election-post.component.html',
    styleUrls: ['./election-post.component.css'],
})
export class ElectionPostComponent implements OnInit, AfterViewInit {
    @ViewChild('map2') mapElement: any;

    map: google.maps.Map;
    infoWindow: google.maps.InfoWindow;
    markers: Markers[];
    selectedDriverId = 0;
    mapSwitch = true;
    satteliteSwitch = false;
    mapCenter = [9.082, 8.6753];
    basemapType = 'hybrid';
    mapZoomLevel = 5;
    GISMAP = false;
    GOOGLEMAP = true;
    Location = true;
    Activities = false;
    displayFilter: boolean;
    position: string;
    dataElectionResult: any;
    electionStateData: any;
    electionSenatorialDistrictResult: any[] = [];
    electionCountries: any[] = [];
    electionStates: any[] = [];
    electionStatesForDropDown: any[] = [];
    electionLocalCouncils: any[] = [];
    electionLocalCouncilsForDropDown: any[] = [];
    electionWards: any[] = [];
    electionWardsForDropDown: any[] = [];
    pollingunitDataArray: any = [];
    pollingunitDataArrayForDropDown: any = [];
    electionResultData: any = [];
    googleMarkers: any[] = [];
    resultedData: boolean = false;
    withoutResultedData: boolean = false;

    constructor(
        private sharingService: SharingServiceElection,
        private spinnerService: NgxSpinnerService,
        private _electionSenatorialDistrictCouncilServiceProxy: ElectionSenatorialDistrictCouncilServiceProxy
    ) {}

    ngOnInit(): void {
        this.GetAllElectionSenatorialDistrict();
    }

    ngAfterViewInit() {
        this.initMap(8.9538, 7.2583);
    }

    initMap(lat: number, long: number, name: string = '') {
        this.map = new google.maps.Map(document.getElementById('map2') as HTMLElement, {
            zoom: 4,
            center: new google.maps.LatLng(lat, long),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        });
        this.Mapmarker();
        this.filterMarkers(name);
    }

    filterMarkers(name) {
        var i;
        for (i = 0; i < this.googleMarkers.length; i++) {
            var marker = this.googleMarkers[i];
            if (marker.title === name) {
                new google.maps.event.trigger(marker, 'click');
            } else {
                // marker.setVisible(false);
            }
        }
    }

    MapCheck() {
        if (this.mapSwitch) {
            this.map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
            this.satteliteSwitch = true;
            this.mapSwitch = false;
        } else {
            this.map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
            this.mapSwitch = true;
            this.satteliteSwitch = false;
        }
    }

    Mapmarker() {
        const trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(this.map);

        this.electionResultData.forEach((m) => {
            var marker = new google.maps.Marker({
                title: m.name,
                position: new google.maps.LatLng(m.latitude, m.longitude),
                icon: 'assets/Dashboard/mapicons/unit-40x.png',
                map: this.map,
            });
            var markerInfo =
                '<div >' +
                '<div style="width: 215px !important;">' +
                '<div class="card" style="background-color: #F0EEFC;">' +
                '<div class="" >' +
                '<div class="col-md-12 text-center">' +
                '<h6 class="fs-07"><b>' +
                m.name +
                '</b></h6>' +
                '</div>' +
                '<div class="col-md-12 text-center">' +
                '<img src="' +
                m.photoPath +
                '" style="border-radius: 50%;" width="80">' +
                '</div>' +
                '<div class="col-md-9">' +
                '<h6 class="fs-09 font-bold"><b>Wards</b></h6>' +
                '</div>' +
                '<div class="col-md-3 text-left">' +
                '<h6 class="fs-08"><b>' +
                m.totalElectionWardLink +
                '</b></h6>' +
                '</div>' +
                '<div class="col-md-12">' +
                '<div class="card" style="background-color: #ffffff;">' +
                '<div class="row p-2">' +
                '<div class="col-8">' +
                '<button class="btn btn-sm bg-custom-primary text-white pr-6 pl-6 btn-block">' +
                m.name +
                '</button>' +
                '</div>' +
                '<div class="col-4 pt-1 pr-6 text-right">' +
                '<img src="" width="16">' +
                '</div>' +
                '<div class="col-6 mt-3">' +
                '<h6 class="fs-09"><b>' +
                m.label +
                '</b></h6>' +
                '</div>' +
                '<div class="col-6 mt-3">' +
                '<h6 style="font-size: 0.7rem;">' +
                m.name +
                '</h6>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="col-md-12">' +
                '<div class="card" style="background-color: #E2E1FF;">' +
                '<div class="">' +
                '<div class="col-md-6 bg-activities-card3 custom-border-primary pl-0" style="border-bottom: 2px solid #6751ED">' +
                '<div class="col-md-2 mt-6 pl-0">' +
                '<i class="fa fa-solid fa-calendar text-custom-primary"></i>' +
                '</div>' +
                '<div class="col-md-10 mt-5 pl-2 mb-1 pr-0">' +
                '<h6 class="text-custom-activities fs-09 mb-1">Total Votes</h6>' +
                '<h6 class="text-custom-primary fs-07">' +
                m.totalVote +
                '</h6>' +
                '</div>' +
                '</div>' +
                '<div class="col-md-6 bg-activities-card3 custom-border-primary pl-0" style="border-bottom: 2px solid #6751ED">' +
                '<div class="col-md-2 mt-6 pl-0">' +
                '<i class="fa fa-solid fa-calendar text-custom-primary"></i>' +
                '</div>' +
                '<div class="col-md-10 mt-5 pl-2 mb-1 pr-0">' +
                '<h6 class="text-custom-activities fs-09 mb-1">Valid Votes</h6>' +
                '<h6 class="text-custom-primary fs-07">' +
                m.totalValidVote +
                '</h6>' +
                '</div>' +
                '</div>' +
                '<div class="col-md-6 bg-activities-card3 custom-border-primary pl-0" style="border-bottom: 2px solid #6751ED">' +
                '<div class="col-md-2 mt-6 pl-0">' +
                '<i class="fa fa-solid fa-calendar text-custom-primary"></i>' +
                '</div>' +
                '<div class="col-md-10 mt-5 pl-2 mb-1 pr-0">' +
                '<h6 class="text-custom-activities fs-09 mb-1">Cancelled</h6>' +
                '<h6 class="text-custom-primary fs-07">' +
                m.totalCancelled +
                '</h6>' +
                '</div>' +
                '</div>' +
                '<div class="col-md-6 bg-activities-card3 custom-border-primary pl-0" style="border-bottom: 2px solid #6751ED">' +
                '<div class="col-md-2 mt-6 pl-0">' +
                '<i class="fa fa-solid fa-calendar text-custom-primary"></i>' +
                '</div>' +
                '<div class="col-md-10 mt-5 pl-2 mb-1 pr-0">' +
                '<h6 class="text-custom-activities fs-09 mb-1">No. Of PU</h6>' +
                '<h6 class="text-custom-primary fs-07">' +
                m.totalElectionPollingUnitLink +
                '</h6>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';

            var iw = new google.maps.InfoWindow({
                content: markerInfo,
            });
            this.googleMarkers.push(marker);
            google.maps.event.addListener(marker, 'click', function (e) {
                iw.open(this.map, this);
            });
        });
    }

    mapLoadedEvent(status: boolean) {
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

    showFilterDialog(position: string) {
        this.displayFilter = true;
        this.position = position;
    }

    GetAllElectionSenatorialDistrict() {
        this._electionSenatorialDistrictCouncilServiceProxy
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
                undefined
            )
            .subscribe((data) => {
                this.electionSenatorialDistrictResult = data.items;
            });
    }

    filterByCountry(id: number) {
        this.spinnerService.show();
        this.getElectionResultData();
        this.electionResultData = [];
        this.electionStatesForDropDown = this.electionStates.filter((s) => s.electionCountryId === id);
        if (this.electionStatesForDropDown.length > 0) {
            this.electionStatesForDropDown.forEach((m, index) => {
                let resultObj: any = {};
                resultObj.label = 'State';
                resultObj.id = m.id;
                resultObj.name = m.electionStateName;
                resultObj.photoPath = '/assets/Dashboard/ElectionPost.png';
                resultObj.totalElectionSenatorialDistrictLink =
                    m.electionStateBreakDown.totalElectionSenatorialDistrictLink;
                resultObj.totalElectionFederalRepresentativeLink =
                    m.electionStateBreakDown.totalElectionFederalRepresentativeLink;
                resultObj.totalElectionAssemblyAreaLink = m.electionStateBreakDown.totalElectionAssemblyAreaLink;
                resultObj.totalElectionLocalCouncilLink = m.electionStateBreakDown.totalElectionLocalCouncilLink;
                resultObj.totalElectionWardLink = m.electionStateBreakDown.totalElectionWardLink;
                resultObj.totalElectionPollingUnitLink = m.electionStateBreakDown.totalElectionPollingUnitLink;
                resultObj.totalVote = m.electionResultDetails.totalVote;
                resultObj.totalValidVote = m.electionResultDetails.totalValidVote;
                resultObj.latitude = 8.9538;
                resultObj.longtitude = 7.2583;
                resultObj.totalCancelled = m.electionResultDetails.totalCancelled;
                this.electionResultData.push(resultObj);
                if (index === this.electionStatesForDropDown.length - 1) {
                    this.spinnerService.hide();
                    if (this.resultedData) {
                        this.electionResultData = this.electionResultData.filter((c) => c.totalVote > 0);
                    } else if (this.withoutResultedData) {
                        this.electionResultData = this.electionResultData.filter((c) => c.totalVote === 0);
                    }
                    if (this.electionResultData.length > 0) {
                        this.initMap(this.electionResultData[0].latitude, this.electionResultData[0].longtitude);
                    } else {
                        this.initMap(8.9538, 7.2583);
                    }
                }
            });
        } else {
            this.spinnerService.hide();
        }
    }
    filterByState(id: number) {
        this.spinnerService.show();
        this.getElectionResultData();
        this.electionLocalCouncilsForDropDown = this.electionLocalCouncils.filter((s) => s.electionStateId === id);
        this.electionResultData = [];
        if (this.electionLocalCouncilsForDropDown.length > 0) {
            this.electionLocalCouncilsForDropDown.forEach((m, index) => {
                let resultObj: any = {};
                resultObj.label = 'Local Council';
                resultObj.id = m.id;
                resultObj.name = m.electionLocalCouncilName;
                resultObj.photoPath = '/assets/Dashboard/ElectionPost.png';
                resultObj.totalElectionWardLink = m.electionLocalCouncilBreakDown.totalElectionWardLink;
                resultObj.totalElectionPollingUnitLink = m.electionLocalCouncilBreakDown.totalElectionPollingUnitLink;
                resultObj.totalVote = m.electionResultDetails.totalVote;
                resultObj.latitude = m.latitude;
                resultObj.longtitude = m.longtitude;
                resultObj.totalValidVote = m.electionResultDetails.totalValidVote;
                resultObj.totalCancelled = m.electionResultDetails.totalCancelled;
                this.electionResultData.push(resultObj);
                if (index === this.electionLocalCouncilsForDropDown.length - 1) {
                    this.spinnerService.hide();
                    if (this.resultedData) {
                        this.electionResultData = this.electionResultData.filter((c) => c.totalVote > 0);
                    } else if (this.withoutResultedData) {
                        this.electionResultData = this.electionResultData.filter((c) => c.totalVote === 0);
                    }
                    if (this.electionResultData.length > 0) {
                        this.initMap(this.electionResultData[0].latitude, this.electionResultData[0].longtitude);
                    } else {
                        this.initMap(8.9538, 7.2583);
                    }
                }
            });
        } else {
            this.spinnerService.hide();
        }
    }

    filterByLocalCouncil(id: number) {
        
        this.spinnerService.show();
        this.getElectionResultData();
        this.electionResultData = [];
        this.electionWardsForDropDown = this.electionWards.filter((s) => s.electionLocalCouncilId === id);
        if (this.electionWardsForDropDown.length > 0) {
            this.electionWardsForDropDown.forEach((m, index) => {
                let resultObj: any = {};
                resultObj.label = 'Ward';
                resultObj.id = m.id;
                resultObj.name = m.electionWardName;
                resultObj.photoPath = '/assets/Dashboard/ElectionPost.png';
                // resultObj.totalElectionWardLink = m.electionWardBreakDown;
                resultObj.totalVote = m.electionResultDetails.totalVote;
                resultObj.latitude = m.lat;
                resultObj.longtitude = m.log;
                resultObj.totalValidVote = m.electionResultDetails.totalValidVote;
                resultObj.totalCancelled = m.electionResultDetails.totalCancelled;
                // resultObj.totalElectionWardLink = m.electionWardBreakDown.totalElectionWardLink;
                resultObj.totalElectionPollingUnitLink = m.electionWardBreakDown.totalElectionPollingUnitLink;
                this.electionResultData.push(resultObj);
                if (index === this.electionWardsForDropDown.length - 1) {
                    this.spinnerService.hide();
                    if (this.resultedData) {
                        this.electionResultData = this.electionResultData.filter((c) => c.totalVote > 0);
                    } else if (this.withoutResultedData) {
                        this.electionResultData = this.electionResultData.filter((c) => c.totalVote === 0);
                    }
                    if (this.electionResultData.length > 0) {
                        this.initMap(this.electionResultData[0].latitude, this.electionResultData[0].longtitude);
                    } else {
                        this.initMap(8.9538, 7.2583);
                    }
                }
            });
        } else {
            this.spinnerService.hide();
        }
    }

    filterByWard(id: number) {
        this.spinnerService.show();
        this.getElectionResultData();
        this.electionResultData = [];
        this.pollingunitDataArrayForDropDown = this.pollingunitDataArray.filter((s) => s.electionWardId === id);
        if (this.pollingunitDataArrayForDropDown.length > 0) {
            this.pollingunitDataArrayForDropDown.forEach((m, index) => {
                let resultObj: any = {};
                resultObj.label = 'Polling Unit';
                resultObj.id = m.id;
                resultObj.name = m.electionPollingUnitName;
                resultObj.photoPath = '/assets/Dashboard/ElectionPost.png';
                resultObj.totalVote = m.electionResultDetails.totalVote;
                resultObj.latitude = m.lat;
                resultObj.longtitude = m.log;
                resultObj.totalValidVote = m.electionResultDetails.totalValidVote;
                resultObj.totalCancelled = m.electionResultDetails.totalCancelled;
                // resultObj.totalElectionPollingUnitLink = m.electionPollingUnitBreakDown.totalElectionPollingUnitLink;
                this.electionResultData.push(resultObj);
                if (index === this.pollingunitDataArrayForDropDown.length - 1) {
                    if (this.resultedData) {
                        this.electionResultData = this.electionResultData.filter((c) => c.totalVote > 0);
                    } else if (this.withoutResultedData) {
                        this.electionResultData = this.electionResultData.filter((c) => c.totalVote === 0);
                    }
                    this.spinnerService.hide();
                    if (this.electionResultData.length > 0) {
                        this.initMap(this.electionResultData[0].latitude, this.electionResultData[0].longtitude);
                    } else {
                        this.initMap(8.9538, 7.2583);
                    }
                }
            });
        } else {
            this.spinnerService.hide();
        }
    }
    filterByPollingUnit(id: number) {
        this.spinnerService.show();
        this.getElectionResultData();
        this.electionResultData = [];
        this.pollingunitDataArray = this.pollingunitDataArray.filter((c) => c.id === id);
        if (this.resultedData) {
            this.electionResultData = this.electionResultData.filter((c) => c.totalVote > 0);
        } else if (this.withoutResultedData) {
            this.electionResultData = this.electionResultData.filter((c) => c.totalVote === 0);
        }
        if (this.pollingunitDataArray.length > 0) {
            this.pollingunitDataArray.forEach((m, index) => {
                let resultObj: any = {};
                resultObj.label = 'Polling Unit';
                resultObj.id = m.id;
                resultObj.name = m.electionPollingUnitName;
                resultObj.photoPath = '/assets/Dashboard/ElectionPost.png';
                resultObj.totalVote = m.electionResultDetails.totalVote;
                resultObj.latitude = m.lat;
                resultObj.longtitude = m.log;
                resultObj.totalValidVote = m.electionResultDetails.totalValidVote;
                resultObj.totalCancelled = m.electionResultDetails.totalCancelled;
                // resultObj.totalElectionPollingUnitLink = m.electionCountryBreakDown.totalElectionPollingUnitLink;
                this.electionResultData.push(resultObj);
                if (index === this.pollingunitDataArray.length - 1) {
                    if (this.resultedData) {
                        this.electionResultData = this.electionResultData.filter((c) => c.totalVote > 0);
                    } else if (this.withoutResultedData) {
                        this.electionResultData = this.electionResultData.filter((c) => c.totalVote === 0);
                    }
                    this.spinnerService.hide();
                    if (this.electionResultData.length > 0) {
                        this.initMap(this.electionResultData[0].latitude, this.electionResultData[0].longtitude);
                    } else {
                        this.initMap(8.9538, 7.2583);
                    }
                }
            });
        } else {
            this.spinnerService.hide();
        }
    }

    GetResultedData() {
        this.resultedData = true;
        this.withoutResultedData = false;
    }
    GetWithoutResultedData() {
        this.resultedData = false;
        this.withoutResultedData = true;
    }

    GetAllData() {
        this.resultedData = false;
        this.withoutResultedData = false;
    }

    getElectionResultData() {
        this.electionStateData = [];
        this.pollingunitDataArray = [];
        this.electionCountries = [];
        this.electionStates = [];
        this.electionLocalCouncils = [];
        this.electionWards = [];
        this.dataElectionResult = this.sharingService.getElectionResultData();
        this.dataElectionResult.forEach((value, index) => {
            this.electionCountries = value.electionCountryDetails;
            if (this.electionCountries.length > 0) {
                this.electionCountries.forEach((m, index) => {
                    let resultObj: any = {};
                    resultObj.label = 'Country';
                    resultObj.name = m.electionCountryName;
                    resultObj.id = m.id;
                    resultObj.photoPath = m.flag;
                    resultObj.latitude = 8.9538;
                    resultObj.longtitude = 7.2583;
                    resultObj.totalElectionStateLink = m.electionCountryBreakDown.totalElectionStateLink;
                    resultObj.totalElectionSenatorialDistrictLink =
                        m.electionCountryBreakDown.totalElectionSenatorialDistrictLink;
                    resultObj.totalElectionFederalRepresentativeLink =
                        m.electionCountryBreakDown.totalElectionFederalRepresentativeLink;
                    resultObj.totalElectionAssemblyAreaLink = m.electionCountryBreakDown.totalElectionAssemblyAreaLink;
                    resultObj.totalElectionLocalCouncilLink = m.electionCountryBreakDown.totalElectionLocalCouncilLink;
                    resultObj.totalElectionWardLink = m.electionCountryBreakDown.totalElectionWardLink;
                    resultObj.totalElectionPollingUnitLink = m.electionCountryBreakDown.totalElectionPollingUnitLink;
                    resultObj.totalVote = m.electionResultDetails.totalVote;
                    resultObj.totalValidVote = m.electionResultDetails.totalValidVote;
                    resultObj.totalCancelled = m.electionResultDetails.totalCancelled;
                    this.electionResultData.push(resultObj);
                    if (index === this.electionCountries.length - 1) {
                        if (this.electionResultData.length > 0) {
                            this.initMap(this.electionResultData[0].latitude, this.electionResultData[0].longtitude);
                        } else {
                            this.initMap(8.9538, 7.2583);
                        }
                        // this.spinnerService.hide();
                    }
                });
            }
            value.electionCountryDetails.forEach((value2, index2) => {
                this.electionStates = this.electionStates.concat(value2.electionStateDetails);
                value2.electionStateDetails.forEach((value3, index3) => {
                    this.electionLocalCouncils = this.electionLocalCouncils.concat(value3.electionLocalCouncilDetails);
                    value3.electionLocalCouncilDetails.forEach((value4, index4) => {
                        this.electionWards = this.electionWards.concat(value4.electionWardDetails);
                        value4.electionWardDetails.forEach((value5, index5) => {
                            value5.electionPollingUnitDetail.forEach((value6, index6) => {
                                this.pollingunitDataArray = this.pollingunitDataArray.concat(
                                    value5.electionPollingUnitDetail
                                );
                            });
                        });
                    });
                });
            });
        });
    }
}

export class Markers {
    latitude: number;
    longitude: number;
    name: string;
    locationIconPath: string;
    imagePath: string;
    circlePath: string;
    city: string;
    contactNo: string;
    id: string;
}
