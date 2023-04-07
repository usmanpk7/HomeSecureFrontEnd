import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionPollingActivityTimelineComponent } from './election-polling-activity-timeline.component';

describe('ElectionPollingActivityTimelineComponent', () => {
  let component: ElectionPollingActivityTimelineComponent;
  let fixture: ComponentFixture<ElectionPollingActivityTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionPollingActivityTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionPollingActivityTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
