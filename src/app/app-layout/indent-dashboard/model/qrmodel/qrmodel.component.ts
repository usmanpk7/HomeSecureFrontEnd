import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrmodel',
  templateUrl: './qrmodel.component.html',
  styleUrls: ['./qrmodel.component.css']
})
export class QRModelComponent implements OnInit {

  displayResponsive:boolean;
  constructor() { }

  ngOnInit(): void {
  }
open()
{
  this.displayResponsive=true;
}
close()
{
  this.displayResponsive=false;
}

}
