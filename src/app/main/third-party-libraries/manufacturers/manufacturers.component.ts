// import { Component, Injector, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { appModuleAnimation } from '@shared/animations/routerTransition';
// import { AppComponentBase } from '@shared/common/app-component-base';
// // import {
// //     ManufacturerDto,
// //     ManufacturerServiceProxy,
// // } from '@shared/service-proxies/service-proxies';
// import { FileDownloadService } from '@shared/utils/file-download.service';
// import { LazyLoadEvent } from 'primeng/api';
// import { Paginator } from 'primeng/paginator';
// import { Table } from 'primeng/table';
// import { CreateOrEditManufacturerModalComponent } from './create-or-edit-manufacturer-modal.component';
// import { HttpClient } from '@angular/common/http';
// import { FileUpload } from 'primeng/fileupload';
// import { finalize } from 'rxjs/operators';
// import { PermissionTreeModalComponent } from '../../../admin/shared/permission-tree-modal.component';
// import { LocalStorageService } from '@shared/utils/local-storage.service';
// import { DynamicEntityPropertyManagerComponent } from '@app/shared/common/dynamic-entity-property-manager/dynamic-entity-property-manager.component';

// @Component({
//     templateUrl: './manufacturers.component.html',
//     encapsulation: ViewEncapsulation.None,
//     animations: [appModuleAnimation()]
// })
// export class ManufacturersComponent extends AppComponentBase implements AfterViewInit {

//     @ViewChild('createOrEditManufacturerModal', { static: true }) createOrEditManufacturerModal: CreateOrEditManufacturerModalComponent;
//     @ViewChild('dataTable', { static: true }) dataTable: Table;
//     @ViewChild('paginator', { static: true }) paginator: Paginator;
//     @ViewChild('ExcelFileUpload', { static: false }) excelFileUpload: FileUpload;
//     @ViewChild('permissionFilterTreeModal', { static: true }) permissionFilterTreeModal: PermissionTreeModalComponent;
//     @ViewChild('dynamicEntityPropertyManager', { static: true }) dynamicEntityPropertyManager: DynamicEntityPropertyManagerComponent;

//     uploadUrl: string;

//     //Filters
//     role = '';

//     constructor(
//         injector: Injector,
//         // private _manufacturerServiceProxy: ManufacturerServiceProxy,
//         private _fileDownloadService: FileDownloadService,
//         private _activatedRoute: ActivatedRoute,
//         private _httpClient: HttpClient,
//         private _localStorageService: LocalStorageService
//     ) {
//         super(injector);
//     }

//     ngAfterViewInit(): void {
//         this.primengTableHelper.adjustScroll(this.dataTable);
//     }

//     getManufacturers(event?: LazyLoadEvent) {
//         if (this.primengTableHelper.shouldResetPaging(event)) {
//             this.paginator.changePage(0);

//             return;
//         }

//         this.primengTableHelper.showLoadingIndicator();

//         // this._manufacturerServiceProxy.getAll(
//         //     this.primengTableHelper.getSorting(this.dataTable),
//         //     this.primengTableHelper.getSkipCount(this.paginator, event),
//         //     this.primengTableHelper.getMaxResultCount(this.paginator, event)
//         // ).pipe(finalize(() => this.primengTableHelper.hideLoadingIndicator())).subscribe(result => {
//         //     this.primengTableHelper.totalRecordsCount = result.totalCount;
//         //     this.primengTableHelper.records = result.items;
//         //     this.primengTableHelper.hideLoadingIndicator();
//         // });
//     }

//     reloadPage(): void {
//         this.paginator.changePage(this.paginator.getPage());
//     }

//     createManufacturer(): void {
//         this.createOrEditManufacturerModal.show();
//     }

//     deleteManufacturer(manufacturer: ManufacturerDto): void {
//         this.message.confirm(
//             this.l('ManufacturerDeleteWarningMessage', manufacturer.name),
//             this.l('AreYouSure'),
//             (isConfirmed) => {
//                 if (isConfirmed) {
//                     this._manufacturerServiceProxy.delete(manufacturer.id)
//                         .subscribe(() => {
//                             this.reloadPage();
//                             this.notify.success(this.l('SuccessfullyDeleted'));
//                         });
//                 }
//             }
//         );
//     }

// }
