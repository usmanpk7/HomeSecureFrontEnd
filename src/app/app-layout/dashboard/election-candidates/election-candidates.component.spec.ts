import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionCandidatesComponent } from './election-candidates.component';

describe('ElectionCandidatesComponent', () => {
  let component: ElectionCandidatesComponent;
  let fixture: ComponentFixture<ElectionCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionCandidatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
