import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarietyCategoryListComponent } from './variety-category-list.component';

describe('VarietyCategoryListComponent', () => {
  let component: VarietyCategoryListComponent;
  let fixture: ComponentFixture<VarietyCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarietyCategoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarietyCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
