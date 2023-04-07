import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppAuthService } from '@app/shared/common/auth/app-auth.service';
import { DateTimeService } from '@app/shared/common/timing/date-time.service';
import { ThemesLayoutBaseComponent } from '@app/shared/layout/themes/themes-layout-base.component';
import { HeaderMenuservice } from '@app/shared/services/MenuService';
import { AppConsts } from '@shared/AppConsts';
import { ProfileServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent extends ThemesLayoutBaseComponent  implements OnInit {

    status: boolean = false;
    userName = '';
  constructor( private _authService: AppAuthService,
    public _headerMenuservice: HeaderMenuservice,
     injector: Injector,

     _dateTimeService: DateTimeService
     ) {
    super(injector, _dateTimeService);
   }

  ngOnInit(): void {

  }

  logout(): void {
    this._authService.logout();
}
setCurrentLoginInformations(): void {

    this.userName = this.appSession.user.userName;
}
menuHandler(type: number) {
this._headerMenuservice.ShowItemMenu(type);
}
ChangeStyle() {
    this.status = !this.status;
}
}
