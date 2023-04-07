// import { Component, Injector, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { CreateDeviceAntennaInput, DeviceAntennaServiceProxy, DeviceServiceProxy } from '@shared/service-proxies/service-proxies';

// @Component({
//     selector: 'app-create-antenna-form',
//     templateUrl: './create-antenna-form.component.html',
//     styleUrls: ['./create-antenna-form.component.css']
// })
// export class CreateAntennaFormComponent extends AppComponentBase implements OnInit {

//     displayResponsive: boolean;
//     createAntennaForm: FormGroup;
//     deviceList: any = [];
//     organizationUnitList: any = [];
//     orgnizationid: any = [];
//     submitted = false;

//     createAntenna = new CreateDeviceAntennaInput();

//     constructor(injector: Injector,
//         private _deviceAntennaServiceProxy: DeviceAntennaServiceProxy,
//         private _deviceServiceProxy: DeviceServiceProxy) {
//         super(injector);

//         let id = this.orgnizationid;
//         this.createAntennaForm = new FormGroup({
//             antennaName: new FormControl('', Validators.required),
//             deviceId: new FormControl(1, Validators.required),
//             orgnizationid: new FormControl(id),
//             antennaCode: new FormControl('', Validators.required),
//             isActive: new FormControl(true),
//             antennaAddress: new FormControl('', Validators.required)
//         });
//     }

//     ngOnInit(): void {
//         this.getDevice();
//     }

//     handleChange(event) {

//     }


//     openDeviceModal() {
//         this.displayResponsive = true;
//     }

//     getDevice() {
//         this._deviceServiceProxy.getAll(this.appSession.tenantId, undefined, undefined, undefined, this.commonUtility.organizationId,
//             undefined, undefined, undefined).subscribe(data => {
//                 data.items.map(m => {
//                     this.deviceList.push({ name: m.deviceName, code: m.id });
//                 });
//                 this.createAntennaForm.patchValue({
//                     deviceId: data.items[0].id,
//                 });
//             });
//     }

//     get f() { return this.createAntennaForm.controls; }


//     submit() {

//         this.submitted = true;

//         if (this.createAntennaForm.invalid) {
//             return;
//         }

//         this.createAntenna.tenantId = Number(this.appSession.tenantId);
//         this.createAntenna.antennaName = this.createAntennaForm.value.antennaName;
//         this.createAntenna.antennaAddress = this.createAntennaForm.value.antennaAddress;
//         this.createAntenna.antennaCode = this.createAntennaForm.value.antennaCode;
//         this.createAntenna.deviceId = this.createAntennaForm.value.deviceId;
//         this.createAntenna.organizationUnitId = Number(this.commonUtility.organizationId);
//         this.createAntenna.isActive = this.createAntennaForm.value.isActive;

//         this._deviceAntennaServiceProxy.create(this.createAntenna).subscribe(res => {

//             if (res) {
//                 this.message.success('saved successfully');
//             }
//         });

//     }

// }
