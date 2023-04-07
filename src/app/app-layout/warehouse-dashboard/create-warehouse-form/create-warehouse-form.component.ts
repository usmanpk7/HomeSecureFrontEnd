// import { MapsAPILoader } from '@agm/core';
// import { Component, ElementRef, EventEmitter, Injector, NgZone, OnInit, Output, ViewChild } from '@angular/core';
// import { FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';
// import { DateTimeService } from '@app/shared/common/timing/date-time.service';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { EncryptionDecryptionService } from '@shared/encryption-decryption.service';
// import {
//     CreateRackInput,
//     CreateRackCompartmentInput,
//     RackServiceProxy,
//     RackCompartmentServiceProxy,
//     CreateWareHouseInput,
//     WareHouseServiceProxy,
//     LowLevelWareHouseItemServiceProxy,
//     LowLevelWareHouseItemDto,
//     OrganizationUnitServiceProxy,
//     WareHouseAssignedDeviceServiceProxy,
//     DeviceServiceProxy,
//     CreateAntennaWarehouseInput,
//     AntennaWarehouseServiceProxy,
//     DeviceAntennaServiceProxy,
//     CreateLowLevelWareHouseItemInput,
//     CreateDeviceInput,
//     CreateWareHouseAssignedDeviceInput,
//     ItemServiceProxy,
// } from '@shared/service-proxies/service-proxies';
// import { forkJoin } from 'rxjs';

// @Component({
//     selector: 'app-create-warehouse-form',
//     templateUrl: './create-warehouse-form.component.html',
//     styleUrls: ['./create-warehouse-form.component.css'],
// })
// export class CreateWarehouseFormComponent extends AppComponentBase implements OnInit {
//     // tslint:disable-next-line:no-output-rename
//     @Output('gridload') gridload: EventEmitter<any> = new EventEmitter();
//     wareHouseForm: FormGroup;
//     createWarehouse = new CreateWareHouseInput();
//     createAntennaform = new CreateAntennaWarehouseInput();
//     createLowLevelItemConfig = new CreateLowLevelWareHouseItemInput();
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
//     lowLevelWarehouse: any[];
//     orgnizationUnit: any[];
//     deviceList: any[];
//     DeviceAntennaList: any[];
//     forms: any = FormGroup;
//     formIndex: number;
//     formConfigIndex: number;
//     dropdown: Array<any>;
//     configforms: any = FormGroup;
//     rackList: any = [];
//     rackCompartment: any = [];
//     rackCompList: any = [];
//     wareHouseList: any = [];
//     StoreList: any = [];
//     @ViewChild('search') searchElementRef: ElementRef;
//     submitted = false;
//     constructor(
//         injector: Injector,
//         private _wareHouseServiceProxy: WareHouseServiceProxy,
//         private _lowLevelWareHouseItemServiceProxy: LowLevelWareHouseItemServiceProxy,
//         private _itemServiceProxy: ItemServiceProxy,
//         private _rackServiceProxy: RackServiceProxy,
//         private itemProxy: DeviceServiceProxy,
//         private _wareHouseAssignedDeviceServiceProxy: WareHouseAssignedDeviceServiceProxy,
//         private _rackCompartmentServiceProxy: RackCompartmentServiceProxy,
//         private _deviceAntennaServiceProxy: DeviceAntennaServiceProxy,
//         private _antennaWarehouseServiceProxy: AntennaWarehouseServiceProxy,
//         private _organizationUnitServiceProxy: OrganizationUnitServiceProxy,
//         private _deviceServiceProxy: DeviceServiceProxy,
//         private _decryptService: EncryptionDecryptionService,
//         private mapsAPILoader: MapsAPILoader,
//         private datetimeService: DateTimeService,
//         private ngZone: NgZone
//     ) {
//         super(injector);
//         this.forms = [];
//         this.configforms = [];
//         this.formIndex = 0;
//         this.formConfigIndex = 0;
//         this.getForm();
//         this.getLowItemConfig();
//     }
//     ngOnInit() {
//         this.getOrgnazationUnit();
//         this.getAllDevices();
//         this.getLowLevelWarehouse();
//         this.getRackId();
//         this.rackComp();
//         this.getDeviceAntenna();
//         this.getWareHouse();
//         this.getItemAll();
//         this.wareHouseForm = new FormGroup({
//             warehouseCode: new FormControl('', [Validators.required]),
//             warehouseName: new FormControl('', [Validators.required]),
//             warehouseDesc: new FormControl('', [Validators.required]),
//             warehouseParent: new FormControl(true),
//             orgnizationUnitId: new FormControl('', [Validators.required]),
//             dependableOfId: new FormControl(''),
//             storehouse: new FormControl(false),
//             Isdependable: new FormControl(false),
//             address: new FormControl(this.address),
//             longtitude: new FormControl(this.lng),
//             latitude: new FormControl(this.lat),
//             fileUpload: new FormControl(),
//             deviceIds: new FormControl('', [Validators.required]),
//         });
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
//     get validators() {
//         return this.wareHouseForm.controls;
//     }
//     isValid(control: any): boolean {
//         return control.hasError('required') && (control.dirty || control.touched) && control.value === '';
//     }
//     getDeviceAntenna(organizationId?: number) {
//         if (organizationId) {
//             this._deviceAntennaServiceProxy
//                 .getAll(
//                     this.appSession.tenantId,
//                     undefined,
//                     organizationId,
//                     undefined,
//                     undefined,
//                     undefined,
//                     undefined,
//                     0,
//                     1000
//                 )
//                 .subscribe((res) => {
//                     this.DeviceAntennaList = res.items;
//                 });
//         } else {
//             this._deviceAntennaServiceProxy
//                 .getAll(
//                     this.appSession.tenantId,
//                     undefined,
//                     this.commonUtility.organizationId,
//                     undefined,
//                     undefined,
//                     undefined,
//                     undefined,
//                     0,
//                     1000
//                 )
//                 .subscribe((res) => {
//                     this.DeviceAntennaList = res.items;
//                 });
//         }
//     }
//     validateForms() {
//         let antennaform = this.forms.filter((x) => x.invalid === true);
//         let configform = this.configforms.filter((x) => x.invalid === true);
//         if (antennaform.length > 0 || configform.length > 0) {
//             return true;
//         }
//         return false;
//     }
//     getItemAll() {
//         this._itemServiceProxy
//             .getAll(
//                 this.appSession.tenantId,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 0,
//                 1000
//             )
//             .subscribe((res) => {
//                 this.StoreList = [];
//                 res.items.forEach((element) => {
//                     this.StoreList.push({
//                         itemName: this.decrypt(element.itemName),
//                         id: element.id,
//                     });
//                 });
//             });
//     }
//     decrypt(data: string) {
//         return this._decryptService.decrypt(data);
//     }
//     getRackId(organizationId?: number) {
//         if (organizationId) {
//             this._rackServiceProxy
//                 .getAll(
//                     this.appSession.tenantId,
//                     undefined,
//                     this.commonUtility.organizationId,
//                     undefined,
//                     undefined,
//                     0,
//                     1000
//                 )
//                 .subscribe((res) => {
//                     res.items.map((m) => {
//                         this.rackList.push({ name: m.rackName, code: m.id });
//                     });
//                 });
//         } else {
//             this._rackServiceProxy
//                 .getAll(
//                     this.appSession.tenantId,
//                     undefined,
//                     this.commonUtility.organizationId,
//                     undefined,
//                     undefined,
//                     0,
//                     1000
//                 )
//                 .subscribe((res) => {
//                     res.items.map((m) => {
//                         this.rackList.push({ name: m.rackName, code: m.id });
//                     });
//                 });
//         }
//     }

