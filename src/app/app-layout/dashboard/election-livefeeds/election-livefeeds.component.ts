import { MediaSource } from './../../../../shared/service-proxies/service-proxies';

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
    ElectionGalleryServiceProxy,
    ElectionPollingUnitServiceProxy,
    ElectionWardServiceProxy,
    UserServiceProxy,
} from '@shared/service-proxies/service-proxies';
import { SharingServiceElection } from '../SharingServiceElection';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
    selector: 'app-election-livefeeds',
    templateUrl: './election-livefeeds.component.html',
    styleUrls: ['./election-livefeeds.component.css'],
})
export class ElectionLivefeedsComponent implements OnInit {
    electionGalleryImageResult: any[] = [];
    electionGalleryLiveResult: any[] = [];
    electionGalleryVideoResult: any[] = [];
    electionGalleryResultData: any[] = [];
    electionPostWithGalleryResultData: any[] = [];
    @Input() feedName:string;
    exhibit:string;
    interogation:string;
    constructor(
        private _electionGalleryServiceProxy: ElectionGalleryServiceProxy,
        private _electionPollingUnit: ElectionPollingUnitServiceProxy,
        private _electionWard: ElectionWardServiceProxy,
        private sharingService: SharingServiceElection,
        private _userServiceProxy: UserServiceProxy,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.GetAllElectionGalleries();
        console.log("LOG WOrking", this.feedName);
        if(this.feedName=='exhibit'){
            this.exhibit='Exhibit'
        console.log("LOG Exhibit WOrking", this.feedName);

        }
        else if(this.feedName=='interogation'){
            this.interogation='Interogation Acitivity'
        console.log("LOG Intero WOrking", this.feedName);

        }
      
        
    }

    GetAllElectionGalleries() {
        this._electionGalleryServiceProxy
            .getMyElectionGallery(undefined, undefined, undefined, undefined, undefined, undefined)
            .subscribe((data) => {
                this.electionPostWithGalleryResultData = data.electionPost;
                this.electionPostWithGalleryResultData.forEach((value2, i) => {
                    value2.assignedPollingUnitGalleryDetail.forEach((value, index) => {
                        let obj: any = {};
                        obj.id = value.id;
                        obj.mediaSource = value.mediaSource;
                        obj.contentLink = value.contentLink;
                        if (value.userDetail != null) {
                            obj.userName = value.userDetail.name + ' ' + value.userDetail.surname;
                            obj.creationTime = value.userDetail.creationTime;
                        }
                        if (value.electionPollingUnitId != null) {
                            this._electionPollingUnit.get(value?.electionPollingUnitId).subscribe((item) => {
                                obj.electionPollingUnitName = item?.electionPollingUnitName;
                                this._electionWard.get(item?.electionWardId).subscribe((ward) => {
                                    obj.electionWardName = ward?.electionWardName;
                                });
                            });
                        }
                        this.electionGalleryResultData.push(obj);
                    });

                });
                this.electionGalleryImageResult = this.electionGalleryResultData.filter((item) => item.mediaSource === 1);
                this.electionGalleryLiveResult = this.electionGalleryResultData.filter((item) => item.mediaSource === 4);
                this.electionGalleryVideoResult = this.electionGalleryResultData.filter((item) => item.mediaSource === 3);
            });
    }

    getElectionPostGalleryData() {

        this.electionGalleryResultData = this.sharingService.getElectionPostGalleryData();
        this.electionGalleryImageResult = this.electionGalleryResultData.filter((item) => item.mediaSource === 1);
        this.electionGalleryLiveResult = this.electionGalleryResultData.filter((item) => item.mediaSource === 4);
        this.electionGalleryVideoResult = this.electionGalleryResultData.filter((item) => item.mediaSource === 3);
    }

    viewMoreGallery(type: string) {
        if (type == "Image") {
            this.router.navigate(['/home/election-gallery-detail/' + this.electionGalleryImageResult[0].id + '/' + this.electionGalleryImageResult[0].mediaSource]);
        } else if (type == "Video") {
            this.router.navigate(['/home/election-gallery-detail/' + this.electionGalleryVideoResult[0].id + '/' + this.electionGalleryVideoResult[0].mediaSource]);
        } else if (type == "Live") {
            this.router.navigate(['/home/election-gallery-detail/' + this.electionGalleryLiveResult[0].id + '/' + this.electionGalleryLiveResult[0].mediaSource]);
        }

    }
}
