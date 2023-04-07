// import { Component, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { IssueRequestServiceProxy, OrganizationUnitServiceProxy, StoreReleaseDispatchDto, StoreReleaseDispatchServiceProxy, StoreReleaseDto, StoreReleaseServiceProxy } from '@shared/service-proxies/service-proxies';
// import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
// import { EqisDropDownModel } from '@app/shared/custom/eqis-dropdown/eqis-dropdown.model';
// import { Router } from '@angular/router';
// @Component({
//     selector: 'app-create-dispatch',
//     templateUrl: './create-dispatch.component.html',
//     styleUrls: ['./create-dispatch.component.css']
// })
// export class CreateDispatchComponent extends AppComponentBase implements OnInit {
//     @Output() clossmodel = new EventEmitter<any>();
//     displayResponsive: boolean;
//     storeReleaseDispatchDto: StoreReleaseDispatchDto;
//     storeReleaseDto: StoreReleaseDto;
//     createStoreReleaseDispatch: FormGroup;
//     organizationUnitId: any;
//     organizationUnits: any;
//     storeRelease: any;
//     storeReleaseId: any;
//     constructor(
//         injector: Injector,
//         private _router: Router,
//         private storeReleaseServiceProxy: StoreReleaseServiceProxy,
//         private storeReleaseDispatchServiceProxy: StoreReleaseDispatchServiceProxy,
//         private organizationUnitsServiceProxy: OrganizationUnitServiceProxy,

//     ) {
//         super(injector);
//         this.createStoreReleaseDispatch = new FormGroup({
//             //StoreReleaseDispatchDto
//             isSealed: new FormControl('false'),
//             sealNumber: new FormControl("", Validators.required),
//             releasedToId: new FormControl(""),
//             //storeReleaseD
//             storeReleaseId: new FormControl(0, Validators.required),
//         });

//     }

//     ngOnInit(): void {
//         this.getAllOrginationUnits();
//         this.storeReleaseDropdown();
//     }
//     submit() {
//             this.createRequestItem(this.storeReleaseId);
//     }
//     createRequestItem(storeId) {
//         this.storeReleaseDispatchDto = new StoreReleaseDispatchDto();
//         this.storeReleaseDispatchDto.isSealed = this.createStoreReleaseDispatch.get("isSealed").value;
//         this.storeReleaseDispatchDto.sealNumber = this.createStoreReleaseDispatch.get("sealNumber").value;
//         this.storeReleaseDispatchDto.storeReleaseId = storeId;
//         this.storeReleaseDispatchDto.organizationUnitId = parseInt(this.organizationUnitId);
//         this.storeReleaseDispatchDto.tenantId = this.appSession.tenantId;
//         this.storeReleaseDispatchServiceProxy.create(this.storeReleaseDispatchDto).subscribe(res => {
//             this.notify.success("Created successfully")
//         });
//     }
//     isValid(control: any): boolean {
//         return control.hasError('required') && (control.dirty || control.touched);
//     }
//     onChangeStoreRelease(event) {
//         this.storeReleaseId = event.target.value;
//     }
//     getAllOrginationUnits() {
//         this.organizationUnitsServiceProxy.getOrganizationUnits().subscribe(res => {
//             this.organizationUnits = res.items;
//         });
//     }
//     storeReleaseDropdown() {
//         this.storeReleaseDispatchServiceProxy.getAll(undefined, this.appSession.tenantId, undefined,undefined,undefined, undefined, undefined).subscribe(res => {
//             this.storeRelease = res.items;
//         });
//     }
//     openStoreReleaseModel()
//     {
//         this.displayResponsive=true;
//     }
//     close() {
//         this.clossmodel.emit();
//     }
// }
