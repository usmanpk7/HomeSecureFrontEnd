// import { MapsAPILoader } from '@agm/core';
// import { Component, Injector, OnInit, ViewChild } from '@angular/core';
// import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { CandidateInerviewLocationDto, CandidateInerviewLocationServiceProxy, ProfileServiceProxy } from '@shared/service-proxies/service-proxies';
// import { Table } from 'primeng/table';

// @Component({
//   selector: 'app-candidate-interview-location',
//   templateUrl: './candidate-interview-location.component.html',
//   styleUrls: ['./candidate-interview-location.component.css']
// })
// export class CandidateInterviewLocationComponent extends AppComponentBase  implements OnInit {
//   @ViewChild('mapModel', { static: true }) mapModel: DailogComponent;
//   @ViewChild('dataTable') table: Table;
//   first = 0;
//   row = 10;
//   skipCount = 0;
//   maxResultCount = 1;
//   latitude: number;
//   longitude: number;
//   listDto: Array<CandidateInerviewLocationDto>;
// isLoading: boolean;
// profilePicture: string;
// zoom: number;
// address: string;
// private geoCoder;
//   constructor(injector: Injector, private candidateLocationService: CandidateInerviewLocationServiceProxy
//     , private profileServiceProxy: ProfileServiceProxy, private mapsAPILoader: MapsAPILoader) {
//     super(injector);
//     this.listDto = [];
//     this.isLoading = false;
//    }

//   ngOnInit(): void {
//     this.mapsAPILoader.load().then(() => {
//       this.geoCoder = new google.maps.Geocoder;

//       let place: google.maps.places.PlaceResult;

//       //verify result
//       if (!place || place.geometry === undefined || place.geometry === null) {
//         return;
//       }
//       this.latitude = place.geometry.location.lat();
//       this.longitude = place.geometry.location.lng();
//       this.zoom = 12;
//     });



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
//   this.candidateLocationService.getAll(this.appSession.tenantId , undefined, undefined, undefined , 0, 1000)
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
// OpenMap(lat: number, lng: number) {
//     this.latitude = Number(lat);
//     this.longitude = Number(lng);
//     this.zoom = 8;
//     this.getAddress(this.latitude, this.longitude);
//     this.mapModel.show();

//   }
//   getAddress(latitude, longitude) {
//     this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {

//       if (status === 'OK') {
//         if (results[0]) {
//           this.zoom = 12;
//           this.address = results[0].formatted_address;
//         } else {
//           window.alert('No results found');
//         }
//       } else {
//         window.alert('Geocoder failed due to: ' + status);
//       }

//     });
//   }
// closedMappedModel() {
//     this.mapModel.hide();
// }
// }
