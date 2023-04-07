import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { DateTimeService } from '@app/shared/common/timing/date-time.service';
import { ChatSignalrService } from '@app/shared/layout/chat/chat-signalr.service';
import { LinkedAccountsModalComponent } from '@app/shared/layout/linked-accounts-modal.component';
import { NotificationSettingsModalComponent } from '@app/shared/layout/notifications/notification-settings-modal.component';
import { UserNotificationHelper } from '@app/shared/layout/notifications/UserNotificationHelper';
import { ChangePasswordModalComponent } from '@app/shared/layout/profile/change-password-modal.component';
import { ChangeProfilePictureModalComponent } from '@app/shared/layout/profile/change-profile-picture-modal.component';
import { MySettingsModalComponent } from '@app/shared/layout/profile/my-settings-modal.component';
import { UserDelegationsModalComponent } from '@app/shared/layout/user-delegations-modal.component';
import { SharedService } from '@app/shared/services/shared-service';
import { AppConsts } from '@shared/AppConsts';
import { AppComponentBase } from '@shared/common/app-component-base';
import { SignalRHelper } from '@shared/helpers/SignalRHelper';
import { UrlHelper } from '@shared/helpers/UrlHelper';
import { SubscriptionStartType } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent extends AppComponentBase implements OnInit {
    subscriptionStartType = SubscriptionStartType;
    theme: string;
    installationMode = true;
    @ViewChild('linkedAccountsModal') linkedAccountsModal: LinkedAccountsModalComponent;
    @ViewChild('userDelegationsModal', {static: true}) userDelegationsModal: UserDelegationsModalComponent;
    @ViewChild('changePasswordModal', {static: true}) changePasswordModal: ChangePasswordModalComponent;
    @ViewChild('changeProfilePictureModal', {static: true}) changeProfilePictureModal: ChangeProfilePictureModalComponent;
    @ViewChild('mySettingsModal', {static: true}) mySettingsModal: MySettingsModalComponent;
    @ViewChild('notificationSettingsModal', {static: true}) notificationSettingsModal: NotificationSettingsModalComponent;
    // @ViewChild('chatBarComponent') chatBarComponent;
    isQuickThemeSelectEnabled: boolean = this.setting.getBoolean('App.UserManagement.IsQuickThemeSelectEnabled');
    IsSessionTimeOutEnabled: boolean = this.setting.getBoolean('App.UserManagement.SessionTimeOut.IsEnabled') && this.appSession.userId != null;
  constructor(private elementRef: ElementRef, injector: Injector,
    private _chatSignalrService: ChatSignalrService,
    private _userNotificationHelper: UserNotificationHelper,
    private _dateTimeService: DateTimeService,
    private _sharedService: SharedService) {
        super(injector);
   }

  ngOnInit(): void {
    this._userNotificationHelper.settingsModal = this.notificationSettingsModal;
    this.theme = abp.setting.get('App.UiManagement.Theme').toLocaleLowerCase();
    this.installationMode = UrlHelper.isInstallUrl(location.href);

    this.registerModalOpenEvents();

    if (this.appSession.application) {
        SignalRHelper.initSignalR(() => { this._chatSignalrService.init(); });
        this._sharedService.getAllUsers();
    }
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = '#213315';
}
subscriptionIsExpiringSoon(): boolean {
    if (this.appSession.tenant.subscriptionEndDateUtc) {
        let today = this._dateTimeService.getUTCDate();
        let daysFromNow = this._dateTimeService.plusDays(today, AppConsts.subscriptionExpireNootifyDayCount);
        return daysFromNow >= this.appSession.tenant.subscriptionEndDateUtc;
    }

    return false;
}
registerModalOpenEvents(): void {
    abp.event.on('app.show.linkedAccountsModal', () => {
        this.linkedAccountsModal.show();
    });

    abp.event.on('app.show.userDelegationsModal', () => {
        this.userDelegationsModal.show();
    });

    abp.event.on('app.show.changePasswordModal', () => {
        this.changePasswordModal.show();
    });

    abp.event.on('app.show.changeProfilePictureModal', () => {
        this.changeProfilePictureModal.show();
    });

    abp.event.on('app.show.mySettingsModal', () => {
        this.mySettingsModal.show();
    });
}
changeMySettings(): void {
    abp.event.trigger('app.show.mySettingsModal');
}
getRecentlyLinkedUsers(): void {
    abp.event.trigger('app.getRecentlyLinkedUsers');
}

onMySettingsModalSaved(): void {
    abp.event.trigger('app.onMySettingsModalSaved');
}
onMyProfileImageSettingsModalSaved(): void {
    abp.event.trigger('app.onMySettingsModalSaved');
}
}
