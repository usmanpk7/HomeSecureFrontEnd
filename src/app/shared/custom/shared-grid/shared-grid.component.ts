import { Component, Injector, Input, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { SharedGridColumnModel} from './shared-grid.model';

@Component({
    selector: 'app-shared-grid',
    template: '',
    styles: ['']
})
export class SharedGridComponent<T> extends AppComponentBase implements OnInit {

    @Input() gridTitle: string;
    @Input() columns: Array<SharedGridColumnModel>;
    @Input() data: Array<T>;

    constructor(injector: Injector) {
        super(injector);
        this.gridTitle = '';
        this.columns = new Array<SharedGridColumnModel>();
        this.data = new Array<T>();
    }

    ngOnInit(): void {
    }

}
