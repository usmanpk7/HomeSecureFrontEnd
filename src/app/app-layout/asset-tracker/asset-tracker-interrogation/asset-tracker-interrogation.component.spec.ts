import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTrackerInterrogationComponent } from './asset-tracker-interrogation.component';

describe('AssetTrackerInterrogationComponent', () => {
  let component: AssetTrackerInterrogationComponent;
  let fixture: ComponentFixture<AssetTrackerInterrogationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetTrackerInterrogationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetTrackerInterrogationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
