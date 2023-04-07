import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SharingServiceElection } from '@app/app-layout/dashboard/SharingServiceElection';

@Component({
    selector: 'app-candidate-information',
    templateUrl: './candidate-information.component.html',
    styleUrls: ['./candidate-information.component.css'],
})
export class CandidateInformationComponent implements OnInit, AfterViewInit {
    candidateDataArray: any;
    dataElectionResult: any;
    largestRegionName = '';
    largestVoteCount = 0;
    smallestVoteCount = 0;
    smallestRegionName = '';
    tableStatePostResult: any;
    tablePostResult: any;
    IsPollingUnit = true;

    data: any;
    basicOptions: any;
    dataVAPTurnout: any;
    optionsdataVAPTurnout: any;
    dataVAPGender: any;
    optionsdataVAPGender: any;
    dataStateChartDD: any;
    Analytics: boolean = true;
    Table: boolean = false;
    tableStatePostResult2: any;
    tableStatePostResult3: any;
    tablePostResult2: any;
    tablePostResult3: any;
    tableCountryResult: any;
    tableCountryResult2: any;
    tableCountryResult3: any;
    tableWardResult: any;
    tableWardResult2: any;
    tableWardResult3: any;
    tableLocalCouncilResult: any;
    tableLocalCouncilResult2: any;
    tableLocalCouncilResult3: any;
    pollingunit: boolean = false;
    state: boolean = false;
    country: boolean = false;
    localcouncil: boolean = false;
    ward: boolean = false;
    chartValue: any = 'State';
    constructor(private sharingService: SharingServiceElection) {}
  ngOnInit(): void {

  }
    ngAfterViewInit(): void {
        this.getElectionResultData();
        this.getTableChartData();
        this.GetDropdownData();
    }


    //     this.dataElectionResult = this.sharingService.getElectionResultDataByLocalStorage();


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
        let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
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

