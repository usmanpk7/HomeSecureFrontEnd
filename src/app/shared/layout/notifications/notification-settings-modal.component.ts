import { Component, Injector, ViewChild } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { GetNotificationSettingsOutput, NotificationServiceProxy, NotificationSubscriptionDto, UpdateNotificationSettingsInput } from '@shared/service-proxies/service-proxies';
import { map as _map } from 'lodash-es';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'notificationSettingsModal',
    templateUrl: './notification-settings-modal.component.html'
})
export class NotificationSettingsModalComponent extends AppComponentBase {

    @ViewChild('modal', {static: true}) modal: ModalDirective;

    saving = false;
    IsMuted: boolean;
    settings: GetNotificationSettingsOutput;

    constructor(
        injector: Injector,
        private _notificationService: NotificationServiceProxy
    ) {
        super(injector);
        this.IsMuted = false;
    }

    show() {
        this.getSettings(() => {
            this.modal.show();
            this.checkisMuteNotification();
        });
    }
    checkisMuteNotification() {
        let setting = JSON.parse(localStorage.getItem('notificationSettings'));
        if (setting && setting.length > 0) {
          let index = setting.findIndex(x => x.userId === this.appSession.userId);
          if (index !== -1) {
            this.IsMuted = setting[index].IsMuted;
        } else {
           this.IsMuted = false;
        }
    }
    }
    save(): void {
        const input = new UpdateNotificationSettingsInput();
        this.saveUserNotificationSetting();
        input.receiveNotifications = this.settings.receiveNotifications;
        input.notifications = _map(this.settings.notifications,
            (n) => {
                let subscription = new NotificationSubscriptionDto();
                subscription.name = n.name;
                subscription.isSubscribed = n.isSubscribed;
                return subscription;
            });

        this.saving = true;
        this._notificationService.updateNotificationSettings(input)
            .pipe(finalize(() => this.saving = false))
            .subscribe(() => {
                this.notify.info(this.l('SavedSuccessfully'));
                this.close();
            });
    }
    saveUserNotificationSetting() {
        let newSetting = {
            userId: this.appSession.userId,
            IsMuted : this.IsMuted
        };
        let setting = JSON.parse(localStorage.getItem('notificationSettings'));
        if (setting && setting.length > 0) {
          let index = setting.findIndex(x => x.userId === this.appSession.userId);
          if (index !== -1) {
          setting[index] = newSetting;
          localStorage.setItem('notificationSettings', JSON.stringify(setting));
        } else {
           setting.push(newSetting);
           localStorage.setItem('notificationSettings', JSON.stringify(setting));
        }
        } else {
            setting = [];
            setting.push(newSetting);
           localStorage.setItem('notificationSettings', JSON.stringify(setting));
        }
    }
    close(): void {
        this.modal.hide();
    }

    private getSettings(callback: () => void) {
        this._notificationService.getNotificationSettings().subscribe((result: GetNotificationSettingsOutput) => {
            this.settings = result;
            callback();
        });
    }
}
