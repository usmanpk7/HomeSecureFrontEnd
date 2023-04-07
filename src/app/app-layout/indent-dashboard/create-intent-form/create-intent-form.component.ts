// import { Component, OnInit, ViewChild, ElementRef, Inject, Injector, Provider, Output, EventEmitter } from '@angular/core';
// import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
// import { EqisDropDownModel } from '@app/shared/custom/eqis-dropdown/eqis-dropdown.model';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { AssignedType, CreateFileUploadInput, FileUploadServiceProxy, IntentRequestFormDto, RequestedItemDto, UploadType } from '@shared/service-proxies/service-proxies';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { cloneDeep, forEach } from 'lodash-es';
// import { BrigadeServiceProxy, CreateRequestedItemInput, DivisionServiceProxy, IntentRequestFormServiceProxy, ItemDto, ItemServiceProxy, NotificationServiceProxy, OrganizationUnitServiceProxy, ReasonForIndent, RequestedItemServiceProxy, UnitServiceProxy, UserNotification, VoucherToType, WareHouseServiceProxy } from '@shared/service-proxies/service-proxies';
// import { EncryptionDecryptionService } from '@shared/encryption-decryption.service';
// import { forkJoin } from 'rxjs';
// declare var $: any;
// @Component({
//     selector: 'app-create-intent-form',
//     templateUrl: './create-intent-form.component.html',
//     styleUrls: ['./create-intent-form.component.css']
// })
// export class CreateIntentFormComponent extends AppComponentBase implements OnInit {
//     @ViewChild('modalCreate', { static: true }) modalCreate: DailogComponent;
//     // tslint:disable-next-line:no-output-rename
//     @Output('gridload') gridload: EventEmitter<any>;
//     btnText: any;
//     vouchers: any = [];
//     voucherId: any;
//     rangValue: string;
//     displayResponsive: boolean;
//     enumIntentReason: any;
//     intentReasonText: any;
//     intentReasonId: any;
//     intentItems: any;
//     filename: any;
//     fileUpload: any;
//     selectedItem: RequestedItemDto;
//     intentItemsbak: any;
//     voucherTypeId: any;
//     userOrganizationUnit: any;
//     fileList: any;
//     fileindex: number;
//     FileError: boolean;
//     requestedItemlist: Array<any>;
//     itemDropDownList: Array<any>;
//     interFormDTO: IntentRequestFormDto;
//     createIntentForm: FormGroup;
//     constructor(injector: Injector,
//         private intentService: IntentRequestFormServiceProxy,
//         private orignizationService: OrganizationUnitServiceProxy,
//         private unitService: UnitServiceProxy,
//         private warehouseService: WareHouseServiceProxy,
//         private divisionService: DivisionServiceProxy,
//         private brigadeService: BrigadeServiceProxy,
//         private itemService: ItemServiceProxy,
//         private RequestItemService: RequestedItemServiceProxy,
//         private encryptionDecryptionService: EncryptionDecryptionService,
//         private fileUploadService: FileUploadServiceProxy
//     ) {
//         super(injector);
//         this.createIntentForm = new FormGroup({
//             intentNo: new FormControl('', Validators.required),
//             voucherToType: new FormControl(1),
//             controlNumber: new FormControl('', Validators.required),
//             reasonForIndent: new FormControl(''),
//             qtyType: new FormControl(''),
//             qtyRequired: new FormControl(0),
//             descriptionOfPackage: new FormControl('', Validators.required),
//             intentClass: new FormControl(1, Validators.required),
//             priority: new FormControl(1),
//             voucherId: new FormControl('', Validators.required),
//             dateStoresRequired: new FormControl('', Validators.required),
//             itemId: new FormControl(0),
//             hardCopyAttachment: new FormControl(''),
//             intentReasonId: new FormControl(0)
//         });
//         this.gridload = new EventEmitter();
//         this.interFormDTO = new IntentRequestFormDto();
//         this.intentReasonText = '';
//         this.enumIntentReason = ReasonForIndent;
//         this.intentItems = [];
//         this.intentItemsbak = [];
//         this.filename = '';
//         this.fileUpload = '';
//         this.fileList = [];
//         this.fileindex = 0;
//         this.displayResponsive = false;
//         this.selectedItem = new RequestedItemDto();
//         this.btnText = 'Submit';
//         this.rangValue = '1';
//         this.requestedItemlist = [];
//         this.itemDropDownList = [];
//         this.FileError = false;
//     }
//     openCreateModal() {
//         this.displayResponsive = true;
//     }
//     ngOnInit(): void {
//         this.getIntentItems('');
//         this.createIntentForm.controls.intentClass.setValue('1');
//         let userorganizationlist = JSON.parse(localStorage.getItem('OrganizationUnit'));
//         let userOrganization = userorganizationlist.shift();
//         if (userOrganization) {
//              this.userOrganizationUnit = userOrganization.id;
//         }
//     }
//     slider(event) {
//         let thumb = event.target.parentElement.querySelector('.thumb');
//         let track = event.target.parentElement.querySelector('.track-inner');
//         let value = (event.target.value * 100 / 5);
//         thumb.style.left = `${value}%`;
//            thumb.style.transform = `translate(-${value}%, -50%)`;
//              track.style.width = `${value}%`;
//              this.rangValue = event.target.value;
//     }
//     GetVoucher(Id) {
//         this.voucherTypeId = Id;
//         let proxy;
//         //Voucher Type Users
//         if (Id === VoucherToType.User) {
//             proxy = this.orignizationService.getOrganizationUnitUsers(this.userOrganizationUnit, undefined, 1000, 0);
//         } else if (Id === VoucherToType.Unit) {
//             proxy = this.unitService.getAll(this.appSession.tenantId, undefined, undefined, undefined, undefined, undefined, 0, 1000);
//         } else if (Id === VoucherToType.WearHouse) {
//             proxy = this.warehouseService.getAll(this.appSession.tenantId, undefined, undefined, undefined, undefined, 0, 1000);
//         } else if (Id === VoucherToType.Division) {
//             proxy = this.divisionService.getAll(this.appSession.tenantId, undefined, undefined, undefined, 0, 1000);
//         } else if (Id === VoucherToType.Brigade) {
//             proxy = this.brigadeService.getAll(this.appSession.tenantId, undefined, undefined, undefined, undefined, undefined, 0, 1000);
//         } else if (Id === VoucherToType.OrganizationUnit) {
//             proxy = this.orignizationService.getOrganizationUnits();
//         }

