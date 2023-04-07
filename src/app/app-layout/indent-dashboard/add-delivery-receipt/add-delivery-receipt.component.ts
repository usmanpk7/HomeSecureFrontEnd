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
//     StoreDeliveryReceiptServiceProxy,
//     StoreDeliveryReceiptDto,
// } from '@shared/service-proxies/service-proxies';

// @Component({
//   selector: 'app-add-delivery-receipt',
//   templateUrl: './add-delivery-receipt.component.html',
//   styleUrls: ['./add-delivery-receipt.component.css']
// })
// export class AddDeliveryReceiptComponent extends AppComponentBase implements OnInit {
//   @Output() clossmodel = new EventEmitter<any>();
//   displayResponsive: boolean;
//   range: any;
//   btnText: any;
//   thumb: any;
//   track: any;
//   intents: any = [];
//   intentId: any;
//   enumIntentReason: any;
//   intentReasonText: any;
//   intentReasonId: any;
//   intentItems: any;
//   IssuerequestIdforEdit = 0;
//   storeReleaseDispatchDto: StoreReleaseDispatchDto;
//   storeReleaseDto: StoreReleaseDto;
//   storeDeliveryReceiptDto: any;
//   storeReleaseConfirmationDto: StoreReleaseConfirmationDto;
//   createStoreReleaseDispatch: FormGroup;
//   organizationUnitId: any;
//   organizationUnits: any;
//   issueRequest: any;
//   issueRequestId: any;
//   issubmitted: boolean;
//   submitted: boolean;
//   releaseStoreList = [];

//   constructor(
//       injector: Injector,
//       private storeReleaseServiceProxy: StoreReleaseServiceProxy,
//       private issueRequestServiceProxy: IssueRequestServiceProxy,
//       private storeReleaseConfirmationServiceProxy: StoreReleaseConfirmationServiceProxy,
//       private storeDeliveryReceiptServiceProxy: StoreDeliveryReceiptServiceProxy
//   ) {
//       super(injector);
//       this.createStoreReleaseDispatch = new FormGroup({
//           //StoreReleaseDispatchDto
//           drsNumber: new FormControl('', Validators.required),
//           cosignor: new FormControl('', Validators.required),
//           haulierReference: new FormControl('', Validators.required),
//           lorryNumber: new FormControl('', Validators.required),
//           wagonNumber: new FormControl('', Validators.required),
//           sealNumber: new FormControl('', Validators.required),
//           issueRequestId: new FormControl(0, Validators.required)
//       });
//       this.btnText = 'Submit';
//       this.issubmitted = false;
//       this.submitted = false;
//   }


//   isValid(control: any): boolean {
//       return control.hasError('required') && (control.dirty || control.touched);
//   }
//   onIntentNumberChange(value) {}
//   onPackageNumberChange(value) {}
//   onReleasedToIdChange(value) {}
//   ngOnInit(): void {
//       this.IssueRequestDropdown();
//   }
//   submit() {
//       this.submitted = true;
      
//           this.issubmitted = true;
//           this.btnText = 'Submiting';
//           this.storeDeliveryReceiptDto = new StoreDeliveryReceiptDto();
//           this.storeDeliveryReceiptDto.tenantId = this.appSession.tenantId;
//           if (this.IssuerequestIdforEdit > 0) {
//               this.storeDeliveryReceiptDto.storeReleaseDispatchId = this.IssuerequestIdforEdit;
//           } else {
//               this.storeDeliveryReceiptDto.storeReleaseDispatchId = parseInt(this.issueRequestId);
//           }
//           this.storeDeliveryReceiptDto.drsNumber = this.createStoreReleaseDispatch.value.drsNumber;
//           this.storeDeliveryReceiptDto.organizationUnitId = this.commonUtility.organizationId;
//           this.storeDeliveryReceiptDto.cosignor = this.createStoreReleaseDispatch.value.cosignor;
//           this.storeDeliveryReceiptDto.haulierReference = this.createStoreReleaseDispatch.value.haulierReference;
//           this.storeDeliveryReceiptDto.lorryNumber = this.createStoreReleaseDispatch.value.lorryNumber;
//           this.storeDeliveryReceiptDto.wagonNumber = this.createStoreReleaseDispatch.value.wagonNumber;
//           this.storeDeliveryReceiptDto.sealNumber = this.createStoreReleaseDispatch.value.sealNumber;
          
//           this.storeDeliveryReceiptServiceProxy.create(this.storeDeliveryReceiptDto).subscribe((response) => {
//               const res = response;
//               this.reset();
//           });
      
//   }
  
  
//   onChange(event) {
//       this.organizationUnitId = event.target.value;
//   }
//   onChangeIssueRequest(event) {
//       this.issueRequestId = event.target.value;
//   }
//   IssueRequestDropdown() {
//       this.issueRequestServiceProxy
//           .getAll(
//               undefined,
//               this.appSession.tenantId,
//               undefined,
//               undefined,
//               undefined,
//               undefined,
//               undefined,
//               undefined,
//               undefined
//           )
//           .subscribe((res) => {
//               this.issueRequest = res.items;
//           });
//   }

//   openReleaseDelivery(storeReleaseDispatchId: number) {
//       this.displayResponsive = true;
//       if (storeReleaseDispatchId > 0) {
//           this.IssuerequestIdforEdit = storeReleaseDispatchId;
//           this.createStoreReleaseDispatch.patchValue({
//               issueRequestId: storeReleaseDispatchId
//           });
//           this.createStoreReleaseDispatch.get('issueRequestId').disable();
//       } else {
//           this.IssuerequestIdforEdit = 0;
//       }
//       // this.modalCreate.show();
//   }
//   close() {
//       this.clossmodel.emit();
//       this.displayResponsive = false;
//   }
//   reset() {
//       this.btnText = 'Submit';
//       this.issubmitted = false;
//       this.submitted = false;
//       this.notify.success('Created successfully');
//       this.createStoreReleaseDispatch.reset();
//       this.createStoreReleaseDispatch.patchValue({
//           confirmedQty: true,
//           qtyNumberConfirmed: 0,
//           confirmedQtyWeight: false,
//           qtyWeightConfirmed: 0,
//           isSealed: 'false',
//           issueRequestId: this.IssuerequestIdforEdit,
//           releasedToId: '',
//           organizationUnitId: this.organizationUnitId,
//       });
//       this.createStoreReleaseDispatch.get('issueRequestId').disable();
//       this.createStoreReleaseDispatch.get('organizationUnitId').disable();
//   }
 
// }
