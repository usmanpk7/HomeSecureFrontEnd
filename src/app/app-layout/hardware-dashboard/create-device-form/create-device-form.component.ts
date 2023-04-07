// import { Component, Injector, OnInit, ViewChild } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { CreateDeviceGpoConfigInput, CreateDeviceInput, DeviceGpoConfigServiceProxy, DeviceModelServiceProxy, DeviceServiceProxy } from '@shared/service-proxies/service-proxies';
// import { CreateModalFormComponent } from '../create-modal-form/create-modal-form.component';

// @Component({
//     selector: 'app-create-device-form',
//     templateUrl: './create-device-form.component.html',
//     styleUrls: ['./create-device-form.component.css']
// })
// export class CreateDeviceFormComponent extends AppComponentBase implements OnInit {

//     @ViewChild('CreateModelForm', { static: true }) CreateModelForm: CreateModalFormComponent;

//     displayResponsive: boolean;
//     createDeviceForm: FormGroup;
//     organizationUnitList: any = [];
//     orgnizationid: any = [];
//     modalList: any = [];
//     deviceid: any = [];
//     createDevice = new CreateDeviceInput();
//     createGpoConfig = new CreateDeviceGpoConfigInput();
//     submitted = false;

//     DeviceType = [
//         {
//             name: "Sensors",
//             id: 1
//         },
//         {
//             name: "FixedReader",
//             id: 2
//         },
//         {
//             name: "MobileReader",
//             id: 3
//         },
//         {
//             name: "EqisTag",
//             id: 4
//         },
//         {
//             name: "Lock",
//             id: 5
//         }
//     ];

//     constructor(injector: Injector,
//         private _deviceServiceProxy: DeviceServiceProxy,
//         private _deviceModelServiceProxy: DeviceModelServiceProxy,
//         private _deviceGpoConfigServiceProxy: DeviceGpoConfigServiceProxy) {
//         super(injector);
//         this.deviceid = [];
//         let id = this.orgnizationid;
//         this.createDeviceForm = new FormGroup({
//             deviceName: new FormControl('', Validators.required),
//             deviceAddress: new FormControl('', Validators.required),
//             deviceRFID: new FormControl('', Validators.required),
//             deviceType: new FormControl(1, Validators.required),
//             isActive: new FormControl(true),
//             modalId: new FormControl(1, Validators.required),
//             deviceDescription: new FormControl(''),

//             autoReverseGP01: new FormControl(true),
//             autoReverseGP02: new FormControl(true),
//             autoReverseGP03: new FormControl(true),
//             autoReverseGP04: new FormControl(true),

//             autoRTimeGP01: new FormControl(1, Validators.required),
//             autoRTimeGP02: new FormControl(1, Validators.required),
//             autoRTimeGP03: new FormControl(1, Validators.required),
//             autoRTimeGP04: new FormControl(1, Validators.required),

//             defaultGPO1: new FormControl(1, Validators.required),
//             defaultGPO2: new FormControl(1, Validators.required),
//             defaultGPO3: new FormControl(1, Validators.required),
//             defaultGPO4: new FormControl(1, Validators.required),

//             deviceIdGPO: new FormControl(1, Validators.required),

//             isActicedefault: new FormControl(true),

//             isActiveGPO1: new FormControl(true),
//             isActiveGPO2: new FormControl(true),
//             isActiveGPO3: new FormControl(true),
//             isActiveGPO4: new FormControl(true),

//             mergControlGpo1: new FormControl(true),
//             mergControlGpo2: new FormControl(true),
//             mergControlGpo3: new FormControl(true),
//             mergControlGpo4: new FormControl(true),

//             orgnizationid: new FormControl(id),
//             primaryGpo: new FormControl(1, Validators.required)

//         });

//         this._deviceServiceProxy.getAll(this.appSession.tenantId, undefined, undefined, undefined, 5, undefined, undefined, undefined).subscribe(res => {

//             this.deviceid = res.items[0].id

//         })
//     }

//     ngOnInit(): void {
//         this.getdeviceList();
//         this.GetOrganizationUserUnit();
//         this.getDeviceModal();
//     }

//     handleChange(event) {

//     }


//     GetOrganizationUserUnit() {
//         this.organizationUnitList = [];

//         let record = JSON.parse(localStorage.getItem("OrganizationUnit"));
//         if (record.length > 0)
//             this.organizationUnitList.push({ code: record[0].id, name: record[0].displayName });

//         this.createDeviceForm.patchValue({
//             orgnizationid: record[0].id,
//         });

//     }

//     getdeviceList() {
//         this._deviceServiceProxy.getAll(this.appSession.tenantId, undefined, undefined, undefined, 5, undefined, undefined, undefined).subscribe(res => {

