// import { Component, Injector, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// import { appModuleAnimation } from '@shared/animations/routerTransition';
// import { AppComponentBase } from '@shared/common/app-component-base';

// import { FileDownloadService } from '@shared/utils/file-download.service';
// import { LazyLoadEvent } from 'primeng/api';
// import { Paginator } from 'primeng/paginator';
// import { Table } from 'primeng/table';

// import { HttpClient } from '@angular/common/http';
// import { finalize } from 'rxjs/operators';
// import { LocalStorageService } from '@shared/utils/local-storage.service';
// import { CreateOrEditSupplierModalComponent } from './create-or-edit-supplier-modal.component';
// import { SupplierServiceProxy, SupplierDto } from '@shared/service-proxies/service-proxies';

// @Component({
//     templateUrl: './suppliers.component.html',
//     encapsulation: ViewEncapsulation.None,
//     animations: [appModuleAnimation()]
// })
// export class SuppliersComponent extends AppComponentBase implements AfterViewInit {

//     @ViewChild('createOrEditSupplierModal', { static: true }) createOrEditSupplierModal: CreateOrEditSupplierModalComponent;
//     @ViewChild('dataTable', { static: true }) dataTable: Table;
//     @ViewChild('paginator', { static: true }) paginator: Paginator;

//     uploadUrl: string;

//     //Filters
//     advancedFiltersAreShown = false;
//     filterText = '';
//     role = '';

//     constructor(
//         injector: Injector,
//         private _supplierServiceProxy: SupplierServiceProxy,
//         private _fileDownloadService: FileDownloadService,
//         private _activatedRoute: ActivatedRoute,
//         private _httpClient: HttpClient,
//         private _localStorageService: LocalStorageService
//     ) {
//         super(injector);
//         this.filterText = this._activatedRoute.snapshot.queryParams['filterText'] || '';
//     }

//     ngAfterViewInit(): void {
//         this.primengTableHelper.adjustScroll(this.dataTable);
//     }

//     getSuppliers(event?: LazyLoadEvent) {
//         if (this.primengTableHelper.shouldResetPaging(event)) {
//             this.paginator.changePage(0);

//             return;
//         }

//         this.primengTableHelper.showLoadingIndicator();

//         // this._supplierServiceProxy.getAll(abp.session.tenantId,
//         //     this.primengTableHelper.getSorting(this.dataTable),
//         //     this.primengTableHelper.getSkipCount(this.paginator, event),
//         //     this.primengTableHelper.getMaxResultCount(this.paginator, event),
//         // ).pipe(finalize(() => this.primengTableHelper.hideLoadingIndicator())).subscribe(result => {
//         //     this.primengTableHelper.totalRecordsCount = result.totalCount;
//         //     this.primengTableHelper.records = result.items;
//         //     this.primengTableHelper.hideLoadingIndicator();
//         // });
//     }

//     reloadPage(): void {
//         this.paginator.changePage(this.paginator.getPage());
//     }

//     createSupplier(): void {
//         this.createOrEditSupplierModal.show();
//     }

//     deleteSupplier(supplier: SupplierDto): void {
//         this.message.confirm(
//             this.l('SupplierDeleteWarningMessage', supplier.name),
//             this.l('AreYouSure'),
//             (isConfirmed) => {
//                 if (isConfirmed) {
//                     this._supplierServiceProxy.delete(supplier.id)
//                         .subscribe(() => {
//                             this.reloadPage();
//                             this.notify.success(this.l('SuccessfullyDeleted'));
//                         });
//                 }
//             }
//         );
//     }

// }
