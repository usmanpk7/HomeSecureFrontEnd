// import { Component, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import {
//     CreateIssueRequestInput,
//     IssueRequestDto,
//     IssueRequestServiceProxy,
//     OrganizationUnitServiceProxy,
//     RequestAuthorityFormDto,
//     RequestAuthorityFormServiceProxy,
//     StoreReleaseDispatchDto,
//     StoreReleaseDispatchServiceProxy,
//     StoreReleaseDto,
//     StoreReleaseServiceProxy,
//     WareHouseDto,
//     WareHouseServiceProxy,
// } from '@shared/service-proxies/service-proxies';
// import { Router } from '@angular/router';
// @Component({
//     selector: 'app-create-issue-request',
//     templateUrl: './create-issue-request.component.html',
//     styleUrls: ['./create-issue-request.component.css'],
// })
// export class CreateIssueRequestComponent extends AppComponentBase implements OnInit {
//     @Output('gridload') gridload: EventEmitter<any> = new EventEmitter();
//     createIssueRequestInput: CreateIssueRequestInput;
//     createRequestRelease: FormGroup;
//     displayResponsive: boolean;
//     submitted = false;
//     btnText: string;
//     authorityNumber: RequestAuthorityFormDto[];
//     authorityNumberId: number;
//     wareHouseList: WareHouseDto[];
//     BODwarehouseList: WareHouseDto[] = [];
//     DepotwareHouseList: WareHouseDto[] = [];
//     organizationUnitList: any = [];
//     wareHouseId: number;
//     filename = 'FileName';
//     fileUpload: any;
//     fileSize = '0';
//     issubmitted: boolean;
//     requestauthorityId: number;
//     constructor(
//         injector: Injector,
//         private _router: Router,
//         private requestAuthorityFormServiceProxy: RequestAuthorityFormServiceProxy,
//         private wearHouseServiceProxy: WareHouseServiceProxy,
//         private issueRequestServiceProxy: IssueRequestServiceProxy,
//         private organizationUnitServiceProxy: OrganizationUnitServiceProxy,
//         private formBuilder: FormBuilder
//     ) {
//         super(injector);
//         this.createRequestRelease = this.formBuilder.group({
//             //IssueRequestDto
//             categoryPartNo: ['1', Validators.required],
//             requestAuthorityFormId: [0, Validators.required],
//             organizationUnitId: [0, Validators.required],
//             warehouseId: ['', Validators.required],
//             hardCopyAttachment: ['', Validators.required],
//         });
//         this.createRequestRelease.patchValue({});
//         this.btnText = 'Submit';
//         this.requestauthorityId = 0;
//     }
//     get validators() {
//         return this.createRequestRelease.controls;
//     }
//     ngOnInit(): void {
//         this.getAllAuthorityNumberDropdown();
//         this.WareHouseDropdown();
//         this.GetOrganizationUserUnit();
//     }
//     submit() {
//         let input = new CreateIssueRequestInput();
//         this.submitted = true;
//         this.issubmitted = true;
//         this.btnText = 'Submitting..';
//         if (this.createRequestRelease.invalid) {
//             this.btnText = 'Submit';
//             this.issubmitted = false;
//             return;
//         }
//         input.categoryPartNo = this.createRequestRelease.value.categoryPartNo.toString();
//         input.tenantId = this.appSession.tenantId;
//         input.organizationUnitId = Number(this.createRequestRelease.value.organizationUnitId);
//         input.hardCopyAttachment = this.createRequestRelease.value.hardCopyAttachment;
//         input.warehouseId = Number(this.createRequestRelease.value.warehouseId);
//         input.issuingDepotId = Number(this.createRequestRelease.value.warehouseId);
//         input.requestAuthorityFormId = Number(this.requestauthorityId);
//         this.issueRequestServiceProxy.create(input).subscribe((response) => {
//             if (response) {
//                 this.gridload.emit();
//                 this.reset();
//                 this.message.success('Saved successfully');
//             }
//         });
//     }
//     onChangeAuthorityNumber(event) {
//         this.authorityNumberId = event.target.value;
//     }
//     onChangeWareHouse(event) {
//         this.wareHouseId = event.target.value;
//     }
//     getAllAuthorityNumberDropdown() {
//         this.requestAuthorityFormServiceProxy
//             .getAll(undefined, this.appSession.tenantId, undefined, undefined, undefined, 0, 1000)
//             .subscribe((res) => {
//                 this.authorityNumber = res.items;
//             });
//     }
//     ChangeWarehouse(name: string) {
//         if (name == '1') {
//             this.wareHouseList = this.DepotwareHouseList;
//         } else {
//             this.wareHouseList = this.BODwarehouseList;
//         }
//     }
//     WareHouseDropdown() {
//         this.wearHouseServiceProxy
//             .getAll(
//                 this.appSession.tenantId,
//                 undefined,
//                 this.commonUtility.organizationId,
//                 undefined,
//                 undefined,
//                 0,
//                 1000
//             )
//             .subscribe((res) => {
//                 if (res.items.length > 0) {
//                     this.BODwarehouseList = [];
//                     this.DepotwareHouseList = [];
//                     for (let i = 0; i < res.items.length; i++) {
//                         if (res.items[i].isParent == false) {
//                             this.BODwarehouseList.push(res.items[i]);
//                         } else {
//                             this.DepotwareHouseList.push(res.items[i]);
//                             this.ChangeWarehouse('1');
//                         }
//                     }
//                 }
//             });
//     }
//     GetOrganizationUserUnit() {
//         this.organizationUnitList = [];

