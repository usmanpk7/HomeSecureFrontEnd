// import { Component, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
// import { EqisDropDownModel } from '@app/shared/custom/eqis-dropdown/eqis-dropdown.model';
// import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
// import { AppComponentBase } from '@shared/common/app-component-base';

// import { FooterActionButton } from '../indent-dashboard/model/footer-action-button';
// import {
//     LowLevelItemServiceProxy,
//     UserServiceProxy,
//     BrigadeServiceProxy,
//     CommentType,
//     CreateEpicNoteInput,
//     CreateEpicRemarkInput,
//     CreateEqisCommentInput,
//     DivisionServiceProxy,
//     EqisCommentDto,
//     EqisCommentServiceProxy,
//     EqisNoteServiceProxy,
//     EqisRemarkServiceProxy,
//     GetUserForEditOutput,
//     IntentRequestFormServiceProxy,
//     NoteType,
//     OrganizationUnitServiceProxy,
//     ReasonForIndent,
//     RemarkType,
//     RequestedItemServiceProxy,
//     UnitServiceProxy,
//     VoucherToType,
//     WareHouseServiceProxy,
//     CriticalLowItemDto,
//     EncryptionkeyServiceProxy,
// } from '@shared/service-proxies/service-proxies';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { DateTimeService } from '@app/shared/common/timing/date-time.service';
// import { DataSharedService } from '@app/shared/services/data-shared-service';
// import { EncryptionDecryptionService } from '@shared/encryption-decryption.service';
// import { AuthorityNumberModelComponent } from '../authority-number/authority-number-model/authority-number-model.component';
// import { CreateIntentFormComponent } from '../indent-dashboard/create-intent-form/create-intent-form.component';
// import { CreateIssueRequestComponent } from '../indent-dashboard/issue-request/create-issue-request.component';
// import { CreateDispatchComponent } from '../indent-dashboard/store-dispatch/create-dispatch.component';
// import { CreateStoreComponent } from '../indent-dashboard/StoreReleaseDispatch/create-store/create-store.component';
// import { IssueProvisiosComponent } from '../IssueProvisios/IssueProvisios.component';
// import { DateTime } from 'luxon';
// import { AnalyticsDetailCards, criticallowItems } from '@app/model/storeDashboardData';
// import { TreeNode } from 'primeng/api';
// import { StockListComponent } from './stock-list/stock-list.component';

// @Component({
//     selector: 'app-stock',
//     templateUrl: './stock.component.html',
//     styleUrls: ['./stock.component.css'],
// })
// export class StockComponent extends AppComponentBase implements OnInit {
//     @ViewChild('createIntentFormComponent', { static: true }) createIntentFormComponent: CreateIntentFormComponent;
//     @ViewChild('authorityNumber', { static: true }) authorityNumber: AuthorityNumberModelComponent;
//     @ViewChild('createStoreRelease', { static: true }) createStoreRelease: CreateStoreComponent;
//     @ViewChild('IssueProvision', { static: true }) IssueProvision: IssueProvisiosComponent;
//     @ViewChild('issueRequest', { static: true }) issueRequest: CreateIssueRequestComponent;
//     @ViewChild('createDispatch', { static: true }) createDispatch: CreateDispatchComponent;
//     @ViewChild('dynamicModal', { static: true }) dynamicModal: DailogComponent;
//     @ViewChild('search') searchData: StockListComponent;
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
//     tab: any;
//     dynamicForm: FormGroup;
//     getCriticalLowItemList: any;
//     footerActionButton: Array<FooterActionButton>;
//     first = 0;
//     row = 10;
//     skipCount = 0;
//     maxResultCount = 1;
//     LowlevelItems:CriticalLowItemDto;
//     NodesDetail:criticallowItems;
//     CriticleNodes:TreeNode[]=[];
//     CriticleNodes1: TreeNode[] = [];
//     CriticleNodesChilds:TreeNode[]=[];
//     CriticleNodesChilds1: TreeNode[]=[];
//     outofStockNodes:TreeNode[]=[];
//     outofStockNodesChilds:TreeNode[]=[];
//     ExpiredNodes:TreeNode[]=[];
//     ExpiredNodesChilds:TreeNode[]=[];
//     itemAnalytics: AnalyticsDetailCards;
//     Loading = false;

