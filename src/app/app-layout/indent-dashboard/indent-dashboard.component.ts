// import { Component, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
// import { EqisDropDownModel } from '@app/shared/custom/eqis-dropdown/eqis-dropdown.model';
// import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { BrigadeServiceProxy, CommentDto, CommentType, CreateEpicNoteInput, CreateEpicRemarkInput, CreateEqisCommentInput, CreateNoteInput, DivisionServiceProxy, EncryptionkeyServiceProxy, EqisCommentDto, EqisCommentServiceProxy, EqisNoteServiceProxy, EqisRemarkServiceProxy, GetUserForEditOutput, GetUsersInput, IndentProcessAnalyticsDto, IntentRequestFormServiceProxy, LowLevelItemServiceProxy, NoteType, OrganizationUnitServiceProxy, ProfileServiceProxy, ReasonForIndent, RemarkType, RequestAuthorityFormDto, RequestedItemServiceProxy, UnitServiceProxy, UserServiceProxy, VoucherToType, WareHouseServiceProxy } from '@shared/service-proxies/service-proxies';
// import { CreateIntentFormComponent } from './create-intent-form/create-intent-form.component';
// import { AuthorityNumberModelComponent } from '../authority-number/authority-number-model/authority-number-model.component';

// import { CreateIssueRequestComponent } from './issue-request/create-issue-request.component';
// import { FooterActionButton } from './model/footer-action-button';
// import { CreateStoreComponent } from './StoreReleaseDispatch/create-store/create-store.component';
// import { CreateDispatchComponent } from './store-dispatch/create-dispatch.component';
// import { IssueProvisiosComponent } from '../IssueProvisios/IssueProvisios.component';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { EncryptionDecryptionService } from '@shared/encryption-decryption.service';
// import { DateTimeService } from '@app/shared/common/timing/date-time.service';
// import { DataSharedService } from '@app/shared/services/data-shared-service';
// import { AppConsts } from '@shared/AppConsts';
// import { DateTime } from 'luxon';
// import { HttpClient } from '@angular/common/http';

