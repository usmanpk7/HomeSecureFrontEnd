import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRackCompartmentFormComponent } from './create-rack-compartment-form.component';

describe('CreateRackCompartmentFormComponent', () => {
  let component: CreateRackCompartmentFormComponent;
  let fixture: ComponentFixture<CreateRackCompartmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRackCompartmentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRackCompartmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
