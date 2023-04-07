import { Component, OnInit } from '@angular/core';
import { SharingServiceElection } from '../../SharingServiceElection';
import { NgxSpinnerService } from 'ngx-spinner';
import { returnM } from 'esri/rest/geoprocessor/GPOptions';

@Component({
    selector: 'app-voter-ratio',
    templateUrl: './voter-ratio.component.html',
    styleUrls: ['./voter-ratio.component.css'],
})
export class VoterRatioComponent implements OnInit {
    data: any;
    basicOptions: any;
    dataVAPTurnout: any;
    optionsdataVAPTurnout: any;
    dataVAPGender: any;
    optionsdataVAPGender: any;
    dataElectionResult: any;
    dataStateChartDD: any;
    Analytics: boolean = true;
    Table: boolean = false;
    tableStatePostResult: any;
    tableStatePostResult2: any;
    tableStatePostResult3: any;
    tablePostResult: any;
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
    constructor(private sharingService: SharingServiceElection, private spinnerService: NgxSpinnerService) {}

    ngOnInit(): void {
        this.dataStateChartDD = [];
        this.tableStatePostResult = [];
        this.tableStatePostResult2 = [];
        this.tableStatePostResult3 = [];
        this.tablePostResult = [];
        this.tablePostResult2 = [];
        this.tablePostResult3 = [];
        this.tableCountryResult = [];
        this.tableCountryResult2 = [];
        this.tableCountryResult3 = [];
        this.tableWardResult = [];
        this.tableWardResult2 = [];
        this.tableWardResult3 = [];
        this.tableLocalCouncilResult = [];
        this.tableLocalCouncilResult2 = [];
        this.tableLocalCouncilResult3 = [];
        this.chartValue = '';
    }
    getElectionResultData() {
        this.dataElectionResult = this.sharingService.getElectionResultData();
        this.GetStateChart();
        // this.GetStateData();
    }

