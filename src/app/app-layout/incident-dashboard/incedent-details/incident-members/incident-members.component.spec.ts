import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentMembersComponent } from './incident-members.component';

describe('IncidentMembersComponent', () => {
  let component: IncidentMembersComponent;
  let fixture: ComponentFixture<IncidentMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
