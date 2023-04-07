import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-election-gallery-detail',
  templateUrl: './election-gallery-detail.component.html',
  styleUrls: ['./election-gallery-detail.component.css']
})
export class ElectionGalleryDetailComponent implements OnInit {

  electionGalleryId:number;
  electionGalleryMediaSource:number;
  electionGallery: any;
  profilePicture = AppConsts.appBaseUrl + '/assets/common/images/default-profile-picture.png';
  electionPostWithGalleryResultData: any[] = [];
  electionGalleryResultData: any[] = [];
  constructor(private route: ActivatedRoute,
    private _electionGalleryServiceProxy: ElectionGalleryServiceProxy,
      private _electionPollingUnit: ElectionPollingUnitServiceProxy,
      private _profileServiceProxy: ProfileServiceProxy,
      private spinnerService: NgxSpinnerService,
      private _electionWard: ElectionWardServiceProxy
    ) { }


  ngOnInit(): void {
    this.getProfilePicture();
    this.electionGalleryId = this.route.snapshot.params['id'];
    this.electionGalleryMediaSource = this.route.snapshot.params['mediaSource'];
    this.electionGallery = {};
    // this.getElectionGallery();
    // this.getElectionGallriesData();
  }

  getElectionGallery() {
    this.spinnerService.show();
    this._electionGalleryServiceProxy
    .get(this.electionGalleryId)
    .subscribe((data) => {
      this.electionGallery = {};
      this.electionGallery.mediaSource = data.mediaSource;
      this.electionGallery.contentLink = data.contentLink;
      if(data.creatorUserId != null){
        // this.electionGallery.mediaSource.userName = data.userDetail.name + ' ' + data.userDetail.surname;
        // this.electionGallery.mediaSource.creationTime = data.userDetail.creationTime;
      }
      if(data.electionPollingUnitId != null){
          this._electionPollingUnit.get(data?.electionPollingUnitId).subscribe((item) => {
            this.electionGallery.electionPollingUnitName = item?.electionPollingUnitName;
              this._electionWard.get(item?.electionWardId).subscribe((ward) => {
                this.electionGallery.electionWardName = ward?.electionWardName;
              });
          });
      }
       this.spinnerService.hide();

        })
  }

  getElectionGallriesData(){
    this.spinnerService.show();
    this._electionGalleryServiceProxy
    .getMyElectionGallery(undefined, undefined, undefined, undefined, undefined, undefined)
    .subscribe((data) => {
           this.electionPostWithGalleryResultData = data.electionPost;
           this.electionPostWithGalleryResultData.forEach((value2, i) => {
            value2.assignedPollingUnitGalleryDetail = value2.assignedPollingUnitGalleryDetail.filter((item) => item.mediaSource === Number(this.electionGalleryMediaSource))
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
            this.spinnerService.hide();
        })
    });
  }

  getProfilePicture(): void {
    this._profileServiceProxy.getProfilePicture().subscribe(result => {
        if (result && result.profilePicture) {
            this.profilePicture = 'data:image/jpeg;base64,' + result.profilePicture;
        }
    });
}

  selectMainGallery(obj:any){
    this.electionGallery = obj;
  }

}
