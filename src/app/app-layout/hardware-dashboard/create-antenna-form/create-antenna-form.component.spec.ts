import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAntennaFormComponent } from './create-antenna-form.component';

describe('CreateAntennaFormComponent', () => {
  let component: CreateAntennaFormComponent;
  let fixture: ComponentFixture<CreateAntennaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAntennaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAntennaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
