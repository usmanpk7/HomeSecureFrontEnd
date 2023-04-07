import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AppLayoutComponent } from './app-layout.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
import { AppSharedModule } from '@app/shared/app-shared.module';
import { EqisDropDownComponent as EpisDropDownComponent } from '@app/shared/custom/eqis-dropdown/eqis-dropdown.component';
import { EqisImageCardComponent as EpisImageCardComponent } from '@app/shared/custom/eqis-image-card/eqis-image-card.component';
import { EqisTextCardComponent } from '@app/shared/custom/eqis-text-card/eqis-text-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AssetMonitoringGridComponent } from './dashboard/asset-monitoring/asset-monitoring-grid.component';
 import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppCommonModule } from '@app/shared/common/app-common.module';
import { UtilsModule } from '@shared/utils/utils.module';
import { HeaderUserMenuComponent } from './header-user-menu/header-user-menu.component';
import { AppBsModalModule } from '@shared/common/appBsModal/app-bs-modal.module';
import { MySettingsModalComponent } from '@app/shared/layout/profile/my-settings-modal.component';
import { AppModule } from '@app/app.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxSpinnerModule, NgxSpinnerComponent } from 'ngx-spinner';
import { SmsVerificationModalComponent } from '@app/shared/layout/profile/sms-verification-modal.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LinkedAccountsModalComponent } from '@app/shared/layout/linked-accounts-modal.component';
import { ChangePasswordModalComponent } from '@app/shared/layout/profile/change-password-modal.component';
import { ChangeProfilePictureModalComponent } from '@app/shared/layout/profile/change-profile-picture-modal.component';
import { CreateNewUserDelegationModalComponent } from '@app/shared/layout/create-new-user-delegation-modal.component';
import { LinkAccountModalComponent } from '@app/shared/layout/link-account-modal.component';
import { NotificationsComponent } from '@app/shared/layout/notifications/notifications.component';
import { UserDelegationsModalComponent } from '@app/shared/layout/user-delegations-modal.component';
import { ChatFriendListItemComponent } from '@app/shared/layout/chat/chat-friend-list-item.component';
import { ChatMessageComponent } from '@app/shared/layout/chat/chat-message.component';
import { NotificationSettingsModalComponent } from '@app/shared/layout/notifications/notification-settings-modal.component';
import { ImpersonationService } from '@app/admin/users/impersonation.service';
import { LinkedAccountService } from '@app/shared/layout/linked-account.service';
import { UserNotificationHelper } from '@app/shared/layout/notifications/UserNotificationHelper';
import { ChatSignalrService } from '@app/shared/layout/chat/chat-signalr.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ChatBarComponent } from '@app/shared/layout/chat/chat-bar.component';
import { CustomHeaderNotificationComponent } from './custom-header-notification/custom-header-notification.component';
// import { IndentDashboardComponent } from './indent-dashboard/indent-dashboard.component';
// import { AssetMonitoringSignalrService } from './dashboard/asset-monitoring/asset-monitoring-signalr.service';
// import { CreateIntentFormComponent } from './indent-dashboard/create-intent-form/create-intent-form.component';
// import { CreateStoreComponent } from './indent-dashboard/StoreReleaseDispatch/create-store/create-store.component';
import { CustomHeaderNotificationSignalrService } from './custom-header-notification/custom-header-notification-signalr.service';
// import { AuthorityNumberModelComponent } from './authority-number/authority-number-model/authority-number-model.component';
import {ChartModule} from 'primeng/chart';
import { ProfileAndWarehouseComponent } from './dashboard/profile-and-warehouse-chart/profile-and-warehouse-chart.component';
// import { RequireAttentionComponent } from './indent-dashboard/require-attention/require-attention.component';
import { DialogModule } from 'primeng/dialog';

