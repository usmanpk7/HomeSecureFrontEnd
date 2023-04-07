// import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
// import { FooterActionButton } from '@app/app-layout/indent-dashboard/model/footer-action-button';

// @Component({
//     selector: 'app-warehouse',
//     templateUrl: './warehouse.component.html',
//     styleUrls: ['./warehouse.component.css']
// })
// export class WarehouseComponent implements OnInit {
//     @ViewChild('search') search: any;
//     static GridStaticInstance: WarehouseComponent;

//     tab: any;
//     @Output() footerOutputAction = new EventEmitter<any>();
//     footerActionButton: Array<FooterActionButton>;
//     constructor() {
//         WarehouseComponent.GridStaticInstance = this;
//         this.tab = 1;
//     }

//     ngOnInit(): void {
//         this.footerActionButton = [
//             new FooterActionButton('Create Warehouse', 'createWarehouse', 'fa fa-caret-down'),
//             new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
//             new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
//         ];
//         this.EmitFooterValue(this.footerActionButton);
//     }

//     onTabChange(event: any) {
//         let currentTab = event.target.parentNode.id;
//         if (currentTab === 'tab1') {
//             this.tab = 1;
//             this.footerActionButton = [
//                 new FooterActionButton('Create Warehouse', 'createWarehouse', 'fa fa-caret-down'),
//                 new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
//                 new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
//             ];
//         } else if (currentTab === 'tab2') {
//             this.tab = 2;
//             this.footerActionButton = [
//                 new FooterActionButton('Create Rack', 'createRackForm', 'fa fa-caret-down'),
//                 new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
//                 new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
//             ];
//         } else if (currentTab === 'tab3') {
//             this.tab = 3;
//             this.footerActionButton = [
//                 new FooterActionButton('Create RackCompartment', 'createRackcompartment', 'fa fa-caret-down'),
//                 new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
//                 new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
//             ];
//         } else {
//             this.tab = 1;
//             this.footerActionButton = [
//                 new FooterActionButton('Create Warehouse', 'createWarehouse', 'fa fa-caret-down'),
//                 new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
//                 new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
//             ];
//         }

//         this.EmitFooterValue(this.footerActionButton);
//     }

//     EmitFooterValue(data: any) {
//         WarehouseComponent.GridStaticInstance.footerOutputAction.emit(data);
//     }

// }
