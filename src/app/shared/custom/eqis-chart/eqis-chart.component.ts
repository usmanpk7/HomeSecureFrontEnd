import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
// import { ItemServiceProxy } from '@shared/service-proxies/service-proxies';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartOptions } from 'chart.js';

@Component({
    selector: 'eqis-chart',
    templateUrl: './eqis-chart.component.html',
    styleUrls: ['./eqis-chart.component.less']
})
export class EqisChartComponent extends AppComponentBase implements OnInit {
    dataset: any[]=[];
     data: any;
     Loading: boolean=false;
    chartOptions: ChartOptions;
    ChartPlugins = [];
    constructor(injector: Injector,
        // private _ItemServiceProxy:ItemServiceProxy

        ) {
        super(injector);
    }
    ngOnInit(): void {

        // this.GetDunutData();

    }

    // GetDunutData()
    // {
    //     this.Loading = true;
    //     this._ItemServiceProxy.getItemPositionAnalytics(this.appSession.tenantId,undefined)
    //     .subscribe((data:any)=>{

    //        var result=data;
    //      this.dataset.push(result.totalMissingItem,result.totalItemsInStock, result.totalItemsIssued,result.totalItemsDisplace,result.totalItemStatusUpdate);
    //    this.data = {
    //         labels:['Missing', 'Dispacked', 'Return', 'Issued', 'In-Stock'],
    //         datasets: [
    //             {

    //                 data:this.dataset,
    //                 backgroundColor: [
    //                     "#A3A3A3",
    //                     "#FBBD00",
    //                     "#5A99D3",
    //                     "#E97C30",
    //                     "#4270C1"
    //                 ],
    //                 hoverBackgroundColor: [
    //                     "#8E8E8E",
    //                     "#EDB202",
    //                     "#5389BC",
    //                     "#D8742D",
    //                     "#355FA8"
    //                 ],
    //                 barPercentage:2

    //             }
    //         ]
    //     };
    //     this.chartOptions= {
    //         responsive: false,
    //         maintainAspectRatio: false,
    //         plugins: {
    //             labels: {
    //                 render: 'percentage',
    //                 precision: 2,
    //                 fontColor: ['green', 'white', 'red']
    //             }
    //         },
    //         legend: {
    //             position: 'bottom',
    //             labels: {
    //                 fontColor: 'white',

    //                 filter:function(chart,data){
    //                     let index=data.labels.indexOf(chart.text);
    //                     if(index!=-1){
    //                         let value=data.datasets[0].data[index];
    //                         chart.text=chart.text+"                     "+value +"%";
    //                     }

    //                     return chart;
    //                 } ,
    //                 boxWidth:10
    //               },
    //               align:"center"

    //         }
    //       }
    //     //    result.totalMissingItem=40;
    //     //    result.totalItemsInStock=30;
    //     //    result.totalItemsIssued=50;
    //     //    result.totalItemsDisplace=60;
    //     //    result.totalItemStatusUpdate=15;

    //     //   this.dataset.push(result.totalMissingItem,result.totalItemsInStock, result.totalItemsIssued,result.totalItemsDisplace,result.totalItemsDisplace)
    //     //    this.doughnutChartData;
    //     //    this.doughnutChartData.push(result.totalMissingItem,result.totalItemsInStock, result.totalItemsIssued,result.totalItemsDisplace,result.totalItemStatusUpdate);
    //     this.Loading  = false;
    //     })
    // }
}

