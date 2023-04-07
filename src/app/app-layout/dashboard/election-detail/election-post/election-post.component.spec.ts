import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionPostComponent } from './election-post.component';

describe('ElectionPostComponent', () => {
  let component: ElectionPostComponent;
  let fixture: ComponentFixture<ElectionPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
