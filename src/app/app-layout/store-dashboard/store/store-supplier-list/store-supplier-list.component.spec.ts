import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSupplierListComponent } from './store-supplier-list.component';

describe('StoreSupplierListComponent', () => {
  let component: StoreSupplierListComponent;
  let fixture: ComponentFixture<StoreSupplierListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreSupplierListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSupplierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
