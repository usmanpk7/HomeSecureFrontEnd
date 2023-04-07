// import { Component, Injector, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { CreateDeviceModelInput, DeviceModelServiceProxy } from '@shared/service-proxies/service-proxies';

// @Component({
//     selector: 'app-create-modal-form',
//     templateUrl: './create-modal-form.component.html',
//     styleUrls: ['./create-modal-form.component.css']
// })
// export class CreateModalFormComponent extends AppComponentBase implements OnInit {

//     displayResponsive: boolean;
//     createDeviceModalForm: FormGroup;
//     createDeviceModal = new CreateDeviceModelInput();
//     submitted = false;

//     constructor(injector: Injector,
//         private _deviceModelServiceProxy: DeviceModelServiceProxy) {
//         super(injector);
//         this.createDeviceModalForm = new FormGroup({
//             deviceModalName: new FormControl('', Validators.required),
//             deviceModelNumber: new FormControl('', Validators.required),
//             deviceDescription: new FormControl('', Validators.required),
//             isActive: new FormControl(true)
//         });
//     }

//     ngOnInit(): void {
//     }

//     handleChange(event) {

//     }

//     get f() { return this.createDeviceModalForm.controls; }


//     openCreateDeviceModal() {
//         this.displayResponsive = true;
//     }

//     submit() {
//         this.submitted = true;

//         if (this.createDeviceModalForm.invalid) {
//             return;
//         }
//         this.createDeviceModal.tenantId = Number(this.appSession.tenantId);
//         this.createDeviceModal.deviceModelName = this.createDeviceModalForm.value.deviceModalName;
//         this.createDeviceModal.deviceModelNumber = this.createDeviceModalForm.value.deviceModelNumber;
//         this.createDeviceModal.deviceDescription = this.createDeviceModalForm.value.deviceDescription;
//         this.createDeviceModal.isActive = this.createDeviceModalForm.value.isActive;

//         this._deviceModelServiceProxy.create(this.createDeviceModal).subscribe(res => {
//             if (res) {
//                 this.message.success('saved successfully');
//             }
//         });
//     }

// }
