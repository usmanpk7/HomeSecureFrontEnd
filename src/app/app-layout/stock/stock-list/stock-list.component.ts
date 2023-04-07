// import { Component, Injector, OnInit, ViewChild } from '@angular/core';
// import { FooterActionButton } from '@app/app-layout/indent-dashboard/model/footer-action-button';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { EncryptionDecryptionService } from '@shared/encryption-decryption.service';
// import {
//     EncryptionkeyServiceProxy,
//     GetUserForEditOutput,
//     ItemCategoriesDto,
//     ItemCategoryDto,
//     ItemDto,
//     ItemServiceProxy,
//     ItemsTypesDto,
//     WareHouseDto,
//     UserServiceProxy,
//     VarietyDto,
//     VarietyServiceProxy,
//     WareHouseServiceProxy,
// } from '@shared/service-proxies/service-proxies';
// import { Table } from 'primeng/table';

// @Component({
//     selector: 'app-stock-list',
//     templateUrl: './stock-list.component.html',
//     styleUrls: ['./stock-list.component.css'],
// })
// export class StockListComponent extends AppComponentBase implements OnInit {
//     @ViewChild('dataTable') table: Table;
//     footerActionButton: Array<FooterActionButton>;
//     itemsDto: Array<ItemDto>;
//     VarietyDto: Array<VarietyDto>;
//     houseStore: Array<WareHouseDto>;
//     first = 0;
//     row = 10;
//     skipCount = 0;
//     maxResultCount = 1;
//     storeVariations: Array<any>;
//     storeCheck: boolean;
//     value: boolean;
//     creatorName: string;
//     modifierName: string;
//     creatorRoles: string;
//     encryptionKey: string;
//     tab: any;
//     ItemsList: any;
//     ItemsListDto: any;
//     constructor(
//         private itemProxy: ItemServiceProxy,
//         private varietyProxy: VarietyServiceProxy,
//         private _wareHouseServiceProxy: WareHouseServiceProxy,
//         private decryptService: EncryptionDecryptionService,
//         private userServiceProxy: UserServiceProxy,
//         private encryptionKeyProxy: EncryptionkeyServiceProxy,
//         injector: Injector
//     ) {
//         super(injector);
//         this.itemsDto = [];
//         this.houseStore = [];
//         this.VarietyDto = [];
//         this.ItemsList = [];
//         this.ItemsListDto = [];
//         this.isLoading = false;
//         this.storeVariations = [];
//         this.storeCheck = false;
//         this.value = true;
//     }

