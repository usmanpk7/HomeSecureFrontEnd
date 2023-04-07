import { Component, OnInit } from '@angular/core';
import { PoliticalPartyDto, PoliticalPartyServiceProxy } from '@shared/service-proxies/service-proxies';
import { SharingServiceElection } from '../../SharingServiceElection';

@Component({
    selector: 'app-political-party-grading',
    templateUrl: './political-party-grading.component.html',
    styleUrls: ['./political-party-grading.component.css'],
})
export class PoliticalPartyGradingComponent implements OnInit {
    basicData: any;
    horizontalOptions: any;
    partyGradingData: any;
    partyGradingOptions: any;
    electionPartiesResult: PoliticalPartyDto[];
    totalParties: number;
    dataElectionResult: any = [];
    statesName: any = [];
    datasetsPartyGrading = [];
    constructor(
        private _politicalPartyServiceProxy: PoliticalPartyServiceProxy,
        private sharingService: SharingServiceElection
    ) {}

    ngOnInit(): void {
        this.statesName = [];
        this.datasetsPartyGrading = [];
        this.electionPartiesResult = [];
        //this.GetAllElectionPositions();
    }

    GetAllElectionPositions() {
        this._politicalPartyServiceProxy
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
                undefined
            )
            .subscribe((data) => {
                this.sharingService.getElectionResultData();
                this.electionPartiesResult = data.items;
                this.totalParties = data.totalCount;
                this.DrawChart();
            });
    }

    DrawChartCopy() {
        this.partyGradingData = {
            labels: ['Other', 'Abuja', 'Kano', 'Lagos'],
            datasets: [
                {
                    label: 'Labour',
                    backgroundColor: '#9484f2',
                    data: [1900, 1254, 400, 1100],
                },
                {
                    label: 'Democratic',
                    backgroundColor: '#4a2fe9',
                    data: [1653, 1245, 700, 1122],
                },
                {
                    label: 'Librel',
                    backgroundColor: '#7471ff',
                    data: [1754, 1340, 900, 1432],
                },
            ],
        };
        this.partyGradingOptions = {
            indexAxis: 'y',
            legend: {
                position: 'bottom',
                labels: {
                    fontSize: 8,
                    usePointStyle: true,
                },
            },
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display: false,
                        },
                    },
                ],
                yAxes: [
                    {
                        display: true,
                        gridLines: {
                            display: false,
                            color: '#FF6C88',
                        },
                    },
                ],
                x: {
                    ticks: {
                        color: '#495057',
                    },
                    grid: {
                        color: '#ebedef',
                    },
                },
                y: {
                    ticks: {
                        color: '#495057',
                    },
                    grid: {
                        color: '#ebedef',
                    },
                },
            },
        };
        this.basicData = {
            labels: ['Public', 'Labour', 'Democratic', 'Librel'],
            datasets: [
                {
                    label: '',
                    backgroundColor: '#5880c8',
                    data: [, 2342, 10, 45],
                },
            ],
        };
        this.horizontalOptions = {
            indexAxis: 'y',
            legend: {
                position: 'bottom',
                display: false,
                labels: {
                    fontSize: 8,
                    usePointStyle: true,
                },
            },
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display: false,
                        },
                    },
                ],
                yAxes: [
                    {
                        display: true,
                        gridLines: {
                            display: false,
                            color: '#FF6C88',
                        },
                    },
                ],
                x: {
                    ticks: {
                        color: '#495057',
                    },
                    grid: {
                        color: '#ebedef',
                    },
                },
                y: {
                    ticks: {
                        color: '#495057',
                    },
                    grid: {
                        color: '#ebedef',
                    },
                },
            },
        };
    }

    DrawPartyChart() {
        let labels = [];
        const data: number[] = [];
        let totalStateVoteArr = [];
        let totalValidVoteArr = 0;
        let totalCancelledVoteArr = 0;
        this.dataElectionResult.forEach((value, index) => {
            value.electionCountryDetails.forEach((value2, index2) => {
                value2.politicalPartyDetail.forEach((value3, index3) => {
                    labels.push(value3.partyName);
                    this.voteInEachProvince(value3.partyName, value.electionCountryDetails);
                    const sum = value3.electionCandidate.reduce(
                        (sum, current) => sum + current.totalElectionCandidateVote, 0
                    );
                    data.push(sum);
                });
            });
        });

        this.partyGradingData = {
            labels: this.statesName,
            datasets: this.datasetsPartyGrading,
        };
        this.partyGradingOptions = {
            indexAxis: 'y',
            legend: {
                position: 'bottom',
                labels: {
                    fontSize: 8,
                    usePointStyle: true,
                },
            },
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display: false,
                        },
                    },
                ],
                yAxes: [
                    {
                        display: true,
                        gridLines: {
                            display: false,
                            color: '#FF6C88',
                        },
                    },
                ],
                x: {
                    ticks: {
                        color: '#495057',
                    },
                    grid: {
                        color: '#ebedef',
                    },
                },
                y: {
                    ticks: {
                        color: '#495057',
                    },
                    grid: {
                        color: '#ebedef',
                    },
                },
            },
        };
        this.basicData = {
            labels: labels,
            datasets: [
                {
                    label: '',
                    backgroundColor: '#5880c8',
                    data: data,
                },
            ],
        };
        this.horizontalOptions = {
            indexAxis: 'y',
            legend: {
                position: 'bottom',
                display: false,
                labels: {
                    fontSize: 8,
                    usePointStyle: true,
                },
            },
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display: false,
                        },
                    },
                ],
                yAxes: [
                    {
                        display: true,
                        gridLines: {
                            display: false,
                            color: '#FF6C88',
                        },
                    },
                ],
                x: {
                    ticks: {
                        color: '#495057',
                    },
                    grid: {
                        color: '#ebedef',
                    },
                },
                y: {
                    ticks: {
                        color: '#495057',
                    },
                    grid: {
                        color: '#ebedef',
                    },
                },
            },
        };
    }

    DrawChart() {
        const labels = [];
        const datasetsPartyGrading = [];
        const data: number[] = [];
        for (const obj of this.electionPartiesResult) {
            let datasetPartyGradingObj: any = {};
            let totalVoteParty = 0;
            labels.push(obj.partyName);
            datasetPartyGradingObj.label = obj.partyName;
            datasetPartyGradingObj.backgroundColor = this.RandomColor();
            datasetsPartyGrading.push(datasetPartyGradingObj);
            data.push(totalVoteParty);
        }
        this.partyGradingData = {
            labels: labels,
            datasets: datasetsPartyGrading,
        };
        this.partyGradingOptions = {
            indexAxis: 'y',
            legend: {
                position: 'bottom',
                labels: {
                    fontSize: 8,
                    usePointStyle: true,
                },
            },
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display: false,
                        },
                    },
                ],
                yAxes: [
                    {
                        display: true,
                        gridLines: {
                            display: false,
                            color: '#FF6C88',
                        },
                    },
                ],
                x: {
                    ticks: {
                        color: '#495057',
                    },
                    grid: {
                        color: '#ebedef',
                    },
                },
                y: {
                    ticks: {
                        color: '#495057',
                    },
                    grid: {
                        color: '#ebedef',
                    },
                },
            },
        };

        this.basicData = {
            labels: labels,
            datasets: [
                {
                    label: '',
                    backgroundColor: '#5880c8',
                    data: data,
                },
            ],
        };

        this.horizontalOptions = {
            indexAxis: 'y',
            legend: {
                position: 'bottom',
                display: false,
                labels: {
                    fontSize: 8,
                    usePointStyle: true,
                },
            },
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display: false,
                        },
                    },
                ],
                yAxes: [
                    {
                        display: true,
                        gridLines: {
                            display: false,
                            color: '#FF6C88',
                        },
                    },
                ],
                x: {
                    ticks: {
                        color: '#495057',
                    },
                    grid: {
                        color: '#ebedef',
                    },
                },
                y: {
                    ticks: {
                        color: '#495057',
                    },
                    grid: {
                        color: '#ebedef',
                    },
                },
            },
        };
    }

    voteInEachProvince(partyName: any, countryArr: any)  {
        countryArr.forEach((value, index) => {
            let datasetPartyGradingObj: any = {};
            datasetPartyGradingObj.data = [];
            datasetPartyGradingObj.label = partyName;
            datasetPartyGradingObj.backgroundColor = this.RandomColor();
            value.electionStateDetails.forEach((value2, index2) => {
                if (!this.statesName.includes(value2.electionStateName)) {
                    this.statesName.push(value2.electionStateName);
                }
                let isMatch = 0;
                value2.politicalPartyDetail.forEach((value3, index3) => {
                    if (value3.partyName === partyName) {
                        isMatch = 1;
                        const totalvote = value3.electionCandidate.reduce(
                            (sum, current) => sum + current.totalElectionCandidateVote,
                            0
                        );
                        datasetPartyGradingObj.data.push(totalvote);
                    }
                });
                if (isMatch === 0) {
                    datasetPartyGradingObj.data.push(0);
                }
            });
            this.datasetsPartyGrading.push(datasetPartyGradingObj);
        });
    }

    RandomColor() {
        return '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    }
    getElectionResultData() {
        this.dataElectionResult = this.sharingService.getElectionResultData();
        this.DrawPartyChart();
    }
}
