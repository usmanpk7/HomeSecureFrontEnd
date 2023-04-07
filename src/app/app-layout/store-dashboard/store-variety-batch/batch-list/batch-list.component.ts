// import { Component, Injector, OnInit, ViewChild } from '@angular/core';
// import { FooterActionButton } from '@app/app-layout/indent-dashboard/model/footer-action-button';
// import { QRModelComponent } from '@app/app-layout/indent-dashboard/model/qrmodel/qrmodel.component';
// import { DailogComponent } from '@app/shared/common/custom/dailog/dailog.component';
// import { AppConsts } from '@shared/AppConsts';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { EncryptionDecryptionService } from '@shared/encryption-decryption.service';
// import { EncryptionkeyDto, EncryptionkeyServiceProxy, ItemCategoriesDto, ItemsTypesDto, ProfileServiceProxy, UserServiceProxy, VarietyBatchDto, VarietyBatchServiceProxy } from '@shared/service-proxies/service-proxies';
// import { Table } from 'primeng/table';

// @Component({
//   selector: 'app-batch-list',
//   templateUrl: './batch-list.component.html',
//   styleUrls: ['./batch-list.component.css']
// })
// export class BatchListComponent extends AppComponentBase implements OnInit {
//   @ViewChild('dataTable') table: Table;
//   @ViewChild('modalCreate', { static: true }) modalCreate: QRModelComponent;
//     profilePicture: string = AppConsts.appBaseUrl + '/assets/common/images/default-profile-picture.png';
//     userName = '';
//   footerActionButton: Array<FooterActionButton>;
//   batchDto: Array<VarietyBatchDto>;
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
//     viewType: number;
//     encryptionKeys: Array<EncryptionkeyDto>;
//     dynamicValue: string;
//     BatchList: any;
//     BatchListDto: any;
//   constructor(private varietyBatchProxy: VarietyBatchServiceProxy,
//      private decryptService: EncryptionDecryptionService,
//      private userServiceProxy: UserServiceProxy,
//      private encryptionKeyProxy: EncryptionkeyServiceProxy,
//      private _profileServiceProxy: ProfileServiceProxy,
//      injector: Injector) {
//     super(injector);
//     this.batchDto = [];
//     this.BatchList = [];
//     this.BatchListDto = [];
//     this.isLoading = false;
//     this.storeVariations = [];
//     this.storeCheck = false;
//     this.value = true;
//     this.viewType = 1;
//     this.encryptionKeys = [];

//   }

//   ngOnInit(): void {
//     this.getAllEncryptionKeys();
//     this.getAll();
//   }
//   getAllEncryptionKeys() {
//     this.encryptionKeyProxy.getAll(this.appSession.tenantId, undefined, undefined, undefined, 0, 1000)
//   .subscribe(data => {
//    if (data) {
//     this.encryptionKeys = data.items;
//    }
//   });
//  }
//   paginate(event) {
//     this.first = event.first ;
//     this.maxResultCount = (this.first + 1) * this.row; //10
//     this.skipCount = this.first * this.row;
// }
//   onExpandRow(item: any) {
//    this.getUserDetail(item.creatorUserId);
// }
//   handleChange(event) {

//   }
//   opendailogForQRCode(value:string)
//   {
//     var result=this.decryptItem(value);
//     this.modalCreate.open();
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
//   getAll() {
//     this.isLoading = true;
//    this.varietyBatchProxy.getAll(this.appSession.tenantId, undefined, undefined, undefined, 0, 1000).subscribe(data => {
//       if (data) {
//         {
//             this._profileServiceProxy.getProfilePicture().subscribe(result => {
//                 if (result && result.profilePicture) {
//                     this.profilePicture = 'data:image/jpeg;base64,' + result.profilePicture;

//                 }
//                 
//              this.batchDto = data.items;
//                 this.userName = this.appSession.user.userName;

//                 this.batchDto.map(res => {
//                   this.BatchList = {
//                     id: res.id,
//                     snCodeNo: res.snCodeNo,
//                     itemName: this.decryptItem(res.item.itemName),
//                     itemTypes: this.getItemType(res.item.itemsTypes),
//                     itemCategory: this.getItemCategory(res.item.itemCategories),
//                     itemQuantity: res.quantity,
//                     userRole: this.getFirstUserRole(res.creatorUserId),
//                     creationTime: res.creationTime,
//                     creatorUserId: res.creatorUserId
//                   }
//                   this.BatchListDto.push(this.BatchList);
//                 });

//               });
//         }

//       }
//       this.isLoading = false;
//     });
//   }
//   decryptItem(data: string){
//     try {
//       console.log();
//    let result= this.decryptService.decrypt(data,"4700384107437838");
//    console.log(result);
//    return result;
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
// ViewChange(event) {
//   let id = event.target.id;
//   if (id === 'card') {
//    this.viewType = 2;
//   } else {
//     this.viewType = 1;
//   }
// }
// getwarehouse(Id) {
// }
// }
