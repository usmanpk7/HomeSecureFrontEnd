// import { CreateIssueRequestInput, CreateRequestAuthorityFormInput, LowLevelWareHouseItemServiceProxy, RequestAuthorityFormServiceProxy, WareHouseServiceProxy } from './../../../../shared/service-proxies/service-proxies';
// import { Component, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { IntentRequestFormServiceProxy, PagedResultDtoOfIntentRequestFormDto, IssueRequestServiceProxy } from '@shared/service-proxies/service-proxies';
// import { Console } from 'console';
// import { IndentDashboardComponent } from '@app/app-layout/indent-dashboard/indent-dashboard.component';
// @Component({
//   selector: 'app-authority-number-model',
//   templateUrl: './authority-number-model.component.html',
//   styleUrls: ['./authority-number-model.component.css']
// })
// export class AuthorityNumberModelComponent extends AppComponentBase implements OnInit{
//     AuthorityForm: FormGroup;
//     @ViewChild('modalCreate', { static: true }) modalCreate: DailogComponent;

//   filename: any;
//   fileUpload: any;
//   intentNumberForEdit:number=0;
//   displayResponsive:boolean;
//   size:any;
//   loading:boolean=false;
//   addFromGrid:boolean=false;
//   intentnumberlist:any=[];
//   issueControlNumberList:any=[];
//   authorityformNumberList:any=[];
//   indentRequestFomr = [];
//   indentRequestFormBak = [];
//   WhereHousenumberlist:any=[];
//   issueauthority=new CreateIssueRequestInput();
//   submitted = false;

//   constructor(
//       injector:Injector,
//       private indentRequestFormProxy:IntentRequestFormServiceProxy,
//       private _requestAuthorityFormServiceProxy:RequestAuthorityFormServiceProxy,
//       private wareHouseServiceProxy: WareHouseServiceProxy,private formBuilder: FormBuilder) {
//     super(injector);
//     this.AuthorityForm =this.formBuilder.group({
//         intentRequestFormId: [0, Validators.required],
//         issueControlName:['',Validators.required],
//         authorityNumber:['',Validators.required],
//         authorityForIssue:['',Validators.required],
//         hardCopyAttachment: ['',Validators.required],
//      });
//    }

//   ngOnInit(): void {

//     this.GetWarehouse();
//     this.GetAuthorityNumerAndIssueControlnumber();

//   }
//   @Output("gridload") gridload: EventEmitter<any> = new EventEmitter();
//   handleFileInput(file: FileList) {
//     this.filename = file[0].name;
//     this.size=file[0].size;
//     const reader = new FileReader();
//     reader.onload = (event: any) => {
//         this.AuthorityForm.patchValue({
//             hardCopyAttachment:event.target.result
//         })
//     };
//     reader.readAsDataURL(file[0]);
//   }
// openAuthoritymodel(intentId?: number)
// {

//     if(intentId > 0)
//     {
//         this.addFromGrid=true;
//         this.intentNumberForEdit=intentId;
//         this.GetIntentNumber()
//         this.displayResponsive=true;
//     }
//     else{

//         this.GetIntentNumber()
//         this.displayResponsive=true;
//     }


//     // this.modalCreate.show();
// }
// get validators() { return this.AuthorityForm.controls; }


// close()
// {
//     this.modalCreate.hide();
// }
// submit()
// {
//     this.submitted = true;
//     if (this.AuthorityForm.invalid) {
//         return;
//     }

//      this.isLoading=true;
//     if(this.AuthorityForm.value.intentRequestFormId== undefined)
//     {
//         this.AuthorityForm.value.intentRequestFormId=this.intentNumberForEdit;
//     }
//     this.AuthorityForm.value.tenantId=this.appSession.tenantId;
//     var value=this.AuthorityForm.value.hardCopyAttachment.split(',')[1];
//     this.AuthorityForm.value.hardCopyAttachment=value;
//     this._requestAuthorityFormServiceProxy.create(this.AuthorityForm.value).subscribe((data:any)=>{
//         this.isLoading=false;

//        if(data.tenantId==this.appSession.tenantId)
//        {


//         this.fileUpload="";
//         this.filename="";
//         this.displayResponsive=false;
//         this.AuthorityForm.reset();
//         this.GetIntentNumber();
//         this.size="";
//            this.message.success("Saved Successfully");
//            this.gridload.emit();
//        }
//    })

// }
// validateAllFormFields(formGroup: FormGroup) {         //{1}
//     Object.keys(formGroup.controls).forEach(field => {  //{2}
//       const control = formGroup.get(field);             //{3}
//       if (control instanceof FormControl) {             //{4}
//         control.markAsTouched({ onlySelf: true });
//       } else if (control instanceof FormGroup) {        //{5}
//         this.validateAllFormFields(control);            //{6}
//       }
//     });
//   }
// GetIntentNumber()
// {
//         this.intentnumberlist=[];
//     this.indentRequestFormProxy.getAll(undefined,this.appSession.tenantId,undefined,undefined,undefined,undefined,100).subscribe((data:any)=>
//     {
//         data.items.map(m => {
//             this.intentnumberlist.push({intentName: m.intentNo,id:m.id});
//         });
//         if(this.intentNumberForEdit > 0)
//         {
//             this.AuthorityForm.patchValue({
//                 intentRequestFormId:this.intentNumberForEdit
//             })
//             this.AuthorityForm.get('intentRequestFormId').disable();
//         }
//         else
//         {
//             this.AuthorityForm.patchValue({
//                 intentRequestFormId:this.intentnumberlist[0].id
//             })
//         }



//     })
// }

// GetWarehouse() {
//     this.WhereHousenumberlist=[];
//     this.wareHouseServiceProxy.getAll(this.appSession.tenantId, undefined, undefined, undefined, undefined, 0, 100).subscribe((data: any) => {
//         data.items.map(m => {
//             this.WhereHousenumberlist.push({name: m.description, code: m.invalid});
//         });
//     });
// }
// GetAuthorityNumerAndIssueControlnumber()
// {
//     this.WhereHousenumberlist=[];
//     this._requestAuthorityFormServiceProxy.getAll(undefined,this.appSession.tenantId,undefined,undefined,undefined,0,1000).subscribe((data:any)=>{
//         data.items.map(m => {
//             this.issueControlNumberList.push({id: m.issueControlName,name:m.issueControlName});
//             this.authorityformNumberList.push({id: m.authorityNumber,name:m.authorityNumber});
//         });
//     })
// }

// getAllIndent(search) {
//     // let t = this.skipCount;
//     // let t2 = this.maxResultCount;
//     this.isLoading = true;
//     this.indentRequestFormProxy.getAll(search, this.appSession.tenantId, undefined, undefined, undefined, 0, 1000)
//         .subscribe(data => {
//             this.indentRequestFomr = data.items;
//             this.indentRequestFormBak = data.items;
//             this.isLoading = false;
//         });
// }
// }
