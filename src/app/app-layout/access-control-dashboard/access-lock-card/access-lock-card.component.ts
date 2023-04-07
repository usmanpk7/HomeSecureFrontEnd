// import { Component, Injector, Input, OnInit, ViewChild } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { DateTimeService } from '@app/shared/common/timing/date-time.service';
// import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { AccessLockType, ApprovalServiceProxy, CreateStoreHouseAccessAuditLogInput, CreateStoreHouseAccessRequestInput, CreateStoreHouseLockActivityInput, StoreHouseAccessAuditLogServiceProxy, StoreHouseAccessConfigServiceProxy, StoreHouseAccessDeviceStatusDto, UpdateStoreHouseAccessDeviceStatusInput, UpdateWareHouseInput, StoreHouseAccessDeviceStatusServiceProxy, StoreHouseAccessRequestServiceProxy, StorehouseIssueType, StoreHouseLockActivityServiceProxy, SubmissionTypeFilter, UpdateStoreHouseAccessConfigInput, WareHouseDto, WareHouseServiceProxy } from '@shared/service-proxies/service-proxies';
// import { forEach } from 'lodash-es';
// import { forkJoin } from 'rxjs';
// import { StoreHouseActivityModel, WarehousesDevicesModel } from './access-lock-card-model';

// @Component({
//   selector: 'app-access-lock-card',
//   templateUrl: './access-lock-card.component.html',
//   styleUrls: ['./access-lock-card.component.css']
// })
// export class AccessLockCardComponent extends AppComponentBase implements  OnInit {
//   @ViewChild('confirmModal', { static: true }) confirmModal: DailogComponent;
//   @ViewChild('createRequestModal', {static: false}) createRequestModal: DailogComponent;
//   @Input() organizationUnitId;
//   warehouseDTO: Array<WareHouseDto>;
//   toogleList: Array<boolean>;
//   forLockApprovalRequired: boolean;
//   forunLockApprovalRequired: boolean;
//   checked: Array<boolean>;
//   isopenLock: boolean;
//   confirmationForm: FormGroup;
//   updateLockStatus: FormGroup;
//   IsSubmit: boolean;
//   dynamicHeader: string;
//   index: number;
//   totalApprovals: number;
//   pendingApprovals: number;
//   deviceLock: boolean;
//   isDisabled: boolean;
//   isLoading2: boolean;
//   deviceactivityModel: StoreHouseActivityModel;
//   warehouseDevices: Array<WarehousesDevicesModel>;
//   approvedAccessRequestId: number;
//   currentLockActivity: boolean;
//   deviceStatusList: Array<StoreHouseAccessDeviceStatusDto>;
//   constructor(injector: Injector,  private storehouseaccessConfigService: StoreHouseAccessConfigServiceProxy,
//     private warehouseServiceProxy: WareHouseServiceProxy,
//     private storehouseAccessRequest: StoreHouseAccessRequestServiceProxy,
//     private storehouseAccessDeviceStatus: StoreHouseAccessDeviceStatusServiceProxy,
//     private storehouseAccessAuditLogService: StoreHouseAccessAuditLogServiceProxy,
//     private approvalServiceProxy: ApprovalServiceProxy,
//     private storehouseDeviceStatusServiceProxy: StoreHouseAccessDeviceStatusServiceProxy,
//     private storehouseActivityServiceProxy: StoreHouseLockActivityServiceProxy,
//     private datetimeService: DateTimeService) {
//       super(injector);
//       this.toogleList = [];
//       this.checked = [];
//       this.isopenLock = false;
//       this.updateLockStatus = new FormGroup({
//         check: new FormControl(true),
//       });
//       this.confirmationForm = new FormGroup({
//         DeviceId: new FormControl(0),
//         AntennaId: new FormControl(0),
//         Purpose: new FormControl(''),
//         Remarks : new FormControl(''),
//         LockNumber: new FormControl(''),
//         SerialNumber : new FormControl(''),
//         LockStatus : new FormControl(1),
//         Address : new FormControl(''),
//         lat : new FormControl(''),
//         lng : new FormControl(''),
//       });
//       this.IsSubmit = false;
//       this.forLockApprovalRequired = true;
//       this.forunLockApprovalRequired = true;
//       this.dynamicHeader = '';
//       this.pendingApprovals = 0;
//       this.totalApprovals = 0;
//       this.deviceStatusList = [];
//       this.deviceLock = false;
//       this.isDisabled = false;
//       this.isLoading2 = false;
//       this.approvedAccessRequestId = 0;
//       this.warehouseDevices = [];
//     }

