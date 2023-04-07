import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticalPartyGradingComponent } from './political-party-grading.component';

describe('PoliticalPartyGradingComponent', () => {
  let component: PoliticalPartyGradingComponent;
  let fixture: ComponentFixture<PoliticalPartyGradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticalPartyGradingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticalPartyGradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
