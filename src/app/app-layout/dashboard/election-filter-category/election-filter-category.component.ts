import { ElectionLivefeedsComponent } from './../election-livefeeds/election-livefeeds.component';
import { VotesComponent } from './../election-detail/votes/votes.component';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import {
    ElectionCountryServiceProxy,
    ElectionStateServiceProxy,
    ElectionSenatorialDistrictCouncilServiceProxy,
    ElectionFederalRepresentativeServiceProxy,
    ElectionAssemblyAreaServiceProxy,
    ElectionLocalCouncilServiceProxy,
    ElectionPostServiceProxy,
    ElectionWardServiceProxy,
    ElectionPollingUnitServiceProxy,
    ElectionAgentUserServiceProxy,
    ElectionPostDto,
    ElectionWardDto,
    ElectionPollingUnitDto,
    ElectionAgentUserDto,
    ElectionPollingUnitResultServiceProxy,
    MyAssignedPollingUnitWithPostDto,
    ElectionReportSummaryDto,
    ElectionCandidateServiceProxy,
    ElectionCandidateResultServiceProxy,
    ElectionGalleryServiceProxy,
    GetMyElectionPostForResult,
} from '@shared/service-proxies/service-proxies';
import { ElectionAnalyticsComponent } from '../election-analytics/election-analytics.component';
import { ElectionCandidatesComponent } from '../election-candidates/election-candidates.component';
import { ElectionDetailComponent } from '../election-detail/election-detail.component';
import { SharingServiceElection } from '../SharingServiceElection';
import { NgxSpinnerService } from 'ngx-spinner';
import { ElectionPollingActivityTimelineComponent } from '../election-polling-activity-timeline/election-polling-activity-timeline.component';
import { Subscribable, Subscription } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
// import * as DataLayer from 'esri/rest/support/DataLayer';
@Component({
    selector: 'app-election-filter-category',
    templateUrl: './election-filter-category.component.html',
    styleUrls: ['./election-filter-category.component.css'],
})
export class ElectionFilterCategoryComponent implements OnInit, OnDestroy {
    @Input() candidatcompref: ElectionCandidatesComponent;
    @Input() livefeedcompref: ElectionLivefeedsComponent;
    @Input() analyticscompref: ElectionAnalyticsComponent;
    @Input() electiondetailcompref: ElectionDetailComponent;
    @Input() electionDetailref: ElectionDetailComponent;
    @Input() electionpollingcompref: ElectionPollingActivityTimelineComponent;
    @ViewChild(VotesComponent) voteMapref;

    public _2019ElectionYear: boolean;
    public _2021ElectionYear: boolean;

    //ElectionPosition
    public presidentshipElectionPosition: boolean;
    public governorshipElectionPosition: boolean;
    public senatorialElectionPosition: boolean;
    public houseofRepresentativeElectionPosition: boolean;
    public houseofAssembleElectionPosition: boolean;
    public localGoverchairmanElectionPosition: boolean;
    public councellorElectionPosition: boolean;

    //ElectionType
    public presidentialElectionType: boolean;
    public councellorElectionType: boolean;
    public senateElectionType: boolean;
    public muncipalElectionType: boolean;
    public localbodyElectionType: boolean;

    electionWardsResult: any[] = [];
    electionCountryResult: any[] = [];
    electionStateResult: any[] = [];
    electionStateResultOrignal: any[] = [];
    electionSenatorialDistrictResult: any[] = [];
    electionSenatorialDistrictResultOrignal: any[] = [];
    electionFederalRepresentativeResultOrignal: any[] = [];
    electionFederalRepresentativeResult: any[] = [];
    electionAssemblyAreaResultOrignal: any[] = [];
    electionAssemblyAreaResult: any[] = [];
    electionLocalCouncilResultOrignal: any[] = [];
    electionLocalCouncilResult: any[] = [];
    electionPostResult: any[] = [];
    electionUnitsResultOrignal: any[] = [];
    electionUnitsResult: any[] = [];
    electionCandidateResult: any[] = [];
    electionPostWithGalleryData: any[] = [];
    electionGalleryResultData: any[] = [];
    electionAssignedPollingUnitResult: any;
    electionReportSummaryAnalyticsResult: any = {};

    electioPostId: number;
    electioWardId: number;
    electioGalleryId: number;
    electioUnitId: number;
    electiolocalcouncilId: number;
    electioCountryId: number;
    electioStateId: number;
    electioSenatorialDistrictId: number;
    electioFederalRepresentativeId: number;
    electioStateRepresentativeId: number;
    electionLocalCouncilId: number;
    typeSelected: string;
    filterList: { dropdownname: string; value: string }[] = [];
    public usernameEntityChange: string;
    totaVote: number;
    totaPollingUnit: number;
    totaPollingUnitWithResult: number;
    totaPollingUnitWithPending: number;
    unsubscribe1: Subscription;
    unsubscribe2: Subscription;
    unsubscribe3: Subscription;
    unsubscribe4: Subscription;
    politicalParties = [];

