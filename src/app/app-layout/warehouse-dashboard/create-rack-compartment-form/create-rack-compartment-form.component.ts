// import { Component, ElementRef, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { CreateRackCompartmentInput, CreateRackInput, RackCompartmentServiceProxy, RackDto, RackServiceProxy } from '@shared/service-proxies/service-proxies';

// @Component({
//     selector: 'app-create-rack-compartment-form',
//     templateUrl: './create-rack-compartment-form.component.html',
//     styleUrls: ['./create-rack-compartment-form.component.css']
// })
// export class CreateRackCompartmentFormComponent extends AppComponentBase implements OnInit {

//     // tslint:disable-next-line:no-output-rename
//     @Output('gridload') gridload: EventEmitter<any> = new EventEmitter();
//     createRackCompartmentForm: FormGroup;
//     createRackCompartment = new CreateRackCompartmentInput();
//     createRackinput = new CreateRackInput();
//     displayResponsive: boolean;

//     @ViewChild('search')
//     public searchElementRef: ElementRef;
//     submitted = false;
//     rackList: any = [];
//     constructor(
//         injector: Injector,
//         private _rackCompartmentServiceProxy: RackCompartmentServiceProxy,
//         private _rackServiceProxy: RackServiceProxy
//     ) {
//         super(injector);
//     }

//     ngOnInit(): void {
//         this.getRackId();

//         this.createRackCompartmentForm = new FormGroup({
//             rackCompartmentName: new FormControl('', Validators.required),
//             rackRfid: new FormControl('', Validators.required),
//             rackQrc: new FormControl('', Validators.required),
//             rackNfc: new FormControl('', Validators.required),
//             rackBarcode: new FormControl('', Validators.required),
//             rackId: new FormControl()
//         });
//     }


//     openRackCompartmentForm() {
//         this.displayResponsive = true;
//     }

//     getRackId() {
//         this._rackServiceProxy.getAll(this.appSession.tenantId, undefined, this.commonUtility.organizationId, undefined, undefined, 0, 1000).subscribe(res => {
//             res.items.map(m => {
//                 this.rackList.push({ name: m.rackName, code: m.id });
//             });
//             this.createRackCompartmentForm.patchValue({
//                 rackId: res.items[0].id,
//             });
//         });
//     }


//     get f() { return this.createRackCompartmentForm.controls; }

//     submit() {
//         this.submitted = true;


//         this.createRackCompartment.tenantId = Number(this.appSession.tenantId);
//         this.createRackCompartment.compartmentName = this.createRackCompartmentForm.value.rackCompartmentName;
//         this.createRackCompartment.organizationUnitId = this.commonUtility.organizationId;
//         this.createRackCompartment.rackRfid = this.createRackCompartmentForm.value.rackRfid;
//         this.createRackCompartment.rackQrc = this.createRackCompartmentForm.value.rackQrc;
//         this.createRackCompartment.rackNfc = this.createRackCompartmentForm.value.rackNfc;
//         this.createRackCompartment.rackBarcode = this.createRackCompartmentForm.value.rackBarcode;
//         this.createRackCompartment.rackId = this.createRackCompartmentForm.value.rackId;

//             this._rackCompartmentServiceProxy.create(this.createRackCompartment).subscribe(res => {
//                 let data = res;
//                 this.createRack(data.id);
//                 if (data.tenantId === this.appSession.tenantId) {
//                     this.gridload.emit();
//                     this.message.success('Saved Successfully');
//                 }
//             });

//     }


//     createRack(data) {
//         this.createRackinput.tenantId = this.appSession.tenantId;
//         this.createRackinput.rackCompartment = data;
//         this._rackServiceProxy.create(this.createRackinput).subscribe((data) => {
//             if (data.tenantId === this.appSession.tenantId) {
//             }
//         });
//     }


// }
