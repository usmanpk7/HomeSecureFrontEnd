import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescueActivityComponent } from './rescue-activity.component';

describe('RescueActivityComponent', () => {
  let component: RescueActivityComponent;
  let fixture: ComponentFixture<RescueActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RescueActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RescueActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
