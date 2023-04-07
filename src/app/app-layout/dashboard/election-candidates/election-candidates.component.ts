import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

import {
    ElectionCandidateResultServiceProxy,
    ElectionCandidateServiceProxy,
} from '@shared/service-proxies/service-proxies';
import { ElectionFilterCategoryComponent } from '../election-filter-category/election-filter-category.component';
import { SharingServiceElection } from '../SharingServiceElection';
@Component({
    selector: 'app-election-candidates',
    templateUrl: './election-candidates.component.html',
    styleUrls: ['./election-candidates.component.css'],
})
export class ElectionCandidatesComponent implements OnInit, OnChanges {
    data: any;
    topfivedata: any;
    dataElectionResult: any;
    candidateDataArray: any;
     largestRegionName = '';
     largestVoteCount = 0;
     smallestVoteCount = 0;
     smallestRegionName = '';
    constructor(
        private _electionCandidateServiceProxy: ElectionCandidateServiceProxy,
        private _electionCandidateResultServiceProxy: ElectionCandidateResultServiceProxy,
        private sharingService: SharingServiceElection

    ) {}

    ngOnInit(): void {
    }

    GetMoreNecessaryCandidateDetails(i, candidateId) {
    }

    ngOnChanges(changes: SimpleChanges): void {
    }

