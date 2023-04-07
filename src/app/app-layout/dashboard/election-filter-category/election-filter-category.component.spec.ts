import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionFilterCategoryComponent } from './election-filter-category.component';

describe('ElectionFilterCategoryComponent', () => {
  let component: ElectionFilterCategoryComponent;
  let fixture: ComponentFixture<ElectionFilterCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionFilterCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionFilterCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
