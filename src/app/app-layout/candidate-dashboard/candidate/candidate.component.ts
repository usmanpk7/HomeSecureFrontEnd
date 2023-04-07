// import { Component, ElementRef, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
// import { FooterActionButton } from '@app/app-layout/indent-dashboard/model/footer-action-button';
// import { AppConsts } from '@shared/AppConsts';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { CandidateServiceProxy } from '@shared/service-proxies/service-proxies';
// import { FileDownloadService } from '@shared/utils/file-download.service';
// import { FileUpload } from 'primeng/fileupload';
// import { HttpClient } from '@angular/common/http';
// import { finalize } from 'rxjs/operators';
// import { Table } from 'primeng/table';
// import { CandidateListComponent } from './candidate-list/candidate-list.component';

// @Component({
//   selector: 'app-candidate',
//   templateUrl: './candidate.component.html',
//   styleUrls: ['./candidate.component.css']
// })
// export class CandidateComponent extends AppComponentBase implements OnInit {
//   static GridStaticInstance: CandidateComponent;
//   tab: any;
//   uploadUrl: string;
//   @ViewChild('ExcelFileUpload', { static: false }) excelFileUpload: ElementRef;
//   @ViewChild('dataTable', { static: true }) dataTable: Table;
//   @ViewChild('search') search: CandidateListComponent;
// @Output() footerOutputAction = new EventEmitter<any>();
// footerActionButton: Array<FooterActionButton>;
//   constructor(private _fileDownloadService: FileDownloadService,
//     private candidateService: CandidateServiceProxy,
//     private _httpClient: HttpClient,
//      injector: Injector) {
//       super(injector);
//       this.uploadUrl = AppConsts.remoteServiceBaseUrl + '/Candidates/ImportFromExcel';
//     CandidateComponent.GridStaticInstance = this;
//     this.tab = 1; }

//   ngOnInit(): void {
//     this.footerActionButton = [
//       new FooterActionButton('Create Store', 'createStore', 'fa fa-caret-down'),
//       new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
//       new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
//   ];
//   this.EmitFooterValue(this.footerActionButton);
//   }

//   EmitFooterValue(data: any) {
//     CandidateComponent.GridStaticInstance.footerOutputAction.emit(data);
// }
//   onTabChange(event: any) {
//     let currentTab = event.target.parentNode.id;
//     if (currentTab === 'tab1') {
//         this.tab = 1;
//         this.footerActionButton = [
//             new FooterActionButton('Create Store', 'createStore', 'fa fa-caret-down'),
//             new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
//             new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
//         ];
//     } else if (currentTab === 'tab2') {
//         this.tab = 2;
//         this.footerActionButton = [
//             new FooterActionButton('Create Store Category', 'storeCategory', 'fa fa-caret-down'),
//             new FooterActionButton('Stock Count', 'stockAuthorization', 'fa fa-caret-down'),
//             new FooterActionButton('Import', 'importAuthorization', 'fa fa-caret-down'),
//         ];
//     } else if (currentTab === 'tab3') {
//         this.tab = 3;
//         this.footerActionButton = [
//             new FooterActionButton('Create Store Type', 'storeType', 'fa fa-caret-down'),
//             new FooterActionButton('Issue Provision', 'stockIssueRequest', 'fa fa-caret-down'),
//             new FooterActionButton('Import', 'importIssueRequest', 'fa fa-caret-down'),
//         ];
//     } else if (currentTab === 'tab4') {
//         this.tab = 4;
//         this.footerActionButton = [
//             new FooterActionButton('Create Store Supplier', 'storeSupplier', 'fa fa-caret-down'),
//             new FooterActionButton('Stock Count', 'stockRelease', 'fa fa-caret-down'),
//             new FooterActionButton('Import', 'importRelease', 'fa fa-caret-down'),
//         ];
//     } else if (currentTab === 'tab5') {
//         this.tab = 5;
//         this.footerActionButton = [
//             new FooterActionButton('Create Store Manufacturer', 'storeManufacturer', 'fa fa-caret-down'),
//             new FooterActionButton('Stock Count', 'stockDispatch', 'fa fa-caret-down'),
//             new FooterActionButton('Import', 'importDispatch', 'fa fa-caret-down'),
//         ];
//     } else if (currentTab === 'tab6') {
//         this.tab = 6;
//         this.footerActionButton = [];
//     } else {
//         this.tab = 1;
//         this.footerActionButton = [
//             new FooterActionButton('Create Intent Form', 'createIntent', 'fa fa-caret-down'),
//             new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
//             new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
//         ];
//     }
//     this.EmitFooterValue(this.footerActionButton);
// }
// exportToExcel(): void {
//   //let sorting = this.primengTableHelper.getSorting(this.dataTable);
//   this.candidateService.getCandidatesToExcel(this.appSession.tenantId, undefined, undefined, undefined , undefined ,
//      undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
//     undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 0, 1000)
//       .subscribe(result => {
//           this._fileDownloadService.downloadTempFile(result);
//       });
// }

// uploadExcel(data: { files: File }): void {
//   try {
//   const formData: FormData = new FormData();
//   const file = data[0];
//   formData.append('file', file, file.name);
//   this._httpClient
//       .post<any>(this.uploadUrl, formData)
//       .pipe(finalize(() => this.excelFileUpload.nativeElement.value = ''))
//       .subscribe(response => {
//           if (response.success) {
//               this.notify.success(this.l('ImportUsersProcessStart'));
//           } else if (response.error != null) {
//               this.notify.error(this.l('ImportUsersUploadFailed'));
//           }
//       });
//     } catch (e) {
//       this.excelFileUpload.nativeElement.value = '';
//     }
// }
// onUploadExcelError(): void {
//   this.notify.error(this.l('ImportUsersUploadFailed'));
// }
// }
