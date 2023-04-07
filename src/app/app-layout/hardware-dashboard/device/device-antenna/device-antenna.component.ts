// import { Component, Injector, OnInit, ViewChild } from '@angular/core';
// import { FooterActionButton } from '@app/app-layout/indent-dashboard/model/footer-action-button';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { EncryptionDecryptionService } from '@shared/encryption-decryption.service';
// import { EncryptionkeyServiceProxy, DeviceAntennaServiceProxy, ItemCategoriesDto, ItemDto, ItemServiceProxy, ItemsTypesDto, UserServiceProxy, DeviceAntennaDto } from '@shared/service-proxies/service-proxies';
// import { Table } from 'primeng/table';


// @Component({
//   selector: 'app-device-antenna',
//   templateUrl: './device-antenna.component.html',
//   styleUrls: ['./device-antenna.component.css']
// })
// export class DeviceAntennaComponent extends AppComponentBase implements OnInit {
//   @ViewChild('dataTable') table: Table;
//     footerActionButton: Array<FooterActionButton>;
//     itemsDto: Array<DeviceAntennaDto>;
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
//     constructor(private itemProxy: ItemServiceProxy,
//        private decryptService: EncryptionDecryptionService,
//        private userServiceProxy: UserServiceProxy,
//        private encryptionKeyProxy: EncryptionkeyServiceProxy,
//        private _deviceAntennaServiceProxy: DeviceAntennaServiceProxy,
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
//       this.storeVariations = [{
//         storename: 'Combat Boot',
//         category: 'Local',
//         batchId: '2222',
//         qty: '231',
//         weight: '0'
//       }];
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
//      this._deviceAntennaServiceProxy.getAll(this.appSession.tenantId, undefined, undefined, undefined, undefined,
//       undefined, undefined, 0, 1000).subscribe(data => {
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
