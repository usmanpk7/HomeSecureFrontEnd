// import { Component, ElementRef, EventEmitter, Injector, NgZone, OnInit, Output, ViewChild } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import {
//     CreateSupplierInput,
//     SupplierServiceProxy,
// } from '@shared/service-proxies/service-proxies';
// import { MapsAPILoader } from '@agm/core';
// declare const google;
// @Component({
//     selector: 'app-create-supplier',
//     templateUrl: './create-supplier.component.html',
//     styleUrls: ['./create-supplier.component.css'],
// })
// export class CreateSupplierComponent extends AppComponentBase implements OnInit {
//     @ViewChild('modalCreate', { static: true }) modalCreate: DailogComponent;
//     // tslint:disable-next-line:no-output-rename
//     @Output('gridload') gridload: EventEmitter<any> = new EventEmitter();
//     displayResponsive: boolean;
//     intentNumberForEdit = 0;
//     supplierForm: FormGroup;
//     value: string;
//     active = false;
//     saving = false;
//     isNew = true;
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
//     submitted = false;
//     @ViewChild('search')
//     public searchElementRef: ElementRef;
//     supplier: CreateSupplierInput = new CreateSupplierInput();

//     constructor(
//         injector: Injector,
//         private _supplierServiceProxy: SupplierServiceProxy,
//         private mapsAPILoader: MapsAPILoader,
//         private ngZone: NgZone
//     ) {
//         super(injector);
//     }
//     // tslint:disable-next-line:use-lifecycle-interface
//     ngAfterViewInit() {
//         this.mapsAPILoader.load().then(() => {
//             this.setCurrentLocation();
//             this.geoCoder = new google.maps.Geocoder();

//             let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
//             autocomplete.addListener('place_changed', () => {
//                 this.ngZone.run(() => {
//                     //get the place result
//                     let place: google.maps.places.PlaceResult = autocomplete.getPlace();

//                     //verify result
//                     if (place && (place.geometry === undefined || place.geometry === null)) {
//                         return;
//                     }

//                     this.address = place.formatted_address;

//                     this.lat = place.geometry.location.lat().toString();
//                     this.lng = place.geometry.location.lng().toString();

//                     //set latitude, longitude and zoom
//                     this.latitude = place.geometry.location.lat();
//                     this.longitude = place.geometry.location.lng();
//                     this.zoom = 12;
//                 });
//             });
//         });
//     }
//     ngOnInit(): void {
//         this.supplierForm = new FormGroup({
//             name: new FormControl('', Validators.required),
//             email: new FormControl('', Validators.required),
//             phoneNumber: new FormControl('', Validators.required),
//             address: new FormControl(this.address),
//             longtitude: new FormControl(this.lat),
//             latitude: new FormControl(this.lng),
//             activateSupplier: new FormControl(true),
//         });
//     }

//     get f() {
//         return this.supplierForm.controls;
//     }

//     imageFileInput(file: FileList) {
//         this.filename = file[0].name;
//         this.size = file[0].size;
//         const reader = new FileReader();

//         reader.onload = (event: any) => {
//             this.imgUpload = event.target.result;
//         };
//         reader.readAsDataURL(file[0]);
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

//     onImgError(event) {
//         event.target.src = '../../../../assets//images/widget/color_halmat.svg';
//     }

//     openAuthoritymodel(intentId?: number) {
//         this.displayResponsive = true;
//     }

//     submit() {
//         this.submitted = true;

//         if (this.supplierForm.invalid) {
//             return;
//         }

//         this.supplierForm.value.tenantId = Number(this.appSession.tenantId);
//         this.supplierForm.value.address = this.address;
//         this.supplierForm.value.latitude = this.lat;
//         this.supplierForm.value.longtitude = this.lng;
//         let value = this.supplierForm.value.image;
//         this.supplierForm.value.image = value;
//         let file = '';
//         let file2 = '';
//         if (this.imgUpload) {
//             file = this.imgUpload.split(',')[1];
//         }
//         if (this.fileUpload) {
//             file2 = this.fileUpload.split(',')[1];
//         }
//         this.supplierForm.value.logo = file;
//         this.supplierForm.value.image = file2;
//         this._supplierServiceProxy.create(this.supplierForm.value).subscribe((data: any) => {
//             if (data.tenantId === this.appSession.tenantId) {
//                 this.gridload.emit();
//                 this.fileUpload = '';
//                 this.imgUpload = '';
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
//         this.geoCoder.geocode({ location: { lat: latitude, lng: longitude } }, (results, status) => {
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
