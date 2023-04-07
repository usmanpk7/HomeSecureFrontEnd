import { NgModule } from '@angular/core';
import { AdminSharedModule } from '@app/admin/shared/admin-shared.module';
import { AppSharedModule } from '@app/shared/app-shared.module';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
// import { SuppliersComponent } from '@app/main/third-party-libraries/suppliers/suppliers.component';
// import { SuppliersRoutingModule } from './suppliers-routing.module';
// import {CreateOrEditSupplierModalComponent} from '@app/main/third-party-libraries/suppliers/create-or-edit-supplier-modal.component';
import {NgxIntlTelInputModule} from '@node_modules/ngx-intl-tel-input';



@NgModule({
    declarations: [

    ],
    imports: [AppSharedModule, AdminSharedModule, GooglePlaceModule, NgxIntlTelInputModule],
})
export class SuppliersModule {
}
