// import { Component, Injector, OnInit, ViewChild } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AuthorityNumberModelComponent } from '@app/app-layout/authority-number/authority-number-model/authority-number-model.component';
// import { IssueProvisiosComponent } from '@app/app-layout/IssueProvisios/IssueProvisios.component';
// import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
// import { EqisDropDownModel } from '@app/shared/custom/eqis-dropdown/eqis-dropdown.model';
// import { AppConsts } from '@shared/AppConsts';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { EncryptionDecryptionService } from '@shared/encryption-decryption.service';
// import {
//     CommentType,
//     CreateEpicNoteInput,
//     CreateEpicRemarkInput,
//     CreateEqisCommentInput,
//     EqisCommentDto,
//     EqisCommentServiceProxy,
//     EqisNoteServiceProxy,
//     EqisRemarkServiceProxy,
//     GetUserForEditOutput,
//     GetUsersInput,
//     IntentRequestFormServiceProxy,
//     NoteType,
//     ProfileServiceProxy,
//     ReasonForIndent,
//     RemarkType,
//     RequestAuthorityFormDto,
//     RequestedItemServiceProxy,
//     StoreReleaseConfirmationServiceProxy,
//     StoreReleaseServiceProxy,
//     UserServiceProxy,
//     VoucherToType,
//     WareHouseServiceProxy,
// } from '@shared/service-proxies/service-proxies';
// import { Table } from 'primeng/table';
// import { AddReleaseConfirmationComponent } from '../add-release-confirmation/add-release-confirmation.component';
// import { AddReleaseStoreComponent } from '../add-release-store/add-release-store.component';
// import { CreateIssueRequestComponent } from '../issue-request/create-issue-request.component';
// import { FooterActionButton } from '../model/footer-action-button';
// import { CreateStoreComponent } from '../StoreReleaseDispatch/create-store/create-store.component';

// @Component({
//   selector: 'app-dispatch-order-list',
//   templateUrl: './dispatch-order-list.component.html',
//   styleUrls: ['./dispatch-order-list.component.css']
// })
// export class DispatchOrderListComponent extends AppComponentBase implements OnInit {
//   profilePicture: string = AppConsts.appBaseUrl + '/assets/common/images/default-profile-picture.png';
//   userName = '';
//   @ViewChild('authorityNumber', { static: true }) authorityNumber: AuthorityNumberModelComponent;
//   @ViewChild('issueRequest', { static: true }) issueRequest: CreateIssueRequestComponent;
//   @ViewChild('dynamicModal4', { static: true }) dynamicModal2: DailogComponent;
//   @ViewChild('issueProvision', { static: true }) issueProvision: IssueProvisiosComponent;
//   @ViewChild('releaseConfimation', { static: true }) releaseConfimation: AddReleaseConfirmationComponent;
//   @ViewChild('createStoreRelease', { static: true }) createStoreRelease: CreateStoreComponent;
//   @ViewChild('addStoreRelease', { static: true }) addStoreRelease: AddReleaseStoreComponent;
//   @ViewChild('dataTable') table: Table;
//   indentRequestForm: any;
//   requestDropDownData: Array<EqisDropDownModel>;
//   indentRequestFormBak: any;
//   intentItems: any;
//   intentReasonText: any;
//   getCriticalLowItemList: any;
//   footerActionButton: Array<FooterActionButton>;
//   issueRequestServiceList: any;
//   first = 0;
//   row = 10;
//   skipCount = 0;
//   maxResultCount = 1;
//   issueRequestList: any;
//   issueProvisionList: any;
//   warehouselist: Array<any>;
//   organizationlist: Array<any>;
//   releaseStoreList = [];
//   issueRequestmy: any;
//   //remarks comment,notes
//   remarksText: any;
//   remarkCount: number;
//   comment: EqisCommentDto;
//   commentCount: number;
//   noteText: any;
//   noteCount: number;
//   dynamicForm: FormGroup;
//   IsSubmit = false;
//   dynamicModalType: any;
//   dynamicModalHeader: any;
//   intentId: any;
//   userId: any;
//   requestAuthority: any;
//   issueRequestExpand: any;
//   userApproval: any;
//   releaseConfirmation: any;
//   releaseConfirmationList: any;
//   user: GetUserForEditOutput;
//   usersAll: Array<any>;
//   userpic: any;
//   constructor(
//       private indentRequestFormProxy: IntentRequestFormServiceProxy,
//       injector: Injector,
//       private intentRequestItemService: RequestedItemServiceProxy,
//       private storeReleaseServiceProxy: StoreReleaseServiceProxy,
//       private warehouseProxy: WareHouseServiceProxy,
//       private EqisremarksProxy: EqisRemarkServiceProxy,
//       private eqisCommentProxy: EqisCommentServiceProxy,
//       private eqisNoteProxy: EqisNoteServiceProxy,
//       private userServiceProxy: UserServiceProxy,
//       private encryptionDecryptionService: EncryptionDecryptionService,
//       private _profileServiceProxy: ProfileServiceProxy,
//       private storeReleaseConfirmationServiceProxy: StoreReleaseConfirmationServiceProxy
//   ) {
//       super(injector);
//       this.indentRequestForm = [];
//       this.indentRequestFormBak = [];
//       this.intentItems = [];
//       this.usersAll = [];
//       this.userpic = [];