//     rackComp(organizationId?: number) {
//         if (organizationId) {
//             this._rackCompartmentServiceProxy
//                 .getAll(
//                     this.appSession.tenantId,
//                     undefined,
//                     this.commonUtility.organizationId,
//                     undefined,
//                     undefined,
//                     undefined,
//                     0,
//                     1000
//                 )
//                 .subscribe((data) => {
//                     data.items.map((m) => {
//                         this.rackCompList.push({ name: m.compartmentName, code: m.id });
//                     });
//                 });
//         } else {
//             this._rackCompartmentServiceProxy
//                 .getAll(
//                     this.appSession.tenantId,
//                     undefined,
//                     this.commonUtility.organizationId,
//                     undefined,
//                     undefined,
//                     undefined,
//                     0,
//                     1000
//                 )
//                 .subscribe((data) => {
//                     data.items.map((m) => {
//                         this.rackCompList.push({ name: m.compartmentName, code: m.id });
//                     });
//                 });
//         }
//     }

//     getForm() {
//         let form = new FormGroup({
//             index: new FormControl(this.formIndex),
//             antennaZone: new FormControl('', [Validators.required]),
//             deviceAntenna: new FormControl('', [Validators.required]),
//             rackId: new FormControl('', [Validators.required]),
//             rackComId: new FormControl('', [Validators.required]),
//             activewareHouse: new FormControl(true),
//         });
//         this.forms.push(form);
//         this.formIndex++;
//     }

