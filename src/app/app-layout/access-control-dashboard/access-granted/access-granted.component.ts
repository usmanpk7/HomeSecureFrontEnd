// import { DatePipe } from '@angular/common';
// import { Component, Injector, OnInit, ViewChild } from '@angular/core';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { ItemDto, RankServiceProxy, StoreHouseAccessAuditLogDto, StoreHouseAccessAuditLogServiceProxy, StoreHouseAccessRequestDto, StoreHouseAccessRequestServiceProxy, StoreHouseLockActivityDto, StoreHouseLockActivityServiceProxy, WareHouseDto, WareHouseServiceProxy } from '@shared/service-proxies/service-proxies';
// import { Table } from 'primeng/table';
// import { forkJoin } from 'rxjs';

// @Component({
//   selector: 'app-access-granted',
//   templateUrl: './access-granted.component.html',
//   styleUrls: ['./access-granted.component.css']
// })
// export class AccessGrantedComponent extends AppComponentBase implements OnInit {
//   itemsDto: Array<StoreHouseAccessRequestDto>;
//   @ViewChild('dataTable') table: Table;
//   rankList: any;
//   first = 0;
//     row = 10;
//     skipCount = 0;
//     maxResultCount = 1;
//     viewType: number;
//     organizationlist: Array<any>;
//     data: Array<StoreHouseAccessRequestDto>;
//     recentActivityList: Array<any>;
//     activityList: any;
//     organizationUnitId: any;
//   constructor( injector: Injector, private storehouseRequestService: StoreHouseAccessRequestServiceProxy,
//     private storehouseAudit: StoreHouseAccessAuditLogServiceProxy,
//     private storehouseaccessActivity: StoreHouseLockActivityServiceProxy,
//     private storehouseAccessRequest: StoreHouseAccessRequestServiceProxy,
//     private warehouseServiceProxy: WareHouseServiceProxy,
//     private datePipe: DatePipe,
//     private rankServiceProxy: RankServiceProxy) {
//     super(injector);
//     this.viewType = 1;
//     this.rankList = [];
//     this.activityList = [];
//    }

//   ngOnInit(): void {
//     let userorganizationlist = JSON.parse(localStorage.getItem('OrganizationUnit'));
//     let userOrganization = userorganizationlist.shift();
//     if (userOrganization) {
//          this.organizationUnitId = userOrganization.id;
//     }
//    this.getaccessActivity();
//   }
//   paginate(event) {
//     this.first = event.first ;
//     this.maxResultCount = (this.first + 1) * this.row; //10
//     this.skipCount = this.first * this.row;
// }
//   onExpandRow(item: any) {
// }
//   handleChange(event) {

//   }

//   getaccessActivity() {
//     this.recentActivityList = [];
//     let element = this;
//     let storehouseactivityProxy = this.storehouseaccessActivity.getAll(this.appSession.tenantId, undefined, this.commonUtility.organizationId, undefined , undefined, undefined , undefined, 0, 1000);
//    let auditlog = this.storehouseAudit.getAll(this.appSession.tenantId, this.commonUtility.organizationId, undefined, undefined, 0, 1000);
//    let accessRequest = this.storehouseAccessRequest.getAll(this.appSession.tenantId, undefined, undefined, this.commonUtility.organizationId , undefined, 0 , 1000);
//    let warehouse = this.warehouseServiceProxy.getWareHouseAnalytics(this.appSession.tenantId, this.commonUtility.organizationId, undefined);
//    forkJoin([storehouseactivityProxy, auditlog, accessRequest, warehouse])
//    .subscribe((data: Array<any>) => {
//     if (data.length > 0) {
//       let activityDTO: Array<StoreHouseLockActivityDto> = data[0].items;
//        let auditDTO: Array<StoreHouseAccessAuditLogDto> = data[1].items;
//        let accessRequestsDTO: Array<StoreHouseAccessRequestDto> = data[2].items;
//        let warehouseDetailsDTO: Array<WareHouseDto> = data[3].warehouseDetails;
//        auditDTO.forEach(item => {
//       let accessRequest =  accessRequestsDTO.filter(x => x.id === item.storeHouseAccessRequestId).shift();
//       let activity = activityDTO.filter(x => x.storeHouseAccessRequestId === item.storeHouseAccessRequestId).shift();
//       let storehouseName = '----';
//       let batery = 0;
//       let signal = 0;
//       let lockOpened = false;
//       let creationActivityTime;
//       let lastActivity = '-----';
//       if (accessRequest) {
//         storehouseName =  warehouseDetailsDTO.filter( y => y.antennaWarehouse.some(val => val.id === accessRequest.antennaWarehouseId)).map(items => items.name).shift();
//       }
//       if (activity) {
//         batery = activity.battery;
//         signal = activity.signal;
//         lockOpened = activity.lockOpened;
//         creationActivityTime = activity.creationTime;
//         let time = element.datePipe.transform(activity.creationTime.toString() , 'dd/MM/yyyy hh:mm a');