//       this.dynamicForm = new FormGroup({
//           Text: new FormControl('', Validators.required),
//       });
//       this.dynamicModalHeader = '';
//       this.noteText = '';
//       this.comment = null;
//       this.commentCount = 0;
//       this.noteCount = 0;
//       this.remarkCount = 0;
//       this.IsSubmit = false;
//       this.warehouselist = [];
//       this.organizationlist = [];
//   }
//   ngOnInit(): void {
//       this.getAllUsers();
//       this.getAllIndent('');
//       this.getStoreReleaseConfirmation();
//       this.warehouselist = JSON.parse(localStorage.getItem('warehouse'));
//       this.organizationlist = JSON.parse(localStorage.getItem('OrganizationUnit'));
//   }
//   AddAuthorizationForm(intentId: number) {
//       this.authorityNumber.openAuthoritymodel(intentId);
//   }
//   AddIssueRequest(IssueRequest: any) {
//       this.issueRequest.openRequestIssuemodel(IssueRequest.id);
//   }
//   AddIssueProvision(intentId: number, issueDepot: number, issueOrderId: number, wherehouseNumber: number) {
//       this.issueProvision.openIssueProvisiosmodel(intentId, issueDepot, issueOrderId, wherehouseNumber);
//   }
//   AddStoreRelease(storereleasForm: any) {
//       this.createStoreRelease.openStoreReleaseModel(storereleasForm.id, storereleasForm.organizationUnitId);
//   }

//   addStoreReleaseConfirmation(storereleasForm: any) {
//     this.releaseConfimation.openReleaseStore(storereleasForm.id);
//   }

//   addReleaseStore(storereleasForm: any) {
//       this.addStoreRelease.addReleaseStore(storereleasForm.id, storereleasForm.organizationUnitId);
//   }

//   getReleaseStore(){
//       this.storeReleaseServiceProxy.getAll(undefined, this.appSession.tenantId, undefined, this.commonUtility.organizationId, undefined, 0, 1000).subscribe(res =>{
//           this.releaseStoreList = res.items;
//       })
//   }

//   getStoreReleaseConfirmation(){
//     this.storeReleaseConfirmationServiceProxy.getAll(this.appSession.tenantId, undefined, undefined, undefined, 0, 1000).subscribe(res =>{
//        this.releaseConfirmationList = res.items;
//        console.log(res.items);
//     })
//   }
//   paginate(event) {
//       this.first = event.first;
//       this.maxResultCount = (this.first + 1) * this.row; //10
//       this.skipCount = this.first * this.row;
//       console.log(this.first);
//       console.log(this.row);
//   }
//   getAllIndent(search) {
//       this.isLoading = true;
//       this.indentRequestFormProxy
//           .getAll(search, this.appSession.tenantId, undefined, undefined, undefined, 0, 1000)
//           .subscribe((data) => {
//             this._profileServiceProxy.getProfilePicture().subscribe(result => {
//                 if (result && result.profilePicture) {
//                     this.profilePicture = 'data:image/jpeg;base64,' + result.profilePicture;
//                     this.userName = this.appSession.user.userName;
//                     this.indentRequestForm = data.items;
//                     this.indentRequestFormBak = data.items;
//                     this.isLoading = false;
//                 }
//             });
//           });
//   }

