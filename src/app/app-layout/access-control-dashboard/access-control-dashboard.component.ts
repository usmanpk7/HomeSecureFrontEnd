// import { MapsAPILoader } from '@agm/core';
// import { Component, Injector, NgZone, OnInit, ViewChild } from '@angular/core';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import {
//     AntennaWarehouseServiceProxy,
//     ItemCategoriesDto,
//     StoreHouseLockActivityDto,
//     StoreHouseLockActivityServiceProxy,
//     StoreHouseLockStatus,
//     WareHouseDto,
//     WareHouseServiceProxy,
// } from '@shared/service-proxies/service-proxies';
// import { forkJoin } from 'rxjs';
// import { AllListComponent } from './all-list/all-list.component';

// @Component({
//     selector: 'app-access-control-dashboard',
//     templateUrl: './access-control-dashboard.component.html',
//     styleUrls: ['./access-control-dashboard.component.css'],
// })
// export class AccessControlDashboardComponent extends AppComponentBase implements OnInit {
//     @ViewChild('search') searchData: AllListComponent;
//     storehouseProcessAnalyticsResult: any;
//     lat = 31.509348;
//     lng = 74.350383;
//     latitude: number;
//     longitude: number;
//     zoom: number;
//     private geoCoder;
//     tab: any;
//     map: google.maps.Map;
//     coordinates: Array<any>;
//     flightPlanCoordinates: Array<any>;
//     organizationUnitId: any;
//     mapDataList: Array<any>;
//     storehouselockstatus: StoreHouseLockStatus;
//     constructor(
//         injector: Injector,
//         private ngZone: NgZone,
//         private mapsAPILoader: MapsAPILoader,
//         private antenawarehouseService: AntennaWarehouseServiceProxy,
//         private storehouseLockActivityServiceProxy: StoreHouseLockActivityServiceProxy,
//         private warehouseServiceProxy: WareHouseServiceProxy
//     ) {
//         super(injector);
//         this.storehouseProcessAnalyticsResult = {
//             totalStorehouseLock: 0,
//             totalStorehouseUnLock: 0,
//             totalStorehouseWaitingApproval: 0,
//             totalStorehouseOpenLoack: 0,
//             totalStorehouseClosedLock: 0,
//         };
//         this.tab = 1;
//         this.mapDataList = [];
//     }
//     onMapReady(map: google.maps.Map) {
//         this.map = map;
//     }
//     drawPolygon() {
//         this.flightPlanCoordinates = [
//             { lat: 31.509348, lng: 74.350383 },
//             { lat: 31.508351, lng: 74.350099 },
//             { lat: 31.508557, lng: 74.348838 },
//             { lat: 31.509184, lng: 74.348355 },
//         ];
//         const polygon = new google.maps.Polygon({
//             paths: this.flightPlanCoordinates,
//             geodesic: true,
//             strokeColor: '#5E81F4',
//             strokeOpacity: 0.8,
//             strokeWeight: 2,
//             fillColor: '#5E81F4',
//             strokePosition: 0,
//             fillOpacity: 0.35,
//         });
//         polygon.setMap(this.map);
//     }
//     ngOnInit(): void {
//         this.mapsAPILoader.load().then(() => {
//             this.setCurrentLocation();
//             this.geoCoder = new google.maps.Geocoder();
//             this.zoom = 1;
//         });
//         this.getAllAntenawarehouse();

//         let userorganizationlist = JSON.parse(localStorage.getItem('OrganizationUnit'));
//         let userOrganization = userorganizationlist.shift();
//         if (userOrganization) {
//             this.organizationUnitId = userOrganization.id;
//         }
//         this.gettorehouseProcessAnalytics();
//         this.getstorehouseRecentActivity();
//     }

