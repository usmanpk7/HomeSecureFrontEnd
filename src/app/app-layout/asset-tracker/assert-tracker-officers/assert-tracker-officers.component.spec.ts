import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssertTrackerOfficersComponent } from './assert-tracker-officers.component';

describe('AssertTrackerOfficersComponent', () => {
  let component: AssertTrackerOfficersComponent;
  let fixture: ComponentFixture<AssertTrackerOfficersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssertTrackerOfficersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssertTrackerOfficersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
