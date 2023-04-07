import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { AppConsts } from '@shared/AppConsts';
import { ProfileServiceProxy } from '@shared/service-proxies/service-proxies';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-asset-tracker',
  templateUrl: './asset-tracker.component.html',
  styleUrls: ['./asset-tracker.component.css']
})
export class AssetTrackerComponent extends AppComponentBase implements OnInit {
  profilePicture = AppConsts.appBaseUrl + '/assets/common/images/default-profile-picture.png';

  constructor(
    injector: Injector,
    private http: HttpClient,
    private _profileServiceProxy: ProfileServiceProxy
) {
    super(injector);
}

  ngOnInit(): void {
  }

}
