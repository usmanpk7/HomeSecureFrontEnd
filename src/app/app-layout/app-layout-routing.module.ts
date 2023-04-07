import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {
    path:"custom-layout/dashbard", component: DashboardComponent
  }
//   ,  {
//     path:"sidenave", component: SidenavComponent
//   }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
