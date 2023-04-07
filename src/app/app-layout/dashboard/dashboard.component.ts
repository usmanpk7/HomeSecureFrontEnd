import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, Injector, OnInit } from '@angular/core';
import { SharedGridColumnModel } from '@app/shared/custom/shared-grid/shared-grid.model';
import { DataSharedService } from '@app/shared/services/data-shared-service';
import { AppConsts } from '@shared/AppConsts';
import { AppComponentBase } from '@shared/common/app-component-base';
import { EncryptionDecryptionService } from '@shared/encryption-decryption.service';
import { ProfileServiceProxy } from '@shared/service-proxies/service-proxies';
import { DateTime } from 'luxon';
import { from } from 'rxjs';
// import { AssetMonitoringSignalrService } from './asset-monitoring/asset-monitoring-signalr.service';
import { AssetMonitoringModel } from './asset-monitoring/asset-monitoring.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends AppComponentBase implements OnInit {
    getCriticalLowItemList: any;
    getCriticalLowItemList1: any;
    columns: Array<SharedGridColumnModel>;
    data: Array<AssetMonitoringModel>;
    registerDate = DateTime.now();
    updateDate = DateTime.now();
    itemPostionsAnalyticsDTO: any;
    MissingItem: boolean = false;
    DisplacedItem: boolean = false;
    LoadingforCards: boolean = false;
    value: any;
    totalApproved: number;
    totalNotApproved: number;
    totalIssued: number;
    totalReleased: number;
    totalDelivered: number;
    electionPostId: number;
    electionPollingUnitId: number;
    show = true;
    buttonName = 'Show Analytics Chart';
    warehouselist: Array<any>;
    organizationlist: Array<any>;
    intentAnalyticsResult: any;
    organizationUnitId: any;
    fromDate: DateTime;
    toDate: DateTime;
    warehouseId: any;
    ///slider
    responsiveOptions: any;
    encryptionKeys: any;
    profilePicture = AppConsts.appBaseUrl + '/assets/common/images/default-profile-picture.png';
    shownLoginName = '';
    tenancyName = '';
    userName = '';
    maximize = false;
    minimize = true;


    constructor(
        injector: Injector,
        private http: HttpClient,
        private _profileServiceProxy: ProfileServiceProxy
    ) {
        super(injector);
        this.columns = [
            // new SharedGridColumnModel('SKU'),
            new SharedGridColumnModel('Device Name'),
            new SharedGridColumnModel('Varity Item Name'),
            new SharedGridColumnModel('Wearhouse'),
            new SharedGridColumnModel('Activity Date/Time'),
            new SharedGridColumnModel('VARIETYITEM SERIAL NUMBER, ACTIVITY TYPE'),
            // new SharedGridColumnModel('Hardware Buffering'),
        ];



        //slider
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,

                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,

                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,

                numScroll: 1
            }
        ];
        this.value = [
            {
                UID: 13123123,
                Name: 'Jawad',
                Warehouse: 'COYD/SHED',
                DISPLACEDAT: 'JAN 08, 2022. 18:09:09',
                LASTDETECTED: 'JAN 08, 2022. 18:09:09',
                DETECTEDAT: 'JAN 08, 2022. 18:09:09'

            }
        ];

    }

    ngOnInit(): void {
        //analytics
        this.getProfilePicture();
        this.setCurrentLoginInformations();
    }

    //Analytics functions
    geIntentAnalytics() {
    }
    toggle() {
        this.show = !this.show;
        if (this.show) {
            this.buttonName = 'Hide Analytics Chart';
        } else {
        } this.buttonName = 'Show Analytics Chart';
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

    // getTextCounters() {
    //     this._IntentRequestFormServiceProxy.getIndentProcessAnalytics(new DateTime(),
    //         new DateTime(), 0, 0, 0, this.appSession.userId)
    //         .subscribe(data => {
    //           //  this.TotalIndentsCount = data.totalIntentRequest;
    //         });
    // }
    // getItemCategory(fromDate: any, toDate: any, organizationUnit: any) {
    //     // this._itemCategoryServiceProxy.getItemCatergoryAnalytics(fromDate, toDate, organizationUnit, this.appSession.tenantId).subscribe((data: ItemCatergoryAnalyticsDto) => {
    //     //     this.CategoryList = data.itemCategoryAndRequestForms;
    //     //     this.totalApproved = this.CategoryList.map(x => x.totalItemCategoryIntentRequestFormSubmittions).
    //     //         reduce((sum, current) => sum + current, 0);

    //     //     this.totalNotApproved = this.CategoryList.map(x => x.totalItemCategoryIssueRequests).
    //     //         reduce((sum, current) => sum + current, 0);

    //     //     this.totalIssued = this.CategoryList.map(x => x.totalItemCategoryRequestAuthorityForms).
    //     //         reduce((sum, current) => sum + current, 0);

    //     //     this.totalReleased = this.CategoryList.map(x => x.totalItemCategoryStoreReleases).
    //     //         reduce((sum, current) => sum + current, 0);

    //     //     this.totalDelivered = this.CategoryList.map(x => x.totalItemCategoryStoreDeliveryReceipts).
    //     //         reduce((sum, current) => sum + current, 0);
    //     // });
    // }
    // getItemAnalytics() {
    //     this.DisplacedItem = true;
    //     this.MissingItem = true;
    //     this.itemService.getItemPositionAnalytics(this.appSession.tenantId, undefined).subscribe(data => {
    //         if (data) {
    //             this.itemPostionsAnalyticsDTO = data;
    //             if (this.itemPostionsAnalyticsDTO.totalItemsDisplaceDetails.length > 0) {
    //                 this.DisplacedItem = false;
    //             } else {
    //                 this.DisplacedItem = false;
    //             }
    //             if (this.itemPostionsAnalyticsDTO.missingItemDetails.length > 0) {
    //                 this.MissingItem = false;
    //             } else {
    //                 this.MissingItem = false;
    //             }
    //         }
    //     });
    // }


    ToggleDiv() {
        this.maximize = !this.maximize;
        this.minimize = !this.minimize;
    }


}
