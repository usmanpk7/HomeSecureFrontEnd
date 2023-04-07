// import { Component, Injector, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { DateTimeService } from '@app/shared/common/timing/date-time.service';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import {  AccessLockType, ApprovalServiceProxy, ApprovalStagesLevelServiceProxy, AssignTo, CreateApprovalInput, CreateStoreHouseAccessAuditLogInput, IntentRequestFormServiceProxy, StoreHouseAccessAuditLogDto, StoreHouseAccessAuditLogServiceProxy, StoreHouseAccessFormApproval, StoreHouseAccessRequestServiceProxy, SubmissionTypeFilter, UpdateStoreHouseAccessAuditLogInput } from '@shared/service-proxies/service-proxies';
// import { DateTime } from 'luxon';

// @Component({
//   selector: 'app-access-required-attention',
//   templateUrl: './access-required-attention.component.html',
//   styleUrls: ['./access-required-attention.component.css']
// })
// export class AccessRequiredAttentionComponent extends AppComponentBase implements OnInit {

//   getAttentionList: Array<any>;
//   tablethead: Array<any>;
//   actions: Array<any>;
//   actionForm: FormGroup;
//   approvalBindingId: number;
//   constructor(
//       private approvalServiceProxy: ApprovalServiceProxy,
//       private approvalBindingService: ApprovalStagesLevelServiceProxy,
//       private timeService: DateTimeService,
//       private storehouseAccessAuditLogService: StoreHouseAccessAuditLogServiceProxy,
//       private storehouseAccessRequestservice: StoreHouseAccessRequestServiceProxy,
//       injector: Injector,
//   ) {
//       super(injector);
//       this.getAttentionList = [];
//       this.tablethead = ['Access Req.', 'Warehouse' , 'Purpose', 'Remarks', 'Created By', 'Requested Time', 'Att.Type'];
//       this.actions = [
//         {name: 'Choose', id: 0 },
//         {name: 'Approve', id: 1 },
//         {name: 'Reject', id: 2 }
//       ];
//       this.actionForm = new FormGroup({
//         action: new FormControl(0)
//       });
//   }
//   ngOnInit(): void {
//       this.getall();
//     this.getApprovalbinding();
//   }
// getApprovalbinding() {
//  this.approvalBindingService.getAll(this.appSession.tenantId, undefined, this.commonUtility.organizationId, AssignTo.StoreHouseAccessRequest, AssignTo.StoreHouseAccessRequest, undefined, undefined, undefined, undefined, 0 , 1)
//  .subscribe(data => {
//    if (data) {
//      this.approvalBindingId = data.items.map(x => x.id).shift();
//    }
//  });
// }
//   actionEvent(fromId, Type) {
//     if (Type !== 0 ) {
//       let input = new CreateApprovalInput();
//       input.storeHouseAccessRequestId = fromId;
//       input.aprovvaledUserId = this.appSession.userId;
//       input.tenantId = this.appSession.tenantId;
//       input.approvalStagesLevelId = this.approvalBindingId;
//       input.approvalDateTime = this.timeService.getDate();
//       if (Type === 1) {
//         input.isApproved = true;
//         input.approvalRemark = true;
//       } else {
//         input.isApproved = false;
//       }
//      this.approvalServiceProxy.create(input).subscribe(res => {
//        if (res) {
//         this.createStoreHouseAccessAuditLog(fromId, input.isApproved);
//        }
//      });
//     }
//   }
//   createStoreHouseAccessAuditLog(requestId: number, isApproved) {
//     this.storehouseAccessAuditLogService.getAll(this.appSession.tenantId, this.commonUtility.organizationId, requestId, '', 0, 1)
//     .subscribe(data => {
//       if (data) {
//         let input = new CreateStoreHouseAccessAuditLogInput();
//         let item = data.items.shift();
//         if (item) {
//         input.tenantId = this.appSession.tenantId;
//         input.organizationUnitId = this.commonUtility.organizationId;
//         input.storeHouseAccessRequestId = item.storeHouseAccessRequestId;
//         input.approvedStatus = isApproved;
//         input.initiatedById = item.initiatedById;
//         input.accessLockType = item.accessLockType;
//         this.storehouseAccessAuditLogService.create(input).subscribe(res => {
//          if (res) {
//           this.notify.success('Submit Successfully!');
//       this.getall();
//          }
//         });
//       }
//     }
//     });
//    }
//   CheckApproval(item: StoreHouseAccessFormApproval) {
//     if (item) {
//      let approval = item.approval.some(x => x.id === this.appSession.userId);
//      let pending = item.pending.some(x => x.id === this.appSession.userId);
//      let rejected = item.rejected.some(x => x.id === this.appSession.userId);
//      if (approval ) {
//         return 1;
//      } else if (rejected) {
//        return 2;
//      } else {
//       return 0;
//      }
//     }
//   }
//   getall() {
//       this.isLoading = true;
//       this.approvalServiceProxy.getApprovalLegibilty(this.appSession.tenantId, undefined,
//         undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
//       undefined, SubmissionTypeFilter.StoreHouseAccessRequest).subscribe((data: any) => {
//           this.isLoading = false;
//        if (data) {
//         console.log(data)
//         this.getAttentionList = data.storeHouseAccessFormApproval.filter(item =>
//           item.assignedUsers.find(x => x.id === this.appSession.userId)).sort((x) => {
//             if (x.status === 'Pending') {
//               return -1;
//             } else {
//               return 1;
//             }
//           });
//         }
//         this.actionForm.patchValue({
//           action: 0
//       });
//       });
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
//         username = userlist.filter(x => x.Id === id).map(x => x.username).shift();
//       }
//       return username;
//   }
// }
