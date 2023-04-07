import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-profile-and-warehouse-chart',
    templateUrl: './profile-and-warehouse-chart.component.html',
    styleUrls: ['./profile-and-warehouse-chart.component.css']
})
export class ProfileAndWarehouseComponent implements OnInit, AfterViewInit {

    basicData: any;

    multiAxisData: any;

    multiAxisOptions: any;

    lineStylesData: any;

    basicOptions: any;

    subscription: Subscription;

    constructor() { }

    ngOnInit() {
        this.lineStylesData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Entity 1',
                    data: [15, 55, 54, 37, 25, 34, 43, 14, 21, 32, 37, 25, 34, 43, 14 ],
                    fill: true,
                    tension: .4,
                    borderColor: 'rgba(183, 166, 67, 0.85)',
                    backgroundColor: 'rgba(183, 166, 67, 0.25)',
                },
                {
                    label: 'Entity 2',
                    data: [12, 51, 62, 33, 21, 62, 45, 21, 52, 45, 21, 45, 21, 52, 45, 21],
                    fill: true,
                    borderColor: 'rgba(183, 166, 67, 0.85)',
                    tension: .4,
                    backgroundColor: 'rgba(183, 166, 67, 0.45)'
                },
                {
                    label: 'Entity 3',
                    data: [25, 61, 14, 47, 16, 25, 10, 45, 21, 62, 12, 31, 31, 42, 47, 16, 25, 10, 45, 21, 62,],
                    fill: true,
                    tension: .4,
                    borderColor: 'rgb(98, 146, 97)',
                    backgroundColor: 'rgb(98, 146, 97, 0.20)'
                },
            ]
        };
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
        this.basicOptions = {
            legend: {
                position: 'bottom',
                labels: {
                    fontColor: 'white',
                    usePointStyle: true
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false,
                    },
                    scaleLabel: {
                        display: false,
                    }
                }],
                yAxes: [{
                    display: true,
                    gridLines: {
                        display: true,
                        color: 'white'
                    },
                    scaleLabel: {
                        display: false,
                    }
                }]
            }
        };
    });
}
}