//     dynamicModalHeader: any;
//     intentId: any;
//     displayResponsive: boolean;
//     dynamicModalType: any;
//     IsSubmit: boolean;
//     user: GetUserForEditOutput;
//     intentAnalyticsResult: any;
//     organizationUnitId: any;
//     fromDate: DateTime;
//     toDate: any;
//     warehouseId: any;
//     encryptionKeys: any;
//     constructor(
//         private indentRequestFormProxy: IntentRequestFormServiceProxy,
//         injector: Injector,
//         private orignizationService: OrganizationUnitServiceProxy,
//         private unitService: UnitServiceProxy,
//         private warehouseService: WareHouseServiceProxy,
//         private divisionService: DivisionServiceProxy,
//         private brigadeService: BrigadeServiceProxy,
//         private intentRequestItemService: RequestedItemServiceProxy,
//         private lowLevelItemServiceProxy: LowLevelItemServiceProxy,
//         private EqisremarksProxy: EqisRemarkServiceProxy,
//         private eqisCommentProxy: EqisCommentServiceProxy,
//         private eqisNoteProxy: EqisNoteServiceProxy,
//         private userServiceProxy: UserServiceProxy,
//         private encryptionDecryptionService: EncryptionDecryptionService,
//         private encryptionKeyService: EncryptionkeyServiceProxy,
//         private _IntentRequestFormServiceProxy: IntentRequestFormServiceProxy,
//         private dataSharedService: DataSharedService
//     ) {
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
//         this.intentAnalyticsResult = {
//             totalMissingItem: 0,
//             totalItemsInStock: 0,
//             totalItemsDisplace: 0,
//             totalItemsIssued: 0,
//             totalItemsUnAuthorized: 0,
//             totalItemsReturned: 0,
//         };
//         this.itemAnalytics = {
//             lowStores: [],
//             criticalLowStores:   [],
//             outOfStock:  [],
//             expiredStock:  []
//     };
//       //  this.dataSharedService.dataChanged.subscribe((changed) => this.changedSubscriber(changed));
//     }
//     @ViewChild('storeCreate', { static: true }) storeCreate: DailogComponent;
//     ngOnInit(): void {
//         this.getCriticalLowItem();
//         this.getAllEncryptionKeys();
//         this.geIntentAnalytics();
//         this.getItemAnalytics();
//         this.footerActionButton = [
//             new FooterActionButton('Create Intent Form', 'createIntent', 'fa fa-caret-down'),
//             new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
//             new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
//         ];
//     }

//     SearchValue($event){
//         this.searchData.table.filterGlobal($event, 'contains')
//     }
//     //Analytics functions
//     geIntentAnalytics() {
//         this._IntentRequestFormServiceProxy
//             .getIndentProcessAnalytics(
//                 this.appSession.tenantId,
//                 this.fromDate,
//                 this.toDate,
//                 this.organizationUnitId,
//                 undefined,
//                 this.warehouseId,
//                 this.appSession.userId
//             )
//             .subscribe((data) => {
//                 this.intentAnalyticsResult = data;
//             });
//     }
//     getAllIndent(search) {
//         // let t = this.skipCount;
//         // let t2 = this.maxResultCount;
//         this.isLoading = true;
//         this.indentRequestFormProxy
//             .getAll(search, this.appSession.tenantId, undefined, undefined, undefined, 0, 1000)
//             .subscribe((data) => {
//                 this.indentRequestFomr = data.items;
//                 this.indentRequestFormBak = data.items;
//                 this.isLoading = false;
//             });
//     }