    GetData() {
        this.data = this.sharingService.getData();
    }
    GetTopfive() {
        this.topfivedata = this.sharingService.gettopFiveData();
    }
    getElectionResultData() {
        this.largestRegionName = '';
        this.smallestRegionName = '';
        this.largestVoteCount = 0;
        this.smallestVoteCount = 0;
        this.candidateDataArray = [];
        let candidateDataObj: any = {};
        let isPresidentialElection = false;
        this.dataElectionResult = this.sharingService.getElectionResultData();
        this.dataElectionResult.forEach((value, index) => {
            isPresidentialElection = value.isGovernorShipElection ? false : true;
            value.electionCountryDetails.forEach((value2, index2) => {

                if (isPresidentialElection) {
                    value2.politicalPartyDetail.forEach((value3, index3) => {
                        value3.electionCandidate.forEach((value4, index3) => {
                            if (value2.electionResultDetails.totalVote > this.largestVoteCount) {
                                this.largestRegionName = value2.electionCountryName;
                                this.largestVoteCount = value2.electionResultDetails.totalVote;
                            }
                            if (value2.electionResultDetails.totalVote < this.smallestVoteCount) {
                                this.smallestRegionName = value2.electionCountryName;
                                this.smallestVoteCount = value2.electionResultDetails.totalVote;
                            }
                            candidateDataObj.largestRegionName = this.largestRegionName;
                            candidateDataObj.smallestRegionName = this.smallestRegionName;
                            candidateDataObj.smallestVoteCount = this.smallestVoteCount;
                            candidateDataObj.largestVoteCount = this.largestVoteCount;
                            candidateDataObj.totalElectionStateLink = value2.electionCountryBreakDown.totalElectionStateLink;
                            candidateDataObj.totalElectionLocalCouncilLink = value2.electionCountryBreakDown.totalElectionLocalCouncilLink;
                            candidateDataObj.totalElectionWardLink = value2.electionCountryBreakDown.totalElectionWardLink;
                            candidateDataObj.totalElectionPollingUnitLink = value2.electionCountryBreakDown.totalElectionPollingUnitLink;
                            candidateDataObj.electionCountryName = value2.electionCountryName;
                            candidateDataObj.totalVotePercentage = this.Percentage(value4.totalElectionCandidateVote, value2.electionResultDetails.totalVote);
                            candidateDataObj.totalVote = value2.electionResultDetails.totalVote;
                            candidateDataObj.electionCountryFlag = value2.flag;
                            candidateDataObj.numberOfState = value2.numberOfState;
                            candidateDataObj.partyName = value3.partyName;
                            candidateDataObj.partyPhoto = value3.partyPhoto;
                            candidateDataObj.prefix = value3.prefix;
                            candidateDataObj.candidateName = value4.candidateName;
                            candidateDataObj.candidatePhoto = value4.candidatePhoto;
                            candidateDataObj.dateOfBirth = value4.dateOfBirth;
                            candidateDataObj.isMarried = value4.isMarried;
                            candidateDataObj.totalElectionCandidateVote = value4.totalElectionCandidateVote;
                            candidateDataObj.rankingStatus = value4.rankingStatus;
                            candidateDataObj.rankingStatusString = this.NumberToString(value4.rankingStatus);
                            this.candidateDataArray.push(candidateDataObj);
                            this.sharingService.setElectionResultDataByLocalStorage(this.candidateDataArray);
                            candidateDataObj = {};
                        });
                    });
              } else {
                   value2.electionStateDetails.forEach((value3, index3) => {
                    value3.politicalPartyDetail.forEach((value4, index3) => {
                        value4.electionCandidate.forEach((value5, index3) => {
                            if (value3.electionResultDetails.totalVote > this.largestVoteCount) {
                                this.largestRegionName = value3.electionStateName;
                                this.largestVoteCount = value3.electionResultDetails.totalVote;
                            }
                            if (value3.electionResultDetails.totalVote < this.smallestVoteCount) {
                                this.smallestRegionName = value3.electionStateName;
                                this.smallestVoteCount = value3.electionResultDetails.totalVote;
                            }
                            candidateDataObj.largestRegionName = this.largestRegionName;
                            candidateDataObj.smallestRegionName = this.smallestRegionName;
                            candidateDataObj.smallestVoteCount = this.smallestVoteCount;
                            candidateDataObj.largestVoteCount = this.largestVoteCount;
                            candidateDataObj.totalElectionStateLink = value2.electionCountryBreakDown.totalElectionStateLink;
                            candidateDataObj.totalElectionLocalCouncilLink = value3.electionStateBreakDown.totalElectionLocalCouncilLink;
                            candidateDataObj.totalElectionWardLink = value3.electionStateBreakDown.totalElectionWardLink;
                            candidateDataObj.totalElectionPollingUnitLink = value3.electionStateBreakDown.totalElectionPollingUnitLink;
                            candidateDataObj.electionCountryName = value2.electionCountryName;
                            candidateDataObj.totalVotePercentage = this.Percentage(value5.totalElectionCandidateVote, value3.electionResultDetails.totalVote);
                            candidateDataObj.totalVote = value3.electionResultDetails.totalVote;
                            candidateDataObj.electionCountryFlag = value2.flag;
                            candidateDataObj.numberOfState = value2.numberOfState;
                            candidateDataObj.partyName = value4.partyName;
                            candidateDataObj.partyPhoto = value4.partyPhoto;
                            candidateDataObj.prefix = value4.prefix;
                            candidateDataObj.candidateName = value5.candidateName;
                            candidateDataObj.candidatePhoto = value5.candidatePhoto;
                            candidateDataObj.dateOfBirth = value5.dateOfBirth;
                            candidateDataObj.isMarried = value5.isMarried;
                            candidateDataObj.totalElectionCandidateVote = value5.totalElectionCandidateVote;
                            candidateDataObj.rankingStatus = value5.rankingStatus;
                            candidateDataObj.rankingStatusString = this.NumberToString(value5.rankingStatus);
                            this.candidateDataArray.push(candidateDataObj);
                            this.sharingService.setElectionResultDataByLocalStorage(this.candidateDataArray);
                            candidateDataObj = {};
                        });
                    });
                  });
                }
           }); });



    }

    GetMyAge(date) {
        let dateobj = new Date(date);
        let timeDiff = Math.abs(Date.now() - dateobj.getTime());
        let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
        return age;
    }
    Percentage(partialValue, totalValue) {
        if (totalValue && partialValue) {
            return Math.round((100 * partialValue) / totalValue);
        } else {
            return 0;
        }
    }

    NumberToString(num: number): string {
        switch (num) {
          case 1:
            return 'WINNER';
          case 2:
            return 'SECOND';
          case 3:
            return 'THIRD';
          case 4:
            return 'FOURTH';
          case 5:
            return 'FIFTH';
          case 6:
            return 'SIXTH';
          case 7:
            return 'SEVENTH';
          case 8:
            return 'EIGHTH';
          case 9:
            return 'NINTH';
          case 10:
            return 'TENTH';
          default:
            return 'Number out of range';
        }
    }

}
