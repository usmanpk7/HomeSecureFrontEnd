// import { Component, ElementRef, EventEmitter, Injector, NgZone, OnInit, Output, ViewChild } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { CreateRackCompartmentInput, CreateRackInput, RackCompartmentServiceProxy, RackServiceProxy, WareHouseServiceProxy } from '@shared/service-proxies/service-proxies';

// @Component({
//     selector: 'app-create-rack-form',
//     templateUrl: './create-rack-form.component.html',
//     styleUrls: ['./create-rack-form.component.css']
// })
// export class CreateRackFormComponent extends AppComponentBase implements OnInit {

//     // tslint:disable-next-line:no-output-rename
//     @Output('gridload') gridload: EventEmitter<any> = new EventEmitter();
//     createRackForm: FormGroup;
//     createRack = new CreateRackInput();
//     createrackCompart = new CreateRackCompartmentInput();
//     displayResponsive: boolean;

//     @ViewChild('search')
//     public searchElementRef: ElementRef;
//     submitted = false;
//     constructor(
//         injector: Injector,
//         private _rackServiceProxy: RackServiceProxy,
//         private _rackCompartmentServiceProxy: RackCompartmentServiceProxy
//     ) {
//         super(injector);

//     }

//     ngOnInit(): void {

//         this.createRackForm = new FormGroup({
//             rackName: new FormControl('', Validators.required),
//             rackRfid: new FormControl('', Validators.required),
//             rackQrc: new FormControl('', Validators.required),
//             rackNfc: new FormControl('', Validators.required),
//             rackBarcode: new FormControl('', Validators.required),
//             comGen: new FormControl(true)
//         });
//     }

//     openCreateRackForm() {
//         this.displayResponsive = true;
//     }

//     get f() { return this.createRackForm.controls; }

//     submit() {
//         this.submitted = true;


//         this.createRack.tenantId = Number(this.appSession.tenantId);
//         this.createRack.rackName = this.createRackForm.value.rackName;
//         this.createRack.organizationUnitId = this.commonUtility.organizationId;
//         this.createRack.rackRfid = this.createRackForm.value.rackRfid;
//         this.createRack.rackQrc = this.createRackForm.value.rackQrc;
//         this.createRack.rackNfc = this.createRackForm.value.rackNfc;
//         this.createRack.rackBarcode = this.createRackForm.value.rackBarcode;
//         this.createRack.comGen = this.createRackForm.value.comGen;

//         this._rackServiceProxy.create(this.createRack).subscribe(data => {
//             let res = data;
//             this.getrackCompartment(res.id);
//             if (data.tenantId === this.appSession.tenantId) {
//                 this.gridload.emit();
//                 this.message.success('Saved Successfully');
//             }
//         });

//     }

//     getrackCompartment(data) {
//         this.createrackCompart.tenantId = this.appSession.tenantId;
//         this.createrackCompart.rackId = data;
//         this._rackCompartmentServiceProxy.create(this.createrackCompart).subscribe(res => {
//             if (data.tenantId === this.appSession.tenantId) {
//             }
//         });
//     }

// }
