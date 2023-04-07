import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreManufacturerListComponent } from './store-manufacturer-list.component';

describe('StoreManufacturerListComponent', () => {
  let component: StoreManufacturerListComponent;
  let fixture: ComponentFixture<StoreManufacturerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreManufacturerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreManufacturerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
