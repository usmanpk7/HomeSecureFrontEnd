import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionLivefeedsComponent } from './election-livefeeds.component';

describe('ElectionLivefeedsComponent', () => {
  let component: ElectionLivefeedsComponent;
  let fixture: ComponentFixture<ElectionLivefeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionLivefeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionLivefeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