    getTableChartData(): void {
        const tableStateResult: any[] = [];
        const tablePostResult: any[] = [];
        if (this.dataElectionResult) {
          this.dataElectionResult.forEach((office) => {
            office.electionCountryDetails.forEach((country) => {
              country.electionStateDetails.forEach((state) => {
                state.politicalPartyDetail.forEach((party) => {
                  party.electionCandidate.forEach((candidate) => {
                    const stateResult = {
                      electionPostName: office.officeName,
                      totalVote: country.electionResultDetails.totalVote,
                      electionRegion: state.electionStateName,
                      totalElectionPollingUnitLink: state.electionStateBreakDown.totalElectionPollingUnitLink,
                      partyName: party.partyName,
                      candidateName: candidate.candidateName,
                      candidatePhoto: candidate.candidatePhoto,
                      totalElectionCandidateVote: candidate.totalElectionCandidateVote,
                      totalElectionCandidateVotePercentage: this.Percentage(
                        candidate.totalElectionCandidateVote,
                        state.electionResultDetails.totalValidVote
                      ),
                      rankingStatus: candidate.rankingStatus,
                      totalPollingUnitWithResult: state.electionResultDetails.totalPollingUnitWithResult,
                      totalPollingUnitWithOutResult: state.electionResultDetails.totalPollingUnitWithOutResult,
                      totalValidVote: state.electionResultDetails.totalValidVote,
                      totalCancelled: state.electionResultDetails.totalCancelled,
                    };

                    tableStateResult.push(stateResult);

                    state.electionLocalCouncilDetails.forEach((council) => {
                      council.electionWardDetails.forEach((ward) => {
                        ward.electionPollingUnitDetail.forEach((unit) => {
                          unit.politicalPartyDetail.forEach((party2) => {
                            party2.electionCandidate.forEach((candidate2) => {
                              const postResult = {
                                electionPollingUnitName: unit.electionPollingUnitName,
                                totalValidVotePercentagePollingUnit: this.Percentage(
                                  unit.electionResultDetails.totalValidVote,
                                  unit.electionResultDetails.totalVote
                                ),
                                totalCancelVotePercentagePollingUnit: this.Percentage(
                                  unit.electionResultDetails.totalCancelled,
                                  unit.electionResultDetails.totalVote
                                ),
                                electionCountryName: country.electionCountryName,
                                electionStateName: state.electionStateName,
                                electionLocalCouncilName: council.electionLocalCouncilName,
                                electionWardName: ward.electionWardName,
                                totalElectionPollingUnitLink: state.electionStateBreakDown.totalElectionPollingUnitLink,
                                partyName: party2.partyName,
                                totalPollingUnitVote: unit.electionResultDetails.totalVote,
                                totalPollingUnitWithResult: unit.electionResultDetails.totalPollingUnitWithResult,
                                totalPollingUnitWithOutResult: unit.electionResultDetails.totalPollingUnitWithOutResult,
                                totalValidVote: unit.electionResultDetails.totalValidVote,
                                totalCancelled: unit.electionResultDetails.totalCancelled,
                                totalElectionCandidateVote: candidate2.totalElectionCandidateVote,
                                totalElectionCandidateVotePercentage: this.Percentage(
                                  candidate2.totalElectionCandidateVote,
                                  unit.electionResultDetails.totalValidVote
                                ),
                              };
                              tablePostResult.push(postResult);
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        }
        this.tablePostResult = tablePostResult.filter((obj, index, self) => self.findIndex(o => o.electionPollingUnitName === obj.electionPollingUnitName) === index);
        this.tableStatePostResult = tableStateResult;
      }


      getTableChartData3(): void {
        const tableStateResult: any[] = [];
        const tablePostResult: any[] = [];
        if (this.dataElectionResult) {
          this.dataElectionResult.forEach((office) => {
            office.electionCountryDetails.forEach((country) => {
              country.electionStateDetails.forEach((state) => {
                state.politicalPartyDetail.forEach((party) => {
                  party.electionCandidate.forEach((candidate) => {
                    const stateResult = {
                      electionRegion: state.electionStateName,
                      totalElectionCandidateVotePercentage: this.Percentage(
                        candidate.totalElectionCandidateVote,
                        state.electionResultDetails.totalValidVote
                      ),
                      totalValidVote: state.electionResultDetails.totalValidVote,
                    };

                    tableStateResult.push(stateResult);

                    state.electionLocalCouncilDetails.forEach((council) => {
                      council.electionWardDetails.forEach((ward) => {
                        ward.electionPollingUnitDetail.forEach((unit) => {
                          unit.politicalPartyDetail.forEach((party2) => {
                            party2.electionCandidate.forEach((candidate2) => {
                              const postResult = {
                                electionPollingUnitName: unit.electionPollingUnitName,
                                totalValidVotePercentagePollingUnit: this.Percentage(
                                  unit.electionResultDetails.totalValidVote,
                                  unit.electionResultDetails.totalVote
                                ),
                                totalCancelVotePercentagePollingUnit: this.Percentage(
                                  unit.electionResultDetails.totalCancelled,
                                  unit.electionResultDetails.totalVote
                                ),
                                electionCountryName: country.electionCountryName,
                                electionStateName: state.electionStateName,
                                electionLocalCouncilName: council.electionLocalCouncilName,
                                electionWardName: ward.electionWardName,
                                totalElectionPollingUnitLink: state.electionStateBreakDown.totalElectionPollingUnitLink,
                                partyName: party2.partyName,
                                totalPollingUnitVote: unit.electionResultDetails.totalVote,
                                totalPollingUnitWithResult: unit.electionResultDetails.totalPollingUnitWithResult,
                                totalPollingUnitWithOutResult: unit.electionResultDetails.totalPollingUnitWithOutResult,
                                totalValidVote: unit.electionResultDetails.totalValidVote,
                                totalCancelled: unit.electionResultDetails.totalCancelled,
                                totalElectionCandidateVote: candidate2.totalElectionCandidateVote,
                                totalElectionCandidateVotePercentage: this.Percentage(
                                  candidate2.totalElectionCandidateVote,
                                  unit.electionResultDetails.totalValidVote
                                ),
                              };
                              tablePostResult.push(postResult);
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        }
        this.tablePostResult = tablePostResult.filter((obj, index, self) => self.findIndex(o => o.electionPollingUnitName === obj.electionPollingUnitName) === index);
        this.tableStatePostResult = tableStateResult;
      }

    GetTableChartData2() {
        let tablePostResultObj: any = {};
        let tableStateResultObj: any = {};
        this.tableStatePostResult = [];
        this.tablePostResult = [];
        if (this.dataElectionResult) {
            this.dataElectionResult.forEach((value, index) => {
                value.electionCountryDetails.forEach((value2, index2) => {
                    value2.electionStateDetails.forEach((value3, index3) => {
                        value3.politicalPartyDetail.forEach((value4, index3) => {
                            value4.electionCandidate.forEach((value5, index3) => {
                                tableStateResultObj = {};
                                tableStateResultObj.electionPostName = value.officeName;
                                tableStateResultObj.totalVote = value2.electionResultDetails.totalVote;
                                tableStateResultObj.electionRegion = value3.electionStateName;
                                tableStateResultObj.totalElectionPollingUnitLink =
                                    value3.electionStateBreakDown.totalElectionPollingUnitLink;
                                tableStateResultObj.partyName = value4.partyName;
                                tableStateResultObj.candidateName = value5.candidateName;
                                tableStateResultObj.candidatePhoto = value5.candidatePhoto;
                                tableStateResultObj.totalElectionCandidateVote = value5.totalElectionCandidateVote;
                                tableStateResultObj.totalElectionCandidateVotePercentage = this.Percentage(value5.totalElectionCandidateVote, value3.electionResultDetails.totalValidVote);
                                tableStateResultObj.rankingStatus = value5.rankingStatus;

                                tableStateResultObj.totalPollingUnitWithResult = value3.electionResultDetails.totalPollingUnitWithResult;
                                tableStateResultObj.totalPollingUnitWithOutResult = value3.electionResultDetails.totalPollingUnitWithOutResult;
                                tableStateResultObj.totalValidVote = value3.electionResultDetails.totalValidVote;
                                tableStateResultObj.totalCancelled = value3.electionResultDetails.totalCancelled;
                                tableStateResultObj.totalElectionCandidateVote = value5.totalElectionCandidateVote;
                                tableStateResultObj.totalElectionCandidateVotePercentage  = this.Percentage(value5.totalElectionCandidateVote, value3.electionResultDetails.totalValidVote);
                                tableStateResultObj.totalValidVotePercentagePollingUnit = this.Percentage(
                                    value3.electionResultDetails.totalValidVote,
                                    value3.electionResultDetails.totalVote
                                );
                                tableStateResultObj.totalCancelVotePercentagePollingUnit = this.Percentage(
                                    value3.electionResultDetails.totalCancelled,
                                    value3.electionResultDetails.totalVote
                                );
                                this.tableStatePostResult.push(tableStateResultObj);
                            });
                        });
                        value3.electionLocalCouncilDetails.forEach((value4, index3) => {
                            value4.electionWardDetails.forEach((value5, index3) => {
                                value5.electionPollingUnitDetail.forEach((value6, index3) => {
                                    value6.politicalPartyDetail.forEach((value7, index3) => {
                                        value7.electionCandidate.forEach((value8, index3) => {
                                        tablePostResultObj = {};
                                        tablePostResultObj.electionPollingUnitName = value6.electionPollingUnitName;
                                        tablePostResultObj.totalValidVotePercentagePollingUnit = this.Percentage(
                                            value6.electionResultDetails.totalValidVote,
                                            value6.electionResultDetails.totalVote
                                        );
                                        tablePostResultObj.totalCancelVotePercentagePollingUnit = this.Percentage(
                                            value6.electionResultDetails.totalCancelled,
                                            value6.electionResultDetails.totalVote
                                        );
                                        tablePostResultObj.electionCountryName = value2.electionCountryName;
                                        tablePostResultObj.electionStateName = value3.electionStateName;
                                        tablePostResultObj.electionLocalCouncilName = value4.electionLocalCouncilName;
                                        tablePostResultObj.electionWardName = value5.electionWardName;
                                        tablePostResultObj.totalElectionPollingUnitLink =
                                            value3.electionStateBreakDown.totalElectionPollingUnitLink;
                                        tablePostResultObj.partyName = value7.partyName;
                                        tablePostResultObj.totalPollingUnitVote =
                                            value6.electionResultDetails.totalVote;
                                            tablePostResultObj.totalPollingUnitWithResult = value6.electionResultDetails.totalPollingUnitWithResult;
                                            tablePostResultObj.totalPollingUnitWithOutResult = value6.electionResultDetails.totalPollingUnitWithOutResult;
                                            tablePostResultObj.totalValidVote = value6.electionResultDetails.totalValidVote;
                                            tablePostResultObj.totalCancelled = value6.electionResultDetails.totalCancelled;
                                            tablePostResultObj.totalElectionCandidateVote = value8.totalElectionCandidateVote;
                                            tablePostResultObj.totalElectionCandidateVotePercentage  = this.Percentage(value8.totalElectionCandidateVote, value6.electionResultDetails.totalValidVote);
                                            this.tablePostResult.push(tablePostResultObj);
                                        // this.tablePostResult2.push(tablePostResultObj);
                                    });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }
    }

    onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    toggleIsPollingUnit(): void {
        this.IsPollingUnit = !this.IsPollingUnit;
    }

    GetStateVOte(value) {
    }

    GetDropdownData() {
        let tablePostResultObj: any = {};
        let tableStateResultObj: any = {};
        let tableCountryResultObj: any = {};
        let tablelocalcouncilResultObj: any = {};
        let tablewardResultObj: any = {};
        this.tableStatePostResult = [];
        this.tablePostResult = [];
        this.tableCountryResult = [];
        this.tableLocalCouncilResult = [];
        this.tableWardResult = [];
        if (this.dataElectionResult) {
            this.dataElectionResult.forEach((value, index) => {
                value.electionCountryDetails.forEach((value2, index2) => {
                     tableCountryResultObj = {};
                     tableCountryResultObj.electionCountryName = value2.electionCountryName;
                     tableCountryResultObj.id = value2.id;
                     this.tableCountryResult.push(tableCountryResultObj);

                    value2.electionStateDetails.forEach((value3, index3) => {
                        tableStateResultObj = {};
                        tableStateResultObj.electionRegion = value3.electionStateName;
                        tableStateResultObj.id = value3.id;
                        this.tableStatePostResult.push(tableStateResultObj);


                        value3.electionLocalCouncilDetails.forEach((value4, index3) => {
                            tablelocalcouncilResultObj = {};
                            tablelocalcouncilResultObj.electionLocalCouncilName = value4.electionLocalCouncilName;
                            tablelocalcouncilResultObj.id = value4.id;
                            this.tableLocalCouncilResult.push(tablelocalcouncilResultObj);

                            value4.electionWardDetails.forEach((value5, index3) => {
                                tablewardResultObj = {};
                                tablewardResultObj.electionWardName = value5.electionWardName;
                                tablewardResultObj.id = value5.id;
                                this.tableWardResult.push(tablewardResultObj);
                                value5.electionPollingUnitDetail.forEach((value6, index3) => {
                                        tablePostResultObj = {};
                                        tablePostResultObj.electionPollingUnitName = value6.electionPollingUnitName;
                                        tablePostResultObj.id = value6.id;
                                          this.tablePostResult.push(tablePostResultObj);
                                });
                            });
                        });
                    });
                });
            });
        }
        let result = this.tablePostResult.map((a) => a.electionPollingUnitName);
        if (result) {
            this.tablePostResult = result.filter(this.onlyUnique).map((item) => ({ value: item, label: item }));
        }
        result = this.tableStatePostResult.map((a) => a.electionRegion);
        if (result) {
            this.tableStatePostResult = result.filter(this.onlyUnique).map((item) => ({ value: item, label: item }));
        }
        result = this.tableCountryResult.map((a) => a.electionCountryName);
        if (result) {
            this.tableCountryResult = result.filter(this.onlyUnique).map((item) => ({ value: item, label: item }));
        }
        result = this.tableWardResult.map((a) => a.electionWardName);
        if (result) {
            this.tableWardResult = result.filter(this.onlyUnique).map((item) => ({ value: item, label: item }));
        }
        result = this.tableLocalCouncilResult.map((a) => a.electionLocalCouncilName);
        if (result) {
            this.tableLocalCouncilResult = result
                .filter(this.onlyUnique)
                .map((item) => ({ value: item, label: item }));
        }
    }
}
