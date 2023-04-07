import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-cummulative-chat',
    templateUrl: './cummulative-chat.component.html',
    styleUrls: ['./cummulative-chat.component.css']
})
export class CummulativeChatComponent implements OnInit, AfterViewInit {

    basicData: any;

    multiAxisData: any;

    multiAxisOptions: any;

    lineStylesData: any;

    basicOptions: any;

    subscription: Subscription;

    constructor() {
     }
    ngOnInit() {
        this.lineStylesData = {
            labels: [],
            datasets: [
                {
                    label: 'Entity 1',
                    data: [0, 30 ],
                    fill: true,
                    tension: .4,
                    backgroundColor: '#9EA253'
                },
                {
                    label: 'Entity 2',
                    data: [0, 50],
                    fill: true,
                    tension: .4,
                    backgroundColor: '#629261'
                },
                {
                    label: 'Entity 3',
                    data: [0, 70],
                    fill: true,
                    tension: .4,
                    backgroundColor: '#2E5930',
                },
            ],
        };
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
        this.basicOptions = {
            legend: {
                position: 'right',
                labels: {
                    fontColor: 'white',
                    usePointStyle: true
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: false,
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: false,
                    }
                }]
            }
        };
    });
    }
}
