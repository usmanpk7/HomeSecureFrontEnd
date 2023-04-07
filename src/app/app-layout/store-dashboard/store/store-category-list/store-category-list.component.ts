// import { Component, Injector, OnInit, ViewChild } from '@angular/core';
// import { FooterActionButton } from '@app/app-layout/indent-dashboard/model/footer-action-button';
// import { AppConsts } from '@shared/AppConsts';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { ItemCategoryDto, ItemCategoryServiceProxy, ItemsTypesServiceProxy, ProfileServiceProxy } from '@shared/service-proxies/service-proxies';
// import { Table } from 'primeng/table';

// @Component({
//   selector: 'app-store-category-list',
//   templateUrl: './store-category-list.component.html',
//   styleUrls: ['./store-category-list.component.css']
// })
// export class StoreCategoryListComponent extends AppComponentBase implements OnInit {
//   @ViewChild('dataTable') table: Table;
//     profilePicture:string=AppConsts.appBaseUrl + '/assets/common/images/default-profile-picture.png';
//     userName = '';
//   footerActionButton: Array<FooterActionButton>;
//   itemCategoryDto: Array<ItemCategoryDto>;
//   first = 0;
//     row = 10;
//     skipCount = 0;
//     maxResultCount = 1;
//     storeVariations: Array<any>;
//     storeCheck: boolean;
//     value: boolean;
//   constructor(private itemCategoryProxy: ItemCategoryServiceProxy,private itemTypeProxy:ItemsTypesServiceProxy,
//     injector: Injector,private _profileServiceProxy: ProfileServiceProxy) {
//     super(injector);
//     this.itemCategoryDto = [];
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
//   }
//   handleChange(event) {

//   }
// getAll() {
//   this.isLoading = true;
//   this.itemCategoryProxy.getAll(this.appSession.tenantId, undefined, undefined, 0, 1000).subscribe(data => {
//     console.log(data)
//     if (data) {
//             {
//                 this._profileServiceProxy.getProfilePicture().subscribe(result => {
//                     if (result && result.profilePicture) {
//                         this.profilePicture = 'data:image/jpeg;base64,' + result.profilePicture;

//                     }
//                     this.itemCategoryDto = data.items;
//                     this.userName=this.appSession.user.userName;
//                 });
//             }

//     }
//     this.isLoading = false;
//   });
// }
// getUserName(Id) {
//   let users = JSON.parse(localStorage.getItem('users'));
//   let name = '';
//   if (users) {
//      name = users.filter(x => x.Id === Id).map(x => x.name).shift();
//    }
//    return name;
// }
// getUserRole(Id) {
//   let users = JSON.parse(localStorage.getItem('users'));
//   let name = '';
//   if (users) {
//      let Role = users.filter(x => x.Id === Id).map(x => x.Roles).shift();
//      if (Role) {
//           name = Role.map(x => x.roleName);
//      }
//    }
//    return name;
// }
// }