// @Component({
//     selector: 'app-indent-dashboard',
//     templateUrl: './indent-dashboard.component.html',
//     styleUrls: ['./indent-dashboard.component.css']
// })
// export class IndentDashboardComponent extends AppComponentBase implements OnInit {
//     @ViewChild('createIntentFormComponent', { static: true }) createIntentFormComponent: CreateIntentFormComponent;
//     @ViewChild('authorityNumber', { static: true }) authorityNumber: AuthorityNumberModelComponent;
//     @ViewChild('createStoreRelease', { static: true }) createStoreRelease: CreateStoreComponent;
//     @ViewChild('IssueProvision', { static: true }) IssueProvision: IssueProvisiosComponent;
//     @ViewChild('issueRequest', { static: true }) issueRequest: CreateIssueRequestComponent;
//     @ViewChild('createDispatch', { static: true }) createDispatch: CreateDispatchComponent;
//     @ViewChild('dynamicModal', { static: true }) dynamicModal: DailogComponent;
//     @ViewChild('search') search: any;
//     indentRequestFomr: any;
//     requestDropDownData: Array<EqisDropDownModel>;
//     indentRequestFormBak: any;
//     intentItems: any;
//     intentReasonText: any;
//     remarksText: any;
//     remarkCount: number;
//     comment: EqisCommentDto;
//     commentCount: number;
//     noteText: any;
//     noteCount: number;
//     profilePicture: string = AppConsts.appBaseUrl + '/assets/common/images/default-profile-picture.png';
//     userName = '';
//     tab: any;
//     dynamicForm: FormGroup;
//     getCriticalLowItemList: any;
//     footerActionButton: Array<FooterActionButton>;
//     first = 0;
//     row = 10;
//     skipCount = 0;
//     maxResultCount = 1;
//     encryptionKeys: any;
//     dynamicModalHeader: any;
//     intentId: any;
//     displayResponsive: boolean;
//     dynamicModalType: any;
//     IsSubmit: boolean;
//     user: GetUserForEditOutput;
//     intentAnalyticsResult: any;
//     organizationUnitId: any;
//     fromDate: DateTime;
//     toDate: DateTime;
//     warehouseId: any;
//     usersAll: any;
//     Loading: boolean=false;
//     intentAnalyticsCardResult: any;
//     constructor(private indentRequestFormProxy: IntentRequestFormServiceProxy, injector: Injector,
//         private orignizationService: OrganizationUnitServiceProxy,
//         private warehouseServiceProxy: WareHouseServiceProxy,
//         private http: HttpClient,
//         private organizationUnitsServiceProxy: OrganizationUnitServiceProxy,
//         private unitService: UnitServiceProxy,
//         private _profileServiceProxy: ProfileServiceProxy,
//         private warehouseService: WareHouseServiceProxy,
//         private divisionService: DivisionServiceProxy,
//         private brigadeService: BrigadeServiceProxy,
//         private intentRequestItemService: RequestedItemServiceProxy,
//         private lowLevelItemServiceProxy: LowLevelItemServiceProxy,
//         private EqisremarksProxy: EqisRemarkServiceProxy,
//         private eqisCommentProxy: EqisCommentServiceProxy,
//         private eqisNoteProxy: EqisNoteServiceProxy,
//         private userServiceProxy: UserServiceProxy,
//         private decryptService: EncryptionDecryptionService,
//         private encryptionKeyService: EncryptionkeyServiceProxy,
//         private datetimeservice: DateTimeService,
//         private _IntentRequestFormServiceProxy: IntentRequestFormServiceProxy,
//         private dataSharedService: DataSharedService) {
//         super(injector);
//         this.indentRequestFomr = [];
//         this.indentRequestFormBak = [];
//         this.requestDropDownData = [
//             new EqisDropDownModel('create', 0),
//             new EqisDropDownModel('view', 1),
//             new EqisDropDownModel('report', 2),
//         ];
//         this.intentItems = [];
//         this.intentReasonText = '';
//         this.tab = 1;
//         this.getCriticalLowItemList = [];
//         this.footerActionButton = [];
//         this.dynamicForm = new FormGroup({
//             Text: new FormControl('', Validators.required)}
//             );
//             this.dynamicModalHeader = '';
//             this.displayResponsive = false;
//             this.noteText = '';
//             this.comment = null;
//             this.commentCount = 0;
//             this.noteCount = 0;
//             this.remarkCount = 0;
//             this.IsSubmit = false;
//             this.intentAnalyticsResult = {
//                 totalSubmittedRequestForm: 0,
//                 totalWaitingApproval: 0,
//                 totalApproved: 0,
//                 totalRejected: 0,
//                 totalMyArroval: 0
//             };
//             this.intentAnalyticsCardResult = {
//                 submission: {division: 0, brigades: 0, units: 0},
//                 authorization: {division: 0, brigades: 0, units: 0},
//                 issued: {division: 0, brigades: 0, units: 0},
//                 released: {division: 0, brigades: 0, units: 0},
//                 delivered: {division: 0, brigades: 0, units: 0}
//             };
//             this.geIntentAnalytics();
//             this.dataSharedService.viewTypedataChanged.subscribe((changed: any) => this.changedSubscriber(changed));

//     }
//     @ViewChild('storeCreate', { static: true }) storeCreate: DailogComponent;
//     ngOnInit(): void {
//         this.getAllUsers();
//         this.getCriticalLowItem();
//         this.getAllEncryptionKeys();
//         this.footerActionButton = [
//             new FooterActionButton('Create Intent Form', 'createIntent', 'fa fa-caret-down'),
//             new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
//             new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
//         ];

//     }

//     searchItems($event){
//         this.search.table.filterGlobal($event, 'contains');
//     }
//      //Analytics functions
//      geIntentAnalytics() {
//          this.Loading = true;
//         this._IntentRequestFormServiceProxy.getIndentProcessAnalytics(this.appSession.tenantId, this.fromDate,
//             this.toDate, this.organizationUnitId, undefined, this.warehouseId, this.appSession.userId)
//             .subscribe(data => {

