import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
import { EqisDropDownModel } from '@app/shared/custom/eqis-dropdown/eqis-dropdown.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateTime } from 'luxon';
import { forEach } from 'lodash-es';
import { AppSessionService } from '@shared/common/session/app-session.service';
import { SharedGridColumnModel } from '@app/shared/custom/shared-grid/shared-grid.model';
import { AssetMonitoringModel } from '../dashboard/asset-monitoring/asset-monitoring.model';
import { IFormattedUserNotification, UserNotificationHelper } from '@app/shared/layout/notifications/UserNotificationHelper';
import { forEach as _forEach } from 'lodash-es';
import { DateMarker } from '@fullcalendar/core';
import { DateTimeService } from '@app/shared/common/timing/date-time.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DataSharedService } from '@app/shared/services/data-shared-service';
import { HeaderMenuservice } from '@app/shared/services/MenuService';
import { NavBarTabModel } from '@app/model/navbarTabModel';
import { AppComponentBase } from '@shared/common/app-component-base';
import { AppAuthService } from '@app/shared/common/auth/app-auth.service';
import {NotificationServiceProxy, OrganizationUnitServiceProxy, UserNotification, UserServiceProxy } from '@shared/service-proxies/service-proxies';
import { AppConsts } from '@shared/AppConsts';
import { ProfileServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends AppComponentBase implements OnInit {
    notifications: IFormattedUserNotification[] = [];
    range: any;
    isAct = false;
    btnText: any;
    thumb: any;
    track: any;
    vouchers: any = [];
    voucherId: any;
    enumIntentReason: any;
    intentReasonText: any;
    intentReasonId: any;
    intentItems: any;
    filename: any;
    fileUpload: any;
    intentItemsbak: any;
    voucherTypeId: any;
    appSession: AppSessionService;
    @ViewChild('modalCreate', { static: true }) modalCreate: DailogComponent;
    requestDropDownData: Array<EqisDropDownModel>;
    // analytics
    organizationUnitId: any;
    organizationUnits: any;
    IntentClass = 1;
    Priority = 1;
    Sorting = '';
    SkipCount: 0;
    fromDate: Date;
    toDate: any;
    MaxResultCount: 10;
    TotalIndentsCount: number;
    intentAnalyticsResult: any;
    columns: Array<SharedGridColumnModel>;
    // data: Array<AssetMonitoringModel>;
    warehouses: any;
    warehouseId: any;
    filter: number;
    // analytics end
    loading = true;
    tab = 1;
    dateRangeTitle: string;
    navbarTabs: Array<NavBarTabModel>;
    profilePicture = AppConsts.appBaseUrl + '/assets/common/images/default-profile-picture.png';
    shownLoginName = '';
    tenancyName = '';
    userName = '';
    constructor(
        private _userNotificationHelper: UserNotificationHelper,
        private _router: Router,
        public _headerMenuservice: HeaderMenuservice,
        private dataSharedService: DataSharedService,
        private datetimeservice: DateTimeService,
        private _authService: AppAuthService,
        private _profileServiceProxy: ProfileServiceProxy,
        injector: Injector) {
            super(injector);
                    this.requestDropDownData = [
            new EqisDropDownModel('Today', 0),
            new EqisDropDownModel('Weekly', 7),
            new EqisDropDownModel('Month', 30),
            new EqisDropDownModel('Three Months', 90),
            new EqisDropDownModel('Six Months', 180),
            new EqisDropDownModel('Yearly', 365)
        ];
       this.dateRangeTitle = this.requestDropDownData[0].text;
        this.appSession = injector.get(AppSessionService);

        //analytics
        this.TotalIndentsCount = 0;
        this.organizationUnitId = 0;
        this.organizationUnits = [];
        this.warehouseId = 0;
        this.fromDate = new Date();
        this.toDate = new Date();
        this.filter = 0;
        this.intentAnalyticsResult = {
            totalSubmittedRequestForm: 0,
            totalWaitingApproval: 0,
            totalApproved: 0,
            totalRejected: 0,
            totalMyArroval: 0
        };
       this._headerMenuservice.dataChanged.subscribe(changed => {
        this.tab = changed.tab;
       this.navbarTabs = changed.tabs;
     });
     this._headerMenuservice.checkRoute();
        //end
    }
    requestItemClick(text: string, route: string) {

        if (text === '') {
            this._headerMenuservice.Activebtn = 'EQIS-OPAS';
            this._headerMenuservice.ShowItemMenu(1);
            this.tab = 1;
        } else if (text === 'view') {
            this.tab = 2;
        } else if (text === 'store') {
            this.tab = 3;
            this._headerMenuservice.ShowItemMenu(2);
            this._headerMenuservice.Activebtn = 'EQIS-ORDINANCE';
        } else if (text === 'access') {
            this.tab = 4;
        } else if (text === 'stock') {
            this.tab = 5;
        } else if (text === 'hardware') {
            this.tab = 6;
        } else if (text === 'warehouse') {
         this.tab = 11;
        }  else if (text === 'candidate') {
            this.tab = 12;
            this._headerMenuservice.Activebtn="EQIS-OPAS";
            this._headerMenuservice.ShowItemMenu(3);
        }
        this._router.navigate([route]);
    }

    ngOnInit(): void {

        this.getProfilePicture();
        this.setCurrentLoginInformations();
        // this.loadNotifications();
        // this.getAllWarehouse();
        // this.getAllOrginationUnits();
        this.onItemChange(this.requestDropDownData[1]);
        this.emitShareData();
    }
    onItemChange(item: EqisDropDownModel) {
        let todayDate = new Date();
        const days = todayDate.getDate() - item.value;
        this.fromDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), days);
        this.dateRangeTitle = item.text;
        this.toDate = todayDate;
        this.emitShareData();
    }
    onChange(event) {
        this.filter = 1;
        if (event.target.name === 'organizationUnits') {
            this.organizationUnitId = event.target.value;
        } else if (event.target.name === 'warehouse') {
            this.warehouseId = event.target.value;
        } else if (event.target.name === 'fromDate') {
            this.fromDate = new Date(event.target.value);
        } else if (event.target.name === 'toDate') {
            this.toDate = new Date(event.target.value);
        } else if (event.target.name === 'filter') {
            this.warehouseId = 0;
            this.organizationUnitId = 0;
            this.toDate = new Date();
            this.fromDate = new Date();
        }
        this.emitShareData();
    }
    // loadNotifications(): void {
    //     this._notificationService.getUserNotifications(undefined, undefined, undefined, 3, 0).subscribe(result => {
    //         this.notifications = [];
    //         _forEach(result.items, (item: UserNotification) => {

    //             this.notifications.push(this._userNotificationHelper.format(<any>this._userNotificationHelper.CheckEntityNotification(item)));
    //         });
    //     });
    // }
    //analytics end

    emitShareData() {
        let organizationUnit;
        let warehouse;
        if (Number(this.organizationUnitId) !== 0  ) {
              organizationUnit = this.organizationUnitId;
              if (this.warehouseId === 0) {
              warehouse = this.warehouseId;
            }
        }
        let fromdatetime   = this.datetimeservice.toUtcDate(this.fromDate);
        let todatetime   = this.datetimeservice.toUtcDate(this.toDate);
        let shareData = {
        fromDate: fromdatetime,
        toDate: todatetime,
        organizationUnit: organizationUnit,
        warehouse: warehouse
        };
        this.dataSharedService.changeData(shareData);
    }

    setCurrentLoginInformations(): void {
        this.shownLoginName = this.appSession.getShownLoginName();
        this.tenancyName = this.appSession.tenancyName;
        this.userName = this.appSession.user.userName;
    }

    getProfilePicture(): void {
        this._profileServiceProxy.getProfilePicture().subscribe(result => {
            if (result && result.profilePicture) {
                this.profilePicture = 'data:image/jpeg;base64,' + result.profilePicture;
            }
        });
    }

    logout(): void {
        this._authService.logout();
    }
}