    public barChartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                drawOnChartArea: false,
                display:false,
              },
              labels:[]
            },
          ],
          yAxes: [
            {
              display: false,
              gridLines: {
                drawOnChartArea: false,
              },
            },
          ],
        }
      };
      public barChartType: ChartType = 'horizontalBar';
      public barChartLegend = false;
      public barChartData: ChartDataSets[] = [];
      public barChartLabels: string[] = ['All Parties'];

    constructor(
        private _electionCountryServiceProxy: ElectionCountryServiceProxy,
        private _electionStateServiceProxy: ElectionStateServiceProxy,
        private _electionSenatorialDistrictCouncilServiceProxy: ElectionSenatorialDistrictCouncilServiceProxy,
        private _electionFederalRepresentativeServiceProxy: ElectionFederalRepresentativeServiceProxy,
        private _electionAssemblyAreaServiceProxy: ElectionAssemblyAreaServiceProxy,
        private _electionLocalCouncilServiceProxy: ElectionLocalCouncilServiceProxy,
        private _electionPostServiceProxy: ElectionPostServiceProxy,
        private _electionWard: ElectionWardServiceProxy,
        private _electionPollingUnit: ElectionPollingUnitServiceProxy,
        private _electionAgentUser: ElectionAgentUserServiceProxy,
        private _electionPollingUnitResult: ElectionPollingUnitResultServiceProxy,
        private _electionCandidateServiceProxy: ElectionCandidateServiceProxy,
        private _electionCandidateResultServiceProxy: ElectionCandidateResultServiceProxy,
        private sharingService: SharingServiceElection,
        private _electionGalleryServiceProxy: ElectionGalleryServiceProxy,
        private spinnerService: NgxSpinnerService
    ) {
        this.typeSelected = 'ball-fussion';
    }



    ngOnInit(): void {
        this.spinnerService.show();
        this.filterList = [];
        this.electionCandidateResult = [];
        this.electioPostId = 0;
        this.electiolocalcouncilId = 0;
        this.electioCountryId = 0;
        this.electioStateId = 0;
        this.electioWardId = 0;
        this.electioGalleryId = 0;
        this.electioSenatorialDistrictId = 0;
        this.electioFederalRepresentativeId = 0;
        this.electioStateRepresentativeId = 0;
        this.electionLocalCouncilId = 0;
        this.electioWardId = 0;
        this.electioUnitId = 0;
        this.GetAllElectionPositions();
        this.GeetAllMyAssignTerritoryData();
        // this.GetAllElectionCountries();
        // this.GetAllElectionWards();
        this.electionAssignedPollingUnitResult = new MyAssignedPollingUnitWithPostDto();
        this.electionReportSummaryAnalyticsResult = {};
        // this.totaVote = 0;
        // this.totaPollingUnit = 0;
        // this.totaPollingUnitWithResult = 0;
        // this.totaPollingUnitWithPending = 0;
    }

      // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40,
    ];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

    GeetAllMyAssignTerritoryData() {
        this.unsubscribe1 = this._electionAgentUser
            .getMyAssignedTerritoryIsolated(
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
                this.spinnerService.hide();
                this.electionCountryResult =
                    data.electionAgentUserDetail.assignedElectionCountryDetails.assignedCountryDetails;
                this.electionStateResultOrignal =
                    data.electionAgentUserDetail.assignedElectionStateDetail.assignedStateDetails;
                this.electionSenatorialDistrictResultOrignal =
                    data.electionAgentUserDetail.assignedElectionSenatorialDistrictDetails.assignedSenatorialDistrictDetails;
                this.electionFederalRepresentativeResultOrignal =
                    data.electionAgentUserDetail.assignedElectionFederalHouseDetails.assignedFederalHouseDetails;
                this.electionAssemblyAreaResultOrignal =
                    data.electionAgentUserDetail.assignedElectionStateHouseAssemblyDetails.assignedStateHouseAssemblyDetails;
                this.electionLocalCouncilResultOrignal =
                    data.electionAgentUserDetail.assignedElectionLocalCouncilDetails.assignedLocalCouncilDetails;
                this.electionWardsResult = data.electionAgentUserDetail.assignedElectionWardDetails.assignedWardDetails;
                this.electionUnitsResultOrignal =
                    data.electionAgentUserDetail.assignedElectionPollingUnitDetails.assignedPollingUnitDetail;
            });
    }

    GetAllElectionCountries() {
        this._electionCountryServiceProxy
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
                this.electionCountryResult = data.items;
            });
    }

    GetAllElectionState(electioCountryId) {
        this.electionStateResult = this.electionStateResultOrignal.filter(
            (x) => x.electionCountryId === electioCountryId
        );
        // this._electionStateServiceProxy
        //     .getAll(
        //         undefined,
        //         electioCountryId,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined
        //     )
        //     .subscribe((data) => {
        //         this.electionStateResult = data.items;
        //     });
    }

    GetAllElectionSenatorialDistrict(stateId, countryId) {
        if (this.electionSenatorialDistrictResultOrignal) {
            this.electionSenatorialDistrictResult = this.electionSenatorialDistrictResultOrignal.filter(
                (x) => x.electionCountryId === countryId && x.electionStateId === stateId
            );
        }
        // this._electionSenatorialDistrictCouncilServiceProxy
        //     .getAll(
        //         undefined,
        //         countryId,
        //         stateId,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined
        //     )
        //     .subscribe((data) => {
        //         this.electionSenatorialDistrictResult = data.items;
        //     });
    }

    GetAllElectionFederalRepresentative(stateId) {
        if (this.electionFederalRepresentativeResultOrignal) {
            this.electionFederalRepresentativeResult = this.electionFederalRepresentativeResultOrignal.filter(
                (x) => x.electionStateId === stateId
            );
        }

        // this._electionFederalRepresentativeServiceProxy
        //     .getAll(
        //         undefined,
        //         stateId,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined
        //     )
        //     .subscribe((data) => {
        //         this.electionFederalRepresentativeResult = data.items;
        //     });
    }

    GetAllElectionAssemblyArea(countryId, stateId) {
        if (this.electionAssemblyAreaResultOrignal) {
            this.electionAssemblyAreaResult = this.electionAssemblyAreaResultOrignal.filter(
                (x) => x.electionCountryId === countryId && x.electionStateId === stateId
            );
        }

        // this._electionAssemblyAreaServiceProxy
        //     .getAll(
        //         undefined,
        //         countryId,
        //         stateId,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined
        //     )
        //     .subscribe((data) => {
        //         this.electionAssemblyAreaResult = data.items;
        //     });
    }

    GetAllElectionLocalCouncil(electionstateid) {
        if (this.electionLocalCouncilResultOrignal) {
            this.electionLocalCouncilResult = this.electionLocalCouncilResultOrignal.filter(
                (x) => x.electionStateId === electionstateid
            );
        }

        // this._electionLocalCouncilServiceProxy
        //     .getAll(
        //         undefined,
        //         electionstateid,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined
        //     )
        //     .subscribe((data) => {
        //         this.electionLocalCouncilResult = data.items;
        //     });
    }

    GetAllElectionPositions() {
        this.electionPostResult = this.sharingService.getElectonPostData();
        if (!this.electionPostResult) {
            this.spinnerService.show();
            this.unsubscribe2 = this._electionPollingUnitResult
                .getMyElectionPost(undefined, true)
                .subscribe((data) => {
                    this.spinnerService.hide();
                    this.electionPostResult = data.electionPost;
                });
        }
    }

    GetAllElectionWards() {
        this._electionWard
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
                undefined,
                undefined
            )
            .subscribe((data: any) => {
                this.electionWardsResult = data.items;
            });
    }

    GetElectionUnitsByWardId(wardId: number) {
        if (this.electionUnitsResultOrignal) {
            this.electionUnitsResult = this.electionUnitsResultOrignal.filter((x) => x.electionWardId === wardId);
        }

        // this._electionPollingUnit
        //     .getAll(
        //         undefined,
        //         wardId,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined,
        //         undefined
        //     )
        //     .subscribe((data) => {
        //         this.electionUnitsResult = data.items;
        //     });
    }

    ElectionPositionFilterResult(electionPostObj, event) {
        if (event.currentTarget.checked === true) {
            this.electioPostId = electionPostObj.id;
            let item = this.filterList.find((x) => x.dropdownname === 'position');
            if (item) {
                item.value = electionPostObj.officeName;
            } else {
                let filterobj = { dropdownname: 'position', value: electionPostObj.officeName };
                this.filterList.push(filterobj);
            }
        }
    }
    ElectionPositionFilterResult2(electionPostObj, event) {
        if (event.currentTarget.checked === true) {
            this.electioPostId = electionPostObj.id;
        }
    }

    ElectionWardsFilterResult(wardObj, event) {
        if (event.currentTarget.checked === true) {
            this.electioWardId = wardObj.id;
            this.GetElectionUnitsByWardId(wardObj.id);
            let item = this.filterList.find((x) => x.dropdownname === 'ward');
            if (item) {
                item.value = wardObj.electionWardName;
            } else {
                let filterobj = { dropdownname: 'ward', value: wardObj.electionWardName };
                this.filterList.push(filterobj);
            }
        }
    }

    ElectionUnitFilterResult(unitObj, event) {
        this.electioUnitId = unitObj.id;
        let item = this.filterList.find((x) => x.dropdownname === 'unit');
        if (item) {
            item.value = unitObj.electionPollingUnitName;
        } else {
            let filterobj = { dropdownname: 'unit', value: unitObj.electionPollingUnitName };
            this.filterList.push(filterobj);
        }
    }
    ElectionLocalCouncilsResult(localcouncilobj, event) {
        this.electiolocalcouncilId = localcouncilobj.id;
        let item = this.filterList.find((x) => x.dropdownname === 'localcouncil');
        if (item) {
            item.value = localcouncilobj.electionLocalCouncilName;
        } else {
            let filterobj = { dropdownname: 'localcouncil', value: localcouncilobj.electionLocalCouncilName };
            this.filterList.push(filterobj);
        }
    }
    ElectionCountriesResult(countryobj, event) {
        this.electioCountryId = countryobj.id;
        this.GetAllElectionState(this.electioCountryId);
        let item = this.filterList.find((x) => x.dropdownname === 'country');
        if (item) {
            item.value = countryobj.electionCountryName;
        } else {
            let filterobj = { dropdownname: 'country', value: countryobj.electionCountryName };
            this.filterList.push(filterobj);
        }
    }
    ElectionStateResult(stateobj, event) {
        this.electioStateId = stateobj.id;
        this.GetAllElectionFederalRepresentative(this.electioStateId);
        this.GetAllElectionSenatorialDistrict(this.electioStateId, this.electioCountryId);
        this.GetAllElectionLocalCouncil(this.electioStateId);
        this.GetAllElectionAssemblyArea(this.electioStateId, this.electioCountryId);
        let item = this.filterList.find((x) => x.dropdownname === 'state');
        if (item) {
            item.value = stateobj.electionStateName;
        } else {
            let filterobj = { dropdownname: 'state', value: stateobj.electionStateName };
            this.filterList.push(filterobj);
        }
    }
    ElectionSenatorialDistrictResult(senatorialobj, event) {
        this.electioSenatorialDistrictId = senatorialobj.id;
        let item = this.filterList.find((x) => x.dropdownname === 'senatorial');
        if (item) {
            item.value = senatorialobj.electionSenatorialDistrictName;
        } else {
            let filterobj = { dropdownname: 'senatorial', value: senatorialobj.electionSenatorialDistrictName };
            this.filterList.push(filterobj);
        }
    }
    ElectionFederalRepresentativeResult(federalobj, event) {
        this.electioFederalRepresentativeId = federalobj.id;
        let item = this.filterList.find((x) => x.dropdownname === 'federal');
        if (item) {
            item.value = federalobj.electionFederalRepresentativeProvinceNames;
        } else {
            let filterobj = { dropdownname: 'federal', value: federalobj.electionFederalRepresentativeProvinceNames };
            this.filterList.push(filterobj);
        }
    }
    ElectionStateRepresentativeResult(staterepresentativeobj, event) {
        this.electioStateRepresentativeId = staterepresentativeobj.id;
        let item = this.filterList.find((x) => x.dropdownname === 'staterepresentative');
        if (item) {
            item.value = staterepresentativeobj.electionWardGroupId;
        } else {
            let filterobj = { dropdownname: 'staterepresentative', value: staterepresentativeobj.electionWardGroupId };
            this.filterList.push(filterobj);
        }
    }
    ElectionLocalCouncilRepresentativeResult(localcouncilObj, event) {
        this.electionLocalCouncilId = localcouncilObj.id;
        let item = this.filterList.find((x) => x.dropdownname === 'localcouncil');
        if (item) {
            item.value = localcouncilObj.electionLocalCouncilName;
        } else {
            let filterobj = { dropdownname: 'localcouncil', value: localcouncilObj.electionLocalCouncilName };
            this.filterList.push(filterobj);
        }
    }

    Submit() {

        this.barChartData = [];
        this.politicalParties = [];
        this.spinnerService.show();
        this.electioUnitId = this.electioUnitId === 0 ? undefined : this.electioUnitId;
        this.electioPostId = this.electioPostId === 0 ? undefined : this.electioPostId;
        this.electioStateId = this.electioStateId === 0 ? undefined : this.electioStateId;
        this.electiolocalcouncilId = this.electiolocalcouncilId === 0 ? undefined : this.electiolocalcouncilId;
        this.electioWardId = this.electioWardId === 0 ? undefined : this.electioWardId;
        this.electioGalleryId = this.electioGalleryId === 0 ? undefined : this.electioGalleryId;
             this._electionPollingUnitResult
                .getMyElectionPostResult(this.electioPostId, true)
                .subscribe((res) => {
                    this.electionReportSummaryAnalyticsResult = res?.electionPost[0];
                    this.electionReportSummaryAnalyticsResult?.politicalPartyDetails?.forEach((value, index) => {

                        let obj: any = {};
                       let barchartObj: ChartDataSets = {};

                       barchartObj.data = [];
                       barchartObj.data.push(value?.electionCandidate[0]?.totalElectionCandidateVote);
                       barchartObj.label = value?.partyName;
                       barchartObj.stack = 'a';
                       barchartObj.barThickness = 80;
                       barchartObj.backgroundColor = this.RandomColor();

                       obj.partyName = value?.partyName;
                       obj.partyPrefix = value?.prefix;
                       obj.totalPartyVote = res?.electionPost[0].electionResultDetails.totalValidVote;
                       obj.partyPhoto = value?.partyPhoto;
                       obj.candidateVote = value?.electionCandidate[0]?.totalElectionCandidateVote;

                       this.barChartData.push(barchartObj);
                       this.politicalParties.push(obj);
                    });
                    this.spinnerService.hide();
                });
        forkJoin([
            this._electionGalleryServiceProxy.getMyElectionGallery(
                this.electioPostId,
                this.electioUnitId,
                undefined,
                undefined,
                undefined,
                undefined
            ),
            this._electionPollingUnitResult.getElectionResult(
                this.electioPostId,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                this.electioUnitId,
                undefined,
                undefined,
                undefined,
                undefined
            ),
        ])
            .pipe()
            .subscribe(([data, data2]) => {
                this.spinnerService.hide();
                if (data) {
                    this.electionPostWithGalleryData = data.electionPost;
                    this.electionPostWithGalleryData.forEach((value2, i) => {
                        value2.assignedPollingUnitGalleryDetail.forEach((value, index) => {
                            let obj: any = {};
                            obj.mediaSource = value.mediaSource;
                            obj.contentLink = value.contentLink;
                            if (value.userDetail != null) {
                                obj.userName = value.userDetail.name + ' ' + value.userDetail.surname;
                                obj.creationTime = value.userDetail.creationTime;
                            }
                            if (value.electionPollingUnitId != null) {
                                this._electionPollingUnit.get(value?.electionPollingUnitId).subscribe((item) => {
                                    obj.electionPollingUnitName = item?.electionPollingUnitName;
                                    this._electionWard.get(item?.electionWardId).subscribe((ward) => {
                                        obj.electionWardName = ward?.electionWardName;
                                    });
                                });
                            }
                            this.electionGalleryResultData.push(obj);
                        });
                    });
                    this.sharingService.setElectionPostGalleryData(this.electionGalleryResultData);
                    this.livefeedcompref.getElectionPostGalleryData();
                    this.electiondetailcompref.getElectionPostGalleryData();
                }

                if (data2) {
                    this.sharingService.setElectionResultData(data2.electionPost);
                    this.candidatcompref.getElectionResultData();
                    this.analyticscompref.getElectionResultData();
                    this.electiondetailcompref.getElectionResultData();
                    data2.electionPost.forEach((value, index) => {
                        value.electionCountryDetails.forEach((value2, index2) => {
                            this.totaVote = value2.electionResultDetails.totalVote;
                            this.totaPollingUnit =
                                value2.electionResultDetails.totalPollingUnitWithResult +
                                value2.electionResultDetails.totalPollingUnitWithOutResult;
                            this.totaPollingUnitWithResult = value2.electionResultDetails.totalPollingUnitWithResult;
                            this.totaPollingUnitWithPending =
                                value2.electionResultDetails.totalPollingUnitWithOutResult;
                        });
                    });
                }
            });
    }


    RandomColor() {
        return '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    }

    Reset() {
        this.ngOnInit();
    }
    ngOnDestroy(): void {
        // this.unsubscribe1.unsubscribe();
        // this.unsubscribe2.unsubscribe();
    }

    Percentage(partialValue, totalValue) {
        if (totalValue && partialValue) {
            return Math.round((100 * partialValue) / totalValue);
        } else {
            return 0;
        }
    }
}
