// import { MapsAPILoader } from '@agm/core';
// import { Component, ElementRef, EventEmitter, Injector, NgZone, OnInit, Output, ViewChild } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { CreateWareHouseInput, WareHouseServiceProxy } from '@shared/service-proxies/service-proxies';

// @Component({
//     selector: 'app-create-warehouse-form',
//     templateUrl: './create-warehouse-form.component.html',
//     styleUrls: ['./create-warehouse-form.component.css']
// })
// export class CreateWarehouseFormComponent extends AppComponentBase implements OnInit {

//     // tslint:disable-next-line:no-output-rename
//     @Output('gridload') gridload: EventEmitter<any> = new EventEmitter();
//     createWarehouseForm: FormGroup;
//     createWarehouse = new CreateWareHouseInput();
//     displayResponsive: boolean;
//     fileUpload: any;
//     imgUpload: any;
//     filename: any;
//     size: any;
//     lat: string;
//     lng: string;
//     latitude: any;
//     longitude: any;
//     zoom: number;
//     address: string;
//     private geoCoder;
//     organizationUnitList: any = [];
//     @ViewChild('search')
//     public searchElementRef: ElementRef;
//     submitted = false;
//     constructor(
//         injector: Injector,
//         private _wareHouseServiceProxy: WareHouseServiceProxy
//     ) {
//         super(injector);


//     }

//     ngOnInit(): void {

//         this.createWarehouseForm = new FormGroup({
//             wareHouse: new FormControl('', Validators.required),
//             code: new FormControl(0, Validators.required),
//             denpendableOf: new FormControl('', Validators.required),
//             description: new FormControl('', Validators.required),
//             address: new FormControl(this.address),
//             longtitude: new FormControl(this.lng),
//             latitude: new FormControl(this.lng),
//             position: new FormControl(0),
//             orgnizationid: new FormControl(1),
//             isactive: new FormControl(true),
//             isparent: new FormControl(true),
//             dependable: new FormControl(true),
//             isstorehouse: new FormControl(true)

//         });
//     }


//     handleFileInput(file: FileList) {
//         this.filename = file[0].name;
//         this.size = file[0].size;
//         const reader = new FileReader();

//         reader.onload = (event: any) => {

//             this.fileUpload = event.target.result;

//         };
//         reader.readAsDataURL(file[0]);
//     }

//     openWarehouseModel() {
//         this.displayResponsive = true;
//     }

//     get f() { return this.createWarehouseForm.controls; }

//     submit() {
//         this.submitted = true;


//         this.createWarehouse.tenantId = Number(this.appSession.tenantId);
//         this.createWarehouse.address = this.createWarehouseForm.value.address;
//         this.createWarehouse.organizationalUnitId = this.commonUtility.organizationId;
//         this.createWarehouse.dependable = this.createWarehouseForm.value.dependable;
//         this.createWarehouse.description = this.createWarehouseForm.value.description;
//         this.createWarehouse.code = this.createWarehouseForm.value.code;
//         this.createWarehouse.isActive = this.createWarehouseForm.value.isactive;
//         this.createWarehouse.isParent = this.createWarehouseForm.value.isparent;
//         this.createWarehouse.isStoreHouse = this.createWarehouseForm.value.isstorehouse;
//         this.createWarehouse.denpendableOfId = this.createWarehouseForm.value.denpendableOf;
//         this.createWarehouse.name = this.createWarehouseForm.value.wareHouse;
//         this.createWarehouse.latitude = this.createWarehouseForm.value.latitude;
//         this.createWarehouse.longtitude = this.createWarehouseForm.value.longtitude;
//         let file = this.fileUpload.split(',');
//         this.createWarehouse.logo = file[1];


//         this._wareHouseServiceProxy.create(this.createWarehouse).subscribe(data => {
//             if (data.tenantId === this.appSession.tenantId) {
//                 this.gridload.emit();
//                 this.fileUpload = '';
//                 this.message.success('Saved Successfully');
//             }
//         });

//     }

//     private setCurrentLocation() {
//         if ('geolocation' in navigator) {
//             navigator.geolocation.getCurrentPosition((position) => {
//                 this.latitude = position.coords.latitude;
//                 this.longitude = position.coords.longitude;
//                 this.zoom = 8;
//                 this.getAddress(this.latitude, this.longitude);
//             });
//         }
//     }


//     markerDragEnd($event: any) {

//         this.latitude = $event.coords.lat;
//         this.longitude = $event.coords.lng;
//         this.getAddress(this.latitude, this.longitude);
//     }

//     getAddress(latitude, longitude) {
//         this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
//             console.log(results);
//             console.log(status);
//             if (status === 'OK') {
//                 if (results[0]) {
//                     this.zoom = 12;
//                     this.address = results[0].formatted_address;
//                 } else {
//                     window.alert('No results found');
//                 }
//             } else {
//                 window.alert('Geocoder failed due to: ' + status);
//             }

//         });
//     }

// }
