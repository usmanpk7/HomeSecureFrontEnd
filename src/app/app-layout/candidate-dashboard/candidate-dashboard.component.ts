// import { Component, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
// import { DataSharedService } from '@app/shared/services/data-shared-service';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { CandidateServiceProxy } from '@shared/service-proxies/service-proxies';
// import { FooterActionButton } from '../indent-dashboard/model/footer-action-button';
// import { CreateStoreFormComponent } from '../store-dashboard/create-store-form/create-store-form.component';
// import { CandidateComponent } from './candidate/candidate.component';

// @Component({
//   selector: 'app-candidate-dashboard',
//   templateUrl: './candidate-dashboard.component.html',
//   styleUrls: ['./candidate-dashboard.component.css']
// })
// export class CandidateDashboardComponent extends AppComponentBase implements OnInit {
//   @ViewChild('candidate') candidate: CandidateComponent;
//   @ViewChild('createStore', { static: true }) createStore: CreateStoreFormComponent;
//   footerActionButton: Array<FooterActionButton>;
//   categoryTab: any;
//   Loading = false;
//   candidateAnalyticsResult: any;
//   viewType: number;
//   constructor(
//     injector: Injector,
//     private candidateServiceProxy: CandidateServiceProxy,
//     private dataSharedService: DataSharedService) {
//     super(injector);
//     this.categoryTab = 1;
//     this.footerActionButton = new Array<FooterActionButton>();
//     this.candidateAnalyticsResult = {
//         totalCandidates: 0,
//         totalShortlisted: 0,
//         totalArrived: 0,
//         totalViolated: 0,
//         totalCandidateExited: 0
//     };
//     this.viewType = 1;
//   }

//   ngOnInit(): void {
//     this.getAnalytics();
//   }


//   searchData($event){
//     return this.candidate.search.table.filterGlobal($event, 'contains');
//   }


//   getAnalytics() {
// this.candidateServiceProxy.getCandidateAnalytics(this.appSession.tenantId , undefined, undefined, undefined, undefined, undefined)
// .subscribe(data => {
//   this.candidateAnalyticsResult.totalCandidates = data.totalCandidates;
//   this.candidateAnalyticsResult.totalCandidateExited = data.totalCandidateExited;
//   this.candidateAnalyticsResult.totalArrived = data.totalCandidateInterviewed;
//   this.candidateAnalyticsResult.totalViolated = data.totalCandidateViolation;
//   this.candidateAnalyticsResult.totalShortlisted = data.totalCandidateShortList;
// });
//   }
//   onTabChange(event: any) {
//     let currentTab = event.target.id;
//     if (currentTab === 'tab1') {
//         this.categoryTab = 1;
//     } else if (currentTab === 'tab2') {
//         this.categoryTab = 2;
//     } else if (currentTab === 'tab3') {
//         this.categoryTab = 3;
//     }
// }
// searchgridItem(event) {
//   let value = event.target.value;
//   console.log(value)
// }
// footerEvent(data: any) {
//   setTimeout(() => {
//       this.footerActionButton = data;
//   });
// }
// OnFooterAction(type: string) {

//     

//     if (type === 'createStore') {
//         this.createStore.openAuthoritymodel();
//     }
//     // else if (type === 'storeCategory') {
//     //     this.createStoreCategory.openAuthoritymodel();
//     // } else if (type === 'storeType') {
//     //     this.createStoreType.openAuthoritymodel();
//     // } else if (type === 'createVarrietyBatch') {
//     //     this.createVarrietyBatch.openCreateVarrietyBatch();
//     // } else if (type === 'storeSupplier') {
//     //     this.createStoreSupplier.openAuthoritymodel();
//     // } else if (type === 'storeManufacturer') {
//     //     this.createStoreManufacturer.openAuthoritymodel();
//     // } else if (type === 'createVariety') {
//     //     this.createVariety.openVarrietyModel();
//     // } else if (type === 'createVarietyCategory') {
//     //     this.createVarietyCategory.openCreateCategoryModel();
//     // }
// }
// ViewChange(event) {
//   let id = event.target.id;
//   if (id === 'card') {
//    this.viewType = 2;
//   } else {
//     this.viewType = 1;
//   }
//   this.emitShareData();
// }
// emitShareData() {
//   let shareData = {
//   viewType : this.viewType
//   };
//   this.dataSharedService.cadidateGridchangeData(shareData);
// }
// }
