import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModalFormComponent } from './create-modal-form.component';

describe('CreateModalFormComponent', () => {
  let component: CreateModalFormComponent;
  let fixture: ComponentFixture<CreateModalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateModalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
