import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntennaWarehouseListComponent } from './antenna-warehouse-list.component';

describe('AntennaWarehouseListComponent', () => {
  let component: AntennaWarehouseListComponent;
  let fixture: ComponentFixture<AntennaWarehouseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntennaWarehouseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntennaWarehouseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
