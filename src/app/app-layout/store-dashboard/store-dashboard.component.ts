// import { Component, Injector, OnInit, ViewChild } from '@angular/core';
// import { AnalyticsDetailCards, criticallowItems } from '@app/model/storeDashboardData';
// import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
// import { AppConsts } from '@shared/AppConsts';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { EncryptionDecryptionService } from '@shared/encryption-decryption.service';
// // import { CriticalLowItemDto, GetUsersInput, ItemCategoryServiceProxy, ItemServiceProxy, ItemTypeServiceProxy, LowLevelItemServiceProxy, ManufacturerServiceProxy, ProfileServiceProxy, SupplierServiceProxy, UserServiceProxy } from '@shared/service-proxies/service-proxies';
// import { TreeNode } from 'primeng/api';
// import { FooterActionButton } from '../indent-dashboard/model/footer-action-button';
// import { CreateManufacturerFormComponent } from './create-manufacturer-form/create-manufacturer-form.component';
// import { AddStoreCategoryComponent } from './create-store-category/add-store-category.component';
// import { CreateStoreFormComponent } from './create-store-form/create-store-form.component';
// import { AddStoreTypeComponent } from './create-store-type/add-store-type.component';
// import { CreateSupplierComponent } from './create-supplier/create-supplier.component';
// import { CreateVarrietyBatchComponent } from './create-varriety-batch/create-varriety-batch.component';
// import { CreateVarrietyCategoryComponent } from './create-varriety-category/create-varriety-category.component';
// import { CreateVarrietyComponent } from './create-varriety/create-varriety.component';
// import { StoreVarietyBatchComponent } from './store-variety-batch/store-variety-batch.component';
// import { StoreComponent } from './store/store.component';

// @Component({
//     selector: 'app-store-dashboard',
//     templateUrl: './store-dashboard.component.html',
//     styleUrls: ['./store-dashboard.component.css']
// })
// export class StoreDashboardComponent extends AppComponentBase implements OnInit {
//     profilePicture: string = AppConsts.appBaseUrl + '/assets/common/images/default-profile-picture.png';
//     userName = '';
//     @ViewChild('createVariety', { static: true }) createVariety: CreateVarrietyComponent;
//     @ViewChild('createVarietyCategory', { static: true }) createVarietyCategory: CreateVarrietyCategoryComponent;
//     @ViewChild('store', { static: true }) store: StoreComponent;
//     @ViewChild('varrietyBatch', { static: true }) varrietyBatch: StoreVarietyBatchComponent;
//     @ViewChild('createStore', { static: true }) createStore: CreateStoreFormComponent;
//     @ViewChild('createStoreCategory', { static: true }) createStoreCategory: AddStoreCategoryComponent;
//     @ViewChild('createVarrietyBatch', { static: true }) createVarrietyBatch: CreateVarrietyBatchComponent;
//     @ViewChild('createStoreSupplier', { static: true }) createStoreSupplier: CreateSupplierComponent;
//     @ViewChild('createStoreType', { static: true }) createStoreType: AddStoreTypeComponent;
//     @ViewChild('createStoreManufacturer', { static: true }) createStoreManufacturer: CreateManufacturerFormComponent;
//     @ViewChild('dynamicModal', { static: true }) dynamicModal: DailogComponent;
//     @ViewChild('store') searchData: StoreComponent;

//     footerActionButton: Array<FooterActionButton>;
//     categoryTab: any;
//     Loading = false;
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
//     intentAnalyticsResult: any;
//     constructor(private itemCategoryProxy: ItemCategoryServiceProxy,
//         private itemTypeProxy: ItemTypeServiceProxy,
//         private supplierProxy: SupplierServiceProxy,
//         private manufacturerProxy: ManufacturerServiceProxy,
//         private userServiceProxy: UserServiceProxy,
//         private itemServiceProxy: ItemServiceProxy,
//         private lowLevelItemServiceProxy: LowLevelItemServiceProxy,
//         private decryptService: EncryptionDecryptionService,
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
//         this.itemAnalytics = {
//                 lowStores: [],
//                 criticalLowStores:   [],
//                 outOfStock:  [],
//                 expiredStock:  []
//         };
//     }