//                 this.intentAnalyticsResult = data;
//                 this.getAnalyticsCardResult(data);
//                 this.Loading = false;
//             });
//     }
//     getAnalyticsCardResult(data: IndentProcessAnalyticsDto) {
//       let divisionIntents = data.submittedRequestFormList.intentRequestFormsList.filter(x =>
//         x.voucherToType === VoucherToType.Division
//         );
//       let brigadesIntents = data.submittedRequestFormList.intentRequestFormsList.filter(x =>
//         x.voucherToType === VoucherToType.Brigade);
//       let unitsIntents = data.submittedRequestFormList.intentRequestFormsList.filter(x =>
//         x.voucherToType === VoucherToType.Unit);
//       //get all forms for divisions
//       this.intentAnalyticsCardResult.submission.division = divisionIntents.length;
//       this.intentAnalyticsCardResult.authorization.division = 0;
//       this.intentAnalyticsCardResult.issued.division = 0;
//       this.intentAnalyticsCardResult.released.division = 0;
//       this.intentAnalyticsCardResult.delivered.division = 0;
//       divisionIntents.forEach(element => {
//         //for authorization
//        let authorityfomrs =  data.submittedRequestFormList.requestAuthorityFormsList.filter(x => x.intentRequestFormId === element.id);
//        this.intentAnalyticsCardResult.authorization.division += authorityfomrs.length;
//        authorityfomrs.forEach(element2 => {
//          //for issue
//        let issueForms = data.submittedRequestFormList.issueRequestsList.filter(x => x.requestAuthorityFormId === element2.id);
//        this.intentAnalyticsCardResult.issued.division += issueForms.length;
//        issueForms.forEach(element3 => {
//           //for release
//         let releaseForms = data.submittedRequestFormList.storeReleasesList.filter(x => x.issueRequestId === element3.id);
//         this.intentAnalyticsCardResult.released.division += releaseForms.length;
//         releaseForms.forEach(element4 => {
//              //for dispatch
//             let releasedispatchForms = data.submittedRequestFormList.storeReleaseDispatchsList.filter(x => x.storeReleaseId === element4.id);
//             this.intentAnalyticsCardResult.delivered.division += releasedispatchForms.length;
//            });
//        });

//     });
//       });
//       ///get all form for brigades
//       this.intentAnalyticsCardResult.submission.brigades = brigadesIntents.length;
//       this.intentAnalyticsCardResult.authorization.brigades = 0;
//       this.intentAnalyticsCardResult.issued.brigades = 0;
//       this.intentAnalyticsCardResult.released.brigades = 0;
//       this.intentAnalyticsCardResult.delivered.brigades = 0;
//       brigadesIntents.forEach(element => {
//           //for authorization
//        let authorityfomrs =  data.submittedRequestFormList.requestAuthorityFormsList.filter(x => x.intentRequestFormId === element.id);
//        this.intentAnalyticsCardResult.authorization.brigades += authorityfomrs.length;
//        authorityfomrs.forEach(element2 => {
//          //for issue
//        let issueForms = data.submittedRequestFormList.issueRequestsList.filter(x => x.requestAuthorityFormId === element2.id);
//        this.intentAnalyticsCardResult.issued.brigades += issueForms.length;
//        issueForms.forEach(element3 => {
//           //for release
//         let releaseForms = data.submittedRequestFormList.storeReleasesList.filter(x => x.issueRequestId === element3.id);
//         this.intentAnalyticsCardResult.released.brigades += releaseForms.length;
//         releaseForms.forEach(element4 => {
//              //for dispatch
//             let releasedispatchForms = data.submittedRequestFormList.storeReleaseDispatchsList.filter(x => x.storeReleaseId === element4.id);
//             this.intentAnalyticsCardResult.delivered.brigades += releasedispatchForms.length;
//            });
//        });

//     });
//     });
//       //get all form for units
//       this.intentAnalyticsCardResult.submission.units = unitsIntents.length;
//       this.intentAnalyticsCardResult.authorization.units = 0;
//       this.intentAnalyticsCardResult.issued.units = 0;
//       this.intentAnalyticsCardResult.released.units = 0;
//       this.intentAnalyticsCardResult.delivered.units = 0;
//       unitsIntents.forEach(element => {
//              //for authorization
//        let authorityfomrs =  data.submittedRequestFormList.requestAuthorityFormsList.filter(x => x.intentRequestFormId === element.id);
//        this.intentAnalyticsCardResult.authorization.units += authorityfomrs.length;
//        authorityfomrs.forEach(element2 => {
//          //for issue
//        let issueForms = data.submittedRequestFormList.issueRequestsList.filter(x => x.requestAuthorityFormId === element2.id);
//        this.intentAnalyticsCardResult.issued.units += issueForms.length;
//        issueForms.forEach(element3 => {
//           //for release
//         let releaseForms = data.submittedRequestFormList.storeReleasesList.filter(x => x.issueRequestId === element3.id);
//         this.intentAnalyticsCardResult.released.units += releaseForms.length;
//         releaseForms.forEach(element4 => {
//              //for dispatch
//             let releasedispatchForms = data.submittedRequestFormList.storeReleaseDispatchsList.filter(x => x.storeReleaseId === element4.id);
//             this.intentAnalyticsCardResult.delivered.units += releasedispatchForms.length;
//            });
//        });

