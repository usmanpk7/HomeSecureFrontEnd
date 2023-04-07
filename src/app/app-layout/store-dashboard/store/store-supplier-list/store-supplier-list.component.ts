// import { Component, Injector, NgZone, OnInit, ViewChild } from '@angular/core';
// import { FooterActionButton } from '@app/app-layout/indent-dashboard/model/footer-action-button';
// import { AppConsts } from '@shared/AppConsts';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { ProfileServiceProxy, SupplierDto, SupplierServiceProxy } from '@shared/service-proxies/service-proxies';
// import { MapsAPILoader } from '@agm/core';
// import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
// import { Table } from 'primeng/table';
// @Component({
//   selector: 'app-store-supplier-list',
//   templateUrl: './store-supplier-list.component.html',
//   styleUrls: ['./store-supplier-list.component.css']
// })
// export class StoreSupplierListComponent extends AppComponentBase implements OnInit {
//     profilePicture:string=AppConsts.appBaseUrl + '/assets/common/images/default-profile-picture.png';
//     userName = '';
//     @ViewChild('mapModel', { static: true }) mapModel: DailogComponent;
//     @ViewChild('dataTable') table: Table;
//   footerActionButton: Array<FooterActionButton>;
//   supplierDto: Array<SupplierDto>;
//   first = 0;
//     row = 10;
//     skipCount = 0;
//     maxResultCount = 1;
//     storeVariations: Array<any>;
//     storeCheck: boolean;
//     value: boolean;
//     latitude: number;
//     longitude: number;
//     zoom: number;
//     address: string;
//     private geoCoder;
//   constructor(private SupplierProxy: SupplierServiceProxy, injector: Injector,
//     private _profileServiceProxy: ProfileServiceProxy,
//     private mapsAPILoader: MapsAPILoader,private ngZone: NgZone) {
//     super(injector);
//     this.supplierDto = [];
//     this.isLoading = false;
//     this.storeVariations = [];
//     this.storeCheck = false;
//     this.value = true;
//   }

//   ngOnInit(): void {
//   this.getAll();

//   this.mapsAPILoader.load().then(() => {
//     this.geoCoder = new google.maps.Geocoder;

//     let place: google.maps.places.PlaceResult;

//     //verify result
//     if (!place || (place.geometry === undefined || place.geometry === null)) {
//       return;
//     }
//     this.latitude = place.geometry.location.lat();
//     this.longitude = place.geometry.location.lng();
//     this.zoom=12;
//   });

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
// this.SupplierProxy.getAll(this.appSession.tenantId, undefined, undefined, 0, 1000).subscribe(data => {
//  if (data) {
//     {
//         this._profileServiceProxy.getProfilePicture().subscribe(result => {
//             if (result && result.profilePicture) {
//                 this.profilePicture = 'data:image/jpeg;base64,' + result.profilePicture;

//             }
//              this.supplierDto = data.items;
//             this.userName=this.appSession.user.userName;
//         });
//     }
//  }
//  this.isLoading = false;
// });
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
// OpenUrl(Url) {
// window.open(Url, '_blank');
// }

// closedMappedModel()
// {
//     this.mapModel.hide();
// }
// OpenMap(address:string)
// {

//     this.Getthelanglot(address);

// }

// getAddress(latitude, longitude) {
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



// markerDragEnd($event: any) {
//     this.latitude = $event.coords.lat;
//     this.longitude = $event.coords.lng;
//     this.getAddress(this.latitude, this.longitude);
//   }

// Getthelanglot(address:string)
// {
//     var geocoder = new google.maps.Geocoder();
// geocoder.geocode( { 'address': address}, (results, status)=> {

// if (status == google.maps.GeocoderStatus.OK) {
//     var lat =results[0]?.geometry?.location?.lat();
//     this.latitude=lat;
//     var long= results[0]?.geometry?.location?.lng();
//     this.longitude=long;
//     this.zoom = 8;
//     this.getAddress(this.latitude,this.longitude);
//     this.mapModel.show();
//     }
//     else
//     {
//         this.mapModel.show();
//     }
// });
// }
// }
