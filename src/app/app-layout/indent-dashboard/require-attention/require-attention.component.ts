// import { Component, Injector, OnInit, ViewChild } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { DateTimeService } from '@app/shared/common/timing/date-time.service';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import {  ApprovalServiceProxy, ApprovalStagesLevelServiceProxy, AssignTo, CreateApprovalInput, CreateApprovalStagesLevelInput, IntentRequestFormServiceProxy, RequestAuthorityFormServiceProxy, StoreHouseAccessFormApproval } from '@shared/service-proxies/service-proxies';
// import { rawListeners } from 'process';
// import { forkJoin } from 'rxjs';
// import { flatMap, map, mergeMap } from 'rxjs/operators';

// @Component({
//     selector: 'app-require-attention',
//     templateUrl: './require-attention.component.html',
//     styleUrls: ['./require-attention.component.css']
// })
// export class RequireAttentionComponent extends AppComponentBase implements OnInit {

//     getAttentionList: any;
//     tableHeading = 'Intend Form';
//     tablethead = [];
//     tabletd = [];
//     approvalBindingId: number;
//     actionForm: FormGroup;
//     actions: Array<any>;
//     listname: string;
//     requiredCount: number;
//     constructor(private indentRequestFormProxy: IntentRequestFormServiceProxy,
//         private approvalServiceProxy: ApprovalServiceProxy,
//         private approvalBindingService: ApprovalStagesLevelServiceProxy,
//         private timeService: DateTimeService,
//         private requestAthorityFormProxy: RequestAuthorityFormServiceProxy,
//         injector: Injector,
//     ) {
//         super(injector);
//         this.getAttentionList = [];
//         this.tablethead = [' Intent no.', 'Item' , 'Att.Type'];
//         this.tabletd = ['intentNo', 'descriptionOfPackage'];
//         this.listname = 'intentRequestForm';
//         this.actions = [
//             {name: 'Choose', id: 0 },
//             {name: 'Approve', id: 1 },
//             {name: 'Reject', id: 2 }
//           ];
//           this.actionForm = new FormGroup({
//             action: new FormControl(0)
//           });
//           this.requiredCount = 0;
//     }
//     ngOnInit(): void {
//         this.getall();
//         this.getApprovalbinding(AssignTo.IntentRequestForm);
//     }


