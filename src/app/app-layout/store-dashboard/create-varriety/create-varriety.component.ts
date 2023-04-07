// import { Component, Injector, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { CreateVarietyInput, VarietyCategoryServiceProxy, VarietyServiceProxy } from '@shared/service-proxies/service-proxies';

// @Component({
//     selector: 'app-create-varriety',
//     templateUrl: './create-varriety.component.html',
//     styleUrls: ['./create-varriety.component.css']
// })
// export class CreateVarrietyComponent extends AppComponentBase implements OnInit {

//     createVarrietyForm: FormGroup;
//     createVarriety = new CreateVarietyInput();
//     displayResponsive: boolean;
//     varietyCategoryList: any = [];
//     fileUpload: any;
//     imgUpload: any;
//     filename: any;
//     size: any;
//     submitted = false;
//     constructor(injector: Injector,
//         private _varietyCategoryServiceProxy: VarietyCategoryServiceProxy,
//         private _varietyServiceProxy: VarietyServiceProxy
//     ) {
//         super(injector);

//         this.createVarrietyForm = new FormGroup({
//             vName: new FormControl('', Validators.required),
//             categoryId: new FormControl(1)
//         });
//     }

//     ngOnInit(): void {
//         this.getVarietyCategory();
//     }

//     openVarrietyModel() {
//         this.displayResponsive = true;
//     }

//     getVarietyCategory() {
//         this._varietyCategoryServiceProxy.getAll(this.appSession.tenantId, undefined, undefined, 0, 1000).subscribe(data => {

//             data.items.map(m => {
//                 this.varietyCategoryList.push({ name: m.vCategoryName, code: m.id });
//             });
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

//     get f() { return this.createVarrietyForm.controls; }


//     submit() {

//         this.submitted = true;

//         if (this.createVarrietyForm.invalid) {
//             return;
//         }

//         this.createVarriety.tenantId = Number(this.appSession.tenantId);
//         this.createVarriety.vName = this.createVarrietyForm.value.vName;
//         this.createVarriety.varietyCategoryId = this.createVarrietyForm.value.categoryId;
//         let file = this.fileUpload.split(',');
//         this.createVarriety.logo = file[1];
//         this._varietyServiceProxy.create(this.createVarriety).subscribe((data: any) => {

//             if (data.tenantId === this.appSession.tenantId) {
//                 this.fileUpload = '';
//                 this.filename = '';
//                 this.size = '';
//                 this.message.success('Saved Successfully');
//             }
//         });


//     }

// }