//         proxy.subscribe(data => {
//             if (data) {
//                 let dropArray = [];
//                 forEach(data.items, function (value, index) {
//                     let name = '';
//                     let id = value.id;
//                     if (Id === VoucherToType.Unit) {
//                         name = value.description;
//                     } else if (Id === VoucherToType.Division) {
//                         name = value.divisionName;
//                     } else if (Id === VoucherToType.Brigade) {
//                         name = value.unitCode;
//                     } else if (Id === VoucherToType.OrganizationUnit) {
//                         name = value.displayName;
//                     } else {
//                         name = value.name;
//                     }
//                     let object = {
//                         name: name,
//                         id: id
//                     };
//                     dropArray.push(object);
//                 });
//                 this.vouchers = dropArray;
//             }
//         });
//     }
//     GetIntentReason(event, id) {
//         this.intentReasonId = id;
//         this.intentReasonText = event.target.text;
//         this.createIntentForm.controls.intentReasonId.setErrors(null);
//     }
//     getIntentItems(search) {
//         this.itemService.getAll(this.appSession.tenantId, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 0, 1000).subscribe(data => {
//             if (data) {
//                 data.items.forEach(e => {
//                 this.intentItems.push({
//                     itemImage: e.itemImage,
//                     itemName: e.itemName,
//                     weight: true,
//                     number: false,
//                     qty:  0,
//                     id: e.id,
//                     isSelected: false
//                 });
//             });
//             this.intentItemsbak = this.intentItems;
//             this.getDropDownItem(data.items);
//         }
//         });
//     }
//     getDropDownItem(items) {
//         this.itemDropDownList.push({name: 'All', id: 0});
//     items.forEach(item => {
//         this.itemDropDownList.push(
//             { name: this.decryptItemName(item),
//               id: item.id
//              });
//     });
//     this.createIntentForm.patchValue({
//         itemId: 0
//     });
//     }
//     searchIntentItem(event) {
//         let value = event.value;
//         if (value !== '' && value !== 0) {
//             let filterArray = this.intentItemsbak.filter(option => option.id === value);
//             this.filterItemsList(filterArray);
//         } else {
//             this.filterItemsList(this.intentItemsbak);
//         }
//     }
//     selectItem(event, id) {
//         let wieght = false;
//         let number = false;
//         this.selectedItem = new RequestedItemDto();
//         this.selectedItem.id = id;
//         let input = event.target.parentNode.querySelector('input[type="radio"]:checked');