//   ngOnInit(): void {
//     this.getaccessConfig();
//     this.getAllDevicesStatus();
//     this.getWarehouseDevicesV2();
//   }

// updateDeviceStaus(warehouseId, address, index, lat, lng, name){
//   let lockvalue = this.checked[index];

//   let input = new UpdateWareHouseInput()
//   input.id = warehouseId;
//   input.isStoreHouse = this.checked[index];
//   input.organizationalUnitId = this.commonUtility.organizationId;
//   input.tenantId = this.appSession.tenantId;
//   input.address = address;
//   input.latitude = lat;
//   input.longtitude = lng;
//   input.name = name;
//   this.warehouseServiceProxy.update(input).subscribe(res => {
//     if (res) {
//       this.message.success('updated Successfully');
//     }
//   })
// }

//   getWarehouseDevicesV2() {
//     this.isLoading = true;
//     let warehouses =   this.warehouseServiceProxy.getWareHouseAnalytics(this.appSession.tenantId, this.commonUtility.organizationId, undefined);
//  let devicesStatus =  this.storehouseAccessDeviceStatus.getAll(this.appSession.tenantId, this.commonUtility.organizationId, undefined, undefined, 0, 1000);
//   forkJoin([warehouses, devicesStatus])
//   .subscribe((data: Array<any>) => {
//     this.isLoading = false;
//    if (data.length > 0) {
//   let warehousesList: Array<WareHouseDto> = data[0].warehouseDetails;
//    let deviceslist: Array<StoreHouseAccessDeviceStatusDto> = data[1].items;
//      let element = this;
//    if (warehousesList) {
//     this.warehouseDevices = [];
//     this.checked = [];
//     let i = 0;
//      forEach(warehousesList, function(item, index) {
//       let warehouse = new WarehousesDevicesModel();
//       warehouse.name = item.name;
//       warehouse.warehouseId = item.id;
//       item.antennaWarehouse.forEach(item2 => {
//         warehouse.antennaName = item2.deviceAnteena.antennaName;
//         warehouse.deviceName = item2.deviceAnteena.device.deviceName;
//         warehouse.deviceId = item2.deviceAnteena.deviceId;
//         warehouse.antennaId = item2.id;
//         warehouse.address = item.address;
//         warehouse.lat = item.latitude;
//         warehouse.lng = item.longtitude;
//         let device = deviceslist.filter(x => x.antennaWarehouseId === item2.id).sort((a, b) => b.id - a.id).shift();
//         let  lockstatus = true;
//         if (device) {
//               lockstatus = device.storeHouseLock;
//         }
//         if (lockstatus) {
//           element.checked[i] = false;
//         } else {
//           element.checked[i] = true;
//         }
//         warehouse.lockStatus = lockstatus;
//         let gpoconfig = item2.deviceAnteena.device.deviceGpoConfig[0];
//         warehouse.gpo1 = '';
//         warehouse.gpo2 =  '';
//         warehouse.gpo3 = '';
//         warehouse.gpo4 =  '';
//         if (gpoconfig) {
//           warehouse.gpo1 = gpoconfig.isActiveGPO1 ? 'active' : '';
//           warehouse.gpo2 = gpoconfig.isActiveGPO2 ? 'active' : '';
//           warehouse.gpo3 = gpoconfig.isActiveGPO3 ? 'active' : '';
//           warehouse.gpo4 = gpoconfig.isActiveGPO4 ? 'active' : '';
//         }
//         element.warehouseDevices.push(warehouse);
//        i = i + 1;
//           });
//      });
//     }
//    }
//    });
//   }
//  getGpoActiveClass(item, gpo) {
//    if (item) {
//     let gpoconfig = item.deviceAnteena.device.deviceGpoConfig[0];
//     if ( gpo === 1 && gpoconfig && gpoconfig.isActiveGPO1 === true) {
//      return 'active';
//     } else if ( gpo === 2 && gpoconfig && gpoconfig.isActiveGPO2 === true) {
//      return 'active';
//     } else if ( gpo === 3 && gpoconfig && gpoconfig.isActiveGPO3 === true) {
//      return 'active';
//     } else if ( gpo === 4 && gpoconfig && gpoconfig.isActiveGPO4 === true) {
//      return 'active';
//     }
//    }
//    return '';
//  }
//  toogleLockCard(i, deviceId, antennaId) {
//   this.getDetailExpandAccessLock(antennaId, i);
//  }
//  getaccessConfig() {
//  let lockconfig = this.storehouseaccessConfigService.getAll(this.appSession.tenantId, this.commonUtility.organizationId, StorehouseIssueType.Lock, undefined, 0, 1);
//  let unlockconfig = this.storehouseaccessConfigService.getAll(this.appSession.tenantId, this.commonUtility.organizationId, StorehouseIssueType.Unlock, undefined, 0, 1);
//   forkJoin([lockconfig, unlockconfig])
//   .subscribe((data: Array<any>) => {
//    if (data.length > 0) {
//    this.forLockApprovalRequired = data[0].items.map(x => x.approvalRequired).shift();
//    this.forunLockApprovalRequired = data[1].items.map(x => x.approvalRequired).shift();
//    }
//    });
//  }
//  //Lock Cards
//  handleChange(event, antennaId, deviceId, index, address, lat, lng) {
//   this.isopenLock = event.checked;
//   this.index = index;
//   this.isLoading2 = true;
//   this.totalApprovals = 0;
//   this.pendingApprovals = 0;
//   this.approvedAccessRequestId = 0;
//   this.approvalServiceProxy.getApprovalLegibilty(this.appSession.tenantId, undefined, undefined , undefined , undefined ,
//     undefined, undefined, undefined, undefined , undefined, undefined , undefined , SubmissionTypeFilter.StoreHouseAccessRequest)
//     .subscribe(data => {
//       if (data) {
//      let filterdata = data.storeHouseAccessFormApproval.filter(item =>
//           item.storeHouseForm.antennaWarehouseId === antennaId).sort((a , b) => b.storeHouseForm.id - a.storeHouseForm.id).shift();
//           if (filterdata ) {
//             this.deviceactivityModel = new StoreHouseActivityModel();
//             this.storehouseActivityServiceProxy.getAll(this.appSession.tenantId, undefined, this.commonUtility.organizationId, filterdata.storeHouseForm.id, undefined, undefined, undefined, 0, 1000 )
//             .subscribe(data => {
//               this.isLoading2 = false;
//               if (data.totalCount > 0 ) {
//                 this.actionLock(antennaId, index);
//               } else {
//                 //for activity log
//                 this.deviceactivityModel.accessRequestId = filterdata.storeHouseForm.id;
//                 this.deviceactivityModel.lockOpenedStatus = event.checked;
//                 this.deviceactivityModel.antennaId = antennaId;
//                 this.deviceactivityModel.address = address;
//                 this.deviceactivityModel.lat = lat;
//                 this.deviceactivityModel.lng = lng;
//                 this.totalApprovals = filterdata.assignedUsers.length;
//                 this.pendingApprovals = filterdata.approval.length;
//                 this.approvedAccessRequestId = filterdata.storeHouseForm.id;
//                 this.actionLock(antennaId, index);
//                 this.LockTriger(index);
//               }
//             });
//       } else {
//         this.actionLock(antennaId, index);
//         this.LockTriger(index);
//       }
//     }
//     this.isLoading2 = false;
//     });
//   }
//  initiatedAccessRequest(lockStatus, antennaId, deviceId, index, address, lat, lng) {
// let lockvalue = this.checked[index];
// this.deviceactivityModel = new StoreHouseActivityModel();
// this.deviceactivityModel.lockOpenedStatus = lockvalue;
//   this.confirmationForm.controls.DeviceId.setValue(deviceId);
//   this.confirmationForm.controls.AntennaId.setValue(antennaId);
//   this.confirmationForm.controls.Address.setValue(address);
//   this.confirmationForm.controls.lat.setValue(lat);
//   this.confirmationForm.controls.lng.setValue(lng);
//   this.approvalServiceProxy.storeHouseAccessmethod(undefined, undefined, this.appSession.tenantId).subscribe(data => {
//     let isExist = false;
//     if (data) {
//      isExist =  data.some(item =>
//         item.storeHouseForm.antennaWarehouseId === antennaId &&
//         ((item.approval.length + item.rejected.length) !== item.assignedUsers.length));
//       this.openaccessRequestModal(index, isExist, lockvalue);
//       }
//    });
//   }
//   openaccessRequestModal(index, isExist, isLock) {
//     if (!isExist) {
//    this.createRequestModal.show();
//     } else {
//       this.message.warn('Already an request in Process!');
//   }
// }
//   showModal(isExist: boolean) {
//     if (!isExist) {
//       if (this.isopenLock) {
//         this.dynamicHeader = 'Confirm Unlock';
//       } else {
//         this.dynamicHeader = 'Confirm Lock';
//       }
//        this.confirmModal.show();
//    }
//   }
//   submitLockChange() {
//     this.saveStorelockStatus();
//     this.createstorehouseActivity(this.deviceactivityModel);
//   }
//   createAccessRequest() {
//     let input = new CreateStoreHouseAccessRequestInput();
//     this.IsSubmit = true;
//     this.deviceactivityModel.address = this.confirmationForm.get('Address').value;
//       this.deviceactivityModel.lat = this.confirmationForm.get('lat').value;
//       this.deviceactivityModel.lng = this.confirmationForm.get('lng').value;
//       this.deviceactivityModel.antennaId = this.confirmationForm.get('AntennaId').value;

