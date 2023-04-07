import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateCategoryComponent } from './candidate-category.component';

describe('CandidateCategoryComponent', () => {
  let component: CandidateCategoryComponent;
  let fixture: ComponentFixture<CandidateCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
