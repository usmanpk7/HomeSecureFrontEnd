import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataSharedService {
    private value = new BehaviorSubject<any>('');
    private viewTypeValue = new BehaviorSubject<any>('');
    dataChanged: any = this.value.asObservable();
    viewTypedataChanged: any = this.viewTypeValue.asObservable();
    constructor() {}
     data(): any {
      return this.value;
    }
     changeData(val: any) {
      this.value.next(val);
    }
/////for candidate dashboard grid view type
    cadidateGridViewType(): any {
      return this.viewTypeValue;
    }
    cadidateGridchangeData(val: any) {
      this.viewTypeValue.next(val);
    }
}

