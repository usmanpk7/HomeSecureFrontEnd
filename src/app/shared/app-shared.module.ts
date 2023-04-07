﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@metronic/app/core/core.module';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { UtilsModule } from '@shared/utils/utils.module';
import { TextMaskModule } from 'angular2-text-mask';
import { FileUploadModule } from 'ng2-file-upload';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ImageCropperModule } from 'ngx-image-cropper';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { AppCommonModule } from './common/app-common.module';
import { ThemesLayoutBaseComponent } from './layout/themes/themes-layout-base.component';
import { EqisTextCardComponent } from './custom/eqis-text-card/eqis-text-card.component';
import { DailogComponent } from './custom/dailog/dailog.component';
import { SharedGridComponent } from './custom/shared-grid/shared-grid.component';
import { AppBsModalModule } from '@shared/common/appBsModal/app-bs-modal.module';
import { ChartsModule } from 'ng2-charts';
import { EqisChartComponent } from './custom/eqis-chart/eqis-chart.component';
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { LoadingDirective } from './directives/loading.directive';;
import { EqisTextCardDetailComponent } from './custom/eqis-text-card-detail/eqis-text-card-detail.component'
const imports = [
    DialogModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ModalModule,
    TabsModule,
    BsDropdownModule,
    PopoverModule,
    BsDatepickerModule,
    AppCommonModule,
    FileUploadModule,
    AppRoutingModule,
    UtilsModule,
    ServiceProxyModule,
    TableModule,
    PaginatorModule,
    ProgressBarModule,
    PerfectScrollbarModule,
    CoreModule,
    TextMaskModule,
    ImageCropperModule,
    AutoCompleteModule,
    NgxSpinnerModule,
    AppBsModalModule,
    ChartsModule,
    ChartModule,

];

@NgModule({
    imports: [...imports],
    exports: [...imports, EqisChartComponent, DailogComponent,LoadingDirective],
    declarations: [
        ThemesLayoutBaseComponent,
        SharedGridComponent,
        EqisChartComponent,
        DailogComponent,
        LoadingDirective,


    ]
})
export class AppSharedModule {}
