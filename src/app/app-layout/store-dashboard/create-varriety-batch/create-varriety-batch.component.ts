// import { Component, Injector, OnInit, ViewChild } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { EncryptionDecryptionService } from '@shared/encryption-decryption.service';
// import {
//     CreateVarietyBatchInput,
//     EncryptionkeyDto,
//     EncryptionkeyServiceProxy,
//     ItemCategoryServiceProxy,
//     ItemServiceProxy,
//     ItemTypeServiceProxy,
//     ManufacturerServiceProxy,
//     SupplierServiceProxy,
//     VarietyBatchServiceProxy,
//     VarietyServiceProxy,
//     WareHouseDto,
//     WareHouseServiceProxy,
// } from '@shared/service-proxies/service-proxies';

// @Component({
//     selector: 'app-create-varriety-batch',
//     templateUrl: './create-varriety-batch.component.html',
//     styleUrls: ['./create-varriety-batch.component.css'],
// })
// export class CreateVarrietyBatchComponent extends AppComponentBase implements OnInit {
//     @ViewChild('modalCreate', { static: true }) modalCreate: DailogComponent;

//     createVarrietyBatchForm: FormGroup;
//     displayResponsive: boolean;
//     addFromGrid: boolean = false;
//     intentNumberForEdit: number = 0;
//     filename: any;
//     fileUpload: any;
//     size: any;
//     imageUrl: any;

//     varietyBatchForm = new CreateVarietyBatchInput();
//     storeName: any = [];
//     typeId: any = [];
//     storeCategory: any = [];
//     vData: any = [];
//     wareHouseList: any = [];
//     vSnCode: any = [];
//     manufacturerList: any = [];
//     supplierList: any = [];
//     imageList: any = [];
//     encryptionKeys: Array<EncryptionkeyDto>;
//     constructor(
//         injector: Injector,
//         private _varietyBatchServiceProxy: VarietyBatchServiceProxy,
//         private _itemServiceProxy: ItemServiceProxy,
//         private _encryptionDecryptionService: EncryptionDecryptionService,
//         private _itemTypeServiceProxy: ItemTypeServiceProxy,
//         private _wearHouseServiceProxy: WareHouseServiceProxy,
//         private _itemCategoryServiceProxy: ItemCategoryServiceProxy,
//         private _manufacturerServiceProxy: ManufacturerServiceProxy,
//         private _varietyServiceProxy: VarietyServiceProxy,
//         private _supplierServiceProxy: SupplierServiceProxy,
//         private encryptionKeyProxy: EncryptionkeyServiceProxy,
//     ) {
//         super(injector);
//     }

//     ngOnInit(): void {
//         this.getAllEncryptionKeys();
//         this.getStoreNames();
//         this.getStoreType();
//         this.getCategory();
//         this.getVariety();
//         this.WareHouseDropdown();
//         this.getManufacturer();
//         this.getSupplier();

//         this.createVarrietyBatchForm = new FormGroup({
//             itemType: new FormControl(1, Validators.required),
//             itemCategory: new FormControl(1, Validators.required),
//             itemQuantity: new FormControl(1, Validators.required),
//             snCodePrefix: new FormControl('', Validators.required),
//             storehouse: new FormControl('', Validators.required),
//             vsn: new FormControl('', Validators.required),
//             vDetail: new FormControl('', Validators.required),
//             VId: new FormControl(1, Validators.required),
//             storeId: new FormControl(1, Validators.required),
//             manufacturerName: new FormControl('', Validators.required),
//             isApprove: new FormControl(true),
//             typeReff: new FormControl(true),
//             expiryDate: new FormControl(),
//             isExpire: new FormControl()
//         });
//     }

//     openCreateVarrietyBatch() {
//         this.displayResponsive = true;
//     }

//     isValid(control: any): boolean {
//         return control.hasError('required') && (control.dirty || control.touched);
//     }

//     getSelectedImage(input: any) {
//         // tslint:disable-next-line:no-unused-expression
//         this.imageUrl;
//         this.imageList.unshift({ image: this.imageUrl.imageUrl1, index: this.imageUrl.code });
//         this.createVarrietyBatchForm.patchValue({
//             storeId: this.imageUrl[0].code,
//         });
//     }

//     getCode(id: number) {
//         let index = this.imageList.findIndex((x) => x.index == id);
//     }

//     getSupplier() {
//         this._supplierServiceProxy.getAll(this.appSession.tenantId, undefined, undefined, 0, 1000).subscribe((data) => {
//             data.items.map((m) => {
//                 this.supplierList.push({ name: m.name, code: m.id });
//             });

//             this.createVarrietyBatchForm.patchValue({
//                 SupplierId: data.items[0].id,
//             });
//         });
//     }