import {RadioButtonModule} from 'primeng/radiobutton';
// import { CreateIssueRequestComponent } from './indent-dashboard/issue-request/create-issue-request.component';
// import { CummulativeChatComponent } from '@app/shared/layout/chat/cummulative-chat/cummulative-chat.component';
// import { AuthorizationListComponent } from './indent-dashboard/authorization-list/authorization-list.component';
// import { CreateDispatchComponent } from './indent-dashboard/store-dispatch/create-dispatch.component';
// import { IntentViewComponent } from './indent-dashboard/intent-view/intent-view.component';
import { LoadingDirective } from '@app/shared/directives/loading.directive';
import {KnobModule} from 'primeng/knob';
import { DividerModule } from 'primeng/divider';
// import { IssueProvisiosComponent } from './IssueProvisios/IssueProvisios.component';
import {CarouselModule} from 'primeng/carousel';
import { ProductService } from './testService';
// import { ReleaseOrderListComponent } from './indent-dashboard/release-order-list/release-order-list.component';
// import { IssueOrderListComponent } from './indent-dashboard/issue-order-list/issue-order-list.component';
// import { AddPopupModelComponent } from './indent-dashboard/Add-popup-Model/Add-popup-Model.component';
// import { StoreDashboardComponent } from './store-dashboard/store-dashboard.component';
// import { StoreListComponent } from './store-dashboard/store/store-list/store-list.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {CheckboxModule} from 'primeng/checkbox';
// import { StoreCategoryListComponent } from './store-dashboard/store/store-category-list/store-category-list.component';
// import { StoreTypesListComponent } from './store-dashboard/store/store-types-list/store-types-list.component';
// import { StoreSupplierListComponent } from './store-dashboard/store/store-supplier-list/store-supplier-list.component';
// import { StoreManufacturerListComponent } from './store-dashboard/store/store-manufacturer-list/store-manufacturer-list.component';
// import { CreateStoreFormComponent } from './store-dashboard/create-store-form/create-store-form.component';
// import { AddStoreCategoryComponent } from './store-dashboard/create-store-category/add-store-category.component';
// import { AddStoreTypeComponent } from './store-dashboard/create-store-type/add-store-type.component';
// import { CreateSupplierComponent } from './store-dashboard/create-supplier/create-supplier.component';
// import { CreateManufacturerFormComponent } from './store-dashboard/create-manufacturer-form/create-manufacturer-form.component';
import { environment } from 'environments/environment';
import { AgmCoreModule } from '@agm/core';
// import { CreateVarrietyBatchComponent } from './store-dashboard/create-varriety-batch/create-varriety-batch.component';
// import { StoreComponent } from './store-dashboard/store/store.component';
// import { StoreVarietyBatchComponent } from './store-dashboard/store-variety-batch/store-variety-batch.component';
// import { BatchListComponent } from './store-dashboard/store-variety-batch/batch-list/batch-list.component';
// import { VarietyListComponent } from './store-dashboard/store-variety-batch/variety-list/variety-list.component';
// import { VarietyCategoryListComponent } from './store-dashboard/store-variety-batch/variety-category-list/variety-category-list.component';
// import { AccessControlDashboardComponent } from './access-control-dashboard/access-control-dashboard.component';
// import { PersonalAccessComponent } from './access-control-dashboard/personal-access/personal-access.component';
// import { AllListComponent } from './access-control-dashboard/all-list/all-list.component';
// import { StockListComponent } from './stock/stock-list/stock-list.component';
// import { StockComponent } from './stock/stock.component';
// import { HardwareDashboardComponent } from './hardware-dashboard/hardware-dashboard.component';
// import { DeviceListComponent } from './hardware-dashboard/device/device-list/device-list.component';
// import { DeviceModelComponent } from './hardware-dashboard/device/device-model/device-model.component';
// import { DeviceAntennaComponent } from './hardware-dashboard/device/device-antenna/device-antenna.component';
// import { CreateDeviceFormComponent } from './hardware-dashboard/create-device-form/create-device-form.component';
// import { AccessRequiredAttentionComponent } from './access-control-dashboard/access-required-attention/access-required-attention.component';
// import { CreateModalFormComponent } from './hardware-dashboard/create-modal-form/create-modal-form.component';
// import { CreateAntennaFormComponent } from './hardware-dashboard/create-antenna-form/create-antenna-form.component';
// import { CreateVarrietyComponent } from './store-dashboard/create-varriety/create-varriety.component';
// import { CreateVarrietyCategoryComponent } from './store-dashboard/create-varriety-category/create-varriety-category.component';
import { DataSharedService } from '@app/shared/services/data-shared-service';
// import { AccessLockCardComponent } from './access-control-dashboard/access-lock-card/access-lock-card.component';
import { CommonUtilityService } from '@shared/common/commonUtility.service';
// import { WarehouseComponent } from './warehouse-dashboard/warehouse/warehouse.component';
// import { WarehouseListComponent } from './warehouse-dashboard/warehouse/warehouse-list/warehouse-list.component';

