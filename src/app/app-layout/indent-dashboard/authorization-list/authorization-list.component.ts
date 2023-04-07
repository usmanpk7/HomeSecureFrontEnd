// import { Component, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
// import { EqisDropDownModel } from '@app/shared/custom/eqis-dropdown/eqis-dropdown.model';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { CommentType, CreateEpicNoteInput, CreateEpicRemarkInput, CreateEqisCommentInput, EqisCommentDto, EqisCommentServiceProxy, EqisNoteServiceProxy, EqisRemarkServiceProxy, GetUserForEditOutput, GetUsersInput, IntentRequestFormServiceProxy, IssueRequestDto, IssueRequestServiceProxy, NoteType, ProfileServiceProxy, ReasonForIndent, RemarkType, RequestAuthorityFormDto, RequestedItemServiceProxy, UserServiceProxy, VoucherToType } from '@shared/service-proxies/service-proxies';
// import { AuthorityNumberModelComponent } from '@app/app-layout/authority-number/authority-number-model/authority-number-model.component';
// import { FooterActionButton } from '../model/footer-action-button';
// import { waitForDebugger } from 'inspector';
// import { EncryptionDecryptionService } from '@shared/encryption-decryption.service';
// import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AppConsts } from '@shared/AppConsts';
// import { Table } from 'primeng/table';

// @Component({
//     selector: 'app-authorization-list',
//     templateUrl: './authorization-list.component.html',
//     styleUrls: ['./authorization-list.component.css']
// })
// export class AuthorizationListComponent extends AppComponentBase implements OnInit {
//     profilePicture:string=AppConsts.appBaseUrl + '/assets/common/images/default-profile-picture.png';
//      userName = '';
//     @ViewChild('authorityNumber', { static: true }) authorityNumber: AuthorityNumberModelComponent;
//     @ViewChild('dynamicModal2', { static: true }) dynamicModal: DailogComponent;
//     @ViewChild('dataTable') table: Table;
//     indentRequestForm: any;
//     requestDropDownData: Array<EqisDropDownModel>;
//     indentRequestFormBak: any;
//     intentItems: any;
//     intentReasonText: any;
//     getCriticalLowItemList: any;
//     footerActionButton: Array<FooterActionButton>;
//     issueRequestServiceList: any;
//     first = 0;
//     row = 10;
//     skipCount = 0;
//     maxResultCount = 1;

//     //remarks comment,notes
//     remarksText: any;
//     remarkCount: number;
//     comment: EqisCommentDto;
//     commentCount: number;
//     noteText: any;
//     noteCount: number;
//     dynamicForm: FormGroup;
//     IsSubmit=false;
//     dynamicModalType: any;
//     dynamicModalHeader: any;
//     intentId: any;
//     user: GetUserForEditOutput;
//     usersAll: any;

//     constructor(private indentRequestFormProxy: IntentRequestFormServiceProxy, injector: Injector,
//         private intentRequestItemService: RequestedItemServiceProxy,
//         private encryptionDecryptionService: EncryptionDecryptionService,
//         private EqisremarksProxy: EqisRemarkServiceProxy,
//         private eqisCommentProxy: EqisCommentServiceProxy,
//         private eqisNoteProxy: EqisNoteServiceProxy,
//         private userServiceProxy: UserServiceProxy,
//         private _profileServiceProxy: ProfileServiceProxy,
//         ) {
//         super(injector);
//         this.indentRequestForm = [];
//         this.indentRequestFormBak = [];
//         this.intentItems = [];
//         this.usersAll = [];
//         this.dynamicForm = new FormGroup({
//             Text: new FormControl('', Validators.required)}
//             );
//             this.dynamicModalHeader = '';
//         this.noteText = '';
//         this.comment = null;
//         this.commentCount = 0;
//         this.noteCount = 0;
//         this.remarkCount = 0;
//         this.IsSubmit = false;
//     }
//     ngOnInit(): void {
//         this.getAllUsers();
//         this.getAllIndent('');
//     }
//     AddAuthorizationForm(intentId: number) {
//         this.authorityNumber.openAuthoritymodel(intentId);
//     }
//     paginate(event) {
//         this.first = event.first ;
//         this.maxResultCount = (this.first + 1) * this.row; //10
//         this.skipCount = this.first * this.row;
//         console.log(this.first);
//         console.log(this.row);
//     }
//     getAllIndent(search) {
//         this.isLoading = true;
//         this.indentRequestFormProxy.getAll(search, this.appSession.tenantId, undefined, undefined, undefined, 0, 1000)
//             .subscribe(data => {
//                 this._profileServiceProxy.getProfilePicture().subscribe(result => {
//                     if (result && result.profilePicture) {
//                         this.profilePicture = 'data:image/jpeg;base64,' + result.profilePicture;
//                         this.userName=this.appSession.user.userName;
//                         this.indentRequestForm = data.items;
//                         this.indentRequestFormBak = data.items;
//                         this.isLoading = false;
//                     }
//                 });
//                 // this.indentRequestForm = data.items;
//                 // this.indentRequestFormBak = data.items;
//                 // this.isLoading = false;
//             });
//     }


