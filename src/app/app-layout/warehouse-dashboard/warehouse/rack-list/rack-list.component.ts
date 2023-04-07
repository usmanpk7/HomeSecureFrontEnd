// import { Component, Injector, OnInit, ViewChild } from '@angular/core';
// import { FooterActionButton } from '@app/app-layout/indent-dashboard/model/footer-action-button';
// import { AppConsts } from '@shared/AppConsts';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { EncryptionDecryptionService } from '@shared/encryption-decryption.service';
// import { WareHouseDto, VarietyBatchDto, UserServiceProxy, EncryptionkeyServiceProxy, WareHouseServiceProxy, VarietyBatchServiceProxy, ItemCategoriesDto, ItemsTypesDto, RackServiceProxy, RackDto } from '@shared/service-proxies/service-proxies';
// import { Table } from 'primeng/table';

// @Component({
//   selector: 'app-rack-list',
//   templateUrl: './rack-list.component.html',
//   styleUrls: ['./rack-list.component.css']
// })
// export class RackListComponent extends AppComponentBase implements OnInit {
//   @ViewChild('dataTable') table: Table;
//     profilePicture: string = AppConsts.appBaseUrl + '/assets/common/images/default-profile-picture.png';
//     userName = '';
//   footerActionButton: Array<FooterActionButton>;
//   rackDto: Array<RackDto>;
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
//      private _rackServiceProxy: RackServiceProxy,
//      private encryptionKeyProxy: EncryptionkeyServiceProxy,
//      injector: Injector) {
//     super(injector);
//     this.rackDto = [];
//     this.isLoading = false;
//     this.storeCheck = false;
//     this.value = true;
//   }

//   ngOnInit(): void {
//     this.getAll();
//   }
//   paginate(event) {
//     this.first = event.first ;
//     this.maxResultCount = (this.first + 1) * this.row; //10
//     this.skipCount = this.first * this.row;
// }
//   onExpandRow(item: any) {
//    this.getUserDetail(item.creatorUserId);
//    this.getEncryptionKey(item.encryptionKeyId);
// }
//   handleChange(event) {

//   }

//   getAll() {
//     this.isLoading = true;
//    this._rackServiceProxy.getAll(this.appSession.tenantId, undefined, this.commonUtility.organizationId, undefined, undefined, 0, 1000).subscribe(data => {
//     let list = [];
//       if (data) {
//         {
//          this.rackDto = data.items;
//          list = data.items.map(rack => ({
//             name: rack.rackName,
//             Id: rack.id
//         }));
//         }
//       }
//       localStorage.setItem('rackList', JSON.stringify(list));
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

//   getLength(length: number) {
//     let count = 1;
//   if (length > 0) {
//     count = length;
//   }
//   return count;
//   }
// }
