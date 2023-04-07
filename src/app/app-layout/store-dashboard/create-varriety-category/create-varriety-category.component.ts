// import { Component, Injector, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { CreateVarrarityCategoryInput, VarietyCategoryServiceProxy } from '@shared/service-proxies/service-proxies';

// @Component({
//     selector: 'app-create-varriety-category',
//     templateUrl: './create-varriety-category.component.html',
//     styleUrls: ['./create-varriety-category.component.css']
// })
// export class CreateVarrietyCategoryComponent extends AppComponentBase implements OnInit {

//     createVCategoryForm: FormGroup;
//     createVcategory = new CreateVarrarityCategoryInput();
//     displayResponsive: boolean;
//     fileUpload: any;
//     imgUpload: any;
//     filename: any;
//     size: any;
//     submitted = false;
//     constructor(injector: Injector,
//         private _varietyCategoryServiceProxy: VarietyCategoryServiceProxy) {
//         super(injector);

//         this.createVCategoryForm = new FormGroup({
//             vcategoryName: new FormControl('', Validators.required),
//         });
//     }

//     ngOnInit(): void {
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

//     openCreateCategoryModel() {
//         this.displayResponsive = true;
//     }
//     get f() { return this.createVCategoryForm.controls; }

//     submit() {
//         this.submitted = true;

//         if (this.createVCategoryForm.invalid) {
//             return;
//         }
//         this.createVcategory.tenantId = Number(this.appSession.tenantId);
//         this.createVcategory.vCategoryName = this.createVCategoryForm.value.vcategoryName;
//         // this.createVarrietyCategoryForm.value.varietyCategoryId = this.categoryId;
//         let file = this.fileUpload.split(',');
//         this.createVcategory.logo = file[1];
//         this._varietyCategoryServiceProxy.create(this.createVcategory).subscribe((data: any) => {

//             if (data.tenantId === this.appSession.tenantId) {
//                 this.fileUpload = '';
//                 this.filename = '';
//                 this.size = '';
//                 this.message.success('Saved Successfully');
//             }
//         });

//     }

// }
