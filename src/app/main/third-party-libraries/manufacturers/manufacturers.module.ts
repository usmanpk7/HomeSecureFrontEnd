import { NgModule } from '@angular/core';
import { AdminSharedModule } from '@app/admin/shared/admin-shared.module';
import { AppSharedModule } from '@app/shared/app-shared.module';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
// import { ManufacturersComponent } from '@app/main/third-party-libraries/manufacturers/manufacturers.component';
// import { ManufacturersRoutingModule } from './manufacturers-routing.module';
// import { CreateOrEditManufacturerModalComponent } from './create-or-edit-manufacturer-modal.component';
import { ImpersonationService } from '@app/admin/users/impersonation.service';
import { DynamicEntityPropertyManagerModule } from '@app/shared/common/dynamic-entity-property-manager/dynamic-entity-property-manager.module';
import {NgxIntlTelInputModule} from '@node_modules/ngx-intl-tel-input';



@NgModule({
    declarations: [
        // ManufacturersComponent,
        // CreateOrEditManufacturerModalComponent
    ],
    imports: [AppSharedModule, AdminSharedModule, GooglePlaceModule, DynamicEntityPropertyManagerModule, NgxIntlTelInputModule],
    providers: [ImpersonationService]
})
export class ManufacturersModule {
}
