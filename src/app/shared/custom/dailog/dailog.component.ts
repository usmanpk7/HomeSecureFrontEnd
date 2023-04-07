import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dailog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.css']
})
export class DailogComponent implements OnInit {

@Input() dialogClass: string;

  @Input() hideHeader = false;

  @Input() hideFooter = false;

  @Input() zIndex = '1050';

  @Output() modalClosed: EventEmitter<any> = new EventEmitter<any>();

  @Input() isSmallDialog = false;



  public visible = false;

  public visibleAnimate = false;
  constructor() { }

  ngOnInit(): void {
  }
  public show(): void {

    this.visible = true;

    setTimeout(() => this.visibleAnimate = true, 100);

  }



  public hide(): void {

    this.visibleAnimate = false;

    setTimeout(() => this.visible = false, 300);

  }



  public onContainerClicked(event: MouseEvent): void {

    if ((<HTMLElement>event.target).classList.contains('modal')) {

      this.hide();

      this.modalClosed.emit('modal closed');

    }

  }
}