//     getall() {
//         this.isLoading = true;
//         this.approvalServiceProxy.getApprovalLegibilty(this.appSession.tenantId, undefined,
//             undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, this.appSession.userId, undefined).
//             subscribe((data: any) => {
//             let result = data;
//             this.isLoading = false;
//               if (this.tableHeading === "Intend Form") {
//                 result = data.intentRequestApproval;
//            } else if (this.tableHeading === "Authority Form") {
//             result = data.requestAuthorityForm;
//            } else if (this.tableHeading === "Issue Request Form") {
//             result = data.issueRequestFormApproval;
//            } else if (this.tableHeading === "Release Form") {
//             result = data.storeReleaseDispatchFormApproval;
//            } else if (this.tableHeading === "Store Release") {
//             result = data.releaseFormApproval;
//            } else if (this.tableHeading === "Package Release") {
//             result = data.packageReleaseFormApproval;
//            }
//         this.getFilteredList(result);
//         this.actionForm = new FormGroup({
//             action: new FormControl(0)
//           });
//         });
//     }
//     back() {
//         if (this.tableHeading === "Intend Form") {
//             this.tableHeading = 'Intend Form' ;
//             this.getApprovalbinding(AssignTo.IntentRequestForm);
//             this.tabletd = ['intentNo', 'descriptionOfPackage'];
//             this.listname = 'intentRequestForm';
//         } else if (this.tableHeading === "Package Release") {
//             this.tableHeading = 'Release Form' ;
//             this.getApprovalbinding(AssignTo.StoreReleaseDispatch);
//             this.tabletd = ['id', 'issueRequestId'];
//             this.listname = 'storeReleaseDispatchForm';
//         } else if (this.tableHeading === "Store Release") {
//           this.tableHeading = 'Issue Request Form' ;
//           this.tabletd = ['requestAuthorityFormId', 'categoryPartNo'];
//           this.listname = 'issueRequestForm';
//         } else if (this.tableHeading === "Release Form") {
//           this.tableHeading = 'Store Release' ;
//           this.getApprovalbinding(AssignTo.StoreRelease);
//           this.tabletd = ['issueRequestId', 'issueRequestId'];
//           this.listname = 'storeReleaseForm';
//             this.getApprovalbinding(AssignTo.IssueRequest);
//         } else if (this.tableHeading === "Issue Request Form") {
//             this.tableHeading = 'Authority Form' ;
//               this.tabletd = ['authorityNumber', 'issueControlName'];
//             this.listname = 'requestAuthorityForm';
//             this.getApprovalbinding(AssignTo.RequestAuthorityForm);
//         } else if (this.tableHeading === "Authority Form") {
//             this.tableHeading = 'Intend Form';
//             this.getApprovalbinding(AssignTo.IntentRequestForm);
//             this.tabletd = ['intentNo', 'descriptionOfPackage'];
//             this.listname = 'intentRequestForm';
//         }
//        this.getall();
//     }
//     next() {
//        if (this.tableHeading === "Intend Form") {
//            this.tableHeading = "Authority Form" ;
//            this.getApprovalbinding(AssignTo.RequestAuthorityForm);
//            this.tabletd = ['authorityNumber', 'issueControlName'];
//            this.listname = 'requestAuthorityForm';
//        } else if (this.tableHeading === "Authority Form") {
//            this.tableHeading = 'Issue Request Form' ;
//            this.getApprovalbinding(AssignTo.IssueRequest);
//            this.tabletd = ['requestAuthorityFormId', 'categoryPartNo'];
//            this.listname = 'issueRequestForm';
//        } else if (this.tableHeading === "Issue Request Form") {
//         this.tableHeading = 'Store Release' ;
//         this.getApprovalbinding(AssignTo.StoreRelease);
//         this.tabletd = ['id', 'issueRequestId'];
//          this.listname = 'storeReleaseForm';
//        } else if (this.tableHeading === "Release Form") {
//             this.tableHeading = 'Release Form' ;
//             this.getApprovalbinding(AssignTo.StoreReleaseDispatch);
//             this.tabletd = ['storeReleaseId', 'sealNumber'];
//             this.listname = 'storeReleaseDispatchForm';
//        } else if (this.tableHeading === "Store Release") {
//            this.tableHeading = 'Package Release' ;
//            this.getApprovalbinding(AssignTo.PackageRelease);
//            this.tabletd = ['packageNumber', 'packageDescription'];
//             this.listname = 'packageReleaseForm';
//        }
//      this.getall();
//     }
//     getFilteredList(data: any) {
//         if (data) {
//         this.getAttentionList = data.filter(item =>
//             item.assignedUsers.find(x => x.id === this.appSession.userId)).sort((x) => {
//               if (x.status === 'Pending') {
//                 return -1;
//               } else {
//                 return 1;
//               }
//             });
//             this.requiredCount = this.getAttentionList.filter(x => x.status === 'Pending').length;
//     }
// }
//     getApprovalbinding(AssignTo: number) {
//         this.approvalBindingService.getAll(this.appSession.tenantId, undefined, undefined , AssignTo, AssignTo, undefined , undefined, undefined , undefined, 0 , 1)
//         .subscribe(data => {
//           if (data) {
//             this.approvalBindingId = data.items.map(x => x.id).shift();
//           }
//         });
//        }
//     actionEvent(fromId, Type) {
//         if (Type !== 0 ) {
//           let input = new CreateApprovalInput();
//           if (this.tableHeading ==="Intend Form") {
//             input.intentRequestFormId = fromId;
//           } else if (this.tableHeading === "Authority Form") {
//             input.requestAuthorityFormID = fromId;
//           } else if (this.tableHeading === "Issue Request Form") {
//             input.issueRequestId = fromId;
//           } else if (this.tableHeading === "Release Form") {
//             input.storeReleaseDispatchId = fromId;
//           } else if (this.tableHeading === "Store Release") {
//             input.storeReleaseId = fromId;
//           } else if (this.tableHeading === "Package Release") {
//             input.packageConfirmationId = fromId;
//           }
//           input.aprovvaledUserId = this.appSession.userId;
//           input.tenantId = this.appSession.tenantId;
//           input.approvalStagesLevelId = this.approvalBindingId;
//           if (Type === 1) {
//             input.isApproved = true;
//             input.approvalRemark = true;
//           } else {
//             input.isApproved = false;
//           }
//          this.approvalServiceProxy.create(input).subscribe(res => {
//            if (res) {
//               this.notify.success('Submit Successfully!');
//               this.getall();
//            }
//          });
//         }
//       }
//     CheckApproval(item) {
//         if (item) {
//          let approval = item.approval.some(x => x.id === this.appSession.userId);
//          let pending = item.pending.some(x => x.id === this.appSession.userId);
//          let rejected = item.rejected.some(x => x.id === this.appSession.userId);
//          if (approval || item.status === 'Approved') {
//             return 1;
//          } else if (rejected || item.status === 'rejected') {
//            return 2;
//          } else if (pending) {
//           return 0;
//          }
//         }
//       }
// }