import { AntennaWarehouseComponent } from './hardware-dashboard/antenna-warehouse/antenna-warehouse.component';
// import { AntennaWarehouseListComponent } from './hardware-dashboard/antenna-warehouse/antenna-warehouse-list/antenna-warehouse-list.component';
import { DeviceComponent } from './hardware-dashboard/device/device.component';
import { AntennaComponent } from './hardware-dashboard/antenna/antenna.component';
// import { AntennaListComponent } from './hardware-dashboard/antenna/antenna-list/antenna-list.component';
// import { CreateAntennaWarehouseFormComponent } from './hardware-dashboard/create-antenna-warehouse-form/create-antenna-warehouse-form.component';
// import { RackListComponent } from './warehouse-dashboard/warehouse/rack-list/rack-list.component';
// import { RackCompartmentListComponent } from './warehouse-dashboard/warehouse/rack-compartment-list/rack-compartment-list.component';
// import { CreateRackFormComponent } from './warehouse-dashboard/create-rack-form/create-rack-form.component';
// import { CreateRackCompartmentFormComponent } from './warehouse-dashboard/create-rack-compartment-form/create-rack-compartment-form.component';
import { EqisTextCardDetailComponent } from '@app/shared/custom/eqis-text-card-detail/eqis-text-card-detail.component';
// import { WarehouseDashboardComponent } from './warehouse-dashboard/warehouse-dashboard.component';
// import { CreateWarehouseFormComponent } from './warehouse-dashboard/create-warehouse-form/create-warehouse-form.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { SharedService } from '@app/shared/services/shared-service';
// import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
// import { CandidateComponent } from './candidate-dashboard/candidate/candidate.component';
// import { CandidateListComponent } from './candidate-dashboard/candidate/candidate-list/candidate-list.component';
import {TreeModule} from 'primeng/tree';
// import { AddReleaseStoreComponent } from './indent-dashboard/add-release-store/add-release-store.component';
import { QRModelComponent } from './indent-dashboard/model/qrmodel/qrmodel.component';
// import { CandidateInterviewLocationComponent } from './candidate-dashboard/candidate/candidate-interview-location/candidate-interview-location.component';
// import { CandidateCategoryComponent } from './candidate-dashboard/candidate/candidate-category/candidate-category.component';
// import { StoreDeliveryReceiptListComponent } from './indent-dashboard/store-delivery-receipt-list/store-delivery-receipt-list.component';
// import { AddReleaseConfirmationComponent } from './indent-dashboard/add-release-confirmation/add-release-confirmation.component';
// import { AddDeliveryReceiptComponent } from './indent-dashboard/add-delivery-receipt/add-delivery-receipt.component';
// import { AccessGrantedComponent } from './access-control-dashboard/access-granted/access-granted.component';
// import { PendingApprovalsComponent } from './access-control-dashboard/pending-approvals/pending-approvals.component';
// import { AccessRejectedComponent } from './access-control-dashboard/access-rejected/access-rejected.component';
// import { DispatchOrderListComponent } from './indent-dashboard/dispatch-order-list/dispatch-order-list.component';
import {TabViewModule} from 'primeng/tabview';
import { ElectionFilterCategoryComponent } from './dashboard/election-filter-category/election-filter-category.component';
import { ElectionDetailComponent } from './dashboard/election-detail/election-detail.component';
import { VotesComponent } from './dashboard/election-detail/votes/votes.component';
import { ElectionPostComponent } from './dashboard/election-detail/election-post/election-post.component';
import { PoliticalPartyComponent } from './dashboard/election-detail/political-party/political-party.component';
import { IncideNtsComponent } from './dashboard/election-detail/incide-nts/incide-nts.component';
import { CandidatesComponent } from './dashboard/election-detail/candidates/candidates.component';
import { AgentsComponent } from './dashboard/election-detail/agents/agents.component';
import { LiveFeedComponent } from './dashboard/election-detail/live-feed/live-feed.component';
import { ResultComponent } from './dashboard/election-detail/result/result.component';
import { ElectionAnalyticsComponent } from './dashboard/election-analytics/election-analytics.component';
import { VoterRatioComponent } from './dashboard/election-analytics/voter-ratio/voter-ratio.component';
import { PoliticalPartyGradingComponent } from './dashboard/election-analytics/political-party-grading/political-party-grading.component';
import { PoliticalActivityComponent } from './dashboard/election-analytics/political-activity/political-activity.component';
import { EsriMapComponent } from './dashboard/election-detail/esri-map/esri-map.component';
import { GoogleMapComponent } from './dashboard/election-detail/google-map/google-map.component';
import { ElectionLivefeedsComponent } from './dashboard/election-livefeeds/election-livefeeds.component';
import { ElectionCandidatesComponent } from './dashboard/election-candidates/election-candidates.component';
import { ElectionPollingActivityTimelineComponent } from './dashboard/election-polling-activity-timeline/election-polling-activity-timeline.component';
import { ElectionAgentsComponent } from './dashboard/election-agents/election-agents.component';
import { IncidentDashboardComponent } from './incident-dashboard/incident-dashboard.component';
import { IncidentOperationComponent } from './incident-dashboard/incident-operation/incident-operation.component';
import { IncedentDetailsComponent } from './incident-dashboard/incedent-details/incedent-details.component';
import { IncidentsComponent } from './incident-dashboard/incedent-details/incidents/incidents.component';
import { RescueOperationsComponent } from './incident-dashboard/incedent-details/rescue-operations/rescue-operations.component';
import { IncidentLivefeedComponent } from './incident-dashboard/incedent-details/incident-livefeed/incident-livefeed.component';
import { IncidentMembersComponent } from './incident-dashboard/incedent-details/incident-members/incident-members.component';
import { SharingServiceElection } from './dashboard/SharingServiceElection';
import { SafePipe } from '@app/shared/safe.pipe';
import { ElectionGalleryComponent } from './election-gallery/election-gallery.component';
import { ElectionGalleryDetailComponent } from './election-gallery/election-gallery-detail/election-gallery-detail.component';
import { niceDateFormatPipe } from '@app/shared/nice-date-format.pipe';
import { OrderByPipe } from '@app/shared/orderby.pipe';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CandidateInformationComponent } from './election-main-candidates/candidate-information/candidate-information.component';
import { CandidateLivestatesComponent } from './election-main-candidates/candidate-livestates/candidate-livestates.component';
import { CandidateRankingComponent } from './election-main-candidates/candidate-ranking/candidate-ranking.component';
import { CandidateStatisticsComponent } from './election-main-candidates/candidate-statistics/candidate-statistics.component';
import { ElectionMainCandidatesComponent } from './election-main-candidates/election-main-candidates.component';
import { ChartsModule } from 'ng2-charts';
import { AssetTrackerComponent } from './asset-tracker/asset-tracker.component';
import { AssetTrackerSearchbarComponent } from './asset-tracker/asset-tracker-searchbar/asset-tracker-searchbar.component';
import { AssetTrackerYearsectionComponent } from './asset-tracker/asset-tracker-yearsection/asset-tracker-yearsection.component';
import { MapComponent } from './asset-tracker/map/map.component';
import { AssetTrackerCriminalactivityComponent } from './asset-tracker/asset-tracker-criminalactivity/asset-tracker-criminalactivity.component';
import { AssetTrackerInterrogationComponent } from './asset-tracker/asset-tracker-interrogation/asset-tracker-interrogation.component';
import { AssetTrackerExibitComponent } from './asset-tracker/asset-tracker-exibit/asset-tracker-exibit.component';
import { AssertTrackerOfficersComponent } from './asset-tracker/assert-tracker-officers/assert-tracker-officers.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    // suppressScrollX: true
};

