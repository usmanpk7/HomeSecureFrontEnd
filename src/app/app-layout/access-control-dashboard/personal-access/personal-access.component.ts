// import { DatePipe } from '@angular/common';
// import { Component, Injector, OnInit } from '@angular/core';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { StoreHouseAccessAuditLogDto, StoreHouseAccessAuditLogServiceProxy, StoreHouseAccessRequestDto, StoreHouseAccessRequestServiceProxy, StoreHouseLockActivityDto, StoreHouseLockActivityServiceProxy, WareHouseDto, WareHouseServiceProxy } from '@shared/service-proxies/service-proxies';
// import { forkJoin } from 'rxjs';
// @Component({
//   selector: 'app-personal-access',
//   templateUrl: './personal-access.component.html',
//   styleUrls: ['./personal-access.component.css']
// })
// export class PersonalAccessComponent extends AppComponentBase implements OnInit {
//   first = 0;
//   row = 1;
//   skipCount = 0;
//   maxResultCount = 1;
//   data: Array<StoreHouseLockActivityDto>;
//   organizationlist: Array<any>;
//   recentActivityList: Array<any>;
//   constructor(injector: Injector, private storehouseAudit: StoreHouseAccessAuditLogServiceProxy,
//     private storehouseaccessActivity: StoreHouseLockActivityServiceProxy,
//     private storehouseAccessRequest: StoreHouseAccessRequestServiceProxy,
//     private warehouseServiceProxy: WareHouseServiceProxy,
//     private datePipe: DatePipe) {
//     super(injector);
//    }

//   ngOnInit(): void {
//     this.getaccessActivity();
//     this.organizationlist = JSON.parse(localStorage.getItem('OrganizationUnit'));
//   }
// getaccessActivity() {
//   this.recentActivityList = [];
//   let element = this;
//   let storehouseactivityProxy = this.storehouseaccessActivity.getAll(this.appSession.tenantId, undefined, this.commonUtility.organizationId, undefined , undefined, undefined , undefined, 0, 1000);
//  let auditlog = this.storehouseAudit.getAll(this.appSession.tenantId, this.commonUtility.organizationId, undefined, undefined, 0, 1000);
//  let accessRequest = this.storehouseAccessRequest.getAll(this.appSession.tenantId, undefined, undefined, this.commonUtility.organizationId , undefined, 0 , 1000);
//  let warehouse = this.warehouseServiceProxy.getWareHouseAnalytics(this.appSession.tenantId, this.commonUtility.organizationId, undefined);
//  forkJoin([storehouseactivityProxy, auditlog, accessRequest, warehouse])
//  .subscribe((data: Array<any>) => {
//   console.log(data.filter(e => e.approvedStatus == true))
//   if (data.length > 0) {
//     let activityDTO: Array<StoreHouseLockActivityDto> = data[0].items;
//      let auditDTO: Array<StoreHouseAccessAuditLogDto> = data[1].items;
//      let accessRequestsDTO: Array<StoreHouseAccessRequestDto> = data[2].items;
//      let warehouseDetailsDTO: Array<WareHouseDto> = data[3].warehouseDetails;
//      auditDTO.forEach(item => {
//     let accessRequest =  accessRequestsDTO.filter(x => x.id === item.storeHouseAccessRequestId).shift();
//     let activity = activityDTO.filter(x => x.storeHouseAccessRequestId === item.storeHouseAccessRequestId).shift();
//     let storehouseName = '----';
//     let batery = 0;
//     let signal = 0;
//     let lockOpened = false;
//     let creationActivityTime;
//     let lastActivity = '-----';
//     if (accessRequest) {
//       storehouseName =  warehouseDetailsDTO.filter( y => y.antennaWarehouse.some(val => val.id === accessRequest.antennaWarehouseId)).map(items => items.name).shift();
//     }
//     if (activity) {
//       batery = activity.battery;
//       signal = activity.signal;
//       lockOpened = activity.lockOpened;
//       creationActivityTime = activity.creationTime;
//       let time = element.datePipe.transform(activity.creationTime.toString() , 'dd/MM/yyyy hh:mm a');

//       if (lockOpened) {
//         lastActivity = 'Open Attempt at ' + time;
//       } else {
//         lastActivity = 'Close Attempt at ' + time;
//       }
//     }
//     element.recentActivityList.push({
//      storehouseName: storehouseName,
//      depotName: element.getOrganization(item.organizationUnitId),
//      creatorUserId: item.creatorUserId,
//      batery : batery,
//      signal: signal,
//      lockOpened: lockOpened,
//      lastActivity : lastActivity,
//      picture: element.getUserProfileById(item.initiatedById) === '' ? '../../../assets/images/widget/small_profile.svg' : this.getUserProfileById(item.initiatedById),
//      accessBy: element.getUserById(item.initiatedById),
//      approvalStatus: item.approvedStatus,
//      approvedBy : element.getUserById(item.creatorUserId),
//      duration: activity === undefined ? item.creationTime : activity.creationTime
//     });
//     element.recentActivityList.sort(function(a, b) {
//       return (b.duration - a.duration);
//     });
//     console.log(element.recentActivityList.filter(e => e.approvalStatus == true));
//      });
//     }
//     });
// }
// getUserProfileById(id) {
//   let userlist = JSON.parse(localStorage.getItem('users'));
//   let pic = '';
//   if (userlist.length > 0) {
//      pic = userlist.filter(x => x.Id === id).map(x => x.profilePhoto).shift();
//    }
//    return pic;
// }
// getOrganization(Id) {

//   if (this.organizationlist) {
//   return this.organizationlist.filter(x => x.id === Id).map(data => data.displayName).shift();
//   }
// }
// getUserById(Id) {
//   let userlist = JSON.parse(localStorage.getItem('users'));
//   let username = '-----';
//   if (userlist.length > 0) {
//      username = userlist.filter(x => x.Id === Id).map(x => x.username).shift();
//    }
//    return username;
// }

// getuser(id) {
//   let userlist = JSON.parse(localStorage.getItem('users'));
//    let username = '-----';
//    if (userlist.length > 0) {
//       username = userlist.filter(x => x.Id === id).map(x => x.name).shift();
//     }
//     return username;
// }

// }
