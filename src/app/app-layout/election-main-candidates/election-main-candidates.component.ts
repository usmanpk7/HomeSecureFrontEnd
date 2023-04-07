import { Component, OnInit } from '@angular/core';
import { AppConsts } from '@shared/AppConsts';
import { ProfileServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-election-main-candidates',
  templateUrl: './election-main-candidates.component.html',
  styleUrls: ['./election-main-candidates.component.css']
})
export class ElectionMainCandidatesComponent implements OnInit {

  profilePicture = AppConsts.appBaseUrl + '/assets/common/images/default-profile-picture.png';
  
  constructor(private _profileServiceProxy: ProfileServiceProxy,) { }

  ngOnInit(): void {
    this.getProfilePicture();
  }

  getProfilePicture(): void {
    this._profileServiceProxy.getProfilePicture().subscribe(result => {
        if (result && result.profilePicture) {
            this.profilePicture = 'data:image/jpeg;base64,' + result.profilePicture;
        }
    });
}

}
