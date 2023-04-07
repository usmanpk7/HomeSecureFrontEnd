import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessControlDashboardComponent } from './access-control-dashboard.component';

describe('AccessControlDashboardComponent', () => {
  let component: AccessControlDashboardComponent;
  let fixture: ComponentFixture<AccessControlDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessControlDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessControlDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