//     getItemAnalytics() {
//         this.Loading = true;
//    let orgId = JSON.parse(localStorage.getItem('OrganizationUnit'));
//         this.lowLevelItemServiceProxy.getCriticalLowItem(this.appSession.tenantId, undefined, undefined, this.commonUtility.organizationId).subscribe(data => {
//             this.intentAnalyticsResult = data;
//             this.getItemAnalyticsDetail(data);
//            this.Loading = false;
//         });
//     }
//    getItemAnalyticsDetail(data: CriticalLowItemDto) {
//         this.lowLevelItemServiceProxy.getCriticalLowItem(this.appSession.tenantId,undefined,undefined,undefined).subscribe((data:CriticalLowItemDto)=>{
//             this.LowlevelItems=data;
//             if(this.LowlevelItems.totalLowLevelCriticalItems > 0)
//             {
//                 for(let criticallow=0;criticallow<this.LowlevelItems.lowLevelCriticalItemDetails.length;criticallow++)
//                 {
//                     this.CriticleNodesChilds=[];
//                     if(this.LowlevelItems.lowLevelCriticalItemDetails[criticallow]?.item.sku) {
//                    this.CriticleNodesChilds.push({key:criticallow.toString(),
//                         label:this.encryptionDecryptionService.decrypt(this.LowlevelItems.lowLevelCriticalItemDetails[criticallow]?.item.sku) || 'item-sku',
//                         data:(criticallow+1).toString(),
//                         type:'default1',
//                     })
//                     this.CriticleNodes.push({
//                         label:this.encryptionDecryptionService.decrypt(this.LowlevelItems.lowLevelCriticalItemDetails[criticallow]?.item.itemName) || 'item-0',
//                         icon:this.LowlevelItems?.lowLevelCriticalItemDetails[criticallow]?.item.itemImage,
//                         key:criticallow.toString(),
//                         children:this.CriticleNodesChilds
//                     });
//                 }
//                 }
//                 this.itemAnalytics.criticalLowStores = this.CriticleNodes;

//             }

//             if(this.LowlevelItems.totalLowLevelWarningItems > 0) {

//                 for(let lowStore=0;lowStore<this.LowlevelItems.lowlevelwarningitemDetails.length;lowStore++)
//                 {
//                     this.CriticleNodesChilds1=[];
//                     if(this.LowlevelItems.lowlevelwarningitemDetails[lowStore]?.item.sku) {
//                    this.CriticleNodesChilds1.push({key:lowStore.toString(),
//                         label:this.encryptionDecryptionService.decrypt(this.LowlevelItems.lowlevelwarningitemDetails[lowStore]?.item.sku) || 'item-sku1',
//                         data:(lowStore+1).toString(),
//                         type:'default1',
//                     })
//                     this.CriticleNodes1.push({
//                         label:this.encryptionDecryptionService.decrypt(this.LowlevelItems.lowlevelwarningitemDetails[lowStore]?.item.itemName) || 'item-1',
//                         icon:this.LowlevelItems?.lowlevelwarningitemDetails[lowStore]?.item.itemImage,
//                         key:lowStore.toString(),
//                         children:this.CriticleNodesChilds1
//                     });
//                 }

//                 }
//                 this.itemAnalytics.lowStores =  this.CriticleNodes1;
//             }

//             if(this.LowlevelItems.totalOutOFStockItems > 0)
//             {
//                 for(let outofStock=0;outofStock<this.LowlevelItems.totalOutOfItemStockDetails.length;outofStock++)
//                 {
//                     this.outofStockNodesChilds=[];
//                     if(this.LowlevelItems.totalOutOfItemStockDetails[outofStock]?.item.sku) {

//                         this.outofStockNodesChilds.push({key:outofStock.toString(),
//                             label:this.encryptionDecryptionService.decrypt(this.LowlevelItems.totalOutOfItemStockDetails[outofStock]?.item.sku) || 'item-sku2',
//                             data:(outofStock+1).toString(),
//                             type:'default1',
//                         })
//                         this.outofStockNodes.push({
//                             label:this.encryptionDecryptionService.decrypt(this.LowlevelItems.totalOutOfItemStockDetails[outofStock]?.item.itemName) || 'item-2',
//                             icon:this.LowlevelItems?.lowLevelCriticalItemDetails[outofStock]?.item.itemImage,
//                             key:outofStock.toString(),
//                             children:this.outofStockNodesChilds
//                         });
//                     }
//                 }
//                 this.itemAnalytics.outOfStock = this.outofStockNodes;
//             }
//             if(this.LowlevelItems.totalExpiredStockItems > 0)
//             {
//                 for(let expiredStock=0;expiredStock<this.LowlevelItems.totalExpiredStockItemsDetail.length;expiredStock++)
//                 {
//                     this.ExpiredNodesChilds=[];
//                     if(this.LowlevelItems.totalExpiredStockItemsDetail[expiredStock]?.item.sku) {

