import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { EqisDropDownModel } from './eqis-dropdown.model';

@Component({
    selector: 'eqis-dropdown',
    templateUrl: './eqis-dropdown.component.html',
    styleUrls: ['./eqis-dropdown.component.less']
})
export class EqisDropDownComponent extends AppComponentBase implements OnInit {
    /**
     *
     */
    showDropdownList: boolean;
    @Input() title: string;
    @Input() icon: string;
    @Input() isActive: boolean;
    @Input() data: Array<EqisDropDownModel>;

    @Output() onItemClick: EventEmitter<EqisDropDownModel>;

    constructor(injector: Injector) {
        super(injector);
        this.showDropdownList = false;
        this.title = '';
        this.icon = '';
        this.isActive = false;
        this.data = new Array<EqisDropDownModel>();
        this.onItemClick = new EventEmitter<EqisDropDownModel>();
    }
    ngOnInit(): void {
    }
    toggleDropdownList() {
        if (this.title !== 'Dashboard') {
            this.showDropdownList = !this.showDropdownList;
        } else {
            this.onItemClick.emit(new EqisDropDownModel('', 0));
        }
    }
    itemClick(item: EqisDropDownModel) {
        this.onItemClick.emit(item);
        this.showDropdownList = false;

    }
}
