import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentViewComponent } from './intent-view.component';

describe('IntentViewComponent', () => {
  let component: IntentViewComponent;
  let fixture: ComponentFixture<IntentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
