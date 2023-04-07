import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticalActivityComponent } from './political-activity.component';

describe('PoliticalActivityComponent', () => {
  let component: PoliticalActivityComponent;
  let fixture: ComponentFixture<PoliticalActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticalActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticalActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
