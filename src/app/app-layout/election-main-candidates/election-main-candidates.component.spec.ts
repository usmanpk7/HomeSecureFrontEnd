import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionMainCandidatesComponent } from './election-main-candidates.component';

describe('ElectionMainCandidatesComponent', () => {
  let component: ElectionMainCandidatesComponent;
  let fixture: ComponentFixture<ElectionMainCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionMainCandidatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionMainCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
