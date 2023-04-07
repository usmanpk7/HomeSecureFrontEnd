import { MaritalStatus, ElectionPoliticalPartyDto } from './../../../../../shared/service-proxies/service-proxies';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SharingServiceElection } from '../../SharingServiceElection';
import { formatDate } from '@angular/common';

@Component({
    selector: 'app-political-party',
    templateUrl: './political-party.component.html',
    styleUrls: ['./political-party.component.css'],
})
export class PoliticalPartyComponent implements OnInit, AfterViewInit {
    @ViewChild('map3') mapElement: any;

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
    dataElectionResult: any = [];
    candidateDataArray: any = [];
    politicalPartyFilterList: any;
    electionCountries: any[] = [];
    electionStates: any[] = [];
    electionStatesForDropDown: any[] = [];
    electionLocalCouncils: any[] = [];
    electionLocalCouncilsForDropDown: any[] = [];
    electionWards: any[] = [];
    electionWardsForDropDown: any[] = [];
    pollingunitDataArray: any = [];
    pollingunitDataArrayForDropDown: any = [];
    googleMarkers: any[] = [];
    showMore: boolean = false;
    resultedData: boolean = false;
    withoutResultedData: boolean = false;

    constructor(private sharingService: SharingServiceElection, private spinnerService: NgxSpinnerService) {}

    ngOnInit(): void {}

    ngAfterViewInit() {
        this.initMap(8.9538, 7.2583);
    }

    initMap(lat: number, long: number, candidateName: string = '') {
        this.map = new google.maps.Map(document.getElementById('map3') as HTMLElement, {
            zoom: 4,
            center: new google.maps.LatLng(lat, long),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        });
        this.Mapmarker();
        this.filterMarkers(candidateName);
    }

