// import { Component, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import {
//     FlatFeatureSelectDto,
//     IssueRequestServiceProxy,
//     OrganizationUnitServiceProxy,
//     StoreReleaseDispatchDto,
//     StoreReleaseDispatchServiceProxy,
//     StoreReleaseDto,
//     StoreReleaseServiceProxy,
// } from '@shared/service-proxies/service-proxies';
// import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
// import { EqisDropDownModel } from '@app/shared/custom/eqis-dropdown/eqis-dropdown.model';
// import { Router } from '@angular/router';
// @Component({
//     selector: 'app-create-store',
//     templateUrl: './create-store.component.html',
//     styleUrls: ['./create-store.component.css'],
// })
// export class CreateStoreComponent extends AppComponentBase implements OnInit {
//     @Output() clossmodel = new EventEmitter<any>();
//     displayResponsive: boolean;
//     range: any;
//     btnText: any;
//     thumb: any;
//     track: any;
//     intents: any = [];
//     intentId: any;
//     enumIntentReason: any;
//     intentReasonText: any;
//     intentReasonId: any;
//     intentItems: any;
//     IssuerequestIdforEdit = 0;
//     storeReleaseDispatchDto: StoreReleaseDispatchDto;
//     storeReleaseDto: StoreReleaseDto;
//     createStoreReleaseDispatch: FormGroup;
//     organizationUnitId: any;
//     organizationUnits: any;
//     issueRequest: any;
//     issueRequestId: any;
//     issubmitted: boolean;
//     submitted: boolean;
//     constructor(
//         injector: Injector,
//         private _router: Router,
//         private storeReleaseServiceProxy: StoreReleaseServiceProxy,
//         private storeReleaseDispatchServiceProxy: StoreReleaseDispatchServiceProxy,
//         private organizationUnitsServiceProxy: OrganizationUnitServiceProxy,
//         private issueRequestServiceProxy: IssueRequestServiceProxy
//     ) {
//         super(injector);
//         this.createStoreReleaseDispatch = new FormGroup({
//             //StoreReleaseDispatchDto
//             isSealed: new FormControl('false'),
//             sealNumber: new FormControl('', Validators.required),
//             releasedToId: new FormControl(''),
//             //storeReleaseDto
//             issueRequestId: new FormControl(0, Validators.required),
//             confirmedQty: new FormControl('true'),
//             qtyNumberConfirmed: new FormControl(0, Validators.required),
//             qtyWeightConfirmed: new FormControl(0, Validators.required),
//             confirmedQtyWeight: new FormControl('false'),
//             organizationUnitId: new FormControl(1, Validators.required),
//         });
//         this.btnText = 'Submit';
//         this.issubmitted = false;
//         this.submitted = false;
//     }
//     get validators() {
//         return this.createStoreReleaseDispatch.controls;
//     }
//     onIntentNumberChange(value) {}
//     onPackageNumberChange(value) {}
//     onReleasedToIdChange(value) {}
//     ngOnInit(): void {
//         this.getAllOrginationUnits();
//         this.IssueRequestDropdown();
//     }
//     submit() {
//         this.submitted = true;
//         if (this.validate()) {
//             this.issubmitted = true;
//             this.btnText = 'Submiting';
//             this.storeReleaseDto = new StoreReleaseDto();
//             this.storeReleaseDto.tenantId = this.appSession.tenantId;
//             if (this.IssuerequestIdforEdit > 0) {
//                 this.storeReleaseDto.issueRequestId = this.IssuerequestIdforEdit;
//             } else {
//                 this.storeReleaseDto.issueRequestId = parseInt(this.issueRequestId);
//             }
//             this.storeReleaseDto.confirmedQty = Boolean(this.createStoreReleaseDispatch.get('confirmedQty').value);
//             this.storeReleaseDto.qtyNumberConfirmed = this.createStoreReleaseDispatch.get('qtyNumberConfirmed').value;
//             this.storeReleaseDto.qtyWeightConfirmed = this.createStoreReleaseDispatch.get('qtyWeightConfirmed').value;
//             this.storeReleaseDto.confirmedQtyWeight = Boolean(
//                 this.createStoreReleaseDispatch.get('confirmedQtyWeight').value
//             );
//             this.storeReleaseDto.organizationUnitId = parseInt(this.organizationUnitId);
//             this.storeReleaseServiceProxy.create(this.storeReleaseDto).subscribe((response) => {
//                 const res = response;
//                 if (this.createStoreReleaseDispatch.value.isSealed === 'true') {
//                     this.createRequestItem(res.id);
//                 }
//                 this.reset();
//             });
//         }
//     }
//     createRequestItem(storeId) {
//         this.storeReleaseDispatchDto = new StoreReleaseDispatchDto();
//         this.storeReleaseDispatchDto.isSealed = this.createStoreReleaseDispatch.get('isSealed').value;
//         this.storeReleaseDispatchDto.sealNumber = this.createStoreReleaseDispatch.get('sealNumber').value;
//         this.storeReleaseDispatchDto.storeReleaseId = storeId;
//         this.storeReleaseDispatchDto.organizationUnitId = parseInt(this.organizationUnitId);
//         this.storeReleaseDispatchDto.tenantId = this.appSession.tenantId;
//         this.storeReleaseDispatchDto.releasedToId = this.appSession.userId;
//         this.storeReleaseDispatchServiceProxy.create(this.storeReleaseDispatchDto).subscribe((res) => {});
//     }
//     isValid(control: any): boolean {
//         if (control.value === 0 || control.value === '') {
//             return true;
//         }
//         return false;
//     }
//     onChange(event) {
//         this.organizationUnitId = event.target.value;
//     }
//     onChangeIssueRequest(event) {
//         this.issueRequestId = event.target.value;
//     }
//     getAllOrginationUnits() {
//         this.organizationUnitsServiceProxy.getOrganizationUnits().subscribe((res) => {
//             this.organizationUnits = res.items;
//         });
//     }
//     IssueRequestDropdown() {
//         this.issueRequestServiceProxy
//             .getAll(
//                 undefined,
//                 this.appSession.tenantId,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined
//             )
//             .subscribe((res) => {
//                 this.issueRequest = res.items;
//             });
//     }
//     openStoreReleaseModel(issuerequestId: number, orgainzationId: number) {
//         this.displayResponsive = true;
//         if (issuerequestId > 0) {
//             this.IssuerequestIdforEdit = issuerequestId;
//             this.organizationUnitId = orgainzationId;
//             this.createStoreReleaseDispatch.patchValue({
//                 issueRequestId: issuerequestId,
//                 organizationUnitId: orgainzationId,
//             });
//             this.createStoreReleaseDispatch.get('issueRequestId').disable();
//             this.createStoreReleaseDispatch.get('organizationUnitId').disable();
//         } else {
//             this.IssuerequestIdforEdit = 0;
//         }
//         // this.modalCreate.show();
//     }
//     close() {
//         this.clossmodel.emit();
//         this.displayResponsive = false;
//     }
//     reset() {
//         this.btnText = 'Submit';
//         this.issubmitted = false;
//         this.submitted = false;
//         this.notify.success('Created successfully');
//         this.createStoreReleaseDispatch.reset();
//         this.createStoreReleaseDispatch.patchValue({
//             confirmedQty: 'true',
//             qtyNumberConfirmed: 0,
//             confirmedQtyWeight: 'false',
//             qtyWeightConfirmed: 0,
//             isSealed: 'false',
//             issueRequestId: this.IssuerequestIdforEdit,
//             releasedToId: '',
//             organizationUnitId: this.organizationUnitId,
//         });
//         this.createStoreReleaseDispatch.get('issueRequestId').disable();
//         this.createStoreReleaseDispatch.get('organizationUnitId').disable();
//     }
//     validate() {
//         let form = this.createStoreReleaseDispatch;
//         if (
//             form.value.confirmedQty === 'true' &&
//             (form.value.qtyNumberConfirmed === '' || form.value.qtyNumberConfirmed === 0)
//         ) {
//             return false;
//         } else if (
//             form.value.confirmedQtyWeight === 'true' &&
//             (form.value.qtyWeightConfirmed === '' || form.value.qtyWeightConfirmed === 0)
//         ) {
//             return false;
//         } else if (form.value.isSealed === 'true' && (form.value.sealNumber === '' || form.value.sealNumber === 0)) {
//             return false;
//         } else if (form.value.confirmedQty === 'false' && form.value.confirmedQtyWeight === 'false') {
//             this.message.error('Please select one QTY!');
//             return false;
//         }
//         return true;
//     }
// }
