// import { Component, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { EncryptionDecryptionService } from '@shared/encryption-decryption.service';
// import { CreateItemCategoriesInput, CreateItemInput, CreateItemsTypesInput, CreateItemTypeInput, CreateLowLevelItemInput, EncryptionkeyServiceProxy, ItemCategoriesServiceProxy, ItemCategoryServiceProxy, ItemPack, ItemServiceProxy, ItemsTypesServiceProxy, ItemTypeServiceProxy, LowLevelItemServiceProxy, ManufacturerServiceProxy, SupplierServiceProxy } from '@shared/service-proxies/service-proxies';
// import { AddStoreCategoryComponent } from '../create-store-category/add-store-category.component';

// @Component({
//     selector: 'app-create-store-form',
//     templateUrl: './create-store-form.component.html',
//     styleUrls: ['./create-store-form.component.css']
// })
// export class CreateStoreFormComponent extends AppComponentBase implements OnInit {
//     createStoreForm: FormGroup;
//     createStore = new CreateItemInput();
//     CreateLowLevelItem = new CreateLowLevelItemInput();
//     @ViewChild('modalCreate', { static: true }) modalCreate: DailogComponent;
//     // tslint:disable-next-line:no-output-rename
//     @Output('gridload') gridload: EventEmitter<any> = new EventEmitter();
//     @ViewChild('createStoreCategory', { static: true }) createStoreCategory: AddStoreCategoryComponent;
//     ItemTypeObject = new CreateItemsTypesInput();
//     ItemCategory = new CreateItemCategoriesInput();
//     displayResponsive: boolean;
//     intentNumberForEdit = 0;
//     size: any;
//     loading = false;
//     addFromGrid = false;
//     intentnumberlist: any = [];
//     issueControlNumberList: any = [];
//     authorityformNumberList: any = [];
//     WhereHousenumberlist: any = [];
//     wherehouseNumber: any = [];
//     supplierId: any = [];
//     manufacturerId: any = [];
//     typeId: any = [];
//     StoreTypeSelectedVal: any = [];
//     StoreCategorylist: any = [];
//     SelectedCategoryList: any = [];
//     categoryid: any = [];
//     StoreTypeList: any = [];
//     filename: any;
//     fileUpload: any;
//     keyId: any;
//     encryptId: any;
//     itemManufacturer: any;
//     supplier: any;
//     manufacturer: any;
//     itemSupplierId: any;
//     storeType: any;
//     itemTypeId: any;
//     firstSelectValue: any;
//     organizationUnitList: any = [];
//     orgnizationid: any = [];

//     form: FormGroup;
//     submitted = false;

//     // itemPack: ItemPack;
//     itemPack = [
//         {
//             name: 'Wood',
//             id: 1
//         },
//         {
//             name: 'Crate',
//             id: 2
//         },
//         {
//             name: 'Carton',
//             id: 3
//         },
//         {
//             name: 'NylonPacks',
//             id: 4
//         },
//         {
//             name: 'Container20ft',
//             id: 5
//         },
//         {
//             name: 'Container40ft',
//             id: 6
//         },
//         {
//             name: 'Rolls',
//             id: 7
//         }
//     ];


//     constructor(injector: Injector,
//         private _itemServiceProxy: ItemServiceProxy,
//         private _lowLevelItemServiceProxy: LowLevelItemServiceProxy,
//         private _encryptionkeyServiceProxy: EncryptionkeyServiceProxy,
//         private _encryptionDecryptionService: EncryptionDecryptionService,
//         private _supplierServiceProxy: SupplierServiceProxy,
//         private _manufacturerServiceProxy: ManufacturerServiceProxy,
//         private _itemTypeServiceProxy: ItemTypeServiceProxy,
//         private _itemsType: ItemsTypesServiceProxy,
//         private _itemCategoty: ItemCategoriesServiceProxy,
//         private _itemCategoryServiceProxy: ItemCategoryServiceProxy) {
//         super(injector);


