// import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
// import { FooterActionButton } from '@app/app-layout/indent-dashboard/model/footer-action-button';

// @Component({
//   selector: 'app-store-variety-batch',
//   templateUrl: './store-variety-batch.component.html',
//   styleUrls: ['./store-variety-batch.component.css']
// })
// export class StoreVarietyBatchComponent implements OnInit {
//   @ViewChild('search') search: any;
//   static GridStaticInstance: StoreVarietyBatchComponent;

//   tab: any;
// @Output() footerOutputAction = new EventEmitter<any>();
// footerActionButton: Array<FooterActionButton>;
// constructor() {
//   StoreVarietyBatchComponent.GridStaticInstance = this;
//     this.tab = 1;
// }
// ngOnInit(): void {
//   this.footerActionButton = [
//    new FooterActionButton('Create Variety Batch', 'createVarrietyBatch', 'fa fa-caret-down'),
//     new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
//     new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down')
// ];
// this.EmitFooterValue(this.footerActionButton);
// }
// onTabChange(event: any) {
//   let currentTab = event.target.parentNode.id;
//   if (currentTab === 'tab1') {
//       this.tab = 1;
//       this.footerActionButton = [
//           new FooterActionButton('Create Variety Batch', 'addVarietyBatch', 'fa fa-caret-down'),
//           new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
//           new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
//       ];
//   } else if (currentTab === 'tab2') {
//     this.tab = 2;
//     this.footerActionButton = [
//         new FooterActionButton('Create Variety', 'createVariety', 'fa fa-caret-down'),
//         new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
//         new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
//     ];
//   } else if (currentTab === 'tab3') {
//     this.tab = 3;
//     this.footerActionButton = [
//         new FooterActionButton('Create Variety Category', 'createVarietyCategory', 'fa fa-caret-down'),
//         new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
//         new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
//     ];
//   } else {
//       this.tab = 1;
//       this.footerActionButton = [
//           new FooterActionButton('Create Varriety Batch', 'addVarietyBatch', 'fa fa-caret-down'),
//           new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
//           new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
//       ];
//   }
//   this.EmitFooterValue(this.footerActionButton);
// }

// EmitFooterValue(data: any) {
//   StoreVarietyBatchComponent.GridStaticInstance.footerOutputAction.emit(data);
// }

// }
