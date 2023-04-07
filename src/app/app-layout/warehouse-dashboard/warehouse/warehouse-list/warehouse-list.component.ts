// import { Component, Injector, OnInit, ViewChild } from '@angular/core';
// import { FooterActionButton } from '@app/app-layout/indent-dashboard/model/footer-action-button';
// import { AppConsts } from '@shared/AppConsts';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { EncryptionDecryptionService } from '@shared/encryption-decryption.service';
// import { ItemDto, VarietyBatchDto, ItemServiceProxy, UserServiceProxy, ProfileServiceProxy, EncryptionkeyServiceProxy, VarietyBatchServiceProxy, ItemCategoriesDto, ItemsTypesDto, WareHouseServiceProxy, WareHouseDto } from '@shared/service-proxies/service-proxies';
// import { Table } from 'primeng/table';
// import { CreateWarehouseFormComponent } from '../../create-warehouse-form/create-warehouse-form.component';

// @Component({
//   selector: 'app-warehouse-list',
//   templateUrl: './warehouse-list.component.html',
//   styleUrls: ['./warehouse-list.component.css']
// })
// export class WarehouseListComponent extends AppComponentBase implements OnInit {
//   @ViewChild('dataTable') table: Table;
//   @ViewChild('createWarehouse', { static: true }) createWarehouse: CreateWarehouseFormComponent;
//     profilePicture: string = AppConsts.appBaseUrl + '/assets/common/images/default-profile-picture.png';
//     userName = '';
//   footerActionButton: Array<FooterActionButton>;
//   itemsDto: Array<WareHouseDto>;
//   first = 0;
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
//     organizationUnitId: any;
//     variteyBatchDTO: Array<VarietyBatchDto>;
//     organizationUnitList: any = [];

//   constructor(
//      private decryptService: EncryptionDecryptionService,
//      private userServiceProxy: UserServiceProxy,
//      private encryptionKeyProxy: EncryptionkeyServiceProxy,
//      private _wareHouseServiceProxy: WareHouseServiceProxy,
//      private varietyBatchService: VarietyBatchServiceProxy,
//      injector: Injector) {
//     super(injector);
//     this.itemsDto = [];
//     this.isLoading = false;
//     this.storeVariations = [];
//     this.storeCheck = false;
//     this.value = true;
//   }

//   ngOnInit(): void {
//     this.getAll();
//     this.storeVariations = [{
//       storename: 'Combat Boot',
//       category: 'Local',
//       batchId: '2222',
//       qty: '231',
//       weight: '0'
//     }];


//   }
//   paginate(event) {
//     this.first = event.first ;
//     this.maxResultCount = (this.first + 1) * this.row; //10
//     this.skipCount = this.first * this.row;
// }
//   onExpandRow(item: any) {
//    this.getUserDetail(item.creatorUserId);
//    this.getEncryptionKey(item.encryptionKeyId);
//    this.getAllVariation(item.id);
// }
//   handleChange(event) {

//   }
//   getItemCategory(categories: Array<ItemCategoriesDto>) {
//     let itemCategories = JSON.parse(localStorage.getItem('itemCategories'));
//      let categoryName = '-----';
//      if (categories.length > 0) {
//          let categoryId = categories.map(x => x.categoryId).shift();
//         categoryName = itemCategories.filter(x => x.Id === categoryId).map(x => x.name).shift();
//       }
//       return categoryName;
//   }
//   getItemType(type: Array<ItemsTypesDto>) {
//     let itemTypes = JSON.parse(localStorage.getItem('itemTypes'));
//      let name = '-----';
//      if (type.length > 0) {
//          let Id = type.map(x => x.itemTypeId).shift();
//         name = itemTypes.filter(x => x.Id === Id).map(x => x.name).shift();
//       }
//       return name;
//   }
//   getItemSupplier(Id: number) {
//     let supplier = JSON.parse(localStorage.getItem('suppliers'));
//      let name = '-----';
//      if (supplier) {
//         name = supplier.filter(x => x.Id === Id).map(x => x.name).shift();
//       }
//       return name;
//   }
//   getItemManuFacturer(Id: number) {
//     let supplier = JSON.parse(localStorage.getItem('manufacturer'));
//     let name = '-----';
//     if (supplier) {
//        name = supplier.filter(x => x.Id === Id).map(x => x.name).shift();
//      }
//      return name;
//   }

//   getAll() {
//     this.isLoading = true;
//    this._wareHouseServiceProxy.getAll(this.appSession.tenantId, undefined, this.commonUtility.organizationId, undefined, undefined, 0, 1000).subscribe(data => {
//       if (data) {
//         {
//          this.itemsDto = data.items;
//         }
//       }
//       this.isLoading = false;
//     });
//   }
//   decryptItem(data: string) {
//     try {
//    return this.decryptService.decrypt(data);
//   } catch (err) {

//   }
//   }
//   getUserDetail(Id): any {
//     if (Id) {
//     this.userServiceProxy.getUserForEdit(Id).subscribe(data => {
//         if (data) {
//             this.creatorName = data.user.name + ' ' + data.user.surname;
//             this.creatorRoles = data.roles.filter(x => x.isAssigned === true).map(x => x.roleDisplayName).join(' | ');
//         }
//     });
//   }
//   }
//   getEncryptionKey(Id) {
//    this.encryptionKeyProxy.get(Id).subscribe(data => {
//      if (data) {
//        this.encryptionKey = data.keyValue;
//      }
//    });
//   }
//   VarietyItem(item) {
//   }
//   getUserName(Id) {
//     let users = JSON.parse(localStorage.getItem('users'));
//     let name = '';
//     if (users) {
//        name = users.filter(x => x.Id === Id).map(x => x.name).shift();
//      }
//      return name;
//   }
//   getFirstUserRole(Id) {
//     let users = JSON.parse(localStorage.getItem('users'));
//     let name = '';
//     if (users) {
//        let Role = users.filter(x => x.Id === Id).map(x => x.Roles).shift();
//        if (Role) {
//             name = Role.map(x => x.roleName);
//        }
//      }
//      return name;
//   }
//   getAllVariation(itemId) {
//     this.varietyBatchService.getAll(this.appSession.tenantId, undefined, itemId, undefined, 0, 1000).
//     subscribe(data => {
//      if (data) {
//      this.variteyBatchDTO = data.items;
//      }
//     });
//   }
//   getLength(length: number) {
//     let count = 1;
//   if (length > 0) {
//     count = length;
//   }
//   return count;
//   }
//   openCreateForm() {
//     this.createWarehouse.openCreateRackForm();
//   }
//   gridload() {
//     this.getAll();
// }
// }