//     getLowItemConfig() {
//         let configform = new FormGroup({
//             index: new FormControl(this.formConfigIndex),
//             alertName: new FormControl('', [Validators.required]),
//             storeItems: new FormControl('', [Validators.required]),
//             activateLowAlert: new FormControl(true),
//             QuantityType: new FormControl('1'),
//             lowLevelQuanity: new FormControl('', [Validators.required]),
//             lowLevelEarlyWarning: new FormControl('', [Validators.required]),
//             acitvateExpiryAlert: new FormControl(true),
//             expiryDateIntervals: new FormControl('', [Validators.required]),
//             expiryDateEarlyWarning: new FormControl('', [Validators.required]),
//         });
//         this.configforms.push(configform);
//         this.formConfigIndex++;
//     }

//     addNewForm() {
//         this.getForm();
//     }

//     addNewLowlevelItems() {
//         this.getLowItemConfig();
//     }

//     getLowLevelWarehouse() {
//         this._lowLevelWareHouseItemServiceProxy
//             .getAll(
//                 this.appSession.tenantId,
//                 undefined,
//                 undefined,
//                 undefined,
//                 this.commonUtility.organizationId,
//                 undefined,
//                 0,
//                 1000
//             )
//             .subscribe((res) => {
//                 this.lowLevelWarehouse = res.items;
//             });
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

//     getOrgnazationUnit() {
//         this._organizationUnitServiceProxy.getOrganizationUnits().subscribe((res) => {
//             this.orgnizationUnit = res.items;
//         });
//     }

//     getWareHouse() {
//         this._wareHouseServiceProxy
//             .getAll(this.appSession.tenantId, undefined, this.commonUtility.organizationId, true, undefined, 0, 1000)
//             .subscribe((res) => {
//                 this.wareHouseList = res.items;
//             });
//     }

//     getAllDevices(organizationId?: number) {
//         
//         if (organizationId) {
//             this._deviceServiceProxy
//                 .getAll(this.appSession.tenantId, undefined, undefined, undefined, organizationId, undefined, 0, 1000)
//                 .subscribe((res) => {
//                     this.deviceList = res.items;
//                 });
//         } else {
//             this._deviceServiceProxy
//                 .getAll(
//                     this.appSession.tenantId,
//                     undefined,
//                     undefined,
//                     undefined,
//                     this.commonUtility.organizationId,
//                     undefined,
//                     0,
//                     1000
//                 )
//                 .subscribe((res) => {
//                     this.deviceList = res.items;
//                 });
//         }
//     }

//     markerDragEnd($event: any) {
//         this.latitude = $event.coords.lat;
//         this.longitude = $event.coords.lng;
//     }

//     handleFileInput(file: FileList) {
//         this.filename = file[0].name;
//         this.size = file[0].size;
//         const reader = new FileReader();

//         reader.onload = (event: any) => {
//             this.fileUpload = event.target.result;
//         };
//         this.wareHouseForm.controls.fileUpload.setErrors(null);
//         reader.readAsDataURL(file[0]);
//     }

//     openCreateRackForm() {
//         this.displayResponsive = true;
//     }

//     get f() {
//         return this.wareHouseForm.controls;
//     }

//     submit() {
//         if (this.validate()) {
//             this.submitted = true;
//             this.createWarehouse = new CreateWareHouseInput();
//             this.createWarehouse.tenantId = this.appSession.tenantId;
//             this.createWarehouse.code = this.wareHouseForm.value.warehouseCode;
//             this.createWarehouse.organizationalUnitId = this.wareHouseForm.value.orgnizationUnitId;
//             this.createWarehouse.name = this.wareHouseForm.value.warehouseName;
//             this.createWarehouse.description = this.wareHouseForm.value.warehouseDesc;
//             this.createWarehouse.isParent = this.wareHouseForm.value.warehouseParent;
//             this.createWarehouse.isStoreHouse = this.wareHouseForm.value.storehouse;
//             this.createWarehouse.address = this.address;
//             this.createWarehouse.latitude = this.lat;
//             this.createWarehouse.longtitude = this.lng;
//             this.createWarehouse.isActive = true;
//             if (this.fileUpload) {
//                 let file = this.fileUpload.split(',');
//                 this.createWarehouse.logo = file[1];
//             }
//             //for check IsDependableOf
//             this.createWarehouse.dependable = this.wareHouseForm.value.Isdependable;
//             if (this.createWarehouse.dependable) {
//                 this.createWarehouse.denpendableOfId = this.wareHouseForm.value.dependableOfId;
//             }
//             this._wareHouseServiceProxy.create(this.createWarehouse).subscribe((data) => {
//                 let res = data;
//                 this.createassignedDevice(res.id);
//                 this.createAntennaWarehouse(res.id);
//                 this.gridload.emit();
//                 this.message.success('Saved Successfully');
//             });
//         }
//     }