//         if (lockOpened) {
//           lastActivity = 'Open Attempt at ' + time;
//         } else {
//           lastActivity = 'Close Attempt at ' + time;
//         }
//       }
//       element.recentActivityList.push({
//        storehouseName: storehouseName,
//        depotName: element.getOrganization(item.organizationUnitId),
//        creatorUserId: item.creatorUserId,
//        batery : batery,
//        signal: signal,
//        keyName: accessRequest.gateKeySerialNumber,
//        lockOpened: lockOpened,
//        lastActivity : lastActivity,
//        picture: element.getUserProfileById(item.initiatedById) === '' ? '../../../assets/images/widget/small_profile.svg' : this.getUserProfileById(item.initiatedById),
//        accessBy: element.getUserById(item.initiatedById),
//        time: accessRequest.requestedDateTime,
//        approvalStatus: item.approvedStatus,
//        creationTime: accessRequest.creationTime,
//        approvedBy : element.getUserById(item.creatorUserId),
//        duration: activity === undefined ? item.creationTime : activity.creationTime
//       });
//       element.recentActivityList.sort(function(a, b) {
//         return (b.duration - a.duration);
//       });
//       this.activityList = element.recentActivityList.filter(e => e.approvalStatus === true);
//       this.isLoading = false;
//        });
//       }
//       });
//   }

//   getUserProfileById(id) {
//     let userlist = JSON.parse(localStorage.getItem('users'));
//     let pic = '';
//     if (userlist.length > 0) {
//        pic = userlist.filter(x => x.Id === id).map(x => x.profilePhoto).shift();
//      }
//      return pic;
//   }
//   getOrganization(Id) {

//     if (this.organizationlist) {
//     return this.organizationlist.filter(x => x.id === Id).map(data => data.displayName).shift();
//     }
//   }
//   getUserById(Id) {
//     let userlist = JSON.parse(localStorage.getItem('users'));
//     let username = '-----';
//     if (userlist.length > 0) {
//        username = userlist.filter(x => x.Id === Id).map(x => x.username).shift();
//      }
//      return username;
//   }

//   getusers(id) {
//     let userlist = JSON.parse(localStorage.getItem('users'));
//      let username = '-----';
//      if (userlist.length > 0) {
//         username = userlist.filter(x => x.Id === id).map(x => x.name).shift();
//       }
//       return username;
//   }

//   getWarehouse(id) {
//     let antenawarehouses = JSON.parse(localStorage.getItem('antenaWarehouse'));
//     let warehouselist = JSON.parse(localStorage.getItem('warehouse'));
//      let warehousename = '-----';
//      if (antenawarehouses.length > 0) {
//        let warehouseId = antenawarehouses.filter(x => x.Id === id).map(x => x.warehouseId).shift();
//        warehousename =  warehouselist.filter(x => x.id === warehouseId).map(x => x.name).shift();
//       }
//       return warehousename;
//   }
//   getuser(id) {
//     let userlist = JSON.parse(localStorage.getItem('users'));
//      let username = '-----';
//      if (userlist.length > 0) {
//         username = userlist.filter(x => x.Id === id).map(x => x.name).shift();
//       }
//       return username;
//   }

// }
