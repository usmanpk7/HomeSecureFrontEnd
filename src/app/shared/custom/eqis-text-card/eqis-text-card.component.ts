import { Component, Injector, Input, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
  selector: 'app-eqis-text-card',
  templateUrl: './eqis-text-card.component.html',
  styleUrls: ['./eqis-text-card.component.css']
})
export class EqisTextCardComponent extends AppComponentBase  implements OnInit {
    @Input() text: string;
    @Input() icon: string;
    @Input() count: number;
    @Input() percentage: number;

    constructor(injector: Injector) {
        super(injector);
        this.text = '';
        this.count = 0;
        this.icon = '';
        this.percentage = 0;
    }

  ngOnInit(): void {
  }

}
