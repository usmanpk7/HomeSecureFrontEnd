import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreVarietyBatchComponent } from './store-variety-batch.component';

describe('StoreVarietyBatchComponent', () => {
  let component: StoreVarietyBatchComponent;
  let fixture: ComponentFixture<StoreVarietyBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreVarietyBatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreVarietyBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
