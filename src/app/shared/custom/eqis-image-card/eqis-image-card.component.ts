import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { EqisImageCardModel } from './eqis-image-card.model';

@Component({
    selector: 'eqis-image-card',
    templateUrl: './eqis-image-card.component.html',
    styleUrls: ['./eqis-image-card.component.less']
})
export class EqisImageCardComponent extends AppComponentBase implements OnInit {
    /**
     *
     */
    @Input() image: string;
    @Input() title: string;
    @Input() eqisclass:string;
    @Input() primaryValue: number;
    @Input() secondaryValue: number;
    @Output() onItemClick: EventEmitter<EqisImageCardModel>;

    constructor(injector: Injector) {
        super(injector);
        this.title = '';
        this.image = '';
        this.primaryValue = 0;
        this.secondaryValue = 0;
        this.onItemClick = new EventEmitter<EqisImageCardModel>();
    }
    ngOnInit(): void {
    }
    itemClick(item: EqisImageCardModel) {
        this.onItemClick.emit(item);
    }
}
