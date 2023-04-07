import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVarrietyComponent } from './create-varriety.component';

describe('CreateVarrietyComponent', () => {
  let component: CreateVarrietyComponent;
  let fixture: ComponentFixture<CreateVarrietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVarrietyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVarrietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
