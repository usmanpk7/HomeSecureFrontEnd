import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseOrderListComponent } from './release-order-list.component';

describe('ReleaseOrderListComponent', () => {
  let component: ReleaseOrderListComponent;
  let fixture: ComponentFixture<ReleaseOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseOrderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
