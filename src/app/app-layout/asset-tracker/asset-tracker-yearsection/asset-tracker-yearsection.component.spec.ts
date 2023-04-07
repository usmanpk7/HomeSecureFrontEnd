import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTrackerYearsectionComponent } from './asset-tracker-yearsection.component';

describe('AssetTrackerYearsectionComponent', () => {
  let component: AssetTrackerYearsectionComponent;
  let fixture: ComponentFixture<AssetTrackerYearsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetTrackerYearsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetTrackerYearsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
