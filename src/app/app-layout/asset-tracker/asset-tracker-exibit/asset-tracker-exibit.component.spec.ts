import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTrackerExibitComponent } from './asset-tracker-exibit.component';

describe('AssetTrackerExibitComponent', () => {
  let component: AssetTrackerExibitComponent;
  let fixture: ComponentFixture<AssetTrackerExibitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetTrackerExibitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetTrackerExibitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