    GetTableChartData() {
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
                    value2.politicalPartyDetail.forEach((value3, index3) => {
                        value3.electionCandidate.forEach((value4, index3) => {
                            tableCountryResultObj = {};
                            tableCountryResultObj.electionCountryName = value2.electionCountryName;
                            tableCountryResultObj.numberOfState = value2.numberOfState;
                            tableCountryResultObj.totalElectionPollingUnitLink =
                                value2.electionCountryBreakDown.totalElectionPollingUnitLink;
                            tableCountryResultObj.partyName = value3.partyName;
                            tableCountryResultObj.totalElectionCandidateVote = value4.totalElectionCandidateVote;
                            tableCountryResultObj.rankingStatus = value4.rankingStatus;
                            tableCountryResultObj.candidatePhoto = value4.candidatePhoto;
                            tableCountryResultObj.candidateName = value4.candidateName;
                            tableCountryResultObj.totalPollingUnitWithResult = value2.electionResultDetails.totalPollingUnitWithResult;
                            tableCountryResultObj.totalPollingUnitWithOutResult = value2.electionResultDetails.totalPollingUnitWithOutResult;
                            tableCountryResultObj.totalValidVote = value2.electionResultDetails.totalValidVote;
                            tableCountryResultObj.totalCancelled = value2.electionResultDetails.totalCancelled;
                            tableCountryResultObj.totalElectionCandidateVote = value4.totalElectionCandidateVote;
                            tableCountryResultObj.totalElectionCandidateVotePercentage  = this.Percentage(value4.totalElectionCandidateVote, value2.electionResultDetails.totalValidVote);
                            tableCountryResultObj.totalValidVotePercentagePollingUnit = this.Percentage(
                                value2.electionResultDetails.totalValidVote,
                                value2.electionResultDetails.totalVote
                            );
                            tableCountryResultObj.totalCancelVotePercentagePollingUnit = this.Percentage(
                                value2.electionResultDetails.totalCancelled,
                                value2.electionResultDetails.totalVote
                            );

                            this.tableCountryResult.push(tableCountryResultObj);
                            this.tableCountryResult2.push(tableCountryResultObj);
                        });
                    });

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
                                this.tableStatePostResult2.push(tableStateResultObj);
                            });
                        });

                        value3.electionLocalCouncilDetails.forEach((value4, index3) => {
                            value4.politicalPartyDetail.forEach((value5, index3) => {
                                value5.electionCandidate.forEach((value6, index3) => {
                                    tablelocalcouncilResultObj = {};
                                    tablelocalcouncilResultObj.electionLocalCouncilName =
                                        value4.electionLocalCouncilName;
                                    tablelocalcouncilResultObj.totalElectionPollingUnitLink =
                                        value4.electionLocalCouncilBreakDown.totalElectionPollingUnitLink;
                                    tablelocalcouncilResultObj.partyName = value5.partyName;
                                    tablelocalcouncilResultObj.totalElectionCandidateVote =
                                        value6.totalElectionCandidateVote;
                                    tablelocalcouncilResultObj.rankingStatus = value6.rankingStatus;
                                    tablelocalcouncilResultObj.candidatePhoto = value6.candidatePhoto;
                                    tablelocalcouncilResultObj.candidateName = value6.candidateName;
                                    tablelocalcouncilResultObj.totalPollingUnitWithResult = value4.electionResultDetails.totalPollingUnitWithResult;
                                    tablelocalcouncilResultObj.totalPollingUnitWithOutResult = value4.electionResultDetails.totalPollingUnitWithOutResult;
                                    tablelocalcouncilResultObj.totalValidVote = value4.electionResultDetails.totalValidVote;
                                    tablelocalcouncilResultObj.totalCancelled = value4.electionResultDetails.totalCancelled;
                                    tablelocalcouncilResultObj.totalElectionCandidateVote = value6.totalElectionCandidateVote;
                                    tablelocalcouncilResultObj.totalElectionCandidateVotePercentage  = this.Percentage(value6.totalElectionCandidateVote, value4.electionResultDetails.totalValidVote);
                                    tablelocalcouncilResultObj.totalValidVotePercentagePollingUnit = this.Percentage(
                                        value4.electionResultDetails.totalValidVote,
                                        value4.electionResultDetails.totalVote
                                    );
                                    tablelocalcouncilResultObj.totalCancelVotePercentagePollingUnit = this.Percentage(
                                        value4.electionResultDetails.totalCancelled,
                                        value4.electionResultDetails.totalVote
                                    );

                                    this.tableLocalCouncilResult.push(tablelocalcouncilResultObj);
                                    this.tableLocalCouncilResult2.push(tablelocalcouncilResultObj);
                                });
                            });

                            value4.electionWardDetails.forEach((value5, index3) => {
                                value5.politicalPartyDetail.forEach((value6, index3) => {
                                    value6.electionCandidate.forEach((value7, index3) => {
                                        tablewardResultObj = {};
                                        tablewardResultObj.electionWardName = value5.electionWardName;
                                        if (value5.electionPollingUnitDetail) {
                                            tablewardResultObj.totalElectionPollingUnitLink =
                                                value5.electionPollingUnitDetail.length;
                                        } else {
                                            tablewardResultObj.totalElectionPollingUnitLink = 0;
                                        }
                                        tablelocalcouncilResultObj.partyName = value6.partyName;
                                        tablewardResultObj.totalElectionCandidateVote =
                                            value7.totalElectionCandidateVote;
                                        tablewardResultObj.rankingStatus = value7.rankingStatus;
                                        tablewardResultObj.candidatePhoto = value7.candidatePhoto;
                                        tablewardResultObj.candidateName = value7.candidateName;

                                        tablewardResultObj.totalPollingUnitWithResult = value5.electionResultDetails.totalPollingUnitWithResult;
                                        tablewardResultObj.totalPollingUnitWithOutResult = value5.electionResultDetails.totalPollingUnitWithOutResult;
                                        tablewardResultObj.totalValidVote = value5.electionResultDetails.totalValidVote;
                                        tablewardResultObj.totalCancelled = value5.electionResultDetails.totalCancelled;
                                        tablewardResultObj.totalElectionCandidateVote = value7.totalElectionCandidateVote;
                                        tablewardResultObj.totalElectionCandidateVotePercentage  = this.Percentage(value7.totalElectionCandidateVote, value5.electionResultDetails.totalValidVote);
                                        tablewardResultObj.totalValidVotePercentagePollingUnit = this.Percentage(
                                            value5.electionResultDetails.totalValidVote,
                                            value5.electionResultDetails.totalVote
                                        );
                                        tablewardResultObj.totalCancelVotePercentagePollingUnit = this.Percentage(
                                            value5.electionResultDetails.totalCancelled,
                                            value5.electionResultDetails.totalVote
                                        );

                                        this.tableWardResult.push(tablewardResultObj);
                                        this.tableWardResult2.push(tablewardResultObj);
                                    });
                                });
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
                                        this.tablePostResult2.push(tablePostResultObj);
                                    });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }
        let result = this.tablePostResult2.map((a) => a.electionPollingUnitName);
        if (result) {
            this.tablePostResult3 = result.filter(this.onlyUnique).map((item) => ({ value: item, label: item }));
        }
        result = this.tableStatePostResult2.map((a) => a.electionRegion);
        if (result) {
            this.tableStatePostResult3 = result.filter(this.onlyUnique).map((item) => ({ value: item, label: item }));
        }
        result = this.tableCountryResult2.map((a) => a.electionCountryName);
        if (result) {
            this.tableCountryResult3 = result.filter(this.onlyUnique).map((item) => ({ value: item, label: item }));
        }
        result = this.tableWardResult2.map((a) => a.electionWardName);
        if (result) {
            this.tableWardResult3 = result.filter(this.onlyUnique).map((item) => ({ value: item, label: item }));
        }
        result = this.tableLocalCouncilResult2.map((a) => a.electionLocalCouncilName);
        if (result) {
            this.tableLocalCouncilResult3 = result
                .filter(this.onlyUnique)
                .map((item) => ({ value: item, label: item }));
        }
    }

    onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    GetStateData() {
        this.dataElectionResult.forEach((value, index) => {
            value.electionCountryDetails.forEach((value2, index2) => {});
        });
    }
    GetStateChart() {
        this.chartValue = 'State';
        let labels = [];
        let totalStateVoteArr = [];
        let totalStateValidVoteArr = [];
        let totalStateCancelVoteArr = [];
        let totalValidVoteArr = 0;
        let totalCancelledVoteArr = 0;
        this.dataStateChartDD = [];
        this.dataElectionResult.forEach((value, index) => {
            value.electionCountryDetails.forEach((value2, index2) => {
                value2.electionStateDetails.forEach((value3, index3) => {
                    labels.push(value3.electionStateName);
                    this.dataStateChartDD.push({ id: value3.id, statename: value3.electionStateName });
                    totalStateVoteArr.push(value3.electionResultDetails.totalVote);
                    totalStateValidVoteArr.push(value3.electionResultDetails.totalValidVote);
                    totalStateCancelVoteArr.push(value3.electionResultDetails.totalCancelled);
                    totalValidVoteArr += value3.electionResultDetails.totalValidVote;
                    totalCancelledVoteArr += value3.electionResultDetails.totalCancelled;
                });
            });
        });
        this.dataVAPGender = {
            labels: labels,
            datasets: [
                {
                    data: totalStateVoteArr,
                    backgroundColor: this.RandomColor(),
                    hoverBackgroundColor: this.RandomColor(),
                },
            ],
        };
        this.optionsdataVAPGender = {
            title: {
                display: false,
                text: 'My Title',
                fontSize: 8,
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontSize: 8,
                    usePointStyle: true,
                },
            },
        };

        this.dataVAPTurnout = {
            labels: ['Valid Vote', 'Cancel Vote'],
            datasets: [
                {
                    data: [totalValidVoteArr, totalCancelledVoteArr],
                    backgroundColor: ['#9484f2', '#6751ed'],
                    hoverBackgroundColor: ['#9484f2', '#6751ed'],
                },
            ],
        };
        this.optionsdataVAPTurnout = {
            title: {
                display: false,
                text: 'My Title',
                fontSize: 8,
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontSize: 4,
                    usePointStyle: true,
                },
            },
        };
        this.GetVoteChart(labels, totalStateVoteArr, 'States',totalStateValidVoteArr,totalStateCancelVoteArr);
    }
    GetVoteChart(labels, totalStateVoteArr, value, totalValidVoteArr, totalCancelVoteArr) {
        // this.RandomColor()
        // fill: false,
        // borderColor: '#42A5F5',
        // tension: 0.4,
        this.data = {
            labels: labels,
            datasets: [
                {
                    label: 'Total Vote',
                    data: totalStateVoteArr,
                    backgroundColor: this.RandomColor()
                },
                {
                    label: 'Total Valid Vote',
                    data: totalValidVoteArr,
                    backgroundColor: this.RandomColor()
                },
                {
                    label: 'Total Cancelled Vote',
                    data: totalCancelVoteArr,
                    backgroundColor: this.RandomColor()
                },
            ],
        };

        // this.basicOptions = {
        //     indexAxis: 'y',
        //     plugins: {
        //         legend: {
        //             labels: {
        //                 color: '#495057'
        //             }
        //         }
        //     },
        //     scales: {
        //         x: {
        //             ticks: {
        //                 color: '#495057'
        //             },
        //             grid: {
        //                 color: '#ebedef'
        //             }
        //         },
        //         y: {
        //             ticks: {
        //                 color: '#495057'
        //             },
        //             grid: {
        //                 color: '#ebedef'
        //             }
        //         }
        //     }
        // };

        this.basicOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                },
                y: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                }
            }
        };


        // this.basicOptions = {
        //     plugins: {
        //         legend: {
        //             labels: {
        //                 color: '#495057',
        //             },
        //         },
        //     },
        //     scales: {
        //         xAxes: [
        //             {
        //                 gridLines: {
        //                     display: false,
        //                     color: '#FF6C88',
        //                 },
        //                 ticks: {
        //                     stepSize: 1,
        //                     fontColor: '#FF6C88', // this here
        //                 },
        //             },
        //         ],
        //         yAxes: [
        //             {
        //                 display: true,
        //                 gridLines: {
        //                     display: true,
        //                     color: '#FF6C88',
        //                 },
        //             },
        //         ],
        //         x: {
        //             ticks: {
        //                 color: '#495057',
        //             },
        //             grid: {
        //                 color: '#ebedef',
        //                 display: false,
        //             },
        //         },
        //         y: {
        //             ticks: {
        //                 color: '#495057',
        //             },
        //             grid: {
        //                 color: '#ebedef',
        //                 display: true,
        //             },
        //         },
        //     },
        // };
    }

    GetCountryChart() {
        this.chartValue = 'Country';
        let labels = [];
        let totalStateVoteArr = [];
        let totalStateValidVoteArr = [];
        let totalStateCancelVoteArr = [];
        let totalValidVoteArr = 0;
        let totalCancelledVoteArr = 0;
        this.dataStateChartDD = [];
        this.dataElectionResult.forEach((value, index) => {
            value.electionCountryDetails.forEach((value2, index2) => {
                labels.push(value2.electionCountryName);
                this.dataStateChartDD.push({ id: value2.id, statename: value2.electionCountryName });
                totalStateVoteArr.push(value2.electionResultDetails.totalVote);
                totalStateValidVoteArr.push(value2.electionResultDetails.totalValidVote);
                totalStateCancelVoteArr.push(value2.electionResultDetails.totalCancelled);
                totalValidVoteArr += value2.electionResultDetails.totalValidVote;
                totalCancelledVoteArr += value2.electionResultDetails.totalCancelled;
            });
        });

        this.dataVAPGender = {
            labels: labels,
            datasets: [
                {
                    data: totalStateVoteArr,
                    backgroundColor: this.RandomColor(),
                    hoverBackgroundColor: this.RandomColor(),
                },
            ],
        };
        this.optionsdataVAPGender = {
            title: {
                display: false,
                text: 'My Title',
                fontSize: 8,
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontSize: 8,
                    usePointStyle: true,
                },
            },
        };

        this.dataVAPTurnout = {
            labels: ['Valid Vote', 'Cancel Vote'],
            datasets: [
                {
                    data: [totalValidVoteArr, totalCancelledVoteArr],
                    backgroundColor: ['#9484f2', '#6751ed'],
                    hoverBackgroundColor: ['#9484f2', '#6751ed'],
                },
            ],
        };
        this.optionsdataVAPTurnout = {
            title: {
                display: false,
                text: 'My Title',
                fontSize: 8,
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontSize: 4,
                    usePointStyle: true,
                },
            },
        };
        this.GetVoteChart(labels, totalStateVoteArr, 'Countries', totalStateValidVoteArr, totalStateCancelVoteArr);
    }

    GetLocalCouncilChart() {
        this.chartValue = 'Local Council';
        let labels = [];
        let totalStateVoteArr = [];
        let totalStateValidVoteArr = [];
        let totalStateCancelVoteArr = [];
        let totalValidVoteArr = 0;
        let totalCancelledVoteArr = 0;
        this.dataStateChartDD = [];
        this.dataElectionResult.forEach((value, index) => {
            value.electionCountryDetails.forEach((value2, index2) => {
                value2.electionStateDetails.forEach((value3, index3) => {
                    value3.electionLocalCouncilDetails.forEach((value4, index3) => {
                        labels.push(value4.electionLocalCouncilName);
                        this.dataStateChartDD.push({ id: value4.id, statename: value4.electionLocalCouncilName });
                        totalStateVoteArr.push(value4.electionResultDetails.totalVote);
                        totalStateValidVoteArr.push(value4.electionResultDetails.totalValidVote);
                        totalStateCancelVoteArr.push(value4.electionResultDetails.totalCancelled);
                        totalValidVoteArr += value4.electionResultDetails.totalValidVote;
                        totalCancelledVoteArr += value4.electionResultDetails.totalCancelled;
                    });
                });
            });
        });

        this.dataVAPGender = {
            labels: labels,
            datasets: [
                {
                    data: totalStateVoteArr,
                    backgroundColor: this.RandomColor(),
                    hoverBackgroundColor: this.RandomColor(),
                },
            ],
        };
        this.optionsdataVAPGender = {
            title: {
                display: false,
                text: 'My Title',
                fontSize: 8,
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontSize: 8,
                    usePointStyle: true,
                },
            },
        };

        this.dataVAPTurnout = {
            labels: ['Valid Vote', 'Cancel Vote'],
            datasets: [
                {
                    data: [totalValidVoteArr, totalCancelledVoteArr],
                    backgroundColor: ['#9484f2', '#6751ed'],
                    hoverBackgroundColor: ['#9484f2', '#6751ed'],
                },
            ],
        };
        this.optionsdataVAPTurnout = {
            title: {
                display: false,
                text: 'My Title',
                fontSize: 8,
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontSize: 4,
                    usePointStyle: true,
                },
            },
        };
        this.GetVoteChart(labels, totalStateVoteArr, 'Local Councils', totalStateValidVoteArr, totalStateCancelVoteArr);
    }

    GetWardsChart() {
        this.chartValue = 'Ward';
        let labels = [];
        let totalStateVoteArr = [];
        let totalStateValidVoteArr = [];
        let totalStateCancelVoteArr = [];
        let totalValidVoteArr = 0;
        let totalCancelledVoteArr = 0;
        this.dataStateChartDD = [];
        this.dataElectionResult.forEach((value, index) => {
            value.electionCountryDetails.forEach((value2, index2) => {
                value2.electionStateDetails.forEach((value3, index3) => {
                    value3.electionLocalCouncilDetails.forEach((value4, index3) => {
                        value4.electionWardDetails.forEach((value5, index3) => {
                            labels.push(value5.electionWardName);
                            this.dataStateChartDD.push({ id: value5.id, statename: value5.electionWardName });
                            totalStateVoteArr.push(value5.electionResultDetails.totalVote);
                            totalStateValidVoteArr.push(value5.electionResultDetails.totalValidVote);
                            totalStateCancelVoteArr.push(value5.electionResultDetails.totalCancelled);
                            totalValidVoteArr += value5.electionResultDetails.totalValidVote;
                            totalCancelledVoteArr += value5.electionResultDetails.totalCancelled;
                        });
                    });
                });
            });
        });

        this.dataVAPGender = {
            labels: labels,
            datasets: [
                {
                    data: totalStateVoteArr,
                    backgroundColor: this.RandomColor(),
                    hoverBackgroundColor: this.RandomColor(),
                },
            ],
        };
        this.optionsdataVAPGender = {
            title: {
                display: false,
                text: 'My Title',
                fontSize: 8,
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontSize: 8,
                    usePointStyle: true,
                },
            },
        };

        this.dataVAPTurnout = {
            labels: ['Valid Vote', 'Cancel Vote'],
            datasets: [
                {
                    data: [totalValidVoteArr, totalCancelledVoteArr],
                    backgroundColor: ['#9484f2', '#6751ed'],
                    hoverBackgroundColor: ['#9484f2', '#6751ed'],
                },
            ],
        };
        this.optionsdataVAPTurnout = {
            title: {
                display: false,
                text: 'My Title',
                fontSize: 8,
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontSize: 4,
                    usePointStyle: true,
                },
            },
        };
        this.GetVoteChart(labels, totalStateVoteArr, 'Wards', totalStateValidVoteArr, totalStateCancelVoteArr);
    }

    GetPollingUnitChart() {
        this.chartValue = 'Polling Unit';
        let labels = [];
        let totalStateVoteArr = [];
        let totalStateValidVoteArr = [];
        let totalStateCancelVoteArr = [];
        let totalValidVoteArr = 0;
        let totalCancelledVoteArr = 0;
        this.dataStateChartDD = [];
        this.dataElectionResult.forEach((value, index) => {
            value.electionCountryDetails.forEach((value2, index2) => {
                value2.electionStateDetails.forEach((value3, index3) => {
                    value3.electionLocalCouncilDetails.forEach((value4, index3) => {
                        value4.electionWardDetails.forEach((value5, index3) => {
                            value5.electionPollingUnitDetail.forEach((value6, index3) => {
                                labels.push(value6.electionPollingUnitName);
                                this.dataStateChartDD.push({
                                    id: value6.id,
                                    statename: value6.electionPollingUnitName,
                                });
                                totalStateVoteArr.push(value6.electionResultDetails.totalVote);
                                totalStateValidVoteArr.push(value6.electionResultDetails.totalValidVote);
                                totalStateCancelVoteArr.push(value6.electionResultDetails.totalCancelled);
                                totalValidVoteArr += value6.electionResultDetails.totalValidVote;
                                totalCancelledVoteArr += value6.electionResultDetails.totalCancelled;
                            });
                        });
                    });
                });
            });
        });
        this.dataVAPGender = {
            labels: labels,
            datasets: [
                {
                    data: totalStateVoteArr,
                    backgroundColor: this.RandomColor(),
                    hoverBackgroundColor: this.RandomColor(),
                },
            ],
        };
        this.optionsdataVAPGender = {
            title: {
                display: false,
                text: 'My Title',
                fontSize: 8,
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontSize: 8,
                    usePointStyle: true,
                },
            },
        };

        this.dataVAPTurnout = {
            labels: ['Valid Vote', 'Cancel Vote'],
            datasets: [
                {
                    data: [totalValidVoteArr, totalCancelledVoteArr],
                    backgroundColor: ['#9484f2', '#6751ed'],
                    hoverBackgroundColor: ['#9484f2', '#6751ed'],
                },
            ],
        };
        this.optionsdataVAPTurnout = {
            title: {
                display: false,
                text: 'My Title',
                fontSize: 8,
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontSize: 4,
                    usePointStyle: true,
                },
            },
        };
        this.GetVoteChart(labels, totalStateVoteArr, 'Polling Units', totalStateValidVoteArr, totalStateCancelVoteArr);
    }

    GetStateVOte(id) {
        if (id === 'Pollingunit') {
            if (this.Table) {
                this.pollingunit = true;
                this.state = false;
                this.country = false;
                this.localcouncil = false;
                this.ward = false;
            } else {
                this.GetPollingUnitChart();
            }
        } else if (id === 'country') {
            if (this.Table) {
                this.pollingunit = false;
                this.state = false;
                this.country = true;
                this.localcouncil = false;
                this.ward = false;
            } else {
                this.GetCountryChart();
            }
        } else if (id === 'state') {
            if (this.Table) {
                this.pollingunit = false;
                this.state = true;
                this.country = false;
                this.localcouncil = false;
                this.ward = false;
            } else {
                this.GetStateChart();
            }
        } else if (id === 'localcouncil') {
            if (this.Table) {
                this.pollingunit = false;
                this.state = false;
                this.country = false;
                this.localcouncil = true;
                this.ward = false;
            } else {
                this.GetLocalCouncilChart();
            }
        } else if (id === 'ward') {
            if (this.Table) {
                this.pollingunit = false;
                this.state = false;
                this.country = false;
                this.localcouncil = false;
                this.ward = true;
            } else {
                this.GetWardsChart();
            }
        }
    }
    RandomColor() {
        return '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    }

    TableToAnalytics() {
        this.Analytics = true;
        this.Table = false;
        this.pollingunit = false;
        this.state = false;
        this.country = false;
        this.localcouncil = false;
        this.ward = false;
    }

    AnalyticsToTable() {
        this.spinnerService.show();
        this.GetTableChartData();
        this.Analytics = false;
        this.Table = true;
        this.pollingunit = false;
        this.state = true;
        this.country = false;
        this.localcouncil = false;
        this.ward = false;
        this.spinnerService.hide();
    }
    Percentage(partialValue, totalValue) {
        if (totalValue && partialValue) {
            return Math.round((100 * partialValue) / totalValue);
        } else {
            return 0;
        }
    }
    SelectTerrority() {}

    searchInTerritoryTable(event: any) {
        let val = event.target.value;
        if (this.Table && val && val.length > 2) {
            if (this.pollingunit) {
                this.tablePostResult = this.filterPollingUnitByValue(this.tablePostResult2, val);
            } else if (this.state) {
                this.tableStatePostResult = this.filterStateByValue(this.tableStatePostResult2, val);
            } else if (this.country) {
                this.tableCountryResult = this.filterCountryByValue(this.tableCountryResult2, val);
            } else if (this.localcouncil) {
                this.tableLocalCouncilResult = this.filterLocalCouncilByValue(this.tableLocalCouncilResult2, val);
            } else if (this.ward) {
                this.tableWardResult = this.filterWardByValue(this.tableWardResult2, val);
            }
        } else {
            if (this.pollingunit) {
                this.tablePostResult = this.tablePostResult2;
            } else if (this.state) {
                this.tableStatePostResult = this.tableStatePostResult2;
            } else if (this.country) {
                this.tableCountryResult = this.tableCountryResult2;
            } else if (this.localcouncil) {
                this.tableLocalCouncilResult = this.tableLocalCouncilResult2;
            } else if (this.ward) {
                this.tableWardResult = this.tableWardResult2;
            }
        }
    }

    filterPollingUnitByValue(array, value) {
        return array.filter(
            (data) => JSON.stringify(data.electionPollingUnitName).toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
    }
    filterStateByValue(array, value) {
        return array.filter(
            (data) => JSON.stringify(data.electionRegion).toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
    }
    filterCountryByValue(array, value) {
        return array.filter(
            (data) => JSON.stringify(data.electionCountryName).toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
    }
    filterWardByValue(array, value) {
        return array.filter(
            (data) => JSON.stringify(data.electionWardName).toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
    }
    filterLocalCouncilByValue(array, value) {
        return array.filter(
            (data) => JSON.stringify(data.electionLocalCouncilName).toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
    }

    SortTerritoryTable(event, id) {
        const val = event?.value?.value;
            if (id === 'Pollingunit') {
                if (val) {
                    this.tablePostResult = this.filterPollingUnitByValue(this.tablePostResult2, val);
                } else {
                    this.tablePostResult = this.tablePostResult2;
                }
            } else if (id === 'country') {
                if (val) {
                this.tableCountryResult = this.filterCountryByValue(this.tableCountryResult2, val);
                } else {
                    this.tableCountryResult = this.tableCountryResult2;
                }
            } else if (id === 'state') {
                if (val) {
                this.tableStatePostResult = this.filterStateByValue(this.tableStatePostResult2, val);
                } else {
                    this.tableStatePostResult = this.tableStatePostResult2;
                }
            } else if (id === 'localcouncil') {
                if (val) {
                this.tableLocalCouncilResult = this.filterLocalCouncilByValue(this.tableLocalCouncilResult2, val);
                } else {
                    this.tableLocalCouncilResult = this.tableLocalCouncilResult2;
                }
            } else if (id === 'ward') {
                if (val) {
                this.tableWardResult = this.filterWardByValue(this.tableWardResult2, val);
                } else {
                    this.tableWardResult = this.tableWardResult2;
                }
            }
    }

    RefreshTable() {
        this.GetTableChartData();
        this.tablePostResult = this.tablePostResult2;
        this.tableCountryResult = this.tableCountryResult2;
        this.tableStatePostResult = this.tableStatePostResult2;
        this.tableLocalCouncilResult = this.tableLocalCouncilResult2;
        this.tableWardResult = this.tableWardResult2;
    }
}