//   getAllUsers() {
//       let object = new GetUsersInput();
//       object.skipCount = 0;
//       object.sorting = undefined;
//       object.filter = undefined;
//       object.maxResultCount = 1000;
//       object.role = undefined;
//       object.permissions = undefined;
//       this.userServiceProxy.getUsers(object).subscribe(data => {
//           let list = [];
//           if (data) {
//           this.usersAll = data.items;
//           }
//       });
//   }

//   getProfilePic(Id) {
//       // this._profileServiceProxy.getProfilePictureByUser(Id).subscribe((result) => {
//       //     if (result && result.profilePicture) {
//       //         this.profilePicture = 'data:image/jpeg;base64,' + result.profilePicture;
//       //     }
//       // });

//       return 'data:image/jpeg;base64,' + this.usersAll.filter(x => x.id === Id).map(x => x.profilePhoto).shift();

//   }

//   getUserName(Id) {
//       return this.usersAll.filter(x => x.id === Id).map(x => x.userName).shift();
//   }

//   intentUserApproval(authorityForm: Array<RequestAuthorityFormDto>) {
//       let List = [];
//       let currentElement = this;
//       if (authorityForm.length > 0){
//       authorityForm.forEach(element => {
//          let approvalUserId = element.userApproval.map(item => {
//          let userName = this.usersAll.filter(x => x.id === item.aprovvaledUserId).map(x => x.userName).shift();
//          let profilePicture = 'data:image/jpeg;base64,' + this.usersAll.filter(x => x.id === item.aprovvaledUserId).map(x => x.profilePhoto).shift();
//          let dateTime = item.approvalDateTime;
//          List.push({
//           approvalName: userName,
//           approvalPic: profilePicture,
//           approvalDate: dateTime
//          });
//          });
         
//       });
//   } else {
//       List.push({
//           approvalName: '',
//           approvalPic: '',
//           approvalDate: ''
//          });
//   }
//       return List;
//   }


//   getVoucherType(id) {
//       let vouchername = '';
//       if (id === VoucherToType.Brigade) {
//           vouchername = 'Brigade';
//       } else if (id === VoucherToType.User) {
//           vouchername = 'User';
//       } else if (id === VoucherToType.WearHouse) {
//           vouchername = 'Warehouse';
//       } else if (id === VoucherToType.Division) {
//           vouchername = 'Division';
//       } else if (id === VoucherToType.OrganizationUnit) {
//           vouchername = 'OrganizationUnit';
//       } else if (id === VoucherToType.Unit) {
//           vouchername = 'Unit';
//       }
//       return vouchername;
//   }
//   getInantReason(id) {
//       switch (id) {
//           case 1:
//               return 'A';
//           case 2:
//               return 'B';
//           default:
//               return 'C';
//       }
//   }

