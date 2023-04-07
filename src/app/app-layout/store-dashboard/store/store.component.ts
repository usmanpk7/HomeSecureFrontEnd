// import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
// import { FooterActionButton } from '@app/app-layout/indent-dashboard/model/footer-action-button';
// import { StoreListComponent } from './store-list/store-list.component';

// @Component({
//   selector: 'app-store',
//   templateUrl: './store.component.html',
//   styleUrls: ['./store.component.css']
// })
// export class StoreComponent implements OnInit {
//     @ViewChild('search') search: any;
//     static GridStaticInstance: StoreComponent;


//     tab: any;
// @Output() footerOutputAction = new EventEmitter<any>();
// footerActionButton: Array<FooterActionButton>;
//   constructor() {
//     StoreComponent.GridStaticInstance = this;
//       this.tab = 1;
//   }
//   ngOnInit(): void {
//     this.footerActionButton = [
//       new FooterActionButton('Create Store', 'createStore', 'fa fa-caret-down'),
//       new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
//       new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
//   ];
//   this.EmitFooterValue(this.footerActionButton);
//   }
//   onTabChange(event: any) {
//     let currentTab = event.target.parentNode.id;
//     if (currentTab === 'tab1') {
//         this.tab = 1;
//         this.footerActionButton = [
//             new FooterActionButton('Create Store', 'createStore', 'fa fa-caret-down'),
//             new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
//             new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
//         ];
//     } else if (currentTab === 'tab2') {
//         this.tab = 2;
//         this.footerActionButton = [
//             new FooterActionButton('Create Store Category', 'storeCategory', 'fa fa-caret-down'),
//             new FooterActionButton('Stock Count', 'stockAuthorization', 'fa fa-caret-down'),
//             new FooterActionButton('Import', 'importAuthorization', 'fa fa-caret-down'),
//         ];
//     } else if (currentTab === 'tab3') {
//         this.tab = 3;
//         this.footerActionButton = [
//             new FooterActionButton('Create Store Type', 'storeType', 'fa fa-caret-down'),
//             new FooterActionButton('Issue Provision', 'stockIssueRequest', 'fa fa-caret-down'),
//             new FooterActionButton('Import', 'importIssueRequest', 'fa fa-caret-down'),
//         ];
//     } else if (currentTab === 'tab4') {
//         this.tab = 4;
//         this.footerActionButton = [
//             new FooterActionButton('Create Store Supplier', 'storeSupplier', 'fa fa-caret-down'),
//             new FooterActionButton('Stock Count', 'stockRelease', 'fa fa-caret-down'),
//             new FooterActionButton('Import', 'importRelease', 'fa fa-caret-down'),
//         ];
//     } else if (currentTab === 'tab5') {
//         this.tab = 5;
//         this.footerActionButton = [
//             new FooterActionButton('Create Store Manufacturer', 'storeManufacturer', 'fa fa-caret-down'),
//             new FooterActionButton('Stock Count', 'stockDispatch', 'fa fa-caret-down'),
//             new FooterActionButton('Import', 'importDispatch', 'fa fa-caret-down'),
//         ];
//     } else if (currentTab === 'tab6') {
//         this.tab = 6;
//         this.footerActionButton = [];
//     } else {
//         this.tab = 1;
//         this.footerActionButton = [
//             new FooterActionButton('Create Intent Form', 'createIntent', 'fa fa-caret-down'),
//             new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
//             new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
//         ];
//     }
//     this.EmitFooterValue(this.footerActionButton);
// }
// EmitFooterValue(data: any) {
//     StoreComponent.GridStaticInstance.footerOutputAction.emit(data);
// }
// }
