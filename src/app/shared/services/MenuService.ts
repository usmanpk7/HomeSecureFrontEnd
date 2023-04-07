import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarTabModel } from '@app/model/navbarTabModel';
import { AppSessionService } from '@shared/common/session/app-session.service';
import { OrganizationUnitServiceProxy, UserServiceProxy } from '@shared/service-proxies/service-proxies';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HeaderMenuservice {
    Activebtn = 'ORDINANCE CRM';
    tab: number;
    navbarTabs: Array<NavBarTabModel>;
    appSession: AppSessionService;
    private value = new BehaviorSubject<any>(1);
    dataChanged: any = this.value.asObservable();
    constructor(
        private router: Router
        ) {


    }
     changeData(tab: any, navBartabs: Array<NavBarTabModel>) {
      this.value.next(
        {
            tab: tab,
            tabs: navBartabs
        });
    }
    ShowItemMenu(input: number) {
        if (input === 2) {
            this.Activebtn="EQIS-ORDINANCE";
            this.navbarTabs = [
                new NavBarTabModel(1, 'Dashboard', 'fa-home', '', '/home/dashboard'),
                new NavBarTabModel(3, 'Item/Store', 'fa-plus', 'store', '/home/store'),
                new NavBarTabModel(4, 'Access Control', 'fa-access', 'access', '/home/access'),
                new NavBarTabModel(5, 'Stock', 'fa-chart-pie', 'stock', '/home/stock'),
                new NavBarTabModel(6, 'Hardware', 'fa-solid fa-microchip', 'hardware', '/home/hardware'),
                new NavBarTabModel(11, 'Warehouse', 'fa-solid fa-person-military-rifle', 'warehouse', '/home/warehouse')
             ];
             this.changeData(3, this.navbarTabs);
             this.router.navigateByUrl('/home/store');
        } else if (input === 1) {
        this.navbarTabs = [
            new NavBarTabModel(1, 'Dashboard', 'fa-home', '', '/home/dashboard'),
            new NavBarTabModel(2, 'Intent', 'fa-home', 'view', '/home/indent'),
            new NavBarTabModel(7, 'Request', 'fa-check-square', 'request', ''),
            new NavBarTabModel(8, 'Tracking', 'fa-map-marker', 'tracking', ''),
            new NavBarTabModel(9, 'Approvals', 'fa-check-square', 'approval', ''),
            new NavBarTabModel(10, 'Admin', 'fa-user', 'admin', '')
         ];
         this.Activebtn="EQIS-OPAS";
         this.changeData(1 , this.navbarTabs);
       } else if (input === 3) {
        this.navbarTabs = [
            new NavBarTabModel(1, 'Dashboard', 'fa-home', '', '/home/dashboard'),
            new NavBarTabModel(12, 'Candidate', 'fa-home', 'candidate', '/home/candidate'),
            new NavBarTabModel(7, 'Request', 'fa-check-square', 'request', ''),
            new NavBarTabModel(8, 'Tracking', 'fa-map-marker', 'tracking', ''),
            new NavBarTabModel(9, 'Approvals', 'fa-check-square', 'approval', ''),
            new NavBarTabModel(10, 'Admin', 'fa-user', 'admin', '')
         ];
         this.Activebtn="EQIS-DAS";
         this.changeData(12 , this.navbarTabs);
         this.router.navigateByUrl('/home/candidate');
       }
    }
    checkRoute() {
       let tab1 = [
        new NavBarTabModel(1, 'Dashboard', 'fa-home', '', '/home/dashboard'),
        new NavBarTabModel(2, 'Intent', 'fa-home', 'view', '/home/indent'),
        new NavBarTabModel(7, 'Request', 'fa-check-square', 'request', ''),
        new NavBarTabModel(8, 'Tracking', 'fa-map-marker', 'tracking', ''),
        new NavBarTabModel(9, 'Approvals', 'fa-check-square', 'approval', ''),
        new NavBarTabModel(10, 'Admin', 'fa-user', 'admin', '')
         ];
         let tab2 = [
            new NavBarTabModel(1, 'Dashboard', 'fa-home', '', '/home/dashboard'),
            new NavBarTabModel(3, 'Item/Store', 'fa-plus', 'store', '/home/store'),
            new NavBarTabModel(4, 'Access Control', 'fa-access', 'access', '/home/access'),
            new NavBarTabModel(5, 'Stock', 'fa-chart-pie', 'stock', '/home/stock'),
            new NavBarTabModel(6, 'Hardware', 'fa-access', 'hardware', '/home/hardware'),
            new NavBarTabModel(11, 'Warehouse', 'fa-solid fa-person-military-rifle', 'warehouse', '/home/warehouse')
         ];
         let tab3 = [
            new NavBarTabModel(1, 'Dashboard', 'fa-home', '', '/home/dashboard'),
            new NavBarTabModel(12, 'Candidate', 'fa-home', 'candidate', '/home/candidate'),
            new NavBarTabModel(7, 'Request', 'fa-check-square', 'request', ''),
            new NavBarTabModel(8, 'Tracking', 'fa-map-marker', 'tracking', ''),
            new NavBarTabModel(9, 'Approvals', 'fa-check-square', 'approval', ''),
            new NavBarTabModel(10, 'Admin', 'fa-user', 'admin', '')
         ];
    if (this.router.url.match('store')) {
        this.changeData(3, tab2);
        this.Activebtn="EQIS-ORDINANCE";
    } else if (this.router.url.match('access')) {
        this.changeData(4, tab2);
        this.Activebtn="EQIS-ORDINANCE";
    } else if (this.router.url.match('stock')) {
        this.changeData(5, tab2);
        this.Activebtn="EQIS-ORDINANCE";
    } else if (this.router.url.match('stock')) {
        this.changeData(5, tab2);
        this.Activebtn="EQIS-ORDINANCE";
    } else if (this.router.url.match('hardware')) {
        this.changeData(6, tab2);
        this.Activebtn="EQIS-ORDINANCE";
    } else if (this.router.url.match('warehouse')) {
        this.changeData(11, tab2);
        this.Activebtn="EQIS-ORDINANCE";
    } else if (this.router.url.match('dashboard')) {
        this.changeData(1, tab1);
        this.Activebtn="EQIS-OPAS";
    } else if (this.router.url.match('indent')) {
        this.changeData(2, tab1);
        this.Activebtn="EQIS-OPAS";
    } else if (this.router.url.match('candidate')) {
        this.changeData(12, tab3);
        this.Activebtn="EQIS-DAS";
    }
}

}

