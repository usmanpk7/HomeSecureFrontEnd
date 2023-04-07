// import { Component, Injector, OnInit, ViewChild } from '@angular/core';
// import { FooterActionButton } from '@app/app-layout/indent-dashboard/model/footer-action-button';
// import { AppConsts } from '@shared/AppConsts';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { EncryptionDecryptionService } from '@shared/encryption-decryption.service';
// import {
//     EncryptionkeyDto,
//     EncryptionkeyServiceProxy,
//     GetUserForEditOutput,
//     ItemCategoriesDto,
//     ItemCategoryDto,
//     ItemDto,
//     ItemServiceProxy,
//     ItemsTypesDto,
//     ItemTypeDto,
//     PagedResultDtoOfEncryptionkeyDto,
//     ProfileServiceProxy,
//     UserServiceProxy,
//     VarietyBatchDto,
//     VarietyBatchServiceProxy,
// } from '@shared/service-proxies/service-proxies';
// import { Table } from 'primeng/table';

// @Component({
//     selector: 'app-store-list',
//     templateUrl: './store-list.component.html',
//     styleUrls: ['./store-list.component.css'],
// })
// export class StoreListComponent extends AppComponentBase implements OnInit {
//     @ViewChild('dataTable') table: Table;
//     profilePicture: string = AppConsts.appBaseUrl + '/assets/common/images/default-profile-picture.png';
//     userName = '';
//     EncryptionData:EncryptionkeyDto[]=[];
//     footerActionButton: Array<FooterActionButton>;
//     itemsDto: Array<ItemDto>;
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
//     encryptionKeys: Array<EncryptionkeyDto>;
//     variteyBatchDTO: Array<VarietyBatchDto>;
//     itemList: any;
//     ItemListDto: any;
//     constructor(
//         private itemProxy: ItemServiceProxy,
//         private decryptService: EncryptionDecryptionService,
//         private userServiceProxy: UserServiceProxy,
//         private _profileServiceProxy: ProfileServiceProxy,
//         private encryptionKeyProxy: EncryptionkeyServiceProxy,
//         private varietyBatchService: VarietyBatchServiceProxy,
//         injector: Injector
//     ) {
//         super(injector);
//         this.itemsDto = [];
//         this.isLoading = false;
//         this.storeVariations = [];
//         this.storeCheck = false;
//         this.value = true;
//         this.variteyBatchDTO = [];
//         this.itemList = [];
//         this.ItemListDto = [];
//     }

//     ngOnInit(): void {
//         this.getAllEncryptionKeys();
//         this.getAll();
//         this.EncryptionKeys();
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
//         this.getAllVariation(item.id);
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

//                     {
//                         this._profileServiceProxy.getProfilePicture().subscribe((result) => {
//                             if (result && result.profilePicture) {
//                                 this.profilePicture = 'data:image/jpeg;base64,' + result.profilePicture;
//                             }
//                             this.itemsDto = data.items;
//                             this.userName = this.appSession.user.userName;
//                             this.itemsDto.map(res => {
//                             this.itemList =  {
//                                 id: res.id,
//                                 creatorUserId: res.creatorUserId,
//                                 encryptionKeyId: res.encryptionKeyId,
//                                 sku: this.StoreListdecryptItem(res.sku,res.encryptionKeyId),
//                                 ItemName: this.StoreListdecryptItem(res.itemName,res.encryptionKeyId),
//                                 itemTypes: this.getItemType(res.itemsTypes),
//                                 itemCategory: this.getItemCategory(res.itemCategories),
//                                 SupplierItem: this.getItemSupplier(res.itemSupplierId),
//                                 MenuFacturer: this.getItemManuFacturer(res.manufacturerId),
//                                 UserRole: this.getFirstUserRole(res.creatorUserId),
//                                 creationItem: res.creationTime,
//                                 ItemImage: res.itemImage,
//                                 code: res.code
//                             }
//                             this.ItemListDto.push(this.itemList);
//                         });

//                         });

//                     }
//                 }
//                 this.isLoading = false;
//             });
//     }
//     decryptItem(data: string, keyId: number) {
//         try {
//             let result = this.decryptService.decrypt(data);
//             return result;
//         } catch (err) {}
//     }
//     StoreListdecryptItem(data: string,key:number) {
//         try {

//           var keyval=this.EncryptionData.filter(x=>x.id==key).map(x=>x.keyValue).shift();
//            let result= this.decryptService.decryption(data,keyval);
//            return result;

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
//     EncryptionKeys()
//     {
//        this.encryptionKeyProxy.getAll(this.appSession.tenantId,undefined,undefined,undefined,undefined,undefined).subscribe((data:any)=>
//        {

//          this.EncryptionData=data.items;
//        })
//     }
//     getAllEncryptionKeys() {
//         this.encryptionKeyProxy.getAll(this.appSession.tenantId, undefined, undefined, undefined, 0, 1000)
//       .subscribe(data => {
//        if (data) {
//         this.encryptionKeys = data.items;
//        }
//       });
//      }
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
//     getAllVariation(itemId) {
//         this.varietyBatchService
//             .getAll(this.appSession.tenantId, undefined, itemId, undefined, 0, 1000)
//             .subscribe((data) => {
//                 if (data) {
//                     this.variteyBatchDTO = data.items;
//                 }
//             });
//     }
//     getLength(length: number) {
//         let count = 1;
//         if (length > 0) {
//             count = length;
//         }
//         return count;
//     }
// }
