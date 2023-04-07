import { Component, OnInit } from '@angular/core';
import { AppConsts } from '@shared/AppConsts';
import {
    ElectionGalleryServiceProxy,
    ElectionPollingUnitServiceProxy,
    ElectionWardServiceProxy,
    ProfileServiceProxy,
    UserServiceProxy,
} from '@shared/service-proxies/service-proxies';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-election-gallery',
  templateUrl: './election-gallery.component.html',
  styleUrls: ['./election-gallery.component.css']
})
export class ElectionGalleryComponent implements OnInit {
  electionGalleryImageResult: any[] = [];
  electionGalleryLiveResult: any[] = [];
  profilePicture = AppConsts.appBaseUrl + '/assets/common/images/default-profile-picture.png';
  electionGalleryVideoResult: any[] = [];
  electionGalleryResultData: any[] = [];
  electionPostWithGalleryResultData: any[] = [];
  constructor(
      private _electionGalleryServiceProxy: ElectionGalleryServiceProxy,
      private _electionPollingUnit: ElectionPollingUnitServiceProxy,
      private _profileServiceProxy: ProfileServiceProxy,
      private spinnerService: NgxSpinnerService,
      private _electionWard: ElectionWardServiceProxy
  ) {}

  ngOnInit(): void {
      this.getProfilePicture();
      this.GetAllElectionGalleries();
  }
  GetAllElectionGalleries() {
    this.spinnerService.show();
    this._electionGalleryServiceProxy
    .getMyElectionGallery(undefined, undefined, undefined, undefined, undefined, undefined)
    .subscribe((data) => {
           this.electionPostWithGalleryResultData = data.electionPost;
           this.electionPostWithGalleryResultData.forEach((value2, i) => {
            value2.assignedPollingUnitGalleryDetail.forEach((value, index) => {
                let obj:any = {};
                obj.id = value.id;
                obj.mediaSource = value.mediaSource;
                obj.contentLink = value.contentLink;
                if(value.userDetail != null){
                    obj.userName = value.userDetail.name + ' ' + value.userDetail.surname;
                    obj.creationTime = value.userDetail.creationTime;
                }
                if(value.electionPollingUnitId != null){
                    this._electionPollingUnit.get(value?.electionPollingUnitId).subscribe((item) => {
                        obj.electionPollingUnitName = item?.electionPollingUnitName;
                        this._electionWard.get(item?.electionWardId).subscribe((ward) => {
                            obj.electionWardName = ward?.electionWardName;
                        });
                    });
                }
                this.electionGalleryResultData.push(obj);
            });

        })
        this.electionGalleryImageResult = this.electionGalleryResultData.filter((item) => item.mediaSource === 1);
        this.electionGalleryLiveResult = this.electionGalleryResultData.filter((item) => item.mediaSource === 4);
        this.electionGalleryVideoResult = this.electionGalleryResultData.filter((item) => item.mediaSource === 3);
        this.spinnerService.hide();
    });
}

getProfilePicture(): void {
    this._profileServiceProxy.getProfilePicture().subscribe(result => {
        if (result && result.profilePicture) {
            this.profilePicture = 'data:image/jpeg;base64,' + result.profilePicture;
        }
    });
}

}
