import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTrackerCriminalactivityComponent } from './asset-tracker-criminalactivity.component';

describe('AssetTrackerCriminalactivityComponent', () => {
  let component: AssetTrackerCriminalactivityComponent;
  let fixture: ComponentFixture<AssetTrackerCriminalactivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetTrackerCriminalactivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetTrackerCriminalactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
