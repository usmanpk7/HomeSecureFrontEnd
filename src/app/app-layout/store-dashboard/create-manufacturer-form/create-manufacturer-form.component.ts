// import { Component, EventEmitter, Injector, OnInit, Output, NgZone, ViewChild, ElementRef } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { CreateManufacturerInput, ManufacturerServiceProxy } from '@shared/service-proxies/service-proxies';
// import { MapsAPILoader } from '@agm/core';
// declare const google;

// @Component({
//     selector: 'app-create-manufacturer-form',
//     templateUrl: './create-manufacturer-form.component.html',
//     styleUrls: ['./create-manufacturer-form.component.css']
// })
// export class CreateManufacturerFormComponent extends AppComponentBase implements OnInit {

//     @ViewChild('modalCreate', { static: true }) modalCreate: DailogComponent;
//     // tslint:disable-next-line:no-output-rename
//     @Output('gridload') gridload: EventEmitter<any> = new EventEmitter();
//     displayResponsive: boolean;
//     intentNumberForEdit: number;
//     ManufacturerForm: FormGroup;

//     fileUpload: any;
//     filename: any;
//     size: any;
//     latitude: any;
//     longitude: any;
//     zoom: number;
//     address: string;
//     lat: string;
//     lng: string;
//     private geoCoder;
//     submitted = false;

//     @ViewChild('search')
//     public searchElementRef: ElementRef;


//     constructor(
//         injector: Injector,
//         private _manufacturerServiceProxy: ManufacturerServiceProxy,
//         private mapsAPILoader: MapsAPILoader,
//         private ngZone: NgZone) {
//         super(injector);
//         this.intentNumberForEdit = 0;
//     }
//     // tslint:disable-next-line:use-lifecycle-interface
//     ngAfterViewInit() {
//         this.mapsAPILoader.load().then(() => {
//             this.setCurrentLocation();
//             this.geoCoder = new google.maps.Geocoder;

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

//         this.ManufacturerForm = new FormGroup({
//             name: new FormControl('', Validators.required),
//             email: new FormControl('', Validators.required),
//             phoneNumber: new FormControl('', Validators.required),
//             factoryName: new FormControl('', Validators.required),
//             address: new FormControl(this.address),
//             activateManufacturer: new FormControl(true)
//         });
//     }

//     onImgError(event) {
//         event.target.src = '../../../../assets//images/widget/color_halmat.svg';
//     }

//     openAuthoritymodel(intentId?: number) {

//         this.displayResponsive = true;
//         if (intentId > 0) {
//             this.intentNumberForEdit = intentId;
//             this.ManufacturerForm.patchValue({
//                 intentRequestFormId: intentId
//             });
//             this.ManufacturerForm.get('intentRequestFormId').disable();
//         } else {
//         }


//         // this.modalCreate.show();
//     }

//     get f() { return this.ManufacturerForm.controls; }


//     handleFileInput(file: FileList) {
//         this.filename = file[0].name;
//         this.size = file[0].size;
//         const reader = new FileReader();

//         reader.onload = (event: any) => {

//             this.fileUpload = event.target.result;

//         };
//         reader.readAsDataURL(file[0]);
//     }

//     isValid(control: any): boolean {
//         return control.hasError('required') && (control.dirty || control.touched);
//     }

//     submit() {

//         this.submitted = true;

//         if (this.ManufacturerForm.invalid) {
//             return;
//         }

//         this.ManufacturerForm.value.tenantId = this.appSession.tenantId;
//         let file = this.fileUpload.split(',');
//         this.ManufacturerForm.value.address = this.address;
//         this.ManufacturerForm.value.latitude = this.lat;
//         this.ManufacturerForm.value.longtitude = this.lng;
//         this.ManufacturerForm.value.image = file[1];
//         this._manufacturerServiceProxy.create(this.ManufacturerForm.value).subscribe((data: any) => {
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
