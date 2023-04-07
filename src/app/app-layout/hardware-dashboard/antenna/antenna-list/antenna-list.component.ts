// import { Component, Injector, OnInit } from '@angular/core';
// import { FooterActionButton } from '@app/app-layout/indent-dashboard/model/footer-action-button';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import {
//     ItemDto,
//     DeviceDto,
//     DeviceServiceProxy,
//     UserServiceProxy,
//     EncryptionkeyServiceProxy,
//     DeviceAntennaServiceProxy,
//     DeviceAntennaDto,
// } from '@shared/service-proxies/service-proxies';

// @Component({
//     selector: 'app-antenna-list',
//     templateUrl: './antenna-list.component.html',
//     styleUrls: ['./antenna-list.component.css'],
// })
// export class AntennaListComponent extends AppComponentBase implements OnInit {
//     footerActionButton: Array<FooterActionButton>;
//     itemsDto: Array<ItemDto>;
//     DevicesDto: Array<DeviceAntennaDto>;
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
//     deviceData: any;
//     modalList: any = [];
//     isActive = true;
//     constructor(
//         private _deviceServiceProxy: DeviceServiceProxy,
//         private _deviceAntennaServiceProxy: DeviceAntennaServiceProxy,
//         private userServiceProxy: UserServiceProxy,
//         private encryptionKeyProxy: EncryptionkeyServiceProxy,
//         injector: Injector
//     ) {
//         super(injector);

//         this.DevicesDto = [];
//         this.isLoading = false;
//         this.storeVariations = [];
//         this.storeCheck = false;
//         this.value = true;
//     }

//     ngOnInit(): void {
//         this.getAll();
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

//     getAll() {
//         this.isLoading = true;
//         this._deviceAntennaServiceProxy
//             .getAll(
//                 this.appSession.tenantId,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined
//             )
//             .subscribe((data) => {
//                 console.log(data.items);
//                 if (data) {
//                     this.DevicesDto = data.items;
//                 }
//                 this.isLoading = false;
//             });
//     }

//     getDevicemodal(Id) {
//         let deviceModal = JSON.parse(localStorage.getItem('deviceModalList'));
//         let name = '-----';
//         if (deviceModal) {
//             name = deviceModal
//                 .filter((x) => x.Id === Id)
//                 .map((x) => x.name)
//                 .shift();
//         }
//         return name;
//     }

//     getDeviceType(Id) {
//         let deviceType = JSON.parse(localStorage.getItem('deviceType'));
//         let name = '-----';
//         if (deviceType) {
//             name = deviceType
//                 .filter((x) => x.Id === Id)
//                 .map((x) => x.name)
//                 .shift();
//         }
//         return name;
//     }

//     getDepot(Id) {
//         let OrganizationUnit = JSON.parse(localStorage.getItem('OrganizationUnitList'));
//         let name = '----';
//         if (OrganizationUnit) {
//             name = OrganizationUnit.filter((x) => x.Id === Id)
//                 .map((x) => x.name)
//                 .shift();
//         }
//         return name;
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
