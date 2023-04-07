import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentLivefeedComponent } from './incident-livefeed.component';

describe('IncidentLivefeedComponent', () => {
  let component: IncidentLivefeedComponent;
  let fixture: ComponentFixture<IncidentLivefeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentLivefeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentLivefeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
