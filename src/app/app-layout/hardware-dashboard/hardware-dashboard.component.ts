// import { Component, Injector, OnInit, ViewChild } from '@angular/core';
// import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
// import { AppComponentBase } from '@shared/common/app-component-base';

// import { FooterActionButton } from '../indent-dashboard/model/footer-action-button';
// import { IntentRequestFormServiceProxy, OrganizationUnitServiceProxy, RequestedItemServiceProxy, DeviceModelServiceProxy, DeviceServiceProxy } from '@shared/service-proxies/service-proxies';
// import { FormGroup } from '@angular/forms';
// import { DateTimeService } from '@app/shared/common/timing/date-time.service';
// import { DataSharedService } from '@app/shared/services/data-shared-service';
// import { EncryptionDecryptionService } from '@shared/encryption-decryption.service';
// import { CreateIssueRequestComponent } from '../indent-dashboard/issue-request/create-issue-request.component';
// import { CreateDispatchComponent } from '../indent-dashboard/store-dispatch/create-dispatch.component';
// import { IssueProvisiosComponent } from '../IssueProvisios/IssueProvisios.component';
// import { CreateDeviceFormComponent } from './create-device-form/create-device-form.component';
// import { CreateModalFormComponent } from './create-modal-form/create-modal-form.component';
// import { CreateAntennaFormComponent } from './create-antenna-form/create-antenna-form.component';
// import { CreateAntennaWarehouseFormComponent } from './create-antenna-warehouse-form/create-antenna-warehouse-form.component';


// @Component({
//     selector: 'app-hardware-dashboard',
//     templateUrl: './hardware-dashboard.component.html',
//     styleUrls: ['./hardware-dashboard.component.css']
// })
// export class HardwareDashboardComponent extends AppComponentBase implements OnInit {

//     @ViewChild('createDevice', { static: true }) createDevice: CreateDeviceFormComponent;
//     @ViewChild('createwarehousemodal', {static: true}) createwarehousemodal: CreateAntennaWarehouseFormComponent;
//     @ViewChild('createModalForm', { static: true }) createModalForm: CreateModalFormComponent;
//     @ViewChild('CreateAntennaModal', { static: true }) CreateAntennaModal: CreateAntennaFormComponent;
//     @ViewChild('dynamicModal', { static: true }) dynamicModal: DailogComponent;
//     @ViewChild('device') deviceSerch: any;
//     footerActionButton: Array<FooterActionButton>;
//     OrganizationUnits: any = [];
//     indentRequestFomr: any;
//     indentRequestFormBak: any;
//     first = 0;
//     row = 10;
//     skipCount = 0;
//     maxResultCount = 1;
//     deviceAnalytics: any;
//     tab: any;
//     dynamicForm: FormGroup;
//     displayResponsive: boolean;
//     dynamicModalType: any;
//     intentItems: any;
//     organizationUnitId: any;
//     fromDate: Date;
//     categoryTab: any;
//     toDate: any;
//     IsSubmit: boolean;
//     deviceType = [
//         {
//             name: 'Sensors',
//             id: 1
//         },
//         {
//             name: 'FixedReader',
//             id: 2
//         },
//         {
//             name: 'MobileReader',
//             id: 3
//         },
//         {
//             name: 'EqisTag',
//             id: 4
//         },
//         {
//             name: 'Lock',
//             id: 5
//         }
//     ];
//     Loading = false;

//     constructor(injector: Injector,
//         private intentRequestItemService: RequestedItemServiceProxy,
//         private indentRequestFormProxy: IntentRequestFormServiceProxy,
//         private encryptionDecryptionService: EncryptionDecryptionService,
//         private _deviceModelServiceProxy: DeviceModelServiceProxy,
//         private _deviceServiceProxy: DeviceServiceProxy,
//         private datetimeservice: DateTimeService,
//         private _organizationUnitServiceProxy: OrganizationUnitServiceProxy,
//         private dataSharedService: DataSharedService) {
//         super(injector);
//         this.isLoading = false;
//         this.indentRequestFomr = [];
//         this.categoryTab = 1;
//         this.tab = 1;
//         this.indentRequestFormBak = [];
//         this.deviceAnalytics = {
//             totalMissingItem: 0,
//             totalItemsInStock: 0,
//             totalItemsDisplace: 0,
//             totalItemsIssued: 0,
//             totalItemsUnAuthorized: 0,
//             totalItemsReturned: 0
//         };
//         this.dataSharedService.dataChanged.subscribe(changed => this.changedSubscriber(changed));
//     }
//     @ViewChild('storeCreate', { static: true }) storeCreate: DailogComponent;
//     ngOnInit(): void {

//         this.getDeviceAnalytics();
//         this.getOrganizationUnit();
//         this.getDeviceModal();
//         this.getDeviceType();
//         this.footerActionButton = [
//             new FooterActionButton('Create Device Form', 'createDevice', 'fa fa-caret-down'),
//             new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
//             new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
//         ];

//     }

//     searchDevices($event){
//         this.deviceSerch.search.table.filterGlobal($event, 'contains')
//     }

