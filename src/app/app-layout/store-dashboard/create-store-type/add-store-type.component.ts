// import { Component, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { CreateItemTypeInput, ItemTypeServiceProxy } from '@shared/service-proxies/service-proxies';

// @Component({
//   selector: 'app-add-store-type',
//   templateUrl: './add-store-type.component.html',
//   styleUrls: ['./add-store-type.component.css']
// })
// export class AddStoreTypeComponent extends AppComponentBase implements OnInit {

//     @ViewChild('modalCreate', { static: true }) modalCreate: DailogComponent;
//     @Output("gridload") gridload: EventEmitter<any> = new EventEmitter();


//     displayResponsive: boolean;
//     intentNumberForEdit: number;
//     AddStoreTypeForm: FormGroup;
//     addFromGrid: boolean;
//     filename: any;
//     fileUpload: any;
//     size: any;
//     loading: boolean;
//     hardCopyAttachment!: string | undefined;
//     submitted = false;

//   constructor(injector: Injector,
//     private _itemTypeServiceProxy: ItemTypeServiceProxy) {
//         super(injector);
//         this.intentNumberForEdit = 0;
//         this.addFromGrid = false;
//         this.loading = false;
//    }

//   ngOnInit(): void {


//     this.AddStoreTypeForm = new FormGroup({
//       categoryName : new FormControl('', Validators.required),

//      });
//   }

//   handleFileInput(file: FileList) {
//     this.filename = file[0].name;
//     this.size = file[0].size;
//     const reader = new FileReader();
//     reader.onload = (event: any) => {

//             this.fileUpload = event.target.result;

//     };
//     reader.readAsDataURL(file[0]);
//   }

//   get f() { return this.AddStoreTypeForm.controls; }


// openAuthoritymodel(intentId?: number) {

//     this.displayResponsive = true;
//     if (intentId > 0) {
//         this.addFromGrid = true;
//         this.intentNumberForEdit = intentId;
//             this.AddStoreTypeForm.patchValue({
//                 intentRequestFormId : intentId
//             });
//             this.AddStoreTypeForm.get('intentRequestFormId').disable();
//     } else {


//     }


//     // this.modalCreate.show();
// }



// submit() {


//     this.submitted = true;

//         if(this.AddStoreTypeForm.invalid){
//             return
//         }

//         this.AddStoreTypeForm.value.tenantId = this.appSession.tenantId;
//     let file = this.fileUpload.split(',');
//     this.AddStoreTypeForm.value.logo = file[1];
//     this._itemTypeServiceProxy.create(this.AddStoreTypeForm.value).subscribe((data: any) => {

//        if (data.tenantId === this.appSession.tenantId) {
//         this.gridload.emit();
//         this.fileUpload = '';
//         this.filename = '';
//         this.size = '';
//            this.message.success('Saved Successfully');
//        }
//    });
// }

// }