//     removeAntenna(index) {
//         let form = this.forms.findIndex((x) => x.value.index === index);
//         this.forms.splice(form, 1);
//         this.formIndex--;
//     }
//     removeconfigForm(index) {
//         let form = this.configforms.findIndex((x) => x.value.index === index);
//         this.configforms.splice(form, 1);
//         this.formConfigIndex--;
//     }
//     createAntennaWarehouse(warehouseId) {
//         for (let i = 0; i < this.forms.length; i++) {
//             let input = new CreateAntennaWarehouseInput();
//             input.tenantId = this.appSession.tenantId;
//             input.warehouseId = warehouseId;
//             input.antennaZone = this.forms[i].value.antennaZone;
//             input.deviceAnteenaId = this.forms[i].value.deviceAntenna;
//             input.organizationUnitId = this.wareHouseForm.value.orgnizationUnitId;
//             input.isActive = this.forms[i].value.activewareHouse;
//             input.rackCompartmentId = this.forms[i].value.rackComId;
//             input.rackId = this.forms[i].value.rackId;
//             this._antennaWarehouseServiceProxy.create(input).subscribe((res) => {
//                 this.createLowlevelItem(warehouseId, this.wareHouseForm.value.orgnizationUnitId);
//             });
//         }
//     }

//     createassignedDevice(warehouseId) {
//         let ids = this.wareHouseForm.value.deviceIds;
//         ids.forEach((element) => {
//             let input = new CreateWareHouseAssignedDeviceInput();
//             input.tenantId = this.appSession.tenantId;
//             input.wareHouseId = warehouseId;
//             input.deviceId = element;
//             this._wareHouseAssignedDeviceServiceProxy.create(input).subscribe((res) => {});
//         });
//     }
//     createLowlevelItem(data, organizationId) {
//         forkJoin(
//             this.configforms.map((item) => {
//                 let input = new CreateLowLevelWareHouseItemInput();
//                 input.tenantId = this.appSession.tenantId;
//                 input.warehouseId = data;
//                 input.alertName = item.value.alertName;
//                 input.organizationUnitId = organizationId;
//                 input.lowAlert = item.value.activateLowAlert;
//                 input.itemId = item.value.storeItems;
//                 input.llEarlyWarning = item.value.lowLevelEarlyWarning;
//                 input.expiryAlert = item.value.acitvateExpiryAlert;
//                 input.expiryEarlyWarning = item.value.expiryDateEarlyWarning;
//                 if (item.value.QuantityType === '2') {
//                     input.lowLevelWeight = item.value.lowLevelQuanity;
//                 } else {
//                     input.lowLevelQty = item.value.lowLevelQuanity;
//                 }
//                 let date = new Date();
//                 date.setHours(item.value.expiryDateIntervals, 0, 0);
//                 input.expiryDate = this.datetimeService.toUtcDate(date);
//                 return this._lowLevelWareHouseItemServiceProxy.create(input);
//             })
//         ).subscribe((p: Array<any>) => {
//             this.reset();
//             this.submitted = false;
//             this.displayResponsive = false;
//             this.gridload.emit();
//         });
//     }
//     validate() {
//         if (this.fileUpload === undefined || this.fileUpload === '') {
//             this.wareHouseForm.controls.fileUpload.setErrors({ invalid: true });
//             return false;
//         } else {
//             this.wareHouseForm.controls.fileUpload.setErrors(null);
//         }
//         if (this.wareHouseForm.controls.Isdependable.value && this.wareHouseForm.controls.dependableOfId.value === '') {
//             this.wareHouseForm.controls.dependableOfId.setErrors({ invalid: true });
//             return false;
//         } else {
//             this.wareHouseForm.controls.dependableOfId.setErrors(null);
//         }
//         return true;
//     }
//     onChangeOrganization(event) {
//         let organizationId = event.value;
//         if (organizationId) {
//             this.getAllDevices(organizationId);
//             this.getDeviceAntenna(organizationId);
//             this.getRackId(organizationId);
//             this.rackComp(organizationId);
//         }
//     }
//     reset() {
//         this.wareHouseForm.reset();
//         this.wareHouseForm.controls.orgnizationUnitId.setValue('');
//         this.wareHouseForm.controls.dependableOfId.setValue('');
//         this.wareHouseForm.controls.deviceIds.setValue('');
//         this.configforms = [];
//         this.forms = [];
//         this.formIndex = 0;
//         this.formConfigIndex = 0;
//         this.fileUpload = '';
//         this.getLowItemConfig();
//         this.getForm();
//     }
// }