//     getDeviceAnalytics() {
//         this.Loading = true;
//         this._deviceServiceProxy.getDeviceAnalytices(this.appSession.tenantId, undefined, undefined, undefined)
//             .subscribe(data => {

//                 this.deviceAnalytics = data;
//                 console.log(data);
//                 this.Loading = false;
//             });
//     }

//     issueOrderClick() {
//         this.storeCreate.show();
//     }
//     modalIntentCreateForm() {
//         this.createDevice.openDeviceModal();
//     }
//     onTabChange(event: any) {
//         let currentTab = event.target.parentNode.id;
//         if (currentTab === 'tab1') {
//             this.tab = 1;
//             this.footerActionButton = [
//                 new FooterActionButton('Create device Form', '', 'fa fa-caret-down'),
//                 new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
//                 new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
//             ];
//         } else if (currentTab === 'tab2') {
//             this.tab = 2;
//             this.footerActionButton = [
//                 new FooterActionButton('Create Model', 'createDeviceModal', 'fa fa-caret-down'),
//                 new FooterActionButton('Stock Count', 'stockAuthorization', 'fa fa-caret-down'),
//                 new FooterActionButton('Import', 'importAuthorization', 'fa fa-caret-down'),
//             ];
//         } else if (currentTab === 'tab3') {
//             this.tab = 3;
//             this.footerActionButton = [
//                 new FooterActionButton('Create Antenna', 'CreateAntennaModal', 'fa fa-caret-down'),
//                 new FooterActionButton('Issue Provision', 'stockIssueRequest', 'fa fa-caret-down'),
//                 new FooterActionButton('Import', 'importIssueRequest', 'fa fa-caret-down'),
//             ];
//         } else {
//             this.tab = 1;
//             this.footerActionButton = [
//                 new FooterActionButton('Create Device Form', 'createDevice', 'fa fa-caret-down'),
//                 new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
//                 new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
//             ];
//         }
//     }

//       //  this.IssueProvision.openIssueProvisiosmodel(0, 0, 0,0);
//     footerEvent(data: any) {
//         this.footerActionButton = data;
//     }
//     onTopTabChange(event: any) {
//         let currentTab = event.target.id;
//         if (currentTab === 'tab1') {
//             this.categoryTab = 1;
//         } else if (currentTab === 'tab2') {
//             this.categoryTab = 2;
//         } else if (currentTab === 'tab3') {
//             this.categoryTab = 3;
//         }
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

//     }

//     getAllIndent(search) {
//         // let t = this.skipCount;
//         // let t2 = this.maxResultCount;
//         //    this.isLoading = true;
//         this.indentRequestFormProxy.getAll(search, this.appSession.tenantId, undefined, undefined, undefined, 0, 1000)
//             .subscribe(data => {
//                 this.indentRequestFomr = data.items;
//                 this.indentRequestFormBak = data.items;
//                 //            this.isLoading = false;
//             });
//     }

//     close() {
//         this.storeCreate.hide();
//     }
//     modalAuthorityNumberForm() {
//         // this.authorityNumber.openAuthoritymodel();
//     }

//     modalStoreReleaseForm() {
//         this.CreateAntennaModal.openDeviceModal();
//     }


//     getDeviceModal() {
//         this.isLoading = true;
//         this._deviceModelServiceProxy.getAll(this.appSession.tenantId, undefined, true, undefined, undefined, undefined).subscribe(data => {

//             let list = [];
//             if (data) {
//                 list = data.items.map(res => ({
//                     name: res.deviceModelName,
//                     Id: res.id
//                 }));
//             }
//             localStorage.setItem('deviceModalList', JSON.stringify(list));

//         });
//     }

//     getDeviceType() {
//         let list = [];
//         list = this.deviceType.map(res => ({
//             name: res.name,
//             Id: res.id
//         }));
//         localStorage.setItem('deviceType', JSON.stringify(list));
//     }

//     getOrganizationUnit() {
//         this._organizationUnitServiceProxy.getOrganizationUnits().subscribe(res => {
//             let list = [];
//             if (res) {
//                 list = res.items.map(res => ({
//                     name: res.displayName,
//                     Id: res.id
//                 }));
//             }
//             localStorage.setItem('OrganizationUnitList', JSON.stringify(list));
//         });
//     }
//     onFooterActionButton(type: string) {
//         if (type === 'createDevice') {
//             this.createDevice.openDeviceModal();
//         } else if (type === 'createDeviceModal') {
//             this.createModalForm.openCreateDeviceModal();
//         } else if (type === 'CreateAntennaModal') {
//             this.CreateAntennaModal.openDeviceModal();
//         } else if (type === 'createwarehousemodal') {
//             this.createwarehousemodal.openCreateAntennaWarehouseModal();
//         }

//     }

//     closedynamicmodal() {
//         this.displayResponsive = false;
//         this.dynamicModal.hide();
//     }

//     isValid(control: any): boolean {
//         return control.hasError('required') && (control.dirty || control.touched);
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


//     changedSubscriber(data: any) {
//         this.fromDate = data.fromDate;
//         this.toDate = data.toDate;
//         this.organizationUnitId = data.organizationUnit;
//     }
// }
