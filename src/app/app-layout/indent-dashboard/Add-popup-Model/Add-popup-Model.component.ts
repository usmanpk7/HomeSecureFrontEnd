// import { Component, EventEmitter, Injector, OnInit, Output, ViewChild, Input } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { CreateEpicNoteInput, CreateFileUploadInput, CreateIssueRequestInput, CreateRequestAuthorityFormInput, EqisNoteServiceProxy, FileUploadServiceProxy, IntentRequestFormServiceProxy, IssueRequestServiceProxy, LowLevelWareHouseItemServiceProxy, RequestAuthorityFormServiceProxy, WareHouseServiceProxy } from '@shared/service-proxies/service-proxies';

// @Component({
//   selector: 'app-Add-popup-Model',
//   templateUrl: './Add-popup-Model.component.html',
//   styleUrls: ['./Add-popup-Model.component.css']
// })
// export class AddPopupModelComponent extends AppComponentBase implements OnInit {
//     @Input() IfAttachment;
//     @Input() ModelHeading;
//     @Input() IntentFormId;
//      UploadFile:CreateFileUploadInput=new CreateFileUploadInput();
//      UploadNotes:CreateEpicNoteInput=new CreateEpicNoteInput();
//     UploadAttachment: FormGroup;
//     TextDescription:string="";
//     @ViewChild('modalCreate', { static: true }) modalCreate: DailogComponent;
//     @Output("RefershFilesTable") RefershFilesTable: EventEmitter<any> = new EventEmitter();
//     @Output("RefereshNotes") RefereshNotes: EventEmitter<any> = new EventEmitter();

//     filename: any;
//   fileUpload: any;

//   displayResponsive:boolean;
//   size:any;
//   loading:boolean=false;

//   constructor(
//       injector:Injector,
//       private filesupload:FileUploadServiceProxy,private uploadnots:EqisNoteServiceProxy) {
//     super(injector);

//    }

//   ngOnInit(): void {
//     this.UploadAttachment = new FormGroup({
//         hardCopyAttachment: new FormControl(),
//      });
//   }
//   handleFileInput(file: FileList) {
//     this.filename = file[0].name;
//     this.size=file[0].size;
//     const reader = new FileReader();
//     reader.onload = (event: any) => {
//         this.UploadAttachment.patchValue({
//             hardCopyAttachment:event.target.result
//         })
//     };
//     reader.readAsDataURL(file[0]);
//   }
// openAuthoritymodel(intentId?: number)
// {
//    this.displayResponsive=true;
//    // this.modalCreate.show();
// }


// close()
// {
//    this.displayResponsive=false;
//    this.TextDescription="";
// }
// submit()
// {
// var data =this.UploadAttachment.get('hardCopyAttachment').value;
// var file=data.split(',')[1];
// this.UploadFile.tenantId=this.appSession.tenantId;
// this.UploadFile.assignedType=1;
// this.UploadFile.uploadType=1;
// this.UploadFile.intentAssignId=this.IntentFormId;
// this.UploadFile.uploadFiles=file;
// this.UploadFile.isActive=true;
// // var body = {
// //     "tenantId": this.appSession.tenantId,
// //     "assignedType": 1,
// //     "uploadType": 1,
// //     "intentAssignId": this.IntentFormId,
// //     "uploadFiles": file,
// //     "isActive": true,
// //   }
// this.filesupload.create(this.UploadFile).subscribe((data:any)=>{
//     this.RefershFilesTable.emit();
//     this.notify.success("File Upload SuccessFully...!")
//     this.displayResponsive=false;
// })

// }
// submitNotes()
// {
//     let input = new CreateEpicNoteInput();
//     input.intentAssignId = this.IntentFormId;
//     input.noteDescription = this.TextDescription;
//     input.tenantId = this.appSession.tenantId;
//     input.noteType = 1;
//     input.createdBy = this.appSession.user.name;

//    this.uploadnots.create(input).subscribe((data:any)=>
//    {
//     this.RefereshNotes.emit();
//     this.notify.success("Notes Upload SuccessFully...!")
//     this.displayResponsive=false;
//    })
// }

// }