//     ngOnInit(): void {
//         this.getAll();
//         this.getAllVariety();
//         this.getStoreHouse();
//         this.storeVariations = [
//             {
//                 storename: 'Combat Boot',
//                 category: 'Local',
//                 batchId: '2222',
//                 qty: '231',
//                 weight: '0',
//             },
//         ];
//     }
//     paginate(event) {
//         this.first = event.first;
//         this.maxResultCount = (this.first + 1) * this.row; //10
//         this.skipCount = this.first * this.row;
//     }
//     onExpandRow(item: any) {
//         this.getUserDetail(item.creatorUserId);
//         this.getEncryptionKey(item.encryptionKeyId);
//     }
//     handleChange(event) {}
//     getItemCategory(categories: Array<ItemCategoriesDto>) {
//         let itemCategories = JSON.parse(localStorage.getItem('itemCategories'));
//         let categoryName = '-----';
//         if (categories.length > 0) {
//             let categoryId = categories.map((x) => x.categoryId).shift();
//             categoryName = itemCategories
//                 .filter((x) => x.Id === categoryId)
//                 .map((x) => x.name)
//                 .shift();
//         }
//         return categoryName;
//     }
//     getItemType(type: Array<ItemsTypesDto>) {
//         let itemTypes = JSON.parse(localStorage.getItem('itemTypes'));
//         let name = '-----';
//         if (type.length > 0) {
//             let Id = type.map((x) => x.itemTypeId).shift();
//             name = itemTypes
//                 .filter((x) => x.Id === Id)
//                 .map((x) => x.name)
//                 .shift();
//         }
//         return name;
//     }
//     getItemSupplier(Id: number) {
//         let supplier = JSON.parse(localStorage.getItem('suppliers'));
//         let name = '-----';
//         if (supplier) {
//             name = supplier
//                 .filter((x) => x.Id === Id)
//                 .map((x) => x.name)
//                 .shift();
//         }
//         return name;
//     }
//     getItemManuFacturer(Id: number) {
//         let supplier = JSON.parse(localStorage.getItem('manufacturer'));
//         let name = '-----';
//         if (supplier) {
//             name = supplier
//                 .filter((x) => x.Id === Id)
//                 .map((x) => x.name)
//                 .shift();
//         }
//         return name;
//     }
//     getAll() {
//         this.isLoading = true;
//         this.itemProxy
//             .getAll(
//                 this.appSession.tenantId,
//                 undefined,
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
//                 if (data) {
//                     this.itemsDto = data.items;
//                     console.log(this.itemsDto);
//                     this.itemsDto.map(res => {
//                         this.ItemsList = {
//                            id: res.id,
//                            sku: this.decryptItem(res.sku),
//                            ItemName: this.decryptItem(res.itemName),
//                            itemTypes: this.getItemType(res.itemsTypes),
//                            itemCategory: this.getItemCategory(res.itemCategories),
//                            Image: res.itemImage,
//                            itemPack: res.itemPack,
//                            qrc: this.decryptItem(res.qrc),
//                            rfid: this.decryptItem(res.rfid),
//                            details: this.decryptItem(res.details),
//                            barcode: this.decryptItem(res.barcode),
//                            code: this.decryptItem(res.code),
//                            nfc: this.decryptItem(res.nfc)
//                         }

//                         this.ItemsListDto.push(this.ItemsList);
//                     })
//                     console.log(this.ItemsListDto);
//                 }
//                 this.isLoading = false;
//             });
//     }
//     decryptItem(data: string) {
//         try {
//             return this.decryptService.decrypt(data);
//         } catch (err) {}
//     }
//     getUserDetail(Id): any {
//         if (Id) {
//             this.userServiceProxy.getUserForEdit(Id).subscribe((data) => {
//                 if (data) {
//                     this.creatorName = data.user.name + ' ' + data.user.surname;
//                     this.creatorRoles = data.roles
//                         .filter((x) => x.isAssigned === true)
//                         .map((x) => x.roleDisplayName)
//                         .join(' | ');
//                 }
//             });
//         }
//     }
//     getEncryptionKey(Id) {
//         this.encryptionKeyProxy.get(Id).subscribe((data) => {
//             if (data) {
//                 this.encryptionKey = data.keyValue;
//             }
//         });
//     }
//     VarietyItem(item) {}
//     getUserName(Id) {
//         let users = JSON.parse(localStorage.getItem('users'));
//         let name = '';
//         if (users) {
//             name = users
//                 .filter((x) => x.Id === Id)
//                 .map((x) => x.name)
//                 .shift();
//         }
//         return name;
//     }

//     getStoreHouse() {
//         this._wareHouseServiceProxy
//             .getAll(this.appSession.tenantId, undefined, undefined, undefined, undefined, 0, 1000)
//             .subscribe((data) => {
//                 if (data) {
//                     this.houseStore = data.items;
//                 }
//             });
//     }
//     getAllVariety() {
//         //    this.isLoading = true;
//         this.varietyProxy
//             .getAll(this.appSession.tenantId, undefined, undefined, undefined, 0, 1000)
//             .subscribe((data) => {
//                 if (data) {
//                     this.VarietyDto = data.items;
//                 }
//                 //     this.isLoading = false;
//             });
//     }
//     getFirstUserRole(Id) {
//         let users = JSON.parse(localStorage.getItem('users'));
//         let name = '';
//         if (users) {
//             let Role = users
//                 .filter((x) => x.Id === Id)
//                 .map((x) => x.Roles)
//                 .shift();
//             if (Role) {
//                 name = Role.map((x) => x.roleName);
//             }
//         }
//         return name;
//     }
// }
