import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAntennaWarehouseFormComponent } from './create-antenna-warehouse-form.component';

describe('CreateAntennaWarehouseFormComponent', () => {
  let component: CreateAntennaWarehouseFormComponent;
  let fixture: ComponentFixture<CreateAntennaWarehouseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAntennaWarehouseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAntennaWarehouseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
