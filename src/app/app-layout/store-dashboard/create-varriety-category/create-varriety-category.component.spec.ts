import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVarrietyCategoryComponent } from './create-varriety-category.component';

describe('CreateVarrietyCategoryComponent', () => {
  let component: CreateVarrietyCategoryComponent;
  let fixture: ComponentFixture<CreateVarrietyCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVarrietyCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVarrietyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
