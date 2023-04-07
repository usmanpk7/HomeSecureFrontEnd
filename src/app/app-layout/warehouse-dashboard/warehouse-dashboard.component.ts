// import { Component, Injector, OnInit, ViewChild } from '@angular/core';
// import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
// import { AppConsts } from '@shared/AppConsts';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { ItemCategoryServiceProxy, ItemTypeServiceProxy, SupplierServiceProxy, ManufacturerServiceProxy, UserServiceProxy, ItemServiceProxy, GetUsersInput } from '@shared/service-proxies/service-proxies';
// import { FooterActionButton } from '../indent-dashboard/model/footer-action-button';
// import { CreateRackCompartmentFormComponent } from '../warehouse-dashboard/create-rack-compartment-form/create-rack-compartment-form.component';
// import { CreateRackFormComponent } from '../warehouse-dashboard/create-rack-form/create-rack-form.component';
// import { CreateWarehouseFormComponent } from './create-warehouse-form/create-warehouse-form.component';

// @Component({
//   selector: 'app-warehouse-dashboard',
//   templateUrl: './warehouse-dashboard.component.html',
//   styleUrls: ['./warehouse-dashboard.component.css']
// })
// export class WarehouseDashboardComponent extends AppComponentBase implements OnInit {

//     profilePicture: string = AppConsts.appBaseUrl + '/assets/common/images/default-profile-picture.png';
//     userName = '';
//     @ViewChild('createRackForm', {static: true}) createRackForm: CreateRackFormComponent;
//     @ViewChild('createRackcompartment', {static: true}) createRackcompartment: CreateRackCompartmentFormComponent;
//     @ViewChild('dynamicModal', { static: true }) dynamicModal: DailogComponent;
//     @ViewChild('createWarehouse', { static: true }) createWarehouse: CreateWarehouseFormComponent;

//     @ViewChild('store') searchData: any;

//     footerActionButton: Array<FooterActionButton>;
//     categoryTab: any;
//     Loading = false;
//     intentAnalyticsResult: any;
//     constructor(private itemCategoryProxy: ItemCategoryServiceProxy,
//         private itemTypeProxy: ItemTypeServiceProxy,
//         private supplierProxy: SupplierServiceProxy,
//         private manufacturerProxy: ManufacturerServiceProxy,
//         private userServiceProxy: UserServiceProxy,
//         private itemServiceProxy: ItemServiceProxy,
//         injector: Injector) {
//         super(injector);
//         this.categoryTab = 1;
//         this.footerActionButton = new Array<FooterActionButton>();
//         this.intentAnalyticsResult = {
//             totalMissingItem: 0,
//             totalItemsInStock: 0,
//             totalItemsDisplace: 0,
//             totalItemsIssued: 0,
//             totalItemsUnAuthorized: 0,
//             totalItemsReturned: 0
//         };
//     }

//     ngOnInit(): void {
//         this.getItemAllCategories();
//         this.getItemAllTypes();
//         this.getAllSupplier();
//         this.getAllManeFacturer();
//         this.getAllUsers();
//         //this.store = new StoreComponent();
//         this.getItemAnalytics();
//     }
//     onTabChange(event: any) {
//         let currentTab = event.target.id;
//         if (currentTab === 'tab1') {
//             this.categoryTab = 1;
//         }
//     }
//     SearchData($event){
//         this.searchData.search.table.filterGlobal($event, 'contains');
//     }
//     getItemAllCategories() {
//         this.itemCategoryProxy.getAll(this.appSession.tenantId, undefined, undefined, 0, 1000).subscribe(data => {
//             let list = [];
//             if (data) {
//                 list = data.items.map(category => ({
//                     name: category.categoryName,
//                     Id: category.id
//                 }));
//             }
//             localStorage.setItem('itemCategories', JSON.stringify(list));
//         });
//     }
//     getItemAllTypes() {
//         this.itemTypeProxy.getAll(this.appSession.tenantId, undefined, undefined, 0, 1000).subscribe(data => {
//             let list = [];
//             if (data) {
//                 list = data.items.map(type => ({
//                     name: type.categoryName,
//                     Id: type.id
//                 }));
//             }
//             localStorage.setItem('itemTypes', JSON.stringify(list));
//         });
//     }
//     getAllSupplier() {
//         this.supplierProxy.getAll(this.appSession.tenantId, undefined, undefined, 0, 1000).subscribe(data => {
//             let list = [];
//             if (data) {
//                 list = data.items.map(res => ({
//                     name: res.name,
//                     Id: res.id
//                 }));
//             }
//             localStorage.setItem('suppliers', JSON.stringify(list));
//         });
//     }
//     getAllManeFacturer() {
//         this.manufacturerProxy.getAll(this.appSession.tenantId, undefined, undefined, 0, 1000).subscribe(data => {
//             let list = [];
//             if (data) {
//                 list = data.items.map(res => ({
//                     name: res.name,
//                     Id: res.id
//                 }));
//             }
//             localStorage.setItem('manufacturer', JSON.stringify(list));
//         });
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
//                 list = data.items.map(res => ({
//                     name: res.name,
//                     Id: res.id,
//                     Roles: res.roles
//                 }));
//             }
//             localStorage.setItem('users', JSON.stringify(list));
//         });
//     }
//     footerEvent(data: any) {
//         setTimeout(() => {
//             this.footerActionButton = data;
//         });
//     }
//     OnFooterAction(type: string) {
//         if (type === 'createWarehouse') {
//             this.createWarehouse.openCreateRackForm();
//         } else if (type === 'createRackForm') {
//             this.createRackForm.openCreateRackForm();
//         } else if (type === 'createRackcompartment' ) {
//             this.createRackcompartment.openRackCompartmentForm();
//         }
//     }
//     getItemAnalytics() {
//         this.Loading = true;
//         this.itemServiceProxy.getItemPositionAnalytics(this.appSession.tenantId, undefined).subscribe(data => {
//             this.intentAnalyticsResult = data;
//             console.log(data);
//             this.Loading = false;
//         });
//     }

// }