//         this.createStoreForm = new FormGroup({
//             itemName: new FormControl('', Validators.required),
//             sku: new FormControl('', Validators.required),
//             code: new FormControl('', Validators.required),
//             details: new FormControl('', Validators.required),
//             encryptId: new FormControl(1, Validators.required),
//             itemSupplier: new FormControl(1, Validators.required),
//             itemManufacturer: new FormControl(1, Validators.required),
//             itemPack: new FormControl('', Validators.required),
//             itemType: new FormControl('', Validators.required),
//             itemCategory: new FormControl(1, Validators.required),
//             barCode: new FormControl('', Validators.required),
//             nfC: new FormControl('', Validators.required),
//             rfId: new FormControl('', Validators.required),
//             qrC: new FormControl('', Validators.required),
//             authenticate: new FormControl(true),
//             itemPrint: new FormControl(true),
//             qtyPrint: new FormControl(true),
//             rackPrint: new FormControl(true),
//             variantPrint: new FormControl(true),
//             storeTrack: new FormControl(true),
//             stockAlert: new FormControl(true),
//             stockValue: new FormControl(true),
//             weightTrack: new FormControl(true),
//             qtyTrack: new FormControl(true),
//             notifyExpire: new FormControl(true),
//             expireEarlyWarning: new FormControl(1, Validators.required),
//             lowStoreqty: new FormControl(1, Validators.required),
//             lowStoreWeight: new FormControl(1, Validators.required),
//             alertLow: new FormControl(true),
//             llEarlywarning: new FormControl(1, Validators.required),
//             alertExpiry: new FormControl(true),
//             orgnizationid: new FormControl(this.orgnizationid)
//         });
//     }

//     ngOnInit(): void {
//         this.encryptionKey();
//         this.getSupplier();
//         this.getManufacturer();
//         this.getStoreType();
//         this.getCategory();

//     }

//     modalAuthorityNumberForm() {
//         this.displayResponsive = false;
//         this.createStoreCategory.openAuthoritymodel();
//     }
//     openAuthoritymodel() {
//         this.displayResponsive = true;
//     }


//     get f() { return this.createStoreForm.controls; }

//     handleFileInput(file: FileList) {
//         this.filename = file[0].name;
//         this.size = file[0].size;
//         const reader = new FileReader();

//         reader.onload = (event: any) => {

//             this.fileUpload = event.target.result;

//         };
//         reader.readAsDataURL(file[0]);
//     }

//     submit() {

//         this.submitted = true;

//         if (this.createStoreForm.invalid) {
//             return;
//         }

//         this.createStore.tenantId = Number(this.appSession.tenantId);
//         let value = this.createStore.itemImage;
//         this.createStore.itemImage = value;

//         this.createStore.encryptionKeyId = this.createStoreForm.value.encryptId;
//         this.createStore.itemSupplierId = this.createStoreForm.value.itemSupplier;
//         this.createStore.manufacturerId = this.createStoreForm.value.itemManufacturer;
//         this.createStore.itemPack = this.createStoreForm.value.itemPack;
//         this.createStore.code = this.createStoreForm.value.code;
//         this.createStore.itemName = this.createStoreForm.value.itemName;
//         this.createStore.details = this.createStoreForm.value.details;
//         this.createStore.sku = this.createStoreForm.value.sku;
//         this.createStore.barcode = this.createStoreForm.value.barCode;
//         this.createStore.rfid = this.createStoreForm.value.rfId;
//         this.createStore.nfc = this.createStoreForm.value.nfC;
//         this.createStore.qrc = this.createStoreForm.value.qrC;
//         this.createStore.authenticateItem = this.createStoreForm.value.authenticate;
//         this.createStore.printItem = this.createStoreForm.value.itemPrint;
//         this.createStore.printQty = this.createStoreForm.value.qtyPrint;
//         this.createStore.printRack = this.createStoreForm.value.rackPrint;
//         this.createStore.printVarriant = this.createStoreForm.value.variantPrint;
//         this.createStore.isItemTrackAble = this.createStoreForm.value.storeTrack;
//         this.createStore.lowStockAlert = this.createStoreForm.value.stockAlert;
//         this.createStore.lowStockValue = this.createStoreForm.value.stockValue;
//         this.createStore.trackWeight = this.createStoreForm.value.weightTrack;
//         this.createStore.trackQty = this.createStoreForm.value.qtyTrack;
//         this.createStore.expNotify = this.createStoreForm.value.notifyExpire;
//         let file = this.fileUpload.split(',');
//         this.createStore.itemImage = file[1];


//         this.CreateLowLevelItem.organizationUnitId = this.commonUtility.organizationId;
//         this.CreateLowLevelItem.alertName = this.createStoreForm.value.itemName;
//         this.CreateLowLevelItem.expiryEarlyWarning = this.createStoreForm.value.expireEarlyWarning;
//         this.CreateLowLevelItem.lowLevelQty = this.createStoreForm.value.lowStoreqty;
//         this.CreateLowLevelItem.lowLevelWeight = this.createStoreForm.value.lowStoreWeight;
//         this.CreateLowLevelItem.llEarlyWarning = this.createStoreForm.value.llEarlywarning;
//         this.CreateLowLevelItem.expiryAlert = this.createStoreForm.value.alertExpiry;
//         this.CreateLowLevelItem.lowAlert = this.createStoreForm.value.alertLow;
//         this._itemServiceProxy.create(this.createStore).subscribe((data: any) => {

//             let res = data;
//             this.createLowLevelItem(res.id);
//             this.createStoreType(res.id);
//             this.createItemCategory(res.id);

