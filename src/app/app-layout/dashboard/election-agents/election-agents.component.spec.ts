import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionAgentsComponent } from './election-agents.component';

describe('ElectionAgentsComponent', () => {
  let component: ElectionAgentsComponent;
  let fixture: ComponentFixture<ElectionAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionAgentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