//     input.gateKeySerialNumber = this.confirmationForm.get('SerialNumber').value;
//     input.lockNumber = this.confirmationForm.get('LockNumber').value;
//     input.purpose = this.confirmationForm.get('Purpose').value;
//     input.remark = this.confirmationForm.get('Remarks').value;
//     input.antennaWarehouseId = this.confirmationForm.get('AntennaId').value;
//     input.tenantId = this.appSession.tenantId;
//     input.organizationUnitId = this.commonUtility.organizationId;
//     input.requestedDateTime = this.datetimeService.getDate();
//     this.storehouseAccessRequest.create(input).subscribe(res => {
//       this.deviceactivityModel.accessRequestId = res.id;
//       this.createStoreHouseAccessAuditLog(this.deviceactivityModel.accessRequestId);
//     });
//   }

//   lockUnlockDevice(antennaid){
//     let input = new UpdateStoreHouseAccessConfigInput();
//     input.id = antennaid;
//     input.tenantId = this.appSession.tenantId;
//     input.autoLock = this.updateLockStatus.value.check;
//     input.organizationUnitId = this.commonUtility.organizationId;
//     this.storehouseaccessConfigService.update(input).subscribe(res =>{
//       if (res) {
//         this.message.success('updated Successfully');
//       }
//     })
//   }