//     getAllUsers() {
//         let object = new GetUsersInput();
//         object.skipCount = 0;
//         object.sorting = undefined;
//         object.filter = undefined;
//         object.maxResultCount = 1000;
//         object.role = undefined;
//         object.permissions = undefined;
//         this.userServiceProxy.getUsers(object).subscribe(data => {
//             let list = [];
//             if (data) {
//             this.usersAll = data.items;
//             }
//         });
//     }

//     getProfilePic(Id) {
//         return 'data:image/jpeg;base64,' + this.usersAll.filter(x => x.id === Id).map(x => x.profilePhoto).shift();

//     }

//     getUserName(Id) {
//         return this.usersAll.filter(x => x.id === Id).map(x => x.userName).shift();
//     }

    
//     intentUserApproval(authorityForm: Array<RequestAuthorityFormDto>) {
//         let List = [];
//         let currentElement = this;
//         if (authorityForm.length > 0){
//         authorityForm.forEach(element => {
//            let approvalUserId = element.userApproval.map(item => {
//            let userName = this.usersAll.filter(x => x.id === item.aprovvaledUserId).map(x => x.userName).shift();
//            let profilePicture = 'data:image/jpeg;base64,' + this.usersAll.filter(x => x.id === item.aprovvaledUserId).map(x => x.profilePhoto).shift();
//            let dateTime = item.approvalDateTime;
//            List.push({
//             approvalName: userName,
//             approvalPic: profilePicture,
//             approvalDate: dateTime
//            });
//            });
           
//         });
//     } else {
//         List.push({
//             approvalName: '',
//             approvalPic: '',
//             approvalDate: ''
//            });
//     }
//         return List;
//     }

//     getVoucherType(id) {
//         let vouchername = '';
//         if (id === VoucherToType.Brigade) {
//             vouchername = 'Brigade';
//         } else if (id === VoucherToType.User) {
//             vouchername = 'User';
//         } else if (id === VoucherToType.WearHouse) {
//             vouchername = 'Warehouse';
//         } else if (id === VoucherToType.Division) {
//             vouchername = 'Division';
//         } else if (id === VoucherToType.OrganizationUnit) {
//             vouchername = 'OrganizationUnit';
//         } else if (id === VoucherToType.Unit) {
//             vouchername = 'Unit';
//         }
//         return vouchername;
//     }
//     getInantReason(id) {
//         switch (id) {
//             case 1: return 'A';
//             case 2: return 'B';
//             default: return 'C';
//         }
//     }


//     onExpandRow(item: any) {

//         this.intentRequestItemService.getAll(this.appSession.tenantId, undefined, item.id, undefined, 0, 1000).subscribe(data => {
//             this.intentItems = [];
//             this.intentItems = data.items;
//         });
//         this.getRowIntentReason(item);
//         this.getIntentRemark(item.id);
//         this.getIntentComment(item.id);
//         this.getIntentNote(item.id);
//         this.getUserDetail(item.creatorUserId);
//     }
//     getRowIntentReason(item) {
//         let reason = '';
//         if (ReasonForIndent.To_replace_unserviceable === item.reasonForIndent) {
//             reason = 'To Replace Unserviceable';
//         } else if (ReasonForIndent.Storeholding_units === item.reasonForIndent) {
//             reason = 'Store Holding Unit';
//         } else if (ReasonForIndent.Workshop_Repair_Programme === item.reasonForIndent) {
//             reason = 'Work Shop Repair Program';
//         } else if (ReasonForIndent.To_complete_Initial_Scale_Famto_Fatso_CES === item.reasonForIndent) {
//             reason = 'Complete Initial Scale Famto Fatso CES';
//         } else if (ReasonForIndent.In_excess_of_scale === item.reasonForIndent) {
//             reason = 'In Excess Of Scale';
//         } else if (ReasonForIndent.On_payment === item.reasonForIndent) {
//             reason = 'On Payment';
//         } else if (ReasonForIndent.To_replace_stores_last_stolen_or_damaged_by_neglect === item.reasonForIndent) {
//             reason = 'Replace Stores Last Stolen';
//         } else if (ReasonForIndent.Stores_required_for_authorised_Projects === item.reasonForIndent) {
//             reason = 'Stores Required For Authorized Project';
//         }
//         this.intentReasonText = reason;
//     }

//     modalAuthorityNumberForm() {
//         this.authorityNumber.openAuthoritymodel();
//     }

//     showdynamicModal(intentId, type) {
//         this.intentId = intentId;
//         if (type === '1') {
//            this.dynamicModalHeader = 'Enter Your Remarks';
//         } else if (type === '2') {
//             this.dynamicModalHeader = 'Enter Your Comment';
//  } else if (type === '3') {
//             this.dynamicModalHeader = 'Enter Your Note';
//  }