//             this.deviceid = res.items[0].id

//         })
//     }
//     getDeviceModal() {
//         this._deviceModelServiceProxy.getAll(this.appSession.tenantId, undefined, true, undefined, undefined, undefined).subscribe(res => {

//             res.items.map(m => {
//                 this.modalList.push({ name: m.deviceModelName, code: m.id });
//             });
//             this.createDeviceForm.patchValue({
//                 modalId: res.items[0].id,
//             });

//         })
//     }


//     openDeviceModal() {
//         this.displayResponsive = true;
//     }

//     openModelForm() {
//         this.displayResponsive = false;
//         this.CreateModelForm.openCreateDeviceModal();
//     }

//     get f() { return this.createDeviceForm.controls; }


//     submit() {

//         this.submitted = true;

//         if (this.createDeviceForm.invalid) {
//             return
//         }

//         this.createDevice.tenantId = Number(this.appSession.tenantId);
//         this.createDevice.deviceName = this.createDeviceForm.value.deviceName;
//         this.createDevice.deviceAddress = this.createDeviceForm.value.deviceAddress;
//         this.createDevice.deviceDescription = this.createDeviceForm.value.deviceDescription;
//         this.createDevice.deviceType = this.createDeviceForm.value.deviceType;
//         this.createDevice.deviceModelId = this.createDeviceForm.value.modalId;
//         this.createDevice.rfid = this.createDeviceForm.value.deviceRFID;
//         this.createDevice.isActice = this.createDeviceForm.value.isActive;
//         this.createDevice.organizationUnitId = this.createDeviceForm.value.orgnizationid;


//         this.createGpoConfig.auotReverseStateGPO1 = this.createDeviceForm.value.autoReverseGP01;
//         this.createGpoConfig.auotReverseStateGPO2 = this.createDeviceForm.value.autoReverseGP02;
//         this.createGpoConfig.auotReverseStateGPO3 = this.createDeviceForm.value.autoReverseGP03;
//         this.createGpoConfig.auotReverseStateGPO4 = this.createDeviceForm.value.autoReverseGP04;

//         this.createGpoConfig.autoReverseTimeGPO1 = this.createDeviceForm.value.autoRTimeGP01;
//         this.createGpoConfig.autoReverseTimeGPO1 = this.createDeviceForm.value.autoRTimeGP02;
//         this.createGpoConfig.autoReverseTimeGPO1 = this.createDeviceForm.value.autoRTimeGP03;
//         this.createGpoConfig.autoReverseTimeGPO1 = this.createDeviceForm.value.autoRTimeGP04;

//         this.createGpoConfig.defaultStateGPO1 = this.createDeviceForm.value.defaultGPO1;
//         this.createGpoConfig.defaultStateGPO1 = this.createDeviceForm.value.defaultGPO2;
//         this.createGpoConfig.defaultStateGPO1 = this.createDeviceForm.value.defaultGPO3;
//         this.createGpoConfig.defaultStateGPO1 = this.createDeviceForm.value.defaultGPO4;


//         this.createGpoConfig.isActive = this.createDeviceForm.value.isActicedefault;
//         this.createGpoConfig.isActiveGPO1 = this.createDeviceForm.value.isActiveGPO1;
//         this.createGpoConfig.isActiveGPO2 = this.createDeviceForm.value.isActiveGPO2;
//         this.createGpoConfig.isActiveGPO3 = this.createDeviceForm.value.isActiveGPO3;
//         this.createGpoConfig.isActiveGPO4 = this.createDeviceForm.value.isActiveGPO4;

//         this.createGpoConfig.mergControlGpo1 = this.createDeviceForm.value.mergControlGpo1;
//         this.createGpoConfig.mergControlGpo2 = this.createDeviceForm.value.mergControlGpo2;
//         this.createGpoConfig.mergControlGpo3 = this.createDeviceForm.value.mergControlGpo3;
//         this.createGpoConfig.mergControlGpo4 = this.createDeviceForm.value.mergControlGpo4;

//         this.createGpoConfig.organiztionUnitId = this.createDeviceForm.value.orgnizationid;
//         this.createGpoConfig.primaryGpo = this.createDeviceForm.value.primaryGpo;

//         this._deviceServiceProxy.create(this.createDevice).subscribe(response => {

//             var res = response;
//             this.createDevicConfig(res.id);

//         });

//     }

//     createDevicConfig(configId) {

//         this.createGpoConfig.deviceId = configId;
//         this.createGpoConfig.tenantId = Number(this.appSession.tenantId);


//         this._deviceGpoConfigServiceProxy.create(this.createGpoConfig).subscribe(res => {
//             if (res) {
//                 this.message.success('saved successfully')
//             }
//         })
//     }

// }
