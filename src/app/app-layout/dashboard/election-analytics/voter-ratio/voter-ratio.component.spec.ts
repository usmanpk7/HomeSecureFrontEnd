import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterRatioComponent } from './voter-ratio.component';

describe('VoterRatioComponent', () => {
  let component: VoterRatioComponent;
  let fixture: ComponentFixture<VoterRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoterRatioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
