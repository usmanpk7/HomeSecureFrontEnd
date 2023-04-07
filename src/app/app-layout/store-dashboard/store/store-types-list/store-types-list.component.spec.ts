import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTypesListComponent } from './store-types-list.component';

describe('StoreTypesListComponent', () => {
  let component: StoreTypesListComponent;
  let fixture: ComponentFixture<StoreTypesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreTypesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
