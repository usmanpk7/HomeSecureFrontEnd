// import { Component, Injector, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { AntennaWarehouseServiceProxy, CreateAntennaWarehouseInput, DeviceAntennaServiceProxy, RackCompartmentServiceProxy, RackServiceProxy, WareHouseServiceProxy } from '@shared/service-proxies/service-proxies';

// @Component({
//     selector: 'app-create-antenna-warehouse-form',
//     templateUrl: './create-antenna-warehouse-form.component.html',
//     styleUrls: ['./create-antenna-warehouse-form.component.css']
// })
// export class CreateAntennaWarehouseFormComponent extends AppComponentBase implements OnInit {

//     displayResponsive: boolean;
//     createAntennaWarehouseForm: FormGroup;
//     createAntennaWarehouse = new CreateAntennaWarehouseInput();
//     submitted = false;
//     wareHouseList = [];
//     racklist = [];
//     rackCompartmentList = [];
//     deviceList = [];

//     constructor(injector: Injector,
//         private _wareHouseServiceProxy: WareHouseServiceProxy,
//         private _rackServiceProxy: RackServiceProxy,
//         private _deviceAntennaServiceProxy: DeviceAntennaServiceProxy,
//         private _rackCompartmentServiceProxy: RackCompartmentServiceProxy,
//         private _antennaWarehouseServiceProxy: AntennaWarehouseServiceProxy) {
//         super(injector);
//         this.createAntennaWarehouseForm = new FormGroup({
//             antennaZone: new FormControl('', Validators.required),
//             wareHouseId: new FormControl(0 , Validators.required),
//             rackId: new FormControl(0, Validators.required),
//             rackCompartmentId: new FormControl(0),
//             antennaId: new FormControl(0),
//             isActive: new FormControl(true)
//         });
//     }

//     ngOnInit(): void {
//         this.getWareHouse();
//         this.getRack();
//         this.getRackCompartment();
//         this.getDeviceAntenna();
//     }

//     handleChange(event) {

//     }

//     getWareHouse() {
//         this._wareHouseServiceProxy.getAll(this.appSession.tenantId, undefined, this.commonUtility.organizationId, true, undefined, 0, 1000).subscribe(res => {
//             res.items.map(m => {
//                 this.wareHouseList.push({ name: m.name, code: m.id });
//             });
//             this.createAntennaWarehouseForm.patchValue({
//                 wareHouseId: res.items[0].id,
//             });
//         });
//     }

//     getRack() {
//         this._rackServiceProxy.getAll(this.appSession.tenantId, undefined, this.commonUtility.organizationId, undefined, undefined, 0, 1000).subscribe(res => {
//             res.items.map(m => {
//                 this.racklist.push({ name: m.rackName, code: m.id });
//             });
//             this.createAntennaWarehouseForm.patchValue({
//                 rackId: res.items[0].id,
//             });
//         });
//     }

//     getRackCompartment() {
//         this._rackCompartmentServiceProxy.getAll(this.appSession.tenantId, undefined, this.commonUtility.organizationId, undefined, undefined, undefined, 0, 1000).subscribe(res => {
//             res.items.map(m => {
//                 this.rackCompartmentList.push({ name: m.compartmentName, code: m.id });
//                 this.createAntennaWarehouseForm.patchValue({
//                     rackCompartmentId: res.items[0].id,
//                 });
//             });
//         });
//     }

//     getDeviceAntenna() {
//         this._deviceAntennaServiceProxy.getAll(this.appSession.tenantId, undefined, this.commonUtility.organizationId, undefined, undefined, undefined, undefined, 0, 1000).subscribe(res => {
//             res.items.map(m => {
//                 this.deviceList.push({ name: m.antennaName, code: m.id });
//             });
//             this.createAntennaWarehouseForm.patchValue({
//                 antennaId: res.items[0].id,
//             });
//             localStorage.setItem('deviceAntenna', JSON.stringify(res.items));
//         });
//     }
//     get f() { return this.createAntennaWarehouseForm.controls; }


//     openCreateAntennaWarehouseModal() {
//         this.displayResponsive = true;
//     }

//     submit() {
//         this.submitted = true;

//         if (this.createAntennaWarehouseForm.invalid) {
//             return;
//         }
//         this.createAntennaWarehouse.tenantId = Number(this.appSession.tenantId);
//         this.createAntennaWarehouse.antennaZone = this.createAntennaWarehouseForm.value.antennaZone;
//         this.createAntennaWarehouse.organizationUnitId = this.commonUtility.organizationId;
//         this.createAntennaWarehouse.warehouseId = this.createAntennaWarehouseForm.value.wareHouseId;
//         this.createAntennaWarehouse.rackId = this.createAntennaWarehouseForm.value.rackId;
//         this.createAntennaWarehouse.rackCompartmentId = this.createAntennaWarehouseForm.value.rackCompartmentId;
//         this.createAntennaWarehouse.deviceAnteenaId = this.createAntennaWarehouseForm.value.antennaId;


//         this._antennaWarehouseServiceProxy.create(this.createAntennaWarehouse).subscribe(res => {
//             if (res) {
//                 this.message.success('saved successfully');
//             }
//         });
//     }

// }
