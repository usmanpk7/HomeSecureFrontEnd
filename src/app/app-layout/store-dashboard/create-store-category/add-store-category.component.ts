// import { Component, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { ItemCategoryServiceProxy } from '@shared/service-proxies/service-proxies';

// @Component({
//     selector: 'app-add-store-category',
//     templateUrl: './add-store-category.component.html',
//     styleUrls: ['./add-store-category.component.css']
// })
// export class AddStoreCategoryComponent extends AppComponentBase implements OnInit {

//     @ViewChild('modalCreate', { static: true }) modalCreate: DailogComponent;
//     // tslint:disable-next-line:no-output-rename
//     @Output('gridload') gridload: EventEmitter<any> = new EventEmitter();


//     displayResponsive: boolean;
//     intentNumberForEdit: number;
//     AddStoreCategoryForm: FormGroup;
//     addFromGrid: boolean;
//     filename: any;
//     fileUpload: any;
//     size: any;
//     loading: boolean;
//     hardCopyAttachment!: string | undefined;
//     submitted = false;
//     constructor(injector: Injector,
//         private _itemCategoryServiceProxy: ItemCategoryServiceProxy) {
//         super(injector);
//         this.intentNumberForEdit = 0;
//         this.addFromGrid = false;
//         this.loading = false;
//     }

//     ngOnInit(): void {
//         this.AddStoreCategoryForm = new FormGroup({
//             categoryName: new FormControl('', Validators.required),
//         });
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
//     openAuthoritymodel(intentId?: number) {
//         this.displayResponsive = true;
//         if (intentId > 0) {
//             this.addFromGrid = true;
//             this.intentNumberForEdit = intentId;
//             this.AddStoreCategoryForm.patchValue({
//                 intentRequestFormId: intentId
//             });
//             this.AddStoreCategoryForm.get('intentRequestFormId').disable();
//         }
//         // this.modalCreate.show();
//     }

//     get f() { return this.AddStoreCategoryForm.controls; }


//     submit() {


//         this.submitted = true;

//         if (this.AddStoreCategoryForm.invalid) {
//             return;
//         }


//         this.AddStoreCategoryForm.value.tenantId = this.appSession.tenantId;
//         let file = this.fileUpload.split(',');
//         this.AddStoreCategoryForm.value.image = file[1];
//         this._itemCategoryServiceProxy.create(this.AddStoreCategoryForm.value).subscribe((data: any) => {

//             if (data.tenantId === this.appSession.tenantId) {
//                 this.gridload.emit();
//                 this.fileUpload = '';
//                 this.filename = '';
//                 this.size = '';
//                 this.message.success('Saved Successfully');
//             }
//         });
//     }


// }
