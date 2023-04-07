import { Component, OnInit } from '@angular/core';
import { SharingServiceElection } from '../SharingServiceElection';

@Component({
  selector: 'app-election-polling-activity-timeline',
  templateUrl: './election-polling-activity-timeline.component.html',
  styleUrls: ['./election-polling-activity-timeline.component.css']
})
export class ElectionPollingActivityTimelineComponent implements OnInit {

  pollingUnitArray: any;
  dataElectionResult: any;
  constructor(private sharingService: SharingServiceElection) { }

  ngOnInit(): void {
  }

  getElectionResultData() {
    this.pollingUnitArray = [];
    let pollingUnitObj: any = {};
    this.dataElectionResult = this.sharingService.getElectionResultData();
    this.dataElectionResult.forEach((value, index) => {
        value.electionCountryDetails.forEach((value2, index2) => {
        });
    });
}

}
