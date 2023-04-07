import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { DashboardCustomizationConst } from '@app/shared/common/customizable-dashboard/DashboardCustomizationConsts';
import { Router } from '@angular/router';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.less'],
    encapsulation: ViewEncapsulation.None
})

export class DashboardComponent extends AppComponentBase {
    dashboardName = DashboardCustomizationConst.dashboardNames.defaultTenantDashboard;

    constructor( private router: Router,
        injector: Injector) {
        super(injector);

       this.router.navigateByUrl('/home/dashboard');
    }
}
