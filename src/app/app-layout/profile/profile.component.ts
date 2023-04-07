import { Router } from '@angular/router';
import { Component, Injector, OnInit } from '@angular/core';
import { DateTimeService } from '@app/shared/common/timing/date-time.service';
import { ThemesLayoutBaseComponent } from '@app/shared/layout/themes/themes-layout-base.component';
import { HeaderMenuservice } from '@app/shared/services/MenuService';
import { AppConsts } from '@shared/AppConsts';
import { ProfileServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent extends ThemesLayoutBaseComponent implements OnInit {
    profilePicture = AppConsts.appBaseUrl + '/assets/common/images/default-profile-picture.png';
    shownLoginName = '';
    tenancyName = '';
    userName = '';
    constructor(
       injector: Injector,
       _dateTimeService: DateTimeService,
       public _profileServiceProxy: ProfileServiceProxy,
       public _headerMenuservice: HeaderMenuservice,
       private myRoute: Router,
       ) {
      super(injector, _dateTimeService);
     }

  ngOnInit(): void {
    this.setCurrentLoginInformations();
    this.getProfilePicture();
  }
  setCurrentLoginInformations(): void {

    this.userName = this.appSession.user.userName;
}
getProfilePicture(): void {
    this._profileServiceProxy.getProfilePicture().subscribe(result => {
        if (result && result.profilePicture) {
            this.profilePicture = 'data:image/jpeg;base64,' + result.profilePicture;
        }
    });
}
menuHandler(type: number) {
    this._headerMenuservice.ShowItemMenu(type);
    this.myRoute.navigateByUrl('/home/dashboard');

}
}
