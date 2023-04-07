// import { AfterViewChecked, Component, ElementRef, EventEmitter, Injector, Output, ViewChild} from '@angular/core';
// import { AppComponentBase } from '@shared/common/app-component-base';
// // import {
// //     CreateManufacturerInput,
// //     ManufacturerDto, ManufacturerServiceProxy, UpdateManufacturerInput
// // } from '@shared/service-proxies/service-proxies';
// import {ModalDirective} from 'ngx-bootstrap/modal';
// import {finalize} from "rxjs/operators";
// import {AbpSessionService} from "@node_modules/abp-ng2-module";
// import { PhoneNumberFormat } from 'ngx-intl-tel-input';
// import {GooglePlaceDirective} from "@node_modules/ngx-google-places-autocomplete";

// @Component({
//     selector: 'createOrEditManufacturerModal',
//     templateUrl: './create-or-edit-manufacturer-modal.component.html',
//     styleUrls: ['./create-or-edit-manufacturer-modal.component.css']
// })
// export class CreateOrEditManufacturerModalComponent extends AppComponentBase {

//     @ViewChild('createOrEditModal', {static: true}) modal: ModalDirective;
//     @ViewChild("placesRef") placesRef : GooglePlaceDirective;
//     @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

//     active = false;
//     saving = false;
//     isNew = true;
//     manufacturerAddress: string = ''
//     manufacturerLatitude: string = ''
//     manufacturerLongitude: string = ''

//     // manufacturer: ManufacturerDto = new ManufacturerDto();
//     profilePicture: string;
//     phoneNumberFormat = PhoneNumberFormat;
//     constructor(
//         injector: Injector,
//         // private _manufacturerService: ManufacturerServiceProxy,
//         private _sessionService: AbpSessionService,
//     ) {
//         super(injector);
//     }

//     show(manufacturerId?: number): void {
//         this.active = true;
//         if (!manufacturerId) {
//             this.modal.show();
//         } else {
//             this.isNew =false;
//             // this._manufacturerService.get(manufacturerId).subscribe(manufacturerResult => {
//             //     this.manufacturer = manufacturerResult;
//             //     this.modal.show();
//             // });

//         }
//     }

//     // save(): void {
//     //     this.saving = true;
//     //     let input;
//     //     if(this.isNew) {
//     //         input = new CreateManufacturerInput();
//     //     } else {
//     //         input = new UpdateManufacturerInput();
//     //     }

//     //     input.tenantId = abp.session.tenantId;
//     //     input.name =  this.manufacturer.name;
//     //     input.address =  this.manufacturerAddress;
//     //     input.latitude =  this.manufacturerLatitude;
//     //     input.logitude =  this.manufacturerLongitude;
//     //     input.email =  this.manufacturer.email;
//     //     input.phoneNumber =  this.manufacturer.phoneNumber["internationalNumber"];
//     //     input.isActive =  this.manufacturer.isActive;
//     //     input.isActive =  this.manufacturer.isActive;

//     //     if(this.isNew) {
//     //         this._manufacturerService.create(input)
//     //             .pipe(finalize(() => {
//     //                 this.saving = false;
//     //             }))
//     //             .subscribe(() => {
//     //                 this.notify.info(this.l('SavedSuccessfully'));
//     //                 this.close();
//     //                 this.modalSave.emit(null);
//     //             });
//     //     } else {
//     //         input.id =  this.manufacturer.id;
//     //         this._manufacturerService.update(input)
//     //             .pipe(finalize(() => {
//     //                 this.saving = false;
//     //             }))
//     //             .subscribe(() => {
//     //                 this.notify.info(this.l('SavedSuccessfully'));
//     //                 this.close();
//     //                 this.modalSave.emit(null);
//     //             });
//     //     }
//     // }

//     close(): void {
//         this.active = false;
//         this.modal.hide();
//     }

//     handleAddressChange(address: any) {
//         this.manufacturerAddress = address.formatted_address
//         this.manufacturerLatitude = address.geometry.location.lat()
//         this.manufacturerLongitude = address.geometry.location.lng()
//     }

// }