//     getManufacturer() {
//         this._manufacturerServiceProxy
//             .getAll(this.appSession.tenantId, undefined, undefined, undefined, undefined)
//             .subscribe((res) => {
//                 res.items.map((m) => {
//                     this.manufacturerList.push({ name: m.name, code: m.id });
//                 });
//                 this.createVarrietyBatchForm.patchValue({
//                     ManufacturerId: res.items[0].id,
//                 });
//             });
//     }
//     getAllEncryptionKeys() {
//         this.encryptionKeyProxy.getAll(this.appSession.tenantId, undefined, undefined, undefined, 0, 1000)
//       .subscribe(data => {
//        if (data) {
//         this.encryptionKeys = data.items;
//        }
//       });
//      }
//     getStoreNames() {
//         this._itemServiceProxy
//             .getAll(
//                 this.appSession.tenantId,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined
//             )
//             .subscribe((res) => {
//                 this.storeName = [];
//                 res.items.map((m) => {
//                     this.storeName.push({ name: this.decryptItemName(m.itemName, m.encryptionKeyId), code: m.id, imageUrl1: m.itemImage });
//                 });

//                 this.createVarrietyBatchForm.patchValue({
//                     storeId: res.items[0].id,
//                 });
//             });
//     }
//     decryptItemName(item, keyId: number) {
//         try {
//             let keyvalue = this.encryptionKeys.filter(x => x.id === keyId).shift();
//             const data = this._encryptionDecryptionService.decrypt(item, keyvalue?.keyValue);
//             return data;
//         } catch (err) {}
//     }

//     getStoreType() {
//         this._itemTypeServiceProxy
//             .getAll(this.appSession.tenantId, undefined, undefined, undefined, undefined)
//             .subscribe((res) => {
//                 res.items.map((m) => {
//                     this.typeId.push({ name: m.categoryName, code: m.id });
//                 });
//                 this.createVarrietyBatchForm.patchValue({
//                     itemType: res.items[0].id,
//                 });
//             });
//     }

//     getCategory() {
//         this._itemCategoryServiceProxy
//             .getAll(this.appSession.tenantId, undefined, undefined, undefined, undefined)
//             .subscribe((res) => {
//                 res.items.map((m) => {
//                     this.storeCategory.push({ name: m.categoryName, code: m.id });
//                 });
//                 this.createVarrietyBatchForm.patchValue({
//                     itemCategory: res.items[0].id,
//                 });
//             });
//     }

//     getVariety() {
//         this._varietyServiceProxy
//             .getAll(this.appSession.tenantId, undefined, undefined, undefined, 0, 1000)
//             .subscribe((res) => {
//                 res.items.map((m) => {
//                     this.vData.push({ name: m.vName, code: m.id });
//                 });
//                 this.createVarrietyBatchForm.patchValue({
//                     VId: res.items[0].id,
//                 });
//             });
//     }

//     handleFileInput(file: FileList) {
//         this.filename = file[0].name;
//         this.size = file[0].size;
//         const reader = new FileReader();

//         reader.onload = (event: any) => {
//             this.fileUpload = event.target.result;
//         };
//         reader.readAsDataURL(file[0]);
//     }

//     WareHouseDropdown() {
//         this._wearHouseServiceProxy
//             .getAll(this.appSession.tenantId, undefined, undefined, undefined, undefined, 0, 1000)
//             .subscribe((res) => {
//                 res.items.map((m) => {
//                     this.wareHouseList.push({ name: m.name, code: m.id });
//                 });
//                 this.createVarrietyBatchForm.patchValue({
//                     wareHouse: res.items[0].id,
//                 });
//             });
//     }

//     submit(data: any) {
//         this.varietyBatchForm.tenantId = Number(this.appSession.tenantId);
//         this.varietyBatchForm.snCodePrefix = data.snCodePrefix;
//         this.varietyBatchForm.snCodeNo = data.vsn;
//         this.varietyBatchForm.quantity = data.itemQuantity;
//         // this.varietyBatchForm.itemId = data.itemCategory;
//         this.varietyBatchForm.varrarityId = data.VId;
//         this.varietyBatchForm.itemId = data.storeId;
//         this.varietyBatchForm.isApproved = data.isApprove;
//         this.varietyBatchForm.typeRefference = data.typeReff;
//         this.varietyBatchForm.detail = data.vDetail;
//         this.varietyBatchForm.wareHouseId = data.storehouse;
//         this.varietyBatchForm.assignedConsumer = '';
//         this.varietyBatchForm.assignedWareHouseUnit = data.manufacturerName;
//         this.varietyBatchForm.expiryDateStatus = data.isExpire;
//         this.varietyBatchForm.expiryDate = data.expiryDate;
//         let value = this.varietyBatchForm.logo;
//         this.varietyBatchForm.logo = value;
//         let file = this.fileUpload.split(',');
//         this.varietyBatchForm.logo = file[1];
//         this._varietyBatchServiceProxy.create(this.varietyBatchForm).subscribe((data: any) => {
//             if (data.tenantId === this.appSession.tenantId) {
//                 this.fileUpload = '';
//                 this.filename = '';
//                 this.size = '';
//                 this.message.success('Saved Successfully');
//             }
//         });
//     }
// }
