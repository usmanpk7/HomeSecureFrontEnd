// import { Injectable, Injector, NgZone } from '@angular/core';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { HubConnection } from '@microsoft/signalr';
// import { BehaviorSubject, Subject } from 'rxjs';
// import { AssetMonitoringModel } from './asset-monitoring.model';
// // import { ActivityStatusType } from '@shared/service-proxies/service-proxies';
// import { DateTime } from 'luxon';

// @Injectable()
// export class AssetMonitoringSignalrService extends AppComponentBase {

//     itemPositionStatusData = new Array<AssetMonitoringModel>();
//     itemPositionStatusUpdates = new Subject<Array<AssetMonitoringModel>>();

//     constructor(
//         injector: Injector,
//         public _zone: NgZone
//     ) {
//         super(injector);
//     }

//     assetHub: HubConnection;
//     isAssetHubConnected = true;

//     configureConnection(connection): void {
//         // Set the common hub
//         this.assetHub = connection;

//         // Reconnect loop
//         let reconnectTime = 5000;
//         let tries = 1;
//         let maxTries = 8;
//         function start() {
//             return new Promise(function (resolve, reject) {
//                 if (tries > maxTries) {
//                     reject();
//                 } else {
//                     connection.start()
//                         .then(resolve)
//                         .then(() => {
//                             reconnectTime = 5000;
//                             tries = 1;
//                         })
//                         .catch(() => {
//                             setTimeout(() => {
//                                 start().then(resolve);
//                             }, reconnectTime);
//                             reconnectTime *= 2;
//                             tries += 1;
//                         });
//                 }
//             });
//         }

//         // Reconnect if hub disconnects
//         connection.onclose(e => {
//             this.isAssetHubConnected = false;

//             if (e) {
//                 abp.log.debug('asset Hub connection closed with error: ' + e);
//             } else {
//                 abp.log.debug('asset Hub disconnected');
//             }

//             start().then(() => {
//                 this.isAssetHubConnected = true;
//             });
//         });

//         // Register to get notifications
//         this.registerAssetEvents(connection);
//     }

//     registerAssetEvents(connection): void {
//         connection.on('SendItemPositionStatus', message => {
//             const temp = this.itemPositionStatusData.find(x => x.varityItemName === message.varityItemName);
//             if (temp === undefined) {
//                 message.activityStatusType = ActivityStatusType[message.activityStatusType];
//                 this.itemPositionStatusData.push(message);
//                 this.itemPositionStatusUpdates.next(this.itemPositionStatusData);
//             } else {
//                 this.itemPositionStatusData.splice(this.itemPositionStatusData.findIndex(item => item.varityItemName === message.varityItemName), 1);
//                 this.itemPositionStatusData.push(temp);
//                 this.itemPositionStatusUpdates.next(this.itemPositionStatusData);
//             }

//         });
//     }

//     init(): void {
//         this._zone.runOutsideAngular(() => {
//             abp.signalr.connect();
//             abp.signalr.startConnection(abp.appPath + 'signalr-item-position-status', connection => {
//                 this.configureConnection(connection);
//             }).then(() => {
//                 this.isAssetHubConnected = true;
//             });
//         });
//     }
// }