//   saveStorelockStatus() {
//     this.isLoading = true;
//     let input = new StoreHouseAccessDeviceStatusDto();
//     input.antennaWarehouseId = this.deviceactivityModel.antennaId;
//     input.organizationUnitId = this.commonUtility.organizationId;
//     input.tenantId = this.appSession.tenantId;
//     input.storeHouseLock = this.isopenLock ? false : true;
//     this.storehouseAccessDeviceStatus.create(input).subscribe(res => {
//       if (res) {
//         this.message.success('Submit Successfully');
//       }
//        this.isLoading = false;
//     });
//   }
//   createStoreHouseAccessAuditLog(requestId: number) {
//    let input = new CreateStoreHouseAccessAuditLogInput();
//    if (this.isopenLock) {
//     input.accessLockType = AccessLockType.Unlock;
//    } else {
//     input.accessLockType = AccessLockType.Lock;
//    }
//    input.tenantId = this.appSession.tenantId;
//    input.organizationUnitId = this.commonUtility.organizationId;
//    input.storeHouseAccessRequestId = requestId;
//    input.approvedStatus = false;
//    input.initiatedById = this.appSession.userId;
//    this.storehouseAccessAuditLogService.create(input).subscribe(res => {
//     if (res) {
//       this.IsSubmit = false;
//       this.message.success('Submit Successfully');
//       this.reset();
//     }
//    });
//   }
//   close() {
//     this.LockTriger(this.index);
//     this.confirmModal.hide();
//   }
//   LockTriger(index) {
//     if (this.isopenLock) {
//       this.checked[index] = false;
//     } else {
//       this.checked[index] = true;
//     }
//   }
//   getDetailExpandAccessLock(antennaId, i) {
//     this.isLoading2 = true;
//     this.expandLockDiv(i);
//     this.totalApprovals = 0;
//     this.pendingApprovals = 0;
//     this.approvedAccessRequestId = 0;
//    this.approvalServiceProxy.getApprovalLegibilty(this.appSession.tenantId, undefined, undefined , undefined , undefined ,
//     undefined, undefined, undefined, undefined , undefined, undefined , undefined , SubmissionTypeFilter.StoreHouseAccessRequest)
//     .subscribe(data => {
//       if (data) {
//      let filterdata = data.storeHouseAccessFormApproval.filter(item =>
//           item.storeHouseForm.antennaWarehouseId === antennaId).sort((a , b) => b.storeHouseForm.id - a.storeHouseForm.id).shift();
//           if (filterdata ) {
//             this.storehouseActivityServiceProxy.getAll(this.appSession.tenantId, undefined, this.commonUtility.organizationId, filterdata.storeHouseForm.id, undefined, undefined, undefined, 0, 1000 )
//             .subscribe(data => {
//               if (data.totalCount > 0 ) {
//               } else {
//                 this.totalApprovals = filterdata.assignedUsers.length;
//                 this.pendingApprovals = filterdata.approval.length;
//                 this.approvedAccessRequestId = filterdata.storeHouseForm.id;
//                  this.getDevicesStatus(antennaId);
//               }
//             });
//       }
//     }
//     this.isLoading2 = false;
//     });
//   }
//   expandLockDiv(i) {
//     if (this.toogleList[i]) {
//       this.toogleList = [];
//       this.toogleList[i] = false;
//     } else {
//       this.toogleList = [];
//       this.toogleList[i] = true;
//     }
//   }

