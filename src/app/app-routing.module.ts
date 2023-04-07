import { ElectionGalleryDetailComponent } from './app-layout/election-gallery/election-gallery-detail/election-gallery-detail.component';
import { ElectionGalleryComponent } from './app-layout/election-gallery/election-gallery.component';
import { TenantDashboardComponent } from './../account/shared/tenantdashboard/tenant-dashboard.component';
import { IncidentDashboardComponent } from './app-layout/incident-dashboard/incident-dashboard.component';
import { NgModule } from '@angular/core';
import { NavigationEnd, RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from './shared/common/auth/auth-route-guard';
import { NotificationsComponent } from './shared/layout/notifications/notifications.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { DashboardComponent } from './app-layout/dashboard/dashboard.component';
import { DailogComponent } from './shared/custom/dailog/dailog.component';
import { ElectionMainCandidatesComponent } from './app-layout/election-main-candidates/election-main-candidates.component';
import { AssetTrackerComponent } from './app-layout/asset-tracker/asset-tracker.component';
// import { IndentDashboardComponent } from './app-layout/indent-dashboard/indent-dashboard.component';
// import { IntentViewComponent } from './app-layout/indent-dashboard/intent-view/intent-view.component';
// import { CandidateDashboardComponent } from './app-layout/candidate-dashboard/candidate-dashboard.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'app',
                component: AppComponent,
                canActivate: [AppRouteGuard],
                canActivateChild: [AppRouteGuard],
                children: [
                    {
                        path: '',
                        children: [

                            { path: '', redirectTo: '/app/main/dashboard', pathMatch: 'full' }
                        ]
                    },
                    {
                        path: 'main',
                        loadChildren: () => import('app/main/main.module').then(m => m.MainModule), //Lazy load main module
                        data: { preload: true }
                    },
                    {
                        path: 'admin',
                        loadChildren: () => import('app/admin/admin.module').then(m => m.AdminModule), //Lazy load admin module
                        data: { preload: true },
                        canLoad: [AppRouteGuard]
                    },
                    {
                        path: '**', redirectTo: 'notifications'
                    }
                ]
            },
            {
                path: 'home', component: AppLayoutComponent,
                children:
                  [
                    { path: 'dashboard', component: DashboardComponent },
                    { path: 'dailog', component: DailogComponent },
                    {
                        path: 'login/attempts',
                        loadChildren: () => import('./app-layout/login-attempts/login-attempts.module').then(m => m.LoginAttemptsModule),
                        data: {  }
                    },
                    { path: 'notifications', component: NotificationsComponent },
                    { path: 'asset-tracker', component: AssetTrackerComponent },
                    { path: 'incident-dashboard', component: IncidentDashboardComponent },
                    { path: 'election-gallery', component: ElectionGalleryComponent },
                    { path: 'election-candidates', component: ElectionMainCandidatesComponent },
                    { path: 'election-gallery-detail/:id/:mediaSource', component: ElectionGalleryDetailComponent },
                    // { path: 'indent', component: IndentDashboardComponent },
                    // { path: 'intent-view', component: IntentViewComponent },
                    // { path: 'store', component: StoreDashboardComponent },
                    // { path: 'access', component: AccessControlDashboardComponent },
                    // { path: 'stock', component: StockComponent },
                    // { path: 'hardware', component: HardwareDashboardComponent},
                    // { path: 'warehouse', component: WarehouseDashboardComponent},
                    // { path: 'candidate', component: CandidateDashboardComponent}
                  ]
              }
        ])
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
    constructor(
        private router: Router,
        private spinnerService: NgxSpinnerService
    ) {
        router.events.subscribe((event) => {

            if (event instanceof RouteConfigLoadStart) {
                spinnerService.show();
            }

            if (event instanceof RouteConfigLoadEnd) {
                spinnerService.hide();
            }

            if (event instanceof NavigationEnd) {
                document.querySelector('meta[property=og\\:url').setAttribute('content', window.location.href);
            }
        });
    }
}