    filterMarkers(candidateName) {

        var i;
        for (i = 0; i < this.googleMarkers.length; i++) {
            var marker = this.googleMarkers[i];
            if (marker.title === candidateName) {
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

        this.candidateDataArray.forEach((m) => {
            var marker = new google.maps.Marker({
                title: m.candidateName,
                position: new google.maps.LatLng(m.lat, m.log),
                icon: 'assets/Dashboard/mapicons/usr1.png',
                map: this.map,
            });
            var birthDate = formatDate(m.dateOfBirth, 'dd/MM/yyyy', 'en-US');
            var electionYear = formatDate(m.electionYear, 'dd/MM/yyyy', 'en-US');
            var maritalStatus = m.isMarried ? 'Married' : 'UnMarried';
            var markerInfo =
                '<div >' +
                '<div style="width: 215px !important;">' +
                '<div class="card" style="background-color: #F0EEFC;">' +
                '<div class="" >' +
                '<div class="col-md-12 text-center">' +
                '<h6 class="fs-07"><b>' +
                m.prefix +
                '</b></h6>' +
                '</div>' +
                '<div class="col-md-12 text-center">' +
                '<img src="' +
                m.partyPhoto +
                '" style="border-radius: 50%;" width="80">' +
                '</div>' +
                '<div class="col-md-12">' +
                '<h6 class="fs-09 font-bold"><b>' +
                m.address +
                '</b></h6>' +
                '</div>' +
                '<div class="col-md-12">' +
                '<div class="card" style="background-color: #ffffff;">' +
                '<div class="row p-2">' +
                '<div class="col-8">' +
                '<button class="btn btn-sm bg-custom-primary text-white pr-6 pl-6 btn-block">' +
                m.prefix +
                '</button>' +
                '</div>' +
                '<div class="col-4 pt-1 pr-6 text-right">' +
                '<img src="assets/Dashboard/blue.png" width="16">' +
                '</div>' +
                '<div class="col-6 mt-3">' +
                '<h6 class="fs-09"><b>Concerned Person:</b></h6>' +
                '</div>' +
                '<div class="col-6 text-right mt-3">' +
                '<span class="ml-2 fs-07">' +
                m.candidateName +
                '</span>' +
                '<span class="ml-1 fs-07"> ' +
                '<img width="20" class="br-50" src="' +
                m.candidatePhoto +
                '" />' +
                '</span>' +
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
                '<h6 class="text-custom-activities fs-09 mb-1">' +
                m.totalElectionCandidateVote +
                '</h6>' +
                '<h6 class="text-custom-primary fs-07">Total Votes</h6>' +
                '</div>' +
                '</div>' +
                '<div class="col-md-6 bg-activities-card3 custom-border-primary pl-0" style="border-bottom: 2px solid #6751ED">' +
                '<div class="col-md-2 mt-6 pl-0">' +
                '<i class="fa fa-solid fa-signal text-custom-primary"></i>' +
                '</div>' +
                '<div class="col-md-10 mt-5 pl-2 mb-1 pr-0">' +
                '<h6 class="text-custom-activities fs-09 mb-1">' +
                m.rankingStatus +
                '</h6>' +
                '<h6 class="text-custom-primary fs-07">Ranking</h6>' +
                '</div>' +
                '</div>' +
                '<div class="col-md-6 bg-activities-card3 custom-border-primary pl-0"  style="border-bottom: 2px solid #6751ED">' +
                '<div class="col-md-2 mt-6 pl-0">' +
                '<i class="fa fa-solid fa-signal text-custom-primary"></i>' +
                '</div>' +
                '<div class="col-md-10 mt-5 pl-2 mb-1 pr-0">' +
                '<h6 class="text-custom-activities fs-09 mb-1">' +
                maritalStatus +
                '</h6>' +
                '<h6 class="text-custom-primary fs-07">Marital Status</h6>' +
                '</div>' +
                '</div>' +
                '<div class="col-md-6 bg-activities-card3 custom-border-primary  pl-0 pr-0"  style="border-bottom: 2px solid #6751ED">' +
                '<div class="col-md-2 mt-6 pl-0">' +
                '<i class="fa fa-solid fa-calendar text-custom-primary"></i>' +
                '</div>' +
                '<div class="col-md-10 mt-5 pl-2 mb-1 pr-0">' +
                '<h6 class="text-custom-activities fs-09 mb-1">' +
                birthDate +
                '</h6>' +
                '<h6 class="text-custom-primary fs-07">Birth Date</h6>' +
                '</div>' +
                '</div>' +
                '<div class="col-md-12 bg-activities-card3 custom-border-primary  pl-0"  style="border-bottom: 2px solid #6751ED">' +
                '<div class="col-md-2 mt-6 pl-0">' +
                '<i class="fa fa-solid fa-calendar text-custom-primary"></i>' +
                '</div>' +
                '<div class="col-md-10 mt-5 pl-2 mb-1 pr-0">' +
                '<h6 class="text-custom-activities fs-09 mb-1">' +
                electionYear +
                '</h6>' +
                '<h6 class="text-custom-primary fs-07">Election Year</h6>' +
                '</div>' +
                '</div>' +
            //     '<div class="col-md-6 bg-activities-card3 custom-border-primary  pl-0"  style="border-bottom: 2px solid #6751ED">' +
            //     '<div class="col-md-2 mt-6 pl-0">' +
            //     '<i class="fa fa-solid fa-calendar text-custom-primary"></i>' +
            //     '</div>' +
            //     '<div class="col-md-10 mt-5 pl-2 mb-1 pr-0">' +
            //     '<h6 class="text-custom-activities fs-07 mb-1">' +
            //     '<span *ngIf="!showMore">   {{trimString(m.bioGraphy,10)}}</span>' +
            //     '<span  *ngIf="showMore">  {{m.bioGraphy}} </span>' +
            //     '<div *ngIf="m.bioGraphy.length> 10" (click)="showMore = !items.showMore">Show' +
            //     '<span>{{showMore ? "less" : "More"}}</span>' +
            //     '</div>';
            // '</h6>' +
            //     '<h6 class="text-custom-primary fs-07">Biography</h6>' +
            //     '</div>' +
            //     '</div>' +
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

    filterPoliticalParty(partyName: string) {
        this.spinnerService.show();
        this.getElectionResultData();
        if (partyName !== 'allParties') {
            this.candidateDataArray = this.candidateDataArray.filter((c) => c.partyName === partyName);
            this.Mapmarker();
        }
        this.spinnerService.hide();
    }

    filterByCountry() {
        this.spinnerService.show();
        // this.getElectionResultData();
        this.candidateDataArray = [];
        let candidateDataObj: any = {};
        this.electionStatesForDropDown = this.electionStates.filter(
            (s) => s.electionCountryId === this.electionCountries[0].id
        );
        this.electionCountries.forEach((m, index) => {
            m.politicalPartyDetail.forEach((value3, index3) => {
                value3.electionCandidate.forEach((value4, index3) => {
                    candidateDataObj.labelName = m.electionCountryName;
                    candidateDataObj.label = 'Country';
                    candidateDataObj.electionCountryFlag = m.flag;
                    candidateDataObj.numberValue = m.numberOfState;
                    candidateDataObj.numberLabel = 'No Of States';
                    candidateDataObj.partyName = value3.partyName;
                    candidateDataObj.partyPhoto = value3.partyPhoto;
                    candidateDataObj.address = value3.headQuartersAddress;
                    candidateDataObj.lat = value3.lat;
                    candidateDataObj.log = value3.log;
                    candidateDataObj.prefix = value3.prefix;
                    candidateDataObj.candidateName = value4.candidateName;
                    candidateDataObj.candidateId = value4.id;
                    candidateDataObj.candidatePhoto = value4.candidatePhoto;
                    candidateDataObj.dateOfBirth = value4.dateOfBirth;
                    candidateDataObj.electionYear = value4.electionYear;
                    candidateDataObj.isMarried = value4.isMarried;
                    candidateDataObj.bioGraphy = value4.bioGraphy;
                    candidateDataObj.totalElectionCandidateVote = value4.totalElectionCandidateVote;
                    candidateDataObj.rankingStatus = value4.rankingStatus;
                    this.candidateDataArray.push(candidateDataObj);
                    candidateDataObj = {};
                });
            });
            if (index === this.electionCountries.length - 1) {
                this.spinnerService.hide();
                if (this.resultedData) {
                    this.candidateDataArray = this.candidateDataArray.filter((c) => c.totalElectionCandidateVote > 0);
                } else if (this.withoutResultedData) {
                    this.candidateDataArray = this.candidateDataArray.filter((c) => c.totalElectionCandidateVote === 0);
                }
                this.politicalPartyFilterList = this.candidateDataArray;
                if (this.candidateDataArray.length > 0) {
                    this.initMap(this.candidateDataArray[0].lat, this.candidateDataArray[0].log);
                } else {
                    this.initMap(8.9538, 7.2583);
                }
            }
        });
    }
    filterByState(stateId: number) {
        this.spinnerService.show();
        this.getElectionResultData();
        this.electionLocalCouncilsForDropDown = this.electionLocalCouncils.filter((s) => s.electionStateId === stateId);
        this.candidateDataArray = [];
        let candidateDataObj: any = {};
        this.electionStates = this.electionStates.filter((c) => c.id === stateId);
        this.electionStates.forEach((m, index) => {
            m.politicalPartyDetail.forEach((value3, index3) => {
                value3.electionCandidate.forEach((value4, index3) => {
                    candidateDataObj.labelName = m.electionStateName;
                    candidateDataObj.label = 'State';
                    // candidateDataObj.electionCountryFlag = m.flag;
                    candidateDataObj.numberValue = m.numberOfLocalCouncil;
                    candidateDataObj.numberLabel = 'No Of Local Councils';
                    candidateDataObj.partyName = value3.partyName;
                    candidateDataObj.partyPhoto = value3.partyPhoto;
                    candidateDataObj.address = value3.headQuartersAddress;
                    candidateDataObj.lat = value3.lat;
                    candidateDataObj.log = value3.log;
                    candidateDataObj.prefix = value3.prefix;
                    candidateDataObj.candidateName = value4.candidateName;
                    candidateDataObj.candidatePhoto = value4.candidatePhoto;
                    candidateDataObj.dateOfBirth = value4.dateOfBirth;
                    candidateDataObj.electionYear = value4.electionYear;
                    candidateDataObj.isMarried = value4.isMarried;
                    candidateDataObj.bioGraphy = value4.bioGraphy;
                    candidateDataObj.totalElectionCandidateVote = value4.totalElectionCandidateVote;
                    candidateDataObj.rankingStatus = value4.rankingStatus;
                    this.candidateDataArray.push(candidateDataObj);
                    candidateDataObj = {};
                });
            });
            if (index === this.electionStates.length - 1) {
                this.spinnerService.hide();
                if (this.resultedData) {
                    this.candidateDataArray = this.candidateDataArray.filter((c) => c.totalElectionCandidateVote > 0);
                } else if (this.withoutResultedData) {
                    this.candidateDataArray = this.candidateDataArray.filter((c) => c.totalElectionCandidateVote === 0);
                }
                this.politicalPartyFilterList = this.candidateDataArray;
                if (this.candidateDataArray.length > 0) {
                    this.initMap(this.candidateDataArray[0].lat, this.candidateDataArray[0].log);
                } else {
                    this.initMap(8.9538, 7.2583);
                }
            }
        });
    }

    filterByLocalCouncil(localCouncilId: number) {
        this.spinnerService.show();
        this.getElectionResultData();
        this.electionWardsForDropDown = this.electionWards.filter((s) => s.electionLocalCouncilId === localCouncilId);
        this.candidateDataArray = [];
        let candidateDataObj: any = {};
        this.electionLocalCouncils = this.electionLocalCouncils.filter((c) => c.id === localCouncilId);
        this.electionLocalCouncils.forEach((m, index) => {
            m.politicalPartyDetail.forEach((value3, index3) => {
                value3.electionCandidate.forEach((value4, index3) => {
                    candidateDataObj.labelName = m.electionLocalCouncilName;
                    candidateDataObj.label = 'Local Council';
                    // candidateDataObj.electionCountryFlag = m.flag;
                    candidateDataObj.numberValue = m.numberOfWards;
                    candidateDataObj.numberLabel = 'No Of Wards';
                    candidateDataObj.partyName = value3.partyName;
                    candidateDataObj.partyPhoto = value3.partyPhoto;
                    candidateDataObj.address = m.address;
                    candidateDataObj.lat = value3.lat;
                    candidateDataObj.log = value3.log;
                    candidateDataObj.prefix = value3.prefix;
                    candidateDataObj.candidateName = value4.candidateName;
                    candidateDataObj.candidatePhoto = value4.candidatePhoto;
                    candidateDataObj.dateOfBirth = value4.dateOfBirth;
                    candidateDataObj.electionYear = value4.electionYear;
                    candidateDataObj.isMarried = value4.isMarried;
                    candidateDataObj.bioGraphy = value4.bioGraphy;
                    candidateDataObj.totalElectionCandidateVote = value4.totalElectionCandidateVote;
                    candidateDataObj.rankingStatus = value4.rankingStatus;
                    this.candidateDataArray.push(candidateDataObj);
                    candidateDataObj = {};
                });
            });
            if (index === this.electionLocalCouncils.length - 1) {
                this.spinnerService.hide();
                if (this.resultedData) {
                    this.candidateDataArray = this.candidateDataArray.filter((c) => c.totalElectionCandidateVote > 0);
                } else if (this.withoutResultedData) {
                    this.candidateDataArray = this.candidateDataArray.filter((c) => c.totalElectionCandidateVote === 0);
                }
                this.politicalPartyFilterList = this.candidateDataArray;
                if (this.candidateDataArray.length > 0) {
                    this.initMap(this.candidateDataArray[0].lat, this.candidateDataArray[0].log);
                } else {
                    this.initMap(8.9538, 7.2583);
                }
            }
        });
    }

    filterByWard(wardId: number) {

        this.spinnerService.show();
        this.getElectionResultData();
        this.pollingunitDataArrayForDropDown = this.pollingunitDataArray.filter((s) => s.electionWardId === wardId);
        this.candidateDataArray = [];
        let candidateDataObj: any = {};
        this.electionWards = this.electionWards.filter((c) => c.id === wardId);
        this.electionWards.forEach((m, index) => {
            m.politicalPartyDetail.forEach((value3, index3) => {
                value3.electionCandidate.forEach((value4, index3) => {
                    candidateDataObj.labelName = m.electionWardName;
                    candidateDataObj.label = 'Ward';
                    // candidateDataObj.electionCountryFlag = m.flag;
                    candidateDataObj.numberValue = m.numberOfPollingUnit;
                    candidateDataObj.numberLabel = 'No Of Polling Units';
                    candidateDataObj.partyName = value3.partyName;
                    candidateDataObj.partyPhoto = value3.partyPhoto;
                    candidateDataObj.address = m.address;
                    candidateDataObj.lat = value3.lat;
                    candidateDataObj.log = value3.log;
                    candidateDataObj.prefix = value3.prefix;
                    candidateDataObj.candidateName = value4.candidateName;
                    candidateDataObj.candidatePhoto = value4.candidatePhoto;
                    candidateDataObj.dateOfBirth = value4.dateOfBirth;
                    candidateDataObj.electionYear = value4.electionYear;
                    candidateDataObj.isMarried = value4.isMarried;
                    candidateDataObj.bioGraphy = value4.bioGraphy;
                    candidateDataObj.totalElectionCandidateVote = value4.totalElectionCandidateVote;
                    candidateDataObj.rankingStatus = value4.rankingStatus;
                    this.candidateDataArray.push(candidateDataObj);
                    candidateDataObj = {};
                });
            });
            if (index === this.electionWards.length - 1) {
                this.spinnerService.hide();
                if (this.resultedData) {
                    this.candidateDataArray = this.candidateDataArray.filter((c) => c.totalElectionCandidateVote > 0);
                } else if (this.withoutResultedData) {
                    this.candidateDataArray = this.candidateDataArray.filter((c) => c.totalElectionCandidateVote === 0);
                }
                this.politicalPartyFilterList = this.candidateDataArray;
                if (this.candidateDataArray.length > 0) {
                    this.initMap(this.candidateDataArray[0].lat, this.candidateDataArray[0].log);
                } else {
                    this.initMap(8.9538, 7.2583);
                }
            }
        });
    }
    filterByPollingUnit(pollingUnitId: number) {
        this.spinnerService.show();
        this.candidateDataArray = [];
        let candidateDataObj: any = {};
        this.pollingunitDataArray = this.pollingunitDataArray.filter((c) => c.id === pollingUnitId);
        this.pollingunitDataArray.forEach((m, index) => {
            m.politicalPartyDetail.forEach((value3, index3) => {
                value3.electionCandidate.forEach((value4, index3) => {
                    candidateDataObj.labelName = m.electionPollingUnitName;
                    candidateDataObj.label = 'Polling Unit';
                    // candidateDataObj.electionCountryFlag = m.flag;
                    // candidateDataObj.numberValue = m.numberValue;
                    candidateDataObj.partyName = value3.partyName;
                    candidateDataObj.partyPhoto = value3.partyPhoto;
                    candidateDataObj.address = m.address;
                    candidateDataObj.lat = value3.lat;
                    candidateDataObj.log = value3.log;
                    candidateDataObj.prefix = value3.prefix;
                    candidateDataObj.candidateName = value4.candidateName;
                    candidateDataObj.candidatePhoto = value4.candidatePhoto;
                    candidateDataObj.dateOfBirth = value4.dateOfBirth;
                    candidateDataObj.electionYear = value4.electionYear;
                    candidateDataObj.isMarried = value4.isMarried;
                    candidateDataObj.bioGraphy = value4.bioGraphy;
                    candidateDataObj.totalElectionCandidateVote = value4.totalElectionCandidateVote;
                    candidateDataObj.rankingStatus = value4.rankingStatus;
                    this.candidateDataArray.push(candidateDataObj);
                    candidateDataObj = {};
                });
            });
            if (index === this.pollingunitDataArray.length - 1) {
                this.spinnerService.hide();
                if (this.resultedData) {
                    this.candidateDataArray = this.candidateDataArray.filter((c) => c.totalElectionCandidateVote > 0);
                } else if (this.withoutResultedData) {
                    this.candidateDataArray = this.candidateDataArray.filter((c) => c.totalElectionCandidateVote === 0);
                }
                this.politicalPartyFilterList = this.candidateDataArray;
                if (this.candidateDataArray.length > 0) {
                    this.initMap(this.candidateDataArray[0].lat, this.candidateDataArray[0].log);
                } else {
                    this.initMap(8.9538, 7.2583);
                }
            }
        });
    }

    getElectionResultData() {
        let votingeDataObj: any = {};
        this.pollingunitDataArray = [];
        this.electionCountries = [];
        this.electionStates = [];
        this.electionLocalCouncils = [];
        this.electionWards = [];
        this.dataElectionResult = this.sharingService.getElectionResultData();
        this.dataElectionResult.forEach((value, index) => {
            this.electionCountries = value.electionCountryDetails;
            value.electionCountryDetails.forEach((value2, index2) => {
                this.electionStates = this.electionStates.concat(value2.electionStateDetails);
                // this.electionStatesForDropDown = this.electionStates;
                value2.electionStateDetails.forEach((value3, index3) => {
                    this.electionLocalCouncils = this.electionLocalCouncils.concat(value3.electionLocalCouncilDetails);
                    // this.electionLocalCouncilsForDropDown = this.electionLocalCouncils;
                    value3.electionLocalCouncilDetails.forEach((value4, index4) => {
                        this.electionWards = this.electionWards.concat(value4.electionWardDetails);
                        // this.electionWardsForDropDown = this.electionWards;
                        value4.electionWardDetails.forEach((value5, index5) => {
                            this.pollingunitDataArray = this.pollingunitDataArray.concat(
                                value5.electionPollingUnitDetail
                            );
                        });
                    });
                });
            });
        });
        this.filterByCountry();
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
