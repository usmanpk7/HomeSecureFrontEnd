import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionAnalyticsComponent } from './election-analytics.component';

describe('ElectionAnalyticsComponent', () => {
  let component: ElectionAnalyticsComponent;
  let fixture: ComponentFixture<ElectionAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
