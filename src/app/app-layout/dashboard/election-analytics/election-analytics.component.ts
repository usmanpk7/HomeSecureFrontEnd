import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges, OnChanges, ViewChild } from '@angular/core';
import { SharingServiceElection } from '../SharingServiceElection';
import { PoliticalPartyGradingComponent } from './political-party-grading/political-party-grading.component';
import { VoterRatioComponent } from './voter-ratio/voter-ratio.component';
@Component({
  selector: 'app-election-analytics',
  templateUrl: './election-analytics.component.html',
  styleUrls: ['./election-analytics.component.css']
})
export class ElectionAnalyticsComponent implements OnInit {
  @ViewChild('childVoterComponent', {static: false}) childComponent: VoterRatioComponent;
  @ViewChild('childpoliticalpartyComponent', {static: false}) childPoliticalPartyComponent: PoliticalPartyGradingComponent;
  constructor(private sharingService: SharingServiceElection
    ) { }

  ngOnInit(): void {
  }
  getElectionResultData() {
    this.childComponent.getElectionResultData();
    this.childPoliticalPartyComponent.getElectionResultData();
  }
}
