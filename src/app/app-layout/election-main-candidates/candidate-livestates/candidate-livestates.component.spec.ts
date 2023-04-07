import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateLivestatesComponent } from './candidate-livestates.component';

describe('CandidateLivestatesComponent', () => {
  let component: CandidateLivestatesComponent;
  let fixture: ComponentFixture<CandidateLivestatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateLivestatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateLivestatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
