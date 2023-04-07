import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTrackerSearchbarComponent } from './asset-tracker-searchbar.component';

describe('AssetTrackerSearchbarComponent', () => {
  let component: AssetTrackerSearchbarComponent;
  let fixture: ComponentFixture<AssetTrackerSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetTrackerSearchbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetTrackerSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