//     ngOnInit(): void {
//         this.getItemAllCategories();
//         this.getItemAllTypes();
//         this.getAllSupplier();
//         this.getAllManeFacturer();
//         //this.store = new StoreComponent();
//         this.getItemAnalytics();
//     }

//     searchFilter($event){
//         this.searchData.search.table.filterGlobal($event, 'contains')
//     }


//     onTabChange(event: any) {
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

//     footerEvent(data: any) {
//         setTimeout(() => {
//             this.footerActionButton = data;
//         });
//     }
//     OnFooterAction(type: string) {
//         if (type === 'createStore') {
//             this.createStore.openAuthoritymodel();
//         } else if (type === 'storeCategory') {
//             this.createStoreCategory.openAuthoritymodel();
//         } else if (type === 'storeType') {
//             this.createStoreType.openAuthoritymodel();
//         } else if (type === 'createVarrietyBatch') {
//             this.createVarrietyBatch.openCreateVarrietyBatch();
//         } else if (type === 'storeSupplier') {
//             this.createStoreSupplier.openAuthoritymodel();
//         } else if (type === 'storeManufacturer') {
//             this.createStoreManufacturer.openAuthoritymodel();
//         } else if (type === 'createVariety') {
//             this.createVariety.openVarrietyModel();
//         } else if (type === 'createVarietyCategory') {
//             this.createVarietyCategory.openCreateCategoryModel();
//         }
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
//                         label:this.decryptService.decrypt(this.LowlevelItems.lowLevelCriticalItemDetails[criticallow]?.item.sku) || 'item-sku',
//                         data:(criticallow+1).toString(),
//                         type:'default1',
//                     })
//                     this.CriticleNodes.push({
//                         label:this.decryptService.decrypt(this.LowlevelItems.lowLevelCriticalItemDetails[criticallow]?.item.itemName) || 'item-0',
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
//                         label:this.decryptService.decrypt(this.LowlevelItems.lowlevelwarningitemDetails[lowStore]?.item.sku) || 'item-sku1',
//                         data:(lowStore+1).toString(),
//                         type:'default1',
//                     })
//                     this.CriticleNodes1.push({
//                         label:this.decryptService.decrypt(this.LowlevelItems.lowlevelwarningitemDetails[lowStore]?.item.itemName) || 'item-1',
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
//                             label:this.decryptService.decrypt(this.LowlevelItems.totalOutOfItemStockDetails[outofStock]?.item.sku) || 'item-sku2',
//                             data:(outofStock+1).toString(),
//                             type:'default1',
//                         })
//                         this.outofStockNodes.push({
//                             label:this.decryptService.decrypt(this.LowlevelItems.totalOutOfItemStockDetails[outofStock]?.item.itemName) || 'item-2',
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
//                         label:this.decryptService.decrypt(this.LowlevelItems.totalExpiredStockItemsDetail[expiredStock]?.item.sku) || 'item-sku3',
//                         data:(expiredStock+1).toString(),
//                         type:'default1',
//                     })
//                     this.ExpiredNodes.push({
//                         label:this.decryptService.decrypt(this.LowlevelItems?.totalExpiredStockItemsDetail[expiredStock]?.item.itemName) || 'item-3',
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

//     getNodeChildren(list: any, key: number) {
//         let child = [];
//         list.forEach((vals: any, index: any) => {
//             let node = {
//                 key: key + '-' + index,
//                 label: this.decryptItem(vals.sku),
//                 data: vals.quantity,
//                  type: 'default1'
//                 };
//                 child.push(node);
//         });
//         return child;
//     }
//     decryptItem(data: string):string {
//         try {
//             var value =   this.decryptService.decrypt(data);
//             return
//             value;
//         } catch (err) {

//         }
//     }
// }
