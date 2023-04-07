// import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import {
//     StoreReleaseServiceProxy,
//     StoreReleaseDispatchServiceProxy,
//     OrganizationUnitServiceProxy,
//     IssueRequestServiceProxy,
//     StoreReleaseDispatchDto,
//     StoreReleaseDto,
// } from '@shared/service-proxies/service-proxies';

// @Component({
//     selector: 'app-add-release-store',
//     templateUrl: './add-release-store.component.html',
//     styleUrls: ['./add-release-store.component.css'],
// })
// export class AddReleaseStoreComponent extends AppComponentBase implements OnInit {
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
//     releaseStoreList = [];

//     constructor(
//         injector: Injector,
//         private storeReleaseServiceProxy: StoreReleaseServiceProxy,
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
//             confirmedQty: new FormControl(),
//             qtyNumberConfirmed: new FormControl(0, Validators.required),
//             qtyWeightConfirmed: new FormControl(0, Validators.required),
//             confirmedQtyWeight: new FormControl(),
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
//             this.storeReleaseDto.confirmedQty = this.createStoreReleaseDispatch.value.confirmedQty;
//             this.storeReleaseDto.qtyNumberConfirmed = parseInt(this.createStoreReleaseDispatch.value.qtyNumberConfirmed);
//             this.storeReleaseDto.qtyWeightConfirmed = parseInt(this.createStoreReleaseDispatch.value.qtyWeightConfirmed);
//             this.storeReleaseDto.confirmedQtyWeight = 
//                 this.createStoreReleaseDispatch.value.confirmedQtyWeight;
//             this.storeReleaseDto.organizationUnitId = this.commonUtility.organizationId;
//             this.storeReleaseServiceProxy.create(this.storeReleaseDto).subscribe((response) => {
//                 const res = response;
//                 this.reset();
//             });
//         }
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

//     addReleaseStore(issuerequestId: number, orgainzationId: number) {
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
//             confirmedQty: true,
//             qtyNumberConfirmed: 0,
//             confirmedQtyWeight: false,
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
