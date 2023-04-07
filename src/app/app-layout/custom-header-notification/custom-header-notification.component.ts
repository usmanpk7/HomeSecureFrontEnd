import { Component, Injector, Input, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { IFormattedUserNotification, UserNotificationHelper } from '@app/shared/layout/notifications/UserNotificationHelper';
import { HubConnection } from '@microsoft/signalr';
import { AppComponentBase } from '@shared/common/app-component-base';
import { SignalRHelper } from '@shared/helpers/SignalRHelper';
import { UrlHelper } from '@shared/helpers/UrlHelper';
import { INotificationData, NotificationData, NotificationServiceProxy, TenantNotification, UserNotification } from '@shared/service-proxies/service-proxies';
import { truncate } from 'fs';
import { forEach, forEach as _forEach, property  } from 'lodash-es';
import { CustomHeaderNotificationSignalrService } from './custom-header-notification-signalr.service';
@Component({
  selector: 'app-custom-header-notification',
  templateUrl: './custom-header-notification.component.html',
  styleUrls: ['./custom-header-notification.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomHeaderNotificationComponent  extends AppComponentBase implements OnInit {

    notifications: IFormattedUserNotification[] = [];
    customeNotification:INotificationData;
    unreadNotificationCount = 0;
    Ismute:boolean=true;
    @Input() isDropup = false;
    @Input() customStyle = 'btn btn-icon btn-dropdown btn-clean btn-lg mr-1';
    MuteText:string="Mute";
    constructor(
        injector: Injector,
        private _notificationService: NotificationServiceProxy,
        private _userNotificationHelper: UserNotificationHelper,
        private _customheaderSignlrService:CustomHeaderNotificationSignalrService,
        public _zone: NgZone
    ) {
        super(injector);

        setInterval(() => {
            this.checkNotificationStatus();            
            }, 15000);
    }
   
    ngOnInit(): void {
       
        if (this.appSession.application) {
            SignalRHelper.initSignalR(() => { this._customheaderSignlrService.init(); });
        }
        this.loadNotifications();
        this.registerToEvents();
    }
    loadNotifications(): void {
        let self = this;
        if (UrlHelper.isInstallUrl(location.href)) {
            return;
        }
        this._notificationService.getUserNotifications(undefined, undefined, undefined, 4, 0).subscribe(result => {
            this.unreadNotificationCount = result.unreadCount;
            if (!this.checkisMutedNotification()) {
            this.playSound();
        }
            this.notifications = [];
            _forEach(result.items, (item: UserNotification) => {
                this.notifications.push(this._userNotificationHelper.format(<any>this._userNotificationHelper.CheckEntityNotification(item)));
            });
        });
    }
    playSound() {
        
      if(this.Ismute==true) 
      {
         
        const sound = document.getElementById('audio');
        let audioPlayer = <HTMLVideoElement>document.getElementById('audio');
        localStorage.setItem("SoundProperty",JSON.stringify(audioPlayer));
        if (audioPlayer) {
        audioPlayer?.play();
         }
        }else 
        {
            if(this.Ismute==false)  
            {
                 
            }
        }   
          }
          muteNotificationSound(event)
          {
            
            console.log(event.target.innerHTML);
            if (event.target.innerHTML === 'UnMute') {
                this.MuteText="Mute";
                this.Ismute=true;
              } else if (event.srcElement.innerText === 'Mute') {
                this.MuteText="UnMute";
                this.Ismute=false;
              }

          }
    registerToEvents() {
        let self = this;
        function onNotificationReceived(userNotification) {
           let noti = self._userNotificationHelper.CheckEntityNotification(userNotification);
            self._userNotificationHelper.show(noti);
            self.loadNotifications();
        }

        abp.event.on('abp.notifications.received', userNotification => {
            self._zone.run(() => {
                onNotificationReceived(userNotification);
            });
        });
        function onNotificationsRefresh() {
            self.loadNotifications();
        }

        abp.event.on('app.notifications.refresh', () => {
            self._zone.run(() => {
                onNotificationsRefresh();
            });
        });
        abp.notifications.messageFormatters['MyCompanyName.AbpZeroTemplate.ApprovalBindings.Dto.FormApprovalRequestNotificationData'] 
        = function(userNotification) {
            let Message='';
            if(userNotification.notification.notificationName=="SentApprovalRequest"){
                let dataObject= userNotification.notification.data.properties["ApprovalRequestData"];
                if(dataObject){
                    if(typeof(dataObject)=="string"){
                     let model= JSON.parse(dataObject);
                         Message=model.RequestMessage;
                     }else{
                         Message=dataObject.RequestMessage;
                     }
                    }
             }
            
            return Message ; //format and return message here
        };
        function onNotificationsRead(userNotificationId) {
            for (let i = 0; i < self.notifications.length; i++) {
                if (self.notifications[i].userNotificationId === userNotificationId) {
                    self.notifications[i].state = 'READ';
                    self.notifications[i].isUnread = false;
                }
            }

            self.unreadNotificationCount -= 1;
        }

        abp.event.on('app.notifications.read', userNotificationId => {
            self._zone.run(() => {
                onNotificationsRead(userNotificationId);
            });
        });
    }
    setAllNotificationsAsRead(): void {
        this._userNotificationHelper.setAllAsRead();
    }

    openNotificationSettingsModal(): void {
        this._userNotificationHelper.openSettingsModal();
    }

    setNotificationAsRead(userNotification: IFormattedUserNotification): void {
        if (userNotification.state !== 'READ') {
            this._userNotificationHelper.setAsRead(userNotification.userNotificationId);
        }
    }

    gotoUrl(url): void {
        if (url) {
            location.href = url;
        }
    }
    checkNotificationStatus() {
        if (this.unreadNotificationCount !== 0 && this.checkisMutedNotification() === false ) {
            let audioPlayer = <HTMLVideoElement>document.getElementById('audioSound');

            if (audioPlayer) {
            audioPlayer?.play();
        }
        }
    }
    checkisMutedNotification() {
        let isMuted = false;
        let notisetting = JSON.parse(localStorage.getItem('notificationSettings'));
        if (notisetting && notisetting.length > 0 ) {
        let index = notisetting.findIndex(x => x.userId === this.appSession.userId);
        if (index !== -1) {
        isMuted = notisetting[index].IsMuted;
    }}
    return isMuted;
    }
}
