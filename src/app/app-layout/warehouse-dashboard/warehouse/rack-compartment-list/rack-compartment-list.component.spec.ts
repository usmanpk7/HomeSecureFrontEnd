import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RackCompartmentListComponent } from './rack-compartment-list.component';

describe('RackCompartmentListComponent', () => {
  let component: RackCompartmentListComponent;
  let fixture: ComponentFixture<RackCompartmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RackCompartmentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RackCompartmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
