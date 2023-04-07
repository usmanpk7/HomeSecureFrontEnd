import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRModelComponent } from './qrmodel.component';

describe('QRModelComponent', () => {
  let component: QRModelComponent;
  let fixture: ComponentFixture<QRModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QRModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QRModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