//         this.organizationUnitServiceProxy.getOrganizationUnits().subscribe((res) => {
//             if (res.items.length > 0) {
//                 for (let i = 0; i < res.items.length; i++) {
//                     this.organizationUnitList.push({ code: res.items[i].id, name: res.items[i].displayName });
//                 }
//             }

//             let record = JSON.parse(localStorage.getItem('OrganizationUnit'));
//             if (record.length > 0) {
//                 this.createRequestRelease.patchValue({
//                     organizationUnitId: record[0].id,
//                 });
//             }
//             // this.organizationUnitList.push({code:record[0].id,name:record[0].displayName})
//         });
//     }
//     close() {
//         this.reset();
//     }
//     openRequestIssuemodel(AuthprityNumber: number) {
//         this.displayResponsive = true;
//         if (AuthprityNumber > 0) {
//             this.requestauthorityId = AuthprityNumber;
//             this.createRequestRelease.patchValue({ requestAuthorityFormId: AuthprityNumber });
//             this.createRequestRelease.get('requestAuthorityFormId').disable();
//         }
//     }
//     handleFileInput(file: FileList) {
//         this.filename = file[0].name;
//         this.fileSize = Math.floor(file[0].size / 1024)
//             .toString()
//             .concat('KB');

//         // Show image preview
//         const reader = new FileReader();
//         reader.onload = (event: any) => {
//             this.fileUpload = event.target.result;
//             let file = this.fileUpload.split(',');
//             this.createRequestRelease.value.hardCopyAttachment = file[1];
//             this.createRequestRelease.get('hardCopyAttachment').setErrors(null);
//         };
//         reader.readAsDataURL(file[0]);
//     }
//     reset() {
//         this.createRequestRelease.reset();
//         this.displayResponsive = false;
//         this.filename = '';
//         this.fileSize = '';
//         this.btnText = 'Submit';
//         this.submitted = false;
//         this.createRequestRelease.patchValue({
//             categoryPartNo: 'Depot',
//         });
//         this.wareHouseId = 0;
//         this.WareHouseDropdown();
//         this.GetOrganizationUserUnit();
//         this.issubmitted = false;
//     }
// }