//     });
//     });
//     }
//     getAllIndent(search) {
//         this.isLoading = true;
//         this.indentRequestFormProxy.getAll(search, this.appSession.tenantId, undefined, this.organizationUnitId, undefined, 0, 1000)
//             .subscribe(data => {
//              {
//                     this._profileServiceProxy.getProfilePicture().subscribe(result => {
//                         if (result && result.profilePicture) {
//                             this.profilePicture = 'data:image/jpeg;base64,' + result.profilePicture;
//                             this.userName = this.appSession.user.userName;
//                             this.indentRequestFomr = data.items;
//                             this.indentRequestFormBak = data.items;
//                             this.isLoading = false;
//                         }
//                     });
//                 }


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

//     paginate(event) {
//         this.first = event.first ;
//         this.maxResultCount = (this.first + 1) * this.row; //10
//         this.skipCount = this.first * this.row;
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
//     getVoucher(item) {
//         let vouchername = '';
//         let id = item.voucherToType;
//         let proxy;
//         if (id === VoucherToType.Brigade) {
//             proxy = this.brigadeService.get(item.voucherToBrigadeId);
//         } else if (id === VoucherToType.User) {
//             proxy = this.orignizationService.getOrganizationUnitUsers(item.voucherToUserID, '', 1000, 0);
//         } else if (id === VoucherToType.WearHouse) {
//             proxy = this.warehouseService.get(item.voucherToWearhouseId);
//         } else if (id === VoucherToType.Division) {
//             proxy = this.divisionService.get(item.voucherToDivisionId);
//         } else if (id === VoucherToType.Unit) {
//             proxy = this.unitService.get(item.voucherToUnitId);
//         }
//         proxy.subscribe(data => {
//         });
//     }
//     getInantReason(id) {
//         switch (id) {
//             case 1: return 'A';
//             case 2: return 'B';
//             default: return 'C';
//         }
//     }

//     issueOrderClick() {
//         this.storeCreate.show();
//     }
//     modalIntentCreateForm() {
//         this.createIntentFormComponent.openCreateModal();
//     }
//     onTabChange(event: any) {
//         let currentTab = event.target.parentNode.id;
//         if (currentTab === 'tab1') {
//             this.tab = 1;
//             this.footerActionButton = [
//                 new FooterActionButton('Create Intent Form', 'createIntent', 'fa fa-caret-down'),
//                 new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
//                 new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
//             ];
//         } else if (currentTab === 'tab2') {
//             this.tab = 2;
//             this.footerActionButton = [
//                 new FooterActionButton('Create Authorization', 'createAuthorization', 'fa fa-caret-down'),
//                 new FooterActionButton('Stock Count', 'stockAuthorization', 'fa fa-caret-down'),
//                 new FooterActionButton('Import', 'importAuthorization', 'fa fa-caret-down'),
//             ];
//         } else if (currentTab === 'tab3') {
//             this.tab = 3;
//             this.footerActionButton = [
//                 new FooterActionButton('Create Issue Request', 'createIssueRequest', 'fa fa-caret-down'),
//                 new FooterActionButton('Issue Provision', 'stockIssueRequest', 'fa fa-caret-down'),
//                 new FooterActionButton('Import', 'importIssueRequest', 'fa fa-caret-down'),
//             ];
//         } else if (currentTab === 'tab4') {
//             this.tab = 4;
//             this.footerActionButton = [
//                 new FooterActionButton('Create Release Form', 'createStoreRelease', 'fa fa-caret-down'),
//                 new FooterActionButton('Stock Count', 'stockRelease', 'fa fa-caret-down'),
//                 new FooterActionButton('Import', 'importRelease', 'fa fa-caret-down'),
//             ];
//         } else if (currentTab === 'tab5') {
//             this.tab = 5;
//             this.footerActionButton = [
//                 new FooterActionButton('Create Dispatch Form', 'createDispatch', 'fa fa-caret-down'),
//                 new FooterActionButton('Stock Count', 'stockDispatch', 'fa fa-caret-down'),
//                 new FooterActionButton('Import', 'importDispatch', 'fa fa-caret-down'),
//             ];
//         } else if (currentTab === 'tab6') {
//             this.tab = 6;
//             this.footerActionButton = [];
//         } else {
//             this.tab = 1;
//             this.footerActionButton = [
//                 new FooterActionButton('Create Intent Form', 'createIntent', 'fa fa-caret-down'),
//                 new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
//                 new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
//             ];
//         }
//     }

