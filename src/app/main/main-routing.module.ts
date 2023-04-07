import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                children: [
                    {
                        path: 'dashboard',
                        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
                        data: { permission: 'Pages.Tenant.Dashboard' }
                    },
                    {
                        path: 'third-party-libraries/manufacturers',
                        loadChildren: () => import('./third-party-libraries/manufacturers/manufacturers.module').then(m => m.ManufacturersModule),
                        data: { permission: '' }
                    },
                    {
                        path: 'third-party-libraries/suppliers',
                        loadChildren: () => import('./third-party-libraries/suppliers/suppliers.module').then(m => m.SuppliersModule),
                        data: { permission: '' }
                    },
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: '**', redirectTo: 'dashboard' }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule { }
