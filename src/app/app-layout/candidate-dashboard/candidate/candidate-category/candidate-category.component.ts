// import { Component, Injector, OnInit, ViewChild } from '@angular/core';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { CandidateCategoryDto, CandidateCategoryServiceProxy, ProfileServiceProxy } from '@shared/service-proxies/service-proxies';
// import { Table } from 'primeng/table';

// @Component({
//   selector: 'app-candidate-category',
//   templateUrl: './candidate-category.component.html',
//   styleUrls: ['./candidate-category.component.css']
// })
// export class CandidateCategoryComponent extends AppComponentBase implements OnInit {
//   @ViewChild('dataTable') table: Table;
//   first = 0;
//   row = 10;
//   skipCount = 0;
//   maxResultCount = 1;
//   listDto: Array<CandidateCategoryDto>;
// isLoading: boolean;
// profilePicture: string;
//   constructor(injector: Injector, private candidateCategoryService: CandidateCategoryServiceProxy
//     , private profileServiceProxy: ProfileServiceProxy) {
//     super(injector);
//     this.listDto = [];
//     this.isLoading = false;
//    }

//   ngOnInit(): void {
//    this.getAll();
//   }
//   paginate(event) {
//     this.first = event.first ;
//     this.maxResultCount = (this.first + 1) * this.row; //10
//     this.skipCount = this.first * this.row;
// }
//   onExpandRow(item: any) {
//   }
//  getAll() {
//   this.isLoading = true;
//   this.candidateCategoryService.getAll(this.appSession.tenantId , undefined, undefined, 0, 1000)
//   .subscribe(data => {
//     this.isLoading = false;
//     this.profileServiceProxy.getProfilePicture().subscribe((result) => {
//       if (result && result.profilePicture) {
//           this.profilePicture = 'data:image/jpeg;base64,' + result.profilePicture;
//       }
//    this.listDto = data.items;
//   });
//  });
// }
//  getUserName(Id) {
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
