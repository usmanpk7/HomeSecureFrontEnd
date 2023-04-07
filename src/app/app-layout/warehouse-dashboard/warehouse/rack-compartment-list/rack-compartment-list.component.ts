// import { Component, Injector, OnInit, ViewChild } from '@angular/core';
// import { FooterActionButton } from '@app/app-layout/indent-dashboard/model/footer-action-button';
// import { AppConsts } from '@shared/AppConsts';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { EncryptionDecryptionService } from '@shared/encryption-decryption.service';
// import { WareHouseDto, VarietyBatchDto, UserServiceProxy, EncryptionkeyServiceProxy, WareHouseServiceProxy, VarietyBatchServiceProxy, ItemCategoriesDto, ItemsTypesDto, RackCompartmentServiceProxy, RackServiceProxy, RackCompartmentDto } from '@shared/service-proxies/service-proxies';
// import { Table } from 'primeng/table';

// @Component({
//   selector: 'app-rack-compartment-list',
//   templateUrl: './rack-compartment-list.component.html',
//   styleUrls: ['./rack-compartment-list.component.css']
// })
// export class RackCompartmentListComponent extends AppComponentBase implements OnInit {
//   @ViewChild('dataTable') table: Table;
//     profilePicture: string = AppConsts.appBaseUrl + '/assets/common/images/default-profile-picture.png';
//     userName = '';
//   footerActionButton: Array<FooterActionButton>;
//   rackCompartment: Array<RackCompartmentDto>;
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
//     rackList: any = [];

//   constructor(
//      private decryptService: EncryptionDecryptionService,
//      private userServiceProxy: UserServiceProxy,
//      private encryptionKeyProxy: EncryptionkeyServiceProxy,
//      private _wareHouseServiceProxy: WareHouseServiceProxy,
//      private _rackCompartmentServiceProxy: RackCompartmentServiceProxy,
//      private _rackServiceProxy: RackServiceProxy,
//      private varietyBatchService: VarietyBatchServiceProxy,
//      injector: Injector) {
//     super(injector);
//     this.rackCompartment = [];
//     this.isLoading = false;
//     this.storeVariations = [];
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
//    this.getAllVariation(item.id);
// }
//   handleChange(event) {

//   }


//   getRackId() {
//     this._rackServiceProxy.getAll(this.appSession.tenantId, undefined, this.commonUtility.organizationId, undefined, undefined, 0, 1000).subscribe(res => {
//         res.items.map(m => {
//             this.rackList.push({ name: m.rackName, code: m.id });
//         });
//     });
// }

//   getAll() {
//     this.isLoading = true;
//    this._rackCompartmentServiceProxy.getAll(this.appSession.tenantId, undefined, this.commonUtility.organizationId, undefined, undefined, undefined, 0, 1000).subscribe(data => {
//       if (data) {
//         {

//          this.rackCompartment = data.items;

//         }
//       }
//       localStorage.setItem('rackComList', JSON.stringify(data.items));
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

// }
