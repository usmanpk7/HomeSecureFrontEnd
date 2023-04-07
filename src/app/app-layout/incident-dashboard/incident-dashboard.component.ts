import { Component, OnInit,Injector } from '@angular/core';
import { AppConsts } from '@shared/AppConsts';
import { AppComponentBase } from '@shared/common/app-component-base';
import { ProfileServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
    selector: 'app-incident-dashboard',
    templateUrl: './incident-dashboard.component.html',
    styleUrls: ['./incident-dashboard.component.css'],
})
export class IncidentDashboardComponent extends AppComponentBase implements OnInit {
    profilePicture = AppConsts.appBaseUrl + '/assets/common/images/default-profile-picture.png';
    shownLoginName = '';
    tenancyName = '';
    userName = '';
    constructor(injector: Injector ,private _profileServiceProxy: ProfileServiceProxy) {
        super(injector);
    }

    ngOnInit(): void {
        this.getProfilePicture();
        this.setCurrentLoginInformations();
    }

    setCurrentLoginInformations(): void {
        this.shownLoginName = this.appSession.getShownLoginName();
        this.tenancyName = this.appSession.tenancyName;
        this.userName = this.appSession.user.userName;
    }

    getProfilePicture(): void {
        this._profileServiceProxy.getProfilePicture().subscribe((result) => {
            if (result && result.profilePicture) {
                this.profilePicture = 'data:image/jpeg;base64,' + result.profilePicture;
            }
        });
    }
}