//             if (data.tenantId === this.appSession.tenantId) {

//                 this.gridload.emit();
//                 this.fileUpload = '';
//                 this.filename = '';
//                 this.size = '';
//                 this.message.success('Saved Successfully');
//             }
//         });


//     }

//     createItemCategory(data) {
//         for (let i = 0; i < this.SelectedCategoryList.length; i++) {
//             this.ItemCategory.tenantId = this.appSession.tenantId;
//             this.ItemCategory.itemID = data;
//             this.ItemCategory.categoryId = this.SelectedCategoryList[i].index;
//             this._itemCategoty.create(this.ItemCategory).subscribe((data: any) => {
//                 if (data.tenantId === this.appSession.tenantId) {

//                     //   this.message.success('Saved Successfully');
//                 }
//             });
//         }
//     }

//     createStoreType(data) {
//         for (let i = 0; i < this.StoreTypeList.length; i++) {
//             this.ItemTypeObject.tenantId = Number(this.appSession.tenantId);
//             this.ItemTypeObject.itemID = data;
//             this.ItemTypeObject.itemTypeId = this.StoreTypeList[i].index;
//             this._itemsType.create(this.ItemTypeObject).subscribe((data: any) => {
//                 if (data.tenantId === this.appSession.tenantId) {

//                     //    this.message.success('Saved Successfully');
//                 }
//             });
//         }
//     }

//     createLowLevelItem(ItemId) {

//         this.CreateLowLevelItem.itemId = ItemId;
//         this.CreateLowLevelItem.tenantId = Number(this.appSession.tenantId);
//         this._lowLevelItemServiceProxy.create(this.CreateLowLevelItem).subscribe((data: any) => {
//             if (data.tenantId === this.appSession.tenantId) {

//                 //   this.message.success('Saved Successfully');
//             }
//         });
//     }

//     encryptionKey() {
//         this._encryptionkeyServiceProxy.getAll(this.appSession.tenantId, undefined, undefined, undefined, undefined, undefined).subscribe(res => {
//             res.items.map(m => {
//                 this.wherehouseNumber.push({ name: m.keyName, code: m.id });
//             });
//             this.createStoreForm.patchValue({
//                 encryptId: res.items[0].id,
//             });
//         });
//     }

//     getSupplier() {
//         this._supplierServiceProxy.getAll(this.appSession.tenantId, undefined, undefined, undefined, undefined).subscribe(res => {

//             res.items.map(m => {
//                 this.supplierId.push({ name: m.name, code: m.id });
//             });
//             this.createStoreForm.patchValue({
//                 itemSupplier: res.items[0].id,
//             });
//         });
//     }

//     getManufacturer() {
//         this._manufacturerServiceProxy.getAll(this.appSession.tenantId, undefined, undefined, undefined, undefined).subscribe(res => {


//             res.items.map(m => {
//                 this.manufacturerId.push({ name: m.name, code: m.id });
//             });
//             this.createStoreForm.patchValue({
//                 itemManufacturer: res.items[0].id,
//             });

//         });
//     }

//     getStoreType() {
//         this._itemTypeServiceProxy.getAll(this.appSession.tenantId, undefined, undefined, undefined, undefined).subscribe(res => {


//             res.items.map(m => {
//                 this.typeId.push({ name: m.categoryName, code: m.id });
//             });
//             this.createStoreForm.patchValue({
//                 itemType: res.items[0].id,
//             });

//         });
//     }
//     getSelectedStoreType(input: any) {

//         // tslint:disable-next-line:no-unused-expression
//         this.StoreTypeSelectedVal;
//         this.StoreTypeList.push({ index: this.StoreTypeSelectedVal.code, Name: this.StoreTypeSelectedVal.name });
//     }
//     deleteStoreTypes(id: number) {
//         let Index = this.StoreTypeList.findIndex(x => x.index === id);
//         this.StoreTypeList.splice(Index, 1);
//     }
//     getSelectedStoreCategory(input: any) {

//         // tslint:disable-next-line:no-unused-expression
//         this.StoreCategorylist;
//         this.SelectedCategoryList.push({ index: this.StoreCategorylist.code, Name: this.StoreCategorylist.name });

//     }
//     deleteCategoryStore(id: number) {
//         let Index = this.SelectedCategoryList.findIndex(x => x.index === id);
//         this.SelectedCategoryList.splice(Index, 1);
//     }
//     getCategory() {
//         this._itemCategoryServiceProxy.getAll(this.appSession.tenantId, undefined, undefined, undefined, undefined).subscribe(res => {

//             res.items.map(m => {
//                 this.categoryid.push({ name: m.categoryName, code: m.id });
//             });
//             this.createStoreForm.patchValue({
//                 itemCategory: res.items[0].id,
//             });

//         });
//     }

// }