//   onExpandRow(item: any) {
//       this.intentRequestItemService
//           .getAll(this.appSession.tenantId, undefined, item.id, undefined, 0, 1000)
//           .subscribe((data) => {
//               this.intentItems = [];
//               this.intentItems = data.items;
//               console.log(data.items)
//           });
//       this.getRowIntentReason(item);
//       this.getIntentRemark(item.id);
//       this.getIntentComment(item.id);
//       this.getIntentNote(item.id);
//       this.getUserDetail(item.creatorUserId);
//   }
//   getRowIntentReason(item) {
//       let reason = '';
//       if (ReasonForIndent.To_replace_unserviceable === item.reasonForIndent) {
//           reason = 'To Replace Unserviceable';
//       } else if (ReasonForIndent.Storeholding_units === item.reasonForIndent) {
//           reason = 'Store Holding Unit';
//       } else if (ReasonForIndent.Workshop_Repair_Programme === item.reasonForIndent) {
//           reason = 'Work Shop Repair Program';
//       } else if (ReasonForIndent.To_complete_Initial_Scale_Famto_Fatso_CES === item.reasonForIndent) {
//           reason = 'Complete Initial Scale Famto Fatso CES';
//       } else if (ReasonForIndent.In_excess_of_scale === item.reasonForIndent) {
//           reason = 'In Excess Of Scale';
//       } else if (ReasonForIndent.On_payment === item.reasonForIndent) {
//           reason = 'On Payment';
//       } else if (ReasonForIndent.To_replace_stores_last_stolen_or_damaged_by_neglect === item.reasonForIndent) {
//           reason = 'Replace Stores Last Stolen';
//       } else if (ReasonForIndent.Stores_required_for_authorised_Projects === item.reasonForIndent) {
//           reason = 'Stores Required For Authorized Project';
//       }
//       this.intentReasonText = reason;
//   }

//   modalAuthorityNumberForm() {
//       this.authorityNumber.openAuthoritymodel();
//   }
//   onauthorizationExpandRow(item) {
//       this.issueRequestList = item.issueRequest;
//   }

//   onIssueRequestExpandRow(item){
//     this.issueRequestExpand = item.issueRequest
//   }
//   getWarehouse(Id) {
//       this.warehouseProxy.get(Id).subscribe((data) => {
//           if (data) {
//               return data.name;
//           }
//       });
//   }
//   showdynamicModal(intentId, type) {
//       this.intentId = intentId;
//       if (type === '1') {
//           this.dynamicModalHeader = 'Enter Your Remarks';
//       } else if (type === '2') {
//           this.dynamicModalHeader = 'Enter Your Comment';
//       } else if (type === '3') {
//           this.dynamicModalHeader = 'Enter Your Note';
//       }

