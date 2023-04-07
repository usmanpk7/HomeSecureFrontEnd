import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRackFormComponent } from './create-rack-form.component';

describe('CreateRackFormComponent', () => {
  let component: CreateRackFormComponent;
  let fixture: ComponentFixture<CreateRackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRackFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