//                    this.ExpiredNodesChilds.push({key:expiredStock.toString(),
//                         label:this.encryptionDecryptionService.decrypt(this.LowlevelItems.totalExpiredStockItemsDetail[expiredStock]?.item.sku) || 'item-sku3',
//                         data:(expiredStock+1).toString(),
//                         type:'default1',
//                     })
//                     this.ExpiredNodes.push({
//                         label:this.encryptionDecryptionService.decrypt(this.LowlevelItems?.totalExpiredStockItemsDetail[expiredStock]?.item.itemName) || 'item-3',
//                         icon:this.LowlevelItems?.lowLevelCriticalItemDetails[expiredStock]?.item.itemImage,
//                         key:expiredStock.toString(),
//                         children:this.ExpiredNodesChilds
//                     });
//                 }
//                 }
//                 this.itemAnalytics.expiredStock = this.ExpiredNodes;
//             }



//         //     this.itemAnalytics.outOfStock = Node;
//         // this.itemAnalytics.expiredStock = Node;
//         })
//         let NodeList = [];

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
//             return this.encryptionDecryptionService.decrypt(data, keyvalue?.keyValue);
//         } catch (err) {}
//     }

//     paginate(event) {
//         this.first = event.first;
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
//         proxy.subscribe((data) => {});
//     }
//     getInantReason(id) {
//         switch (id) {
//             case 1:
//                 return 'A';
//             case 2:
//                 return 'B';
//             default:
//                 return 'C';
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
//         this.IssueProvision.openIssueProvisiosmodel(0, 0, 0, 0);
//     }

//     searchgridItem(event) {
//         let value = event.target.value;
//         this.getAllIndent(value);
//     }
//     onExpandRow(item: any) {
//         let maxResult = this.first * 10;
//         this.intentRequestItemService
//             .getAll(this.appSession.tenantId, undefined, item.id, undefined, 0, 1000)
//             .subscribe((data) => {
//                 this.intentItems = [];
//                 this.intentItems = data.items;
//             });
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
//         this.authorityNumber.openAuthoritymodel();
//     }
//     modalRequestIssueForm() {
//         this.issueRequest.openRequestIssuemodel(0);
//     }
//     modalStoreReleaseForm() {
//         this.createStoreRelease.openStoreReleaseModel(0, 0);
//     }

//     getCriticalLowItem() {
//         this.lowLevelItemServiceProxy
//             .getCriticalLowItem(this.appSession.tenantId, undefined, this.warehouseId, undefined)
//             .subscribe((data) => {
//                 this.getCriticalLowItemList = data;
//             });
//     }

//     onFooterActionButton(type: string) {
//         if (type === 'createIntent') {
//             this.createIntentFormComponent.openCreateModal();
//         } else if (type === 'stockIssueRequest') {
//             this.IssueProvision.openIssueProvisiosmodel(0, 0, 0, 0);
//         } else if (type === 'createAuthorization') {
//             this.authorityNumber.openAuthoritymodel();
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
//             this.dynamicModalHeader = 'Enter Your Remarks';
//         } else if (type === '2') {
//             this.dynamicModalHeader = 'Enter Your Comment';
//         } else if (type === '3') {
//             this.dynamicModalHeader = 'Enter Your Note';
//         }

