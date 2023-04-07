import { Component, Injector, Input, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-eqis-text-card-detail',
  templateUrl: './eqis-text-card-detail.component.html',
  styleUrls: ['./eqis-text-card-detail.component.css']
})
export class EqisTextCardDetailComponent extends AppComponentBase  implements OnInit {
  @Input() text: string;
  @Input() nodes: TreeNode[];
  @Input() count: number;
  @Input() percentage: number;
  @Input() cardColor: string;
  constructor(injector: Injector) {
      super(injector);
      this.text = '';
      this.count = 0;
      this.percentage = 0;
  }

ngOnInit(): void {

//    this.nodes = [
//      {
//        label: 'Node ',
//        key: '0',
//          children: [
//            {key: '0-0', label: 'What is Angular', data: '1', type: 'default1'},
//            {key: '0-1', label: 'What is Angular1', data: '2', type: 'default1'},
//          ]
//      },
//      {
//        label: 'Node ',
//        key: '1',
//          children: [
//            {key: '1-0', label: 'What is Angular', data: '1', type: 'default1'},
//            {key: '1-1', label: 'What is Angular', data: '2', type: 'default1'},
//          ]
//      }
//  ];
}
}
