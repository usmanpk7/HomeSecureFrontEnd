import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FooterActionButton } from '@app/app-layout/indent-dashboard/model/footer-action-button';

@Component({
  selector: 'app-antenna',
  templateUrl: './antenna.component.html',
  styleUrls: ['./antenna.component.css']
})
export class AntennaComponent implements OnInit {

    static GridStaticInstance: AntennaComponent;

    tab: any;
    @Output() footerOutputAction = new EventEmitter<any>();
    footerActionButton: Array<FooterActionButton>;
    constructor() {
        AntennaComponent.GridStaticInstance = this;
        this.tab = 1;
    }

    ngOnInit(): void {
        this.footerActionButton = [
            new FooterActionButton('Create Antenna', 'createWarehouse', 'fa fa-caret-down'),
            new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
            new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
        ];
        this.EmitFooterValue(this.footerActionButton);
    }

    onTabChange(event: any) {
        let currentTab = event.target.parentNode.id;
        if (currentTab === 'tab1') {
            this.tab = 1;
            this.footerActionButton = [
                new FooterActionButton('Create Antenna', 'createWarehouse', 'fa fa-caret-down'),
                new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
                new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
            ];
        } else {
            this.tab = 1;
            this.footerActionButton = [
                new FooterActionButton('Create Antenna', 'createWarehouse', 'fa fa-caret-down'),
                new FooterActionButton('Stock Count', 'stockIntent', 'fa fa-caret-down'),
                new FooterActionButton('Import', 'importIntent', 'fa fa-caret-down'),
            ];
        }

        this.EmitFooterValue(this.footerActionButton);
    }

    EmitFooterValue(data: any) {
        AntennaComponent.GridStaticInstance.footerOutputAction.emit(data);
    }


}