//         this.dynamicModalType = type;
//         this.dynamicModal.show();
//     }
//     getIntentRemark(intentId) {
//         this.EqisremarksProxy.getAll(
//             this.appSession.tenantId,
//             undefined,
//             intentId,
//             undefined,
//             undefined,
//             undefined,
//             undefined,
//             undefined,
//             undefined,
//             undefined,
//             RemarkType.Indent,
//             undefined,
//             0,
//             1000
//         ).subscribe((data) => {
//             if (data.items.length > 0) {
//                 this.remarksText = data.items[0].remarkDescription;
//                 this.remarkCount = data.totalCount;
//             } else {
//                 this.remarkCount = 0;
//                 this.remarksText = '';
//             }
//         });
//     }
//     getIntentComment(intentId) {
//         this.eqisCommentProxy
//             .getAll(
//                 this.appSession.tenantId,
//                 undefined,
//                 intentId,
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
//                 if (data.items.length > 0) {
//                     this.comment = data.items[0];
//                     this.commentCount = data.totalCount;
//                 } else {
//                     this.commentCount = 0;
//                     this.comment = null;
//                 }
//             });
//     }
//     getIntentNote(intentId) {
//         this.eqisNoteProxy
//             .getAll(
//                 this.appSession.tenantId,
//                 undefined,
//                 intentId,
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
//                 if (data.items.length > 0) {
//                     this.noteText = data.items[0].noteDescription;
//                     this.noteCount = data.totalCount;
//                 } else {
//                     this.noteCount = 0;
//                     this.noteText = '';
//                 }
//             });
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
//             this.createIntentComment();
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
//         this.EqisremarksProxy.create(input).subscribe((data) => {
//             if (data) {
//                 this.getIntentRemark(this.intentId);
//                 this.resetDynamicModal();
//             }
//         });
//     }
//     createIntentComment() {
//         let input = new CreateEqisCommentInput();
//         input.intentAssignId = this.intentId;
//         input.noteDescription = this.dynamicForm.get('Text').value;
//         input.tenantId = this.appSession.tenantId;
//         input.commentType = CommentType.Indent;
//         input.createdBy = this.appSession.user.name;
//         this.eqisCommentProxy.create(input).subscribe((data) => {
//             if (data) {
//                 this.getIntentComment(this.intentId);
//                 this.resetDynamicModal();
//             }
//         });
//     }
//     createIntentNote() {
//         let input = new CreateEpicNoteInput();
//         input.intentAssignId = this.intentId;
//         input.noteDescription = this.dynamicForm.get('Text').value;
//         input.tenantId = this.appSession.tenantId;
//         input.noteType = NoteType.Indent;
//         input.createdBy = this.appSession.user.name;
//         this.eqisNoteProxy.create(input).subscribe((data) => {
//             if (data) {
//                 this.getIntentNote(this.intentId);
//                 this.resetDynamicModal();
//             }
//         });
//     }
//     getUserDetail(Id) {
//         this.userServiceProxy.getUserForEdit(Id).subscribe((data) => {
//             if (data) {
//                 this.user = data;
//             }
//         });
//     }
//     getuserName() {
//         return this.user.user.name + ' ' + this.user.user.surname;
//     }
//     getUserRole() {
//         let roles = this.user.roles;
//         if (roles) {
//             return roles
//                 .filter((x) => x.isAssigned === true)
//                 .map((x) => x.roleDisplayName)
//                 .join(' | ');
//         }
//     }
//     resetDynamicModal() {
//         this.dynamicForm.reset();
//         this.dynamicModal.hide();
//         this.IsSubmit = false;
//     }

//     decryptItemName(item) {
//         const data = this.encryptionDecryptionService.decrypt(item.itemName);
//         return data;
//     }
//     checkIssueRequest(item) {
//         if (item) {
//             return item.requestAuthorityForm.some((x) => x.issueRequest.length > 0);
//         }
//         return false;
//     }
//     checkIssueProvision(item) {
//         if (item) {
//             let authority = item.requestAuthorityForm.find((x) => x.issueRequest);
//             if (authority) {
//                 return authority.issueRequest.some((x) => x.issueProvision.length > 0);
//             }
//         }
//         return false;
//     }
//     changedSubscriber(data: any) {
//         this.fromDate = data.fromDate;
//         this.toDate = data.toDate;
//         this.organizationUnitId = data.organizationUnit;
//         this.geIntentAnalytics();
//     }
// }
