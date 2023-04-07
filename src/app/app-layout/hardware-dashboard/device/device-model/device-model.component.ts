// import { Component, Injector, OnInit, ViewChild } from '@angular/core';
// import { FooterActionButton } from '@app/app-layout/indent-dashboard/model/footer-action-button';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { EncryptionDecryptionService } from '@shared/encryption-decryption.service';
// import { DeviceModelDto, DeviceModelServiceProxy, EncryptionkeyServiceProxy, ItemCategoriesDto, ItemDto, ItemServiceProxy, ItemsTypesDto, PagedResultDtoOfDeviceModelDto, UserServiceProxy } from '@shared/service-proxies/service-proxies';
// import { Table } from 'primeng/table';

// @Component({
//   selector: 'app-device-model',
//   templateUrl: './device-model.component.html',
//   styleUrls: ['./device-model.component.css']
// })
// export class DeviceModelComponent extends AppComponentBase implements OnInit {
//   @ViewChild('dataTable') table: Table;
//     footerActionButton: Array<FooterActionButton>;
//     itemsDto: Array<DeviceModelDto>;
//     first = 0;
//       row = 10;
//       skipCount = 0;
//       maxResultCount = 1;
//       storeVariations: Array<any>;
//       storeCheck: boolean;
//       value: boolean;
//       creatorName: string;
//       modifierName: string;
//       creatorRoles: string;
//       encryptionKey: string;
//       checked: boolean;
//       isActive = true;
//     constructor(
//        private _deviceModelServiceProxy: DeviceModelServiceProxy,
//        injector: Injector) {
//       super(injector);
//       this.itemsDto = [];
//       this.isLoading = false;
//       this.storeVariations = [];
//       this.storeCheck = false;
//       this.value = true;
//     }

//     ngOnInit(): void {
//       this.getAll();
//     }
//     paginate(event) {
//       this.first = event.first ;
//       this.maxResultCount = (this.first + 1) * this.row; //10
//       this.skipCount = this.first * this.row;
//   }
//     onExpandRow(item: any) {

//   }
//     handleChange(event) {

//     }

//     getAll() {
//       this.isLoading = true;
//      this._deviceModelServiceProxy.getAll(this.appSession.tenantId, undefined, true, undefined, undefined, undefined).subscribe(data => {
//         if (data) {
//         this.itemsDto = data.items;
//         }
//         this.isLoading = false;
//       });
//     }

//     VarietyItem(item) {
//     }
//     getUserName(Id) {
//       let users = JSON.parse(localStorage.getItem('users'));
//       let name = '';
//       if (users) {
//          name = users.filter(x => x.Id === Id).map(x => x.name).shift();
//        }
//        return name;
//     }
//     getFirstUserRole(Id) {
//       let users = JSON.parse(localStorage.getItem('users'));
//       let name = '';
//       if (users) {
//          let Role = users.filter(x => x.Id === Id).map(x => x.Roles).shift();
//          if (Role) {
//               name = Role.map(x => x.roleName);
//          }
//        }
//        return name;
//     }

// }