//     searchTerm($event){
//         this.searchData.table.filterGlobal($event, 'contains')
//     }
//     getstorehouseRecentActivity() {
//         let storehouseactivityProxy = this.storehouseLockActivityServiceProxy.getAll(
//             this.appSession.tenantId,
//             undefined,
//             this.commonUtility.organizationId,
//             undefined,
//             undefined,
//             undefined,
//             undefined,
//             0,
//             1000
//         );
//         let WarehouseProxy = this.warehouseServiceProxy.getWareHouseAnalytics(
//             this.appSession.tenantId,
//             this.commonUtility.organizationId,
//             undefined
//         );
//         forkJoin([storehouseactivityProxy, WarehouseProxy]).subscribe((data: Array<any>) => {
//             if (data.length > 0) {
//                 let activity: Array<StoreHouseLockActivityDto> = data[0].items;
//                 let antenna: Array<WareHouseDto> = data[1].warehouseDetails;
//                 let unique = {};
//                 let todayDate = new Date();
//                 if (antenna.length > 0) {
//                     antenna.forEach((x) => {
//                         if (
//                             !this.mapDataList.some((y) => y.antennaWarehouseId === x.id) &&
//                             x.isStoreHouse === true
//                         ) {
//                             this.mapDataList.push({
//                                 antennaWarehouseId: x.id,
//                                 warehouse: x.name,
//                                 // antenna
//                                 //     .filter((y) => y.antennaWarehouse.some((val) => val.id === x.id))
//                                 //     .map((items) => items.name)
//                                 //     .shift(),
//                                 // antennaZone:
//                                 // antenna
//                                 //     .filter((y) => y.antennaWarehouse.some((val) => val.id === x.id))
//                                 //     .map((items) => items.antennaWarehouse.shift().antennaZone)
//                                 //     .shift(),
//                                 antennaZone: x.antennaWarehouse.shift().antennaZone,
//                                 status: x.isStoreHouse,
//                                  openUser: this.getUserById(activity.filter(x => x.antennaWarehouseId).map(x => x.lockOpenedUserId).shift()),
//                                 lat: x.latitude === 'string' ? this.lat : x.latitude,
//                                 lng: x.longtitude === 'string' ? this.lng : x.longtitude,
//                                 address: x.address,
//                             });
//                             console.log(this.mapDataList);
//                         }
//                     });
//                 }
//             }
//         });
//     }
//     getUserById(Id) {
//         let userlist = JSON.parse(localStorage.getItem('users'));
//         let username = '-----';
//         if (userlist.length > 0) {
//             username = userlist
//                 .filter((x) => x.Id === Id)
//                 .map((x) => x.username)
//                 .shift();
//         }
//         return username;
//     }
//     gettorehouseProcessAnalytics() {
//         this.storehouseLockActivityServiceProxy
//             .getStoreHouseAccessProcessAnalytics(this.appSession.tenantId, 5, undefined)
//             .subscribe((data) => {
//                 console.log(data);
//                 if (data) {
//                     this.storehouseProcessAnalyticsResult = {
//                         totalStorehouseLock: data.totalStorehouseLock,
//                         totalStorehouseUnLock: data.totalStorehouseUnLock,
//                         totalStorehouseWaitingApproval: data.totalStorehouseWaitingApproval,
//                         totalStorehouseOpenLoack: 0,
//                         totalStorehouseClosedLock: 0,
//                     };
//                     this.storehouselockstatus = data.storeHouseLockStatus;
//                 }
//             });
//     }
//     private setCurrentLocation() {
//         if ('geolocation' in navigator) {
//             navigator.geolocation.getCurrentPosition((position) => {
//                 this.latitude = position.coords.latitude;
//                 this.longitude = position.coords.longitude;
//                 this.getAddress(this.latitude, this.longitude);
//             });
//         }
//     }
//     getAddress(latitude, longitude) {
//         this.geoCoder.geocode({ location: { lat: latitude, lng: longitude } }, (results, status) => {
//             if (status === 'OK') {
//                 if (results[0]) {
//                 } else {
//                     window.alert('No results found');
//                 }
//             } else {
//                 window.alert('Geocoder failed due to: ' + status);
//             }
//         });
//     }
//     searchgridItem(event) {
//         let value = event.target.value;
//     }
//     onTabChange(event: any) {
//         let currentTab = event.target.parentNode.id;
//         if (currentTab === 'tab1') {
//             this.tab = 1;
//         } else if (currentTab === 'tab2') {
//             this.tab = 2;
//         } else if (currentTab === 'tab3') {
//             this.tab = 3;
//         } else if (currentTab === 'tab4') {
//             this.tab = 4;
//         } else {
//             this.tab = 1;
//         }
//     }
//     getAllAntenawarehouse() {
//         this.antenawarehouseService
//             .getAll(
//                 this.appSession.tenantId,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 0,
//                 1000
//             )
//             .subscribe((data) => {
//                 let list = [];
//                 if (data) {
//                     list = data.items.map((data) => ({
//                         name: data.antennaZone,
//                         Id: data.id,
//                         warehouseId: data.warehouseId,
//                     }));
//                 }
//                 localStorage.setItem('antenaWarehouse', JSON.stringify(list));
//             });
//     }
//     //  createlockAccessRequest() {
//     //    let input = new CreateStoreHouseAccessRequestInput();
//     //     input.tenantId = this.appSession.tenantId;
//     //     input.
//     //    this.storehouseAccessRequest.create()
//     //  }
// }
