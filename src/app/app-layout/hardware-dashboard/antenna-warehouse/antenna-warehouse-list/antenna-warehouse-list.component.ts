// import { Component, Injector, OnInit } from '@angular/core';
// import { FooterActionButton } from '@app/app-layout/indent-dashboard/model/footer-action-button';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { AntennaWarehouseDto, AntennaWarehouseServiceProxy, DeviceDto, DeviceServiceProxy, EncryptionkeyServiceProxy, ItemDto, RackCompartmentServiceProxy, RackServiceProxy, UserServiceProxy, WareHouseServiceProxy } from '@shared/service-proxies/service-proxies';

// @Component({
//     selector: 'app-antenna-warehouse-list',
//     templateUrl: './antenna-warehouse-list.component.html',
//     styleUrls: ['./antenna-warehouse-list.component.css']
// })
// export class AntennaWarehouseListComponent extends AppComponentBase implements OnInit {

//     footerActionButton: Array<FooterActionButton>;
//     itemsDto: Array<ItemDto>;
//     AntennaWareHouse: Array<AntennaWarehouseDto>;
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
//     modalList = [];
//     rackList = [];
//     rackComList = [];
//     isActive = true;
//     constructor(
//         private userServiceProxy: UserServiceProxy,
//         private _antennaWarehouseServiceProxy: AntennaWarehouseServiceProxy,
//         private encryptionKeyProxy: EncryptionkeyServiceProxy,
//         injector: Injector) {
//         super(injector);

//         this.AntennaWareHouse = [];
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

//     handleChange(event) {

//     }

//     getAll() {
//         this.isLoading = true;
//         this._antennaWarehouseServiceProxy.getAll(this.appSession.tenantId, undefined, this.commonUtility.organizationId, undefined, undefined, undefined, undefined,
//             undefined, undefined, undefined).subscribe(data => {
//                 console.log(data.items);
//                 if (data) {
//                     this.AntennaWareHouse = data.items;
//                 }
//                 this.isLoading = false;
//             });
//     }

//     getWareHouseDetail(Id) {
//         let wareHouse = JSON.parse(localStorage.getItem('warehouse'));
//             let name = '-----';
//             if (wareHouse) {
//                 name = wareHouse.filter(x => x.id === Id).map(x => x.name).shift();
//             }
//             return name;

//     }

//     getRackId(Id) {
//         let racklist = JSON.parse(localStorage.getItem('rackList'));
//         let name = '-----';
//         if (racklist) {
//             name = racklist.filter(x => x.id === Id).map(x => x.rackName).shift();
//         }
//         return name;
//     }

//     getRackComName(Id) {

//         let rackcomlist = JSON.parse(localStorage.getItem('rackComList'));
//         let name = '-----';
//         if (rackcomlist) {
//             name = rackcomlist.filter(x => x.id === Id).map(x => x.compartmentName).shift();
//         }
//         return name;
//     }

//     getDeviceAntenna(Id) {
//         let deviceAntenna = JSON.parse(localStorage.getItem('deviceAntenna'));
//         let name = '-----';
//         if (deviceAntenna) {
//             name = deviceAntenna.filter(x => x.id === Id).map(x => x.antennaName).shift();
//         }
//         return name;
//     }


//     getUserDetail(Id): any {
//         if (Id) {
//             this.userServiceProxy.getUserForEdit(Id).subscribe(data => {
//                 if (data) {
//                     this.creatorName = data.user.name + ' ' + data.user.surname;
//                     this.creatorRoles = data.roles.filter(x => x.isAssigned === true).map(x => x.roleDisplayName).join(' | ');
//                 }
//             });
//         }
//     }
//     getEncryptionKey(Id) {
//         this.encryptionKeyProxy.get(Id).subscribe(data => {
//             if (data) {
//                 this.encryptionKey = data.keyValue;
//             }
//         });
//     }

//     VarietyItem(item) {
//     }
//     getUserName(Id) {
//         let users = JSON.parse(localStorage.getItem('users'));
//         let name = '';
//         if (users) {
//             name = users.filter(x => x.Id === Id).map(x => x.name).shift();
//         }
//         return name;
//     }
//     getFirstUserRole(Id) {
//         let users = JSON.parse(localStorage.getItem('users'));
//         let name = '';
//         if (users) {
//             let Role = users.filter(x => x.Id === Id).map(x => x.Roles).shift();
//             if (Role) {
//                 name = Role.map(x => x.roleName);
//             }
//         }
//         return name;
//     }

// }