@NgModule({
    declarations: [
        AppLayoutComponent,
        SidenavComponent,
        NavbarComponent,
        DashboardComponent,
        MainComponent,
        ProfileComponent,
        EpisDropDownComponent,
        EpisImageCardComponent,
        EqisTextCardComponent,
        EqisTextCardDetailComponent,
        MySettingsModalComponent,
        SmsVerificationModalComponent,
        LinkedAccountsModalComponent,
        UserDelegationsModalComponent,
        CreateNewUserDelegationModalComponent,
        LinkAccountModalComponent,
        ChangePasswordModalComponent,
        ChangeProfilePictureModalComponent,
        ChatFriendListItemComponent,
        NotificationSettingsModalComponent,
        ChatMessageComponent,
        ChatBarComponent,
        CustomHeaderNotificationComponent,
        HeaderUserMenuComponent,
        // AuthorityNumberModelComponent,
        ProfileAndWarehouseComponent,
        SafePipe,
        OrderByPipe,
        niceDateFormatPipe,
        // AssetMonitoringGridComponent,
        // CreateStoreComponent,
        // IndentDashboardComponent,
        // CreateIntentFormComponent,
        // AddPopupModelComponent,
        // RequireAttentionComponent,
        // CreateIssueRequestComponent,
        // CummulativeChatComponent,
        // AuthorizationListComponent,
        // CreateDispatchComponent,
        // IntentViewComponent,

        // IssueOrderListComponent,
        // ReleaseOrderListComponent,
        // StoreDashboardComponent,
        // StoreListComponent,
        // StoreCategoryListComponent,
        // StoreTypesListComponent,
        // StoreManufacturerListComponent,
        // CreateStoreFormComponent,
        // AddStoreCategoryComponent,
        // CreateSupplierComponent,
        // CreateManufacturerFormComponent,
        // StoreSupplierListComponent,
        // AddStoreTypeComponent,
        // CreateVarrietyBatchComponent,
        // StoreComponent,
        // StoreVarietyBatchComponent,
        // BatchListComponent,
        // VarietyListComponent,
        // VarietyCategoryListComponent,
        // AccessControlDashboardComponent,
        // PersonalAccessComponent,
        // AllListComponent,

        // StockComponent,
        // StockListComponent,
        // DeviceListComponent,
        // DeviceModelComponent,
        // DeviceAntennaComponent,
        // CreateDeviceFormComponent,
        // CreateModalFormComponent,
        // CreateAntennaFormComponent,
        // HardwareDashboardComponent,
        // AccessRequiredAttentionComponent,
        // CreateVarrietyComponent,
        // CreateVarrietyCategoryComponent,
        // AccessLockCardComponent,
        // WarehouseComponent,
        // WarehouseListComponent,
        // CreateWarehouseFormComponent,
        AntennaWarehouseComponent,
        DeviceComponent,
        AntennaComponent,
        // AntennaWarehouseListComponent,
        // AntennaListComponent,
        // CreateAntennaWarehouseFormComponent,
        // RackListComponent,
        // RackCompartmentListComponent,
        // CreateRackFormComponent,
        // CreateRackCompartmentFormComponent,
        // WarehouseDashboardComponent,
        // CandidateDashboardComponent,
        // CandidateComponent,
        // CandidateListComponent,
        QRModelComponent,
        // CandidateInterviewLocationComponent,
        // CandidateCategoryComponent,
        // AddReleaseStoreComponent,
        // DispatchOrderListComponent,
        // StoreDeliveryReceiptListComponent,
        // AddReleaseConfirmationComponent,
        // AddDeliveryReceiptComponent,
        // AccessRejectedComponent,
        // AccessGrantedComponent,
        // PendingApprovalsComponent,
        ElectionFilterCategoryComponent,
        ElectionDetailComponent,
        VotesComponent,
        ElectionPostComponent,
        PoliticalPartyComponent,
        IncideNtsComponent,
        CandidatesComponent,
        AgentsComponent,
        LiveFeedComponent,
        ResultComponent,
        ElectionAnalyticsComponent,
        VoterRatioComponent,
        PoliticalPartyGradingComponent,
        PoliticalActivityComponent,
        EsriMapComponent,
        GoogleMapComponent,
        ElectionLivefeedsComponent,
        ElectionCandidatesComponent,
        ElectionPollingActivityTimelineComponent,
        ElectionAgentsComponent,
        IncidentDashboardComponent,
        IncidentOperationComponent,
        IncedentDetailsComponent,
        IncidentsComponent,
        RescueOperationsComponent,
        IncidentLivefeedComponent,
        IncidentMembersComponent,
        ElectionGalleryComponent,
        ElectionMainCandidatesComponent,
        CandidateStatisticsComponent,
        CandidateRankingComponent,
        CandidateLivestatesComponent,
        CandidateInformationComponent,
        ElectionGalleryDetailComponent,
        AssetTrackerComponent,
        AssetTrackerSearchbarComponent,
        AssetTrackerYearsectionComponent,
        MapComponent,
        AssetTrackerCriminalactivityComponent,
        AssetTrackerInterrogationComponent,
        AssetTrackerExibitComponent,
        AssertTrackerOfficersComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        DialogModule,
        RadioButtonModule,
        ChartsModule,
        RouterModule,
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        TabsModule.forRoot(),
        BsDatepickerModule.forRoot(),
        BsDropdownModule.forRoot(),
        AppCommonModule.forRoot(),
         AppSharedModule,
         FormsModule,
         ReactiveFormsModule,
         CarouselModule,
        UtilsModule,
        PerfectScrollbarModule,
        AppBsModalModule,
        ChartModule,
        DividerModule,
        KnobModule,
        InputSwitchModule,
        MultiSelectModule,
        CheckboxModule,
        ToggleButtonModule,
        TreeModule,
        NgxSpinnerModule,
        TabViewModule,
        ScrollingModule,
        AgmCoreModule.forRoot({ apiKey: environment.googleMapApiKey, libraries: ['places'] })


  ], schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    providers: [
        ImpersonationService,
        LinkedAccountService,
        UserNotificationHelper,
        ChatSignalrService,
        ProductService,
        // AssetMonitoringSignalrService,
        CustomHeaderNotificationSignalrService,
        // StoreReleaseDispatchServiceProxy,
        DataSharedService,
        CommonUtilityService,
        SharedService,
        SharingServiceElection,
        DatePipe,
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})
export class AppLayoutModule { }
