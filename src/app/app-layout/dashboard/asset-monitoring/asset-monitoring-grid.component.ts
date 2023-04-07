// import { Component, Injector, Input, OnInit } from '@angular/core';
// import { SharedGridComponent } from '@app/shared/custom/shared-grid/shared-grid.component';
// import { SignalRHelper } from '@shared/helpers/SignalRHelper';
// import { AssetMonitoringModel } from './asset-monitoring.model';
// import { AssetMonitoringSignalrService } from './asset-monitoring-signalr.service';

// @Component({
//     selector: 'app-asset-monitoring-grid',
//     templateUrl: './asset-monitoring-grid.component.html',
//     styleUrls: ['./asset-monitoring-grid.component.css']
// })
// export class AssetMonitoringGridComponent extends SharedGridComponent<AssetMonitoringModel> implements OnInit {
//     first = 0;
//     row = 1;
//     skipCount = 0;
//     maxResultCount = 1;
//     constructor(
//         private _assetMonitoringSignalrService: AssetMonitoringSignalrService,
//         injector: Injector) {
//         super(injector);
//     }
//     ngOnInit(): void {
//         if (this.appSession.application) {
//             SignalRHelper.initSignalR(() => { this._assetMonitoringSignalrService.init(); });
//         }
//     }
//     paginate(event) {
//          this.first = event.first ;
//         // this.maxResultCount = (this.first + 1) * this.row;//10
//         // this.skipCount = this.first * this.row;
//         // console.log(this.first);
//         // console.log(this.row);
//     }

// }
