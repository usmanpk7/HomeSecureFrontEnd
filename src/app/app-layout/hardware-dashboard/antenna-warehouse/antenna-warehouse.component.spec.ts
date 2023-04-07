import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntennaWarehouseComponent } from './antenna-warehouse.component';

describe('AntennaWarehouseComponent', () => {
  let component: AntennaWarehouseComponent;
  let fixture: ComponentFixture<AntennaWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntennaWarehouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntennaWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
