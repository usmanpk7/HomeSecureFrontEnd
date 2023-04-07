import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentOperationComponent } from './incident-operation.component';

describe('IncidentOperationComponent', () => {
  let component: IncidentOperationComponent;
  let fixture: ComponentFixture<IncidentOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
