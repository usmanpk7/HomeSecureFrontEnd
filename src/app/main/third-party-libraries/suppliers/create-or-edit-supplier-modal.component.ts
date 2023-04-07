// import {  Component, EventEmitter, Injector, Output, ViewChild} from '@angular/core';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import {
//     CreateSupplierInput,
//     SupplierDto,
//     SupplierServiceProxy, UpdateSupplierInput
// } from '@shared/service-proxies/service-proxies';
// import {ModalDirective} from 'ngx-bootstrap/modal';
// import {finalize} from "@node_modules/rxjs/operators";
// import {GooglePlaceDirective} from "@node_modules/ngx-google-places-autocomplete";
// import { PhoneNumberFormat } from 'ngx-intl-tel-input';

// @Component({
//     selector: 'createOrEditSupplierModal',
//     templateUrl: './create-or-edit-supplier-modal.component.html',
//     styleUrls: ['create-or-edit-supplier-modal.component.less']
// })
// export class CreateOrEditSupplierModalComponent extends AppComponentBase {

//     @ViewChild('createOrEditModal', {static: true}) modal: ModalDirective;
//     @ViewChild("placesRef") placesRef : GooglePlaceDirective;
//     @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

//     active = false;
//     saving = false;
//     isNew = true;

//     supplier: SupplierDto = new SupplierDto();
//     supplierAddress: string = ''
//     supplierLatitude: string = ''
//     supplierLongitude: string = ''
//     profilePicture: string;
//     phoneNumberFormat = PhoneNumberFormat;

//     constructor(
//         injector: Injector,
//         private _supplierService: SupplierServiceProxy,
//     ) {
//         super(injector);
//     }

//     show(supplierId?: number): void {
//         this.active = true;
//         if (!supplierId) {
//             this.modal.show();
//         } else {
//             this.isNew = false;
//             this._supplierService.get(supplierId).subscribe(supplierResult => {
//                 this.supplier = supplierResult;
//                 if (supplierId) {
//                     this.active = true;
//                 }
//             });
//             this.modal.show();
//         }
//     }


//     onShown(): void {
//         document.getElementById('Name').focus();
//     }

//     save(): void {
//         this.saving = true;
//         let input;
//         if(this.isNew) {
//             input = new CreateSupplierInput();
//         } else {
//             input = new UpdateSupplierInput();
//         }

//         input.tenantId = 1;
//         input.name =  this.supplier.name;
//         input.address =  this.supplierAddress;
//         input.latitude =  this.supplierLatitude;
//         input.logitude =  this.supplierLongitude;
//         input.email =  this.supplier.email;
//         input.phoneNumber =  this.supplier.phoneNumber["internationalNumber"];;
//         input.isActive =  this.supplier.isActive;

//         if(this.isNew) {
//             this._supplierService.create(input)
//                 .pipe(finalize(() => {
//                     this.saving = false;
//                 }))
//                 .subscribe(() => {
//                     this.notify.info(this.l('SavedSuccessfully'));
//                     this.close();
//                     this.modalSave.emit(null);
//                 });
//         } else {
//             input.id = this.supplier.id;
//             this._supplierService.update(input)
//                 .pipe(finalize(() => {
//                     this.saving = false;
//                 }))
//                 .subscribe(() => {
//                     this.notify.info(this.l('SavedSuccessfully'));
//                     this.close();
//                     this.modalSave.emit(null);
//                 });
//         }
//     }

//     close(): void {
//         this.active = false;
//         this.modal.hide();
//     }

//     handleAddressChange(address: any) {
//         this.supplierAddress = address.formatted_address
//         this.supplierLatitude = address.geometry.location.lat()
//         this.supplierLongitude = address.geometry.location.lng()
//     }



// }