//       this.dynamicModalType = type;
//       this.dynamicModal2.show();
//   }
//   getIntentRemark(intentId) {
//       this.EqisremarksProxy.getAll(
//           this.appSession.tenantId,
//           undefined,
//           intentId,
//           undefined,
//           undefined,
//           undefined,
//           undefined,
//           undefined,
//           undefined,
//           undefined,
//           RemarkType.Indent,
//           undefined,
//           0,
//           1000
//       ).subscribe((data) => {
//           if (data.items.length > 0) {
//               this.remarksText = data.items[0].remarkDescription;
//               this.remarkCount = data.totalCount;
//           } else {
//               this.remarkCount = 0;
//               this.remarksText = '';
//           }
//       });
//   }
//   getIntentComment(intentId) {
//       this.eqisCommentProxy
//           .getAll(
//               this.appSession.tenantId,
//               undefined,
//               intentId,
//               undefined,
//               undefined,
//               undefined,
//               undefined,
//               undefined,
//               undefined,
//               undefined,
//               0,
//               1000
//           )
//           .subscribe((data) => {
//               if (data.items.length > 0) {
//                   this.comment = data.items[0];
//                   this.commentCount = data.totalCount;
//               } else {
//                   this.commentCount = 0;
//                   this.comment = null;
//               }
//           });
//   }
//   getIntentNote(intentId) {
//       this.eqisNoteProxy
//           .getAll(
//               this.appSession.tenantId,
//               undefined,
//               intentId,
//               undefined,
//               undefined,
//               undefined,
//               undefined,
//               undefined,
//               undefined,
//               0,
//               1000
//           )
//           .subscribe((data) => {
//               if (data.items.length > 0) {
//                   this.noteText = data.items[0].noteDescription;
//                   this.noteCount = data.totalCount;
//               } else {
//                   this.noteCount = 0;
//                   this.noteText = '';
//               }
//           });
//   }
//   closedynamicmodal() {
//       this.dynamicModal2.hide();
//   }
//   submitdynamicmodal() {
//       this.IsSubmit = true;
//       if (this.dynamicModalType === '1') {
//           this.createIntentRemark();
//       } else if (this.dynamicModalType === '2') {
//           this.createIntentComment();
//       } else if (this.dynamicModalType === '3') {
//           this.createIntentNote();
//       }
//   }
//   isValid(control: any): boolean {
//       return control.hasError('required') && (control.dirty || control.touched);
//   }
//   createIntentRemark() {
//       let input = new CreateEpicRemarkInput();
//       input.intentAssignId = this.intentId;
//       input.remarkDescription = this.dynamicForm.get('Text').value;
//       input.tenantId = this.appSession.tenantId;
//       input.remarkType = RemarkType.Indent;
//       input.createdBy = this.appSession.user.name;
//       this.EqisremarksProxy.create(input).subscribe((data) => {
//           if (data) {
//               this.getIntentRemark(this.intentId);
//               this.resetDynamicModal();
//           }
//       });
//   }
//   createIntentComment() {
//       let input = new CreateEqisCommentInput();
//       input.intentAssignId = this.intentId;
//       input.noteDescription = this.dynamicForm.get('Text').value;
//       input.tenantId = this.appSession.tenantId;
//       input.commentType = CommentType.Indent;
//       input.createdBy = this.appSession.user.name;
//       this.eqisCommentProxy.create(input).subscribe((data) => {
//           if (data) {
//               this.getIntentComment(this.intentId);
//               this.resetDynamicModal();
//           }
//       });
//   }
//   createIntentNote() {
//       let input = new CreateEpicNoteInput();
//       input.intentAssignId = this.intentId;
//       input.noteDescription = this.dynamicForm.get('Text').value;
//       input.tenantId = this.appSession.tenantId;
//       input.noteType = NoteType.Indent;
//       input.createdBy = this.appSession.user.name;
//       this.eqisNoteProxy.create(input).subscribe((data) => {
//           if (data) {
//               this.getIntentNote(this.intentId);
//               this.resetDynamicModal();
//           }
//       });
//   }
//   getUserDetail(Id) {
//       this.userServiceProxy.getUserForEdit(Id).subscribe((data) => {
//           if (data) {
//               this.user = data;
//           }
//       });
//   }
//   getuserName() {
//       return this.user.user.name + ' ' + this.user.user.surname;
//   }
//   getUserRole() {
//       let roles = this.user.roles;
//       if (roles) {
//           return roles
//               .filter((x) => x.isAssigned === true)
//               .map((x) => x.roleDisplayName)
//               .join(' | ');
//       }
//   }
//   resetDynamicModal() {
//       this.dynamicForm.reset();
//       this.dynamicModal2.hide();
//       this.IsSubmit = false;
//   }
//   getCategoryPartNo(Id) {
//       if (Id === '1') {
//           return 'Depot';
//       } else {
//           return 'BOD';
//       }
//   }
//   getwarehouse(Id) {
//       if (this.warehouselist) {
//           return this.warehouselist
//               .filter((x) => x.id === Id)
//               .map((data) => data.name)
//               .shift();
//       }
//   }

  
//   getOrganization(Id) {
//       if (this.organizationlist) {
//           return this.organizationlist
//               .filter((x) => x.id === Id)
//               .map((data) => data.displayName)
//               .shift();
//       }
//   }
//   getItem(Id) {
//       if (this.intentItems) {
//           let item = this.intentItems
//               .filter((x) => x.itemId === Id)
//               .map((data) => data.item)
//               .shift();
//           if (item) {
//               return this.decryptItemName(item);
//           }
//           return '';
//       }
//   }
//   checkIssueRequest(item) {
//       if (item) {
//           return item.requestAuthorityForm.some((x) => x.issueRequest.length > 0);
//       }
//       return false;
//   }
//   checkIssueProvision(item) {
//       if (item) {
//           let authority = item.requestAuthorityForm.find((x) => x.issueRequest);
//           if (authority) {
//               return authority.issueRequest.some((x) => x.issueProvision.length > 0);
//           }
//       }
//       return false;
//   }
//   decryptItemName(item) {
//       try {
//           const data = this.encryptionDecryptionService.decrypt(item.itemName);
//           return data;
//       } catch (err) {}
//   }
// }
