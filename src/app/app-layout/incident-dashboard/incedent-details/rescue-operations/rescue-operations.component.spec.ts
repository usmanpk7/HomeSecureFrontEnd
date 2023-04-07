import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescueOperationsComponent } from './rescue-operations.component';

describe('RescueOperationsComponent', () => {
  let component: RescueOperationsComponent;
  let fixture: ComponentFixture<RescueOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RescueOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RescueOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
