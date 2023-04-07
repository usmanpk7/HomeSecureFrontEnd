import { SharingServiceElection } from '../SharingServiceElection';
import { VotesComponent } from './votes/votes.component';
import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ElectionFilterCategoryComponent } from '../election-filter-category/election-filter-category.component';
import { ElectionPostComponent } from './election-post/election-post.component';
import { LiveFeedComponent } from './live-feed/live-feed.component';
import { PoliticalPartyComponent } from './political-party/political-party.component';
@Component({
    selector: 'app-election-detail',
    templateUrl: './election-detail.component.html',
    styleUrls: ['./election-detail.component.css'],
})
export class ElectionDetailComponent implements OnInit {
    @Input() filterdata: ElectionFilterCategoryComponent;
    // @Input() voteMapRef: VotesComponent;
    @ViewChild(VotesComponent) voteMapref;
    assignedPollingUnitWithElectionPostData: any;

    @ViewChild('childVoterComponent', { static: false }) childComponent: VotesComponent;
    @ViewChild('childElectionPostComponent', { static: false }) childElectionPostComponent: ElectionPostComponent;
    @ViewChild('childPoliticalPartyComponent', { static: false }) childPoliticalPartyComponent: PoliticalPartyComponent;
    @ViewChild('childLiveFeedComponent', { static: false }) childLiveFeedComponent: LiveFeedComponent;
    constructor(private sharingService: SharingServiceElection) {}
    ngOnInit(): void {}
    getElectionResultData() {
        this.childComponent.getElectionResultData();
        this.childElectionPostComponent.getElectionResultData();
        this.childPoliticalPartyComponent.getElectionResultData();
    }
    getElectionPostGalleryData() {
        this.childLiveFeedComponent.getElectionPostGalleryData();
    }
    GetData() {
        this.assignedPollingUnitWithElectionPostData = this.sharingService.getData();
        this.sharingService.setData(this.assignedPollingUnitWithElectionPostData, '');
        this.voteMapref.GetData();
    }

  GetElectionReportSummaryAnalyticsData(){
    this.sharingService.setData(this.sharingService.getData(),"")
    this.voteMapref.GetElectionReportSummaryAnalyticsData();
}

}