//     modalIssueProvision() {
//         this.IssueProvision.openIssueProvisiosmodel(0, 0, 0,0);
//     }

//     searchgridItem(event) {
//         let value = event.target.value;
//         this.getAllIndent(value);
//     }
//     onExpandRow(item: any) {
//         let maxResult = this.first * 10;
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
//     close() {
//         this.storeCreate.hide();
//     }
//     modalAuthorityNumberForm() {
//         this.authorityNumber.openAuthoritymodel(0);
//     }
//     modalRequestIssueForm() {
//         this.issueRequest.openRequestIssuemodel(0);


//     }
//     modalStoreReleaseForm() {
//         this.createStoreRelease.openStoreReleaseModel(0, 0);
//     }

//     getCriticalLowItem() {
//          this.lowLevelItemServiceProxy.getCriticalLowItem(this.appSession.tenantId, undefined, undefined, undefined)
//              .subscribe(data => {
//                  this.getCriticalLowItemList = data;
//              });
//     }

//     getAllEncryptionKeys() {
//         this.encryptionKeyService
//             .getAll(this.appSession.tenantId, undefined, undefined, undefined, 0, 1000)
//             .subscribe((data) => {
//                 if (data) {
//                     this.encryptionKeys = data.items;
//                 }
//             });
//     }

//     decryptItem(data: string, keyId: number) {
//         try {
//             let keyvalue = this.encryptionKeys.filter((x) => x.id === keyId).shift();
//             return this.decryptService.decrypt(data, keyvalue?.keyValue);
//         } catch (err) {}
//     }


//     onFooterActionButton(type: string) {
//         if (type === 'createIntent') {
//             this.createIntentFormComponent.openCreateModal();
//         } else if (type === 'stockIssueRequest') {
//             this.IssueProvision.openIssueProvisiosmodel(0, 0, 0,0);
//         } else if (type === 'createAuthorization') {
//             this.authorityNumber.openAuthoritymodel(0);
//         } else if (type === 'createIssueRequest') {
//             this.issueRequest.openRequestIssuemodel(0);
//         } else if (type === 'createStoreRelease') {
//             this.createStoreRelease.openStoreReleaseModel(0, 0);
//         } else if (type === 'createDispatch') {
//             this.createDispatch.openStoreReleaseModel();
//         }

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
//         this.displayResponsive = false;
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

//        });
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

//     decryptItemName(item) {
//         const data =  this.decryptService.decrypt(item.itemName);
//         return data;
//     }
//     checkIssueRequest(item) {
//           if (item) {
//             return item.requestAuthorityForm.some(x => x.issueRequest.length > 0);
//           }
//           return false;
//     }
//     checkIssueProvision(item) {
//         if (item) {
//             let authority = item.requestAuthorityForm.find(x => x.issueRequest);
//             if (authority) {
//             return authority.issueRequest.some(x => x.issueProvision.length > 0);
//           }
//         }
//           return false;
//     }
//     changedSubscriber(data: any) {
//         this.fromDate = data.fromDate;
//         this.toDate = data.toDate;
//         this.organizationUnitId = data.organizationUnit;
//         this.geIntentAnalytics();
//         this.getAllIndent('');
//     }
//     gridload() {
//         this.getAllIndent('');
//     }
// }
