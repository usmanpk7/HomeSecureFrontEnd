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
//     StoreReleaseConfirmationServiceProxy,
//     StoreReleaseConfirmationDto,
// } from '@shared/service-proxies/service-proxies';

// @Component({
//   selector: 'app-add-release-confirmation',
//   templateUrl: './add-release-confirmation.component.html',
//   styleUrls: ['./add-release-confirmation.component.css']
// })
// export class AddReleaseConfirmationComponent extends AppComponentBase implements OnInit {
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
//     storeReleaseConfirmationDto: StoreReleaseConfirmationDto;
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
//         private issueRequestServiceProxy: IssueRequestServiceProxy,
//         private storeReleaseConfirmationServiceProxy: StoreReleaseConfirmationServiceProxy
//     ) {
//         super(injector);
//         this.createStoreReleaseDispatch = new FormGroup({
//             //StoreReleaseDispatchDto
//             packageRfid: new FormControl('', Validators.required),
//             packageQrc: new FormControl('', Validators.required),
//             packageBarCode: new FormControl('', Validators.required)
//         });
//         this.btnText = 'Submit';
//         this.issubmitted = false;
//         this.submitted = false;
//     }


//     isValid(control: any): boolean {
//         return control.hasError('required') && (control.dirty || control.touched);
//     }
//     onIntentNumberChange(value) {}
//     onPackageNumberChange(value) {}
//     onReleasedToIdChange(value) {}
//     ngOnInit(): void {
//         this.IssueRequestDropdown();
//     }
//     submit() {
//         this.submitted = true;
        
//             this.issubmitted = true;
//             this.btnText = 'Submiting';
//             this.storeReleaseConfirmationDto = new StoreReleaseConfirmationDto();
//             this.storeReleaseConfirmationDto.tenantId = this.appSession.tenantId;
//             if (this.IssuerequestIdforEdit > 0) {
//                 this.storeReleaseConfirmationDto.storeReleaseId = this.IssuerequestIdforEdit;
//             } else {
//                 this.storeReleaseConfirmationDto.storeReleaseId = parseInt(this.issueRequestId);
//             }
//             this.storeReleaseConfirmationDto.packageRfid = this.createStoreReleaseDispatch.value.packageRfid;
//             this.storeReleaseConfirmationDto.packageQrc = this.createStoreReleaseDispatch.value.packageQrc;
//             this.storeReleaseConfirmationDto.packageBarCode = this.createStoreReleaseDispatch.value.packageBarCode;
            
//             this.storeReleaseConfirmationServiceProxy.create(this.storeReleaseConfirmationDto).subscribe((response) => {
//                 const res = response;
//                 this.reset();
//             });
        
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

//     openReleaseStore(issuerequestId: number) {
//         this.displayResponsive = true;
//         if (issuerequestId > 0) {
//             this.IssuerequestIdforEdit = issuerequestId;
//             this.createStoreReleaseDispatch.patchValue({
//                 issueRequestId: issuerequestId
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
   
// }