//         let qty = event.target.parentNode.querySelector('input[id="qty"]');
//         if ( qty.value === '0') {
//            alert('Qauntity Must Be Grater Then 0!');
//            return;
//         }
//         if (input.id === 'number') {
//             number = true;
//             this.selectedItem.qtyNumberRequired = qty.value;
//             this.selectedItem.qtyWeightRequired = 0;
//         } else {
//             wieght = true;
//             this.selectedItem.qtyWeightRequired = qty.value;
//             this.selectedItem.qtyNumberRequired = 0;
//         }
//        let item = {
//         id: id,
//         weight: this.selectedItem.qtyWeightRequired,
//         number: this.selectedItem.qtyNumberRequired,
//         isWeight: wieght,
//         isNumber: number,
//        };
//        this.requestedItemlist.push(item);
//         this.filterItemsList(this.intentItems);
//     }
//     unselectItem(id) {
//         let item = this.requestedItemlist.findIndex(x => x.id === id);
//         this.requestedItemlist.splice(item, 1);
//         this.filterItemsList(this.intentItems);
//     }
//     filterItemsList(array) {
//         this.intentItems = [];
//         array.forEach(e => {
//             let isSelected = false;
//             let quantity = 0;
//             let wght = true;
//             let num = false;
//           let selectitem = this.requestedItemlist.filter(x => x.id === e.id).shift();
//           if ( selectitem) {
//                 wght = selectitem.isWeight;
//                 num = selectitem.isNumber;
//                 if (wght) {
//                     quantity = selectitem.weight;
//                 } else {
//                     quantity = selectitem.number;
//                 }
//                 isSelected = true;
//         }
//         this.intentItems.push({
//             itemImage: e.itemImage,
//             itemName: e.itemName,
//             weight: wght,
//             number: num,
//             qty:  quantity,
//             id: e.id,
//             isSelected: isSelected
//         });
//         });
//     }
//     handleFileInput(file: FileList) {
//         this.filename = file[0].name;

//         // Show image preview
//         const reader = new FileReader();
//         reader.onload = (event: any) => {
//             let value = event.target.result.split(',');
//             this.fileList.push(
//              {
//               index: this.fileindex,
//               Name: file[0].name,
//               size: (Math.floor(file[0].size / 1024)).toString().concat('KB'),
//               value : value[1],
//               type : this.ValidateFileType(file[0].type)
//             });
//             this.fileindex++;
//             this.FileError = false;
//             this.createIntentForm.controls.hardCopyAttachment.setValue(value[1]);
//         };
//         reader.readAsDataURL(file[0]);
//     }
//     onVocuherChange(value) {
//         this.voucherId = value;
//     }
//     decryptItemName(item) {
//         try {
//         const data = this.encryptionDecryptionService.decrypt(item.itemName);
//         return data;
//     } catch (err) {

//     }
//     }
//     ///for mutiple images
//     deletefile(index: number) {
//         let file = this.fileList.findIndex(x => x.index === index);
//         this.fileList.splice(file, 1);
//         if (this.fileList.length === 0) {
//         this.createIntentForm.controls.hardCopyAttachment.setValue('');
//     }
//     }

// /// saves forms
// submit() {
//     if (this.validate()) {
//     this.btnText = 'Submiting';
//     this.interFormDTO = new IntentRequestFormDto();
//     this.interFormDTO.voucherToType = this.voucherTypeId;
//     let voucherId = this.createIntentForm.get('voucherId').value;
//     let file = this.fileList[0];