//   getDevicesStatus(antennaId) {
//     this.deviceLock = false;
//     this.storehouseDeviceStatusServiceProxy.getAll(this.appSession.tenantId, this.commonUtility.organizationId, antennaId, undefined, 0, 1000)
//     .subscribe(data => {
//       if (data) {

//       let deviceStatus = data.items.filter(item => item.antennaWarehouseId === antennaId).shift();
//       if (deviceStatus) {
//          this.deviceLock = deviceStatus.storeHouseLock;
//       }
//       }
//     });
//   }
//   actionLock(antennaId, index) {
//      if (this.totalApprovals !== 0 && this.totalApprovals === this.pendingApprovals) {
//       this.showModal(false);
//      } else if (this.totalApprovals === 0) {
//       this.message.warn('You have to initiate a access request for this purpose!');
//      } else {
//       this.message.warn('Wait for all Approvals');
//      }
//   }
//   createstorehouseActivity(model: StoreHouseActivityModel) {
//     let input = new  CreateStoreHouseLockActivityInput();
//     input.antennaWarehouseId = model.antennaId;
//     input.organizationUnitId = this.commonUtility.organizationId;
//     input.tenantId = this.appSession.tenantId;
//     input.lockOpened = model.lockOpenedStatus;
//     input.storeHouseAccessRequestId = model.accessRequestId;
//     input.lockOpenedUserId = this.appSession.userId;
//     input.battery = 0;
//     input.signal = 0;
//     input.address = model.address;
//     input.lat = model.lat;
//     input.log = model.lng;
//    this.storehouseActivityServiceProxy.create(input).subscribe(res => {
//     if (res) {
//       this.isLoading2 = false;
//       this.isDisabled = false;
//       this.getWarehouseDevicesV2();
//     }
//     this.IsSubmit = false;
//     this.reset();
//    });
//   }
//   getAllDevicesStatus() {
//     this.storehouseAccessDeviceStatus.getAll(this.appSession.tenantId, this.commonUtility.organizationId, undefined, undefined, 0, 1000)
//     .subscribe(data => {
//      if (data) {
//      this.deviceStatusList = data.items;

//      }
//     });
//   }
//   getdeviceStatus(antennaId) {
//   let status = false;
//     let device = this.deviceStatusList.filter( x => x.antennaWarehouseId === antennaId).sort((a, b) => b.id - a.id).shift();
//     if (device) {
//        status = device.storeHouseLock;
//     }
//     return status;
//   }
//   reset() {
//   this.confirmationForm.reset();
//   this.IsSubmit = false;
//   this.deviceactivityModel = new StoreHouseActivityModel();
//   }
// }