//             this.dynamicModalType = type;
//             this.dynamicModal.show();

//     }
//     getIntentRemark(intentId) {

//         this.EqisremarksProxy.getAll(this.appSession.tenantId, undefined, intentId, undefined, undefined, undefined, undefined, undefined, undefined, undefined, RemarkType.Indent, undefined, 0, 1000).subscribe(data => {
//           if (data.items.length > 0) {
//               this.remarksText = data.items[0].remarkDescription;
//               this.remarkCount = data.totalCount;
//             } else {
//                 this.remarkCount = 0;
//                 this.remarksText = '';
//             }
//         });
//     }
//     getIntentComment(intentId) {

//         this.eqisCommentProxy.getAll(this.appSession.tenantId, undefined, intentId, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 0, 1000).subscribe(data => {
//           if (data.items.length > 0) {
//               this.comment = data.items[0];
//               this.commentCount = data.totalCount;
//             } else {
//                 this.commentCount = 0;
//                 this.comment = null;
//             }
//         });
//     }
//     getIntentNote(intentId) {

//         this.eqisNoteProxy.getAll(this.appSession.tenantId, undefined, intentId, undefined, undefined, undefined, undefined, undefined, undefined, 0, 1000).subscribe(data => {
//           if (data.items.length > 0) {
//               this.noteText = data.items[0].noteDescription;
//               this.noteCount = data.totalCount;
//             } else {
//                 this.noteCount = 0;
//                 this.noteText = '';
//             }
//         });
//     }
//     closedynamicmodal() {
//         this.dynamicModal.hide();
//     }
//     submitdynamicmodal() {
//         this.IsSubmit = true;
//         if (this.dynamicModalType === '1') {
//             this.createIntentRemark();
//         } else if (this.dynamicModalType === '2') {
//              this.createIntentComment();
//         } else if (this.dynamicModalType === '3') {
//             this.createIntentNote();
//         }
//     }
//     isValid(control: any): boolean {
//         return control.hasError('required') && (control.dirty || control.touched);
//     }
//     createIntentRemark() {
//         let input = new CreateEpicRemarkInput();
//         input.intentAssignId = this.intentId;
//         input.remarkDescription = this.dynamicForm.get('Text').value;
//         input.tenantId = this.appSession.tenantId;
//         input.remarkType = RemarkType.Indent;
//         input.createdBy = this.appSession.user.name;
//        this.EqisremarksProxy.create(input).subscribe(data => {
//            if (data) {
//             this.getIntentRemark(this.intentId);
//             this.resetDynamicModal();
//            }

//         });
//     }
//     decryptItemName(item) {
//         const data = this.encryptionDecryptionService.decrypt(item.itemName);
//         return data;
//     }
//     createIntentComment() {
//         let input = new CreateEqisCommentInput();
//         input.intentAssignId = this.intentId;
//         input.noteDescription = this.dynamicForm.get('Text').value;
//         input.tenantId = this.appSession.tenantId;
//         input.commentType = CommentType.Indent;
//         input.createdBy = this.appSession.user.name;
//        this.eqisCommentProxy.create(input).subscribe(data => {
//            if (data) {
//             this.getIntentComment(this.intentId);
//             this.resetDynamicModal();
//            }
//        });
//     }
//     createIntentNote() {
//         let input = new CreateEpicNoteInput();
//         input.intentAssignId = this.intentId;
//         input.noteDescription = this.dynamicForm.get('Text').value;
//         input.tenantId = this.appSession.tenantId;
//         input.noteType = NoteType.Indent;
//         input.createdBy = this.appSession.user.name;
//        this.eqisNoteProxy.create(input).subscribe(data => {
//            if (data) {
//             this.getIntentNote(this.intentId);
//             this.resetDynamicModal();
//            }

//        });
//     }
//     getUserDetail(Id) {
//         this.userServiceProxy.getUserForEdit(Id).subscribe(data => {
//             if (data) {
//                 this.user = data;
//             }
//         });
//     }
//     getuserName() {
//         return this.user.user.name + ' ' + this.user.user.surname;
//     }
//     getUserRole() {
//     let roles = this.user.roles;
//     if (roles) {
//         return roles.filter(x => x.isAssigned === true).map(x => x.roleDisplayName).join(' | ');
//     }
//     }
//     resetDynamicModal() {
//         this.dynamicForm.reset();
//         this.dynamicModal.hide();
//         this.IsSubmit = false;
//     }
//     checkIssueRequest(item){
//         if(item){
//           return item.requestAuthorityForm.some(x=>x.issueRequest.length>0);
//         }
//         return false;
//   }
//   checkIssueProvision(item){
//       if(item){
//           let authority=item.requestAuthorityForm.find(x=>x.issueRequest);
//           if(authority)
//           return authority.issueRequest.some(x=>x.issueProvision.length>0);
//         }
//         return false;
//   }
// }