//     if (this.voucherTypeId === VoucherToType.User) {
//         this.interFormDTO.voucherToUserID = voucherId;
//     } else if (this.voucherTypeId === VoucherToType.Unit) {
//         this.interFormDTO.voucherToUnitId = voucherId;
//     } else if (this.voucherTypeId === VoucherToType.WearHouse) {
//         this.interFormDTO.voucherToWearhouseId = voucherId;
//     } else if (this.voucherTypeId === VoucherToType.Division) {
//         this.interFormDTO.voucherToDivisionId = voucherId;
//     } else if (this.voucherTypeId === VoucherToType.Brigade) {
//         this.interFormDTO.voucherToBrigadeId = voucherId;
//     } else if (this.voucherTypeId === VoucherToType.OrganizationUnit) {
//         this.interFormDTO.voucherToOrganizationUnitId = voucherId;
//     }
//     this.interFormDTO.tenantId = this.appSession.tenantId;
//     this.interFormDTO.intentNo = this.createIntentForm.get('intentNo').value;
//     this.interFormDTO.controlNumber = this.createIntentForm.get('controlNumber').value;
//     this.interFormDTO.descriptionOfPackage = this.createIntentForm.get('descriptionOfPackage').value;
//     this.interFormDTO.intentClass = this.createIntentForm.get('intentClass').value;
//     this.interFormDTO.priority = Math.round(this.createIntentForm.get('priority').value);
//     this.interFormDTO.dateStoresRequired = this.createIntentForm.get('dateStoresRequired').value;
//     this.interFormDTO.reasonForIndent = this.intentReasonId;
//     this.interFormDTO.hardCopyAttachment = this.fileList[0].value;
//     this.intentService.create(this.interFormDTO).subscribe(response => {
//         let res = response;
//         if (res) {
//         this.fileList.splice(file, 1);
//         this.saveIntentAttachements(res.id);
//         this.saveIntentRequestItem(res.id);
//         this.reset();
//     }
//     });
// }
// }
// saveIntentAttachements(intentId) {
//  let files = this.fileList;
//  forkJoin(
//  files.map(item => {
//     let file = new CreateFileUploadInput();
//     file.assignedType = AssignedType.Intent;
//     file.intentAssignId = intentId;
//     file.isActive = true;
//     file.tenantId = this.appSession.tenantId;
//     file.uploadFiles = item.value;
//     file.uploadType = item.type;
//    return this.fileUploadService.create(file);
//  })
//  ).subscribe((p: Array<any>) => {
//     this.fileList = [];
// });
// }
// saveIntentRequestItem(intentId) {
//     let items = this.requestedItemlist;
//     forkJoin(
//         items.map(item => {
//             let itemCreate = new CreateRequestedItemInput();
//             itemCreate.intentRequestFormId = intentId;
//             itemCreate.tenantId = this.appSession.tenantId;
//             itemCreate.itemId = item.id;
//             itemCreate.qtyNumberRequired = item.number;
//             itemCreate.qtyWeightRequired = item.weight;
//             return this.RequestItemService.create(itemCreate);
//         })
//     ).subscribe((p: Array<any>) => {
//         this.requestedItemlist = [];
//         this.gridload.emit();
//     });
// }

//  ///Validation & Reseting Form

//  ValidateFileType(type: string) {
//     if (type.match('text/plain') || type.match('DOCX') || type.match('xls') || type.match('spreadsheetml')) {
//         return UploadType.Document;
//     } else if (type.match('png') || type.match('jpeg') || type.match('jpg') || type.match('gif')) {
//        return UploadType.Image;
//     } else if (type.match('mp3')) {
//        return UploadType.Audio;
//     } else if (type.match('video/mp4')) {
//        return UploadType.Video;
//     }
//    }
//  isValid(control: any): boolean {
//     return control.hasError('required') && (control.dirty || control.touched);
// }
// reset() {
//     this.createIntentForm.reset();
//     this.createIntentForm.controls.voucherId.setValue('');
//     this.createIntentForm.controls.intentClass.setValue('1');
//     this.filename = '';
//     this.fileUpload = '';
//     this.voucherId = '';
//     this.intentReasonText = '';
//     this.btnText = 'Submit';
//     this.filename = '';
//     this.filterItemsList(this.intentItemsbak);
//     this.displayResponsive = false;
//     this.message.success('Saved Successfully');
// }
// validate() {
//     let voucherId = this.createIntentForm.get('voucherId').value;
//        if (this.fileList.length === 0) {
//            this.createIntentForm.controls.hardCopyAttachment.setErrors({'invalid': true});
//            return false ;
//          } else {
//             this.createIntentForm.controls.hardCopyAttachment.setErrors(null);
//          }
//          if (this.intentReasonId === 0 || this.intentReasonId === undefined) {
//             this.createIntentForm.controls.intentReasonId.setErrors({'invalid': true});
//             return false ;
//          } else {
//             this.createIntentForm.controls.intentReasonId.setErrors(null);
//          }
//          if (voucherId === '0' && voucherId === '') {
//              alert('Please select an option!');
//              return false ;
//          }
//          if (this.requestedItemlist.length === 0) {
//             alert('Please select an item!');
//             return false ;
//         }
//          return true;
//    }
// }
