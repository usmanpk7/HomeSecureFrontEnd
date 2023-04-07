import { NgModule } from '@angular/core';
import { TenantChangeComponent } from '@account/shared/tenant-change.component';
import { TenantChangeModalComponent } from '@account/shared/tenant-change-modal.component';
import { AppSharedModule } from '@app/shared/app-shared.module';
import { TenantDashboardComponent } from './tenantdashboard/tenant-dashboard.component';

@NgModule({
    imports: [AppSharedModule],
    declarations: [TenantChangeComponent, TenantChangeModalComponent, TenantDashboardComponent],
    exports: [TenantChangeComponent, TenantChangeModalComponent, TenantDashboardComponent],
})
export class AccountSharedModule {}

