import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqisTextCardDetailComponent } from './eqis-text-card-detail.component';

describe('EqisTextCardDetailComponent', () => {
  let component: EqisTextCardDetailComponent;
  let fixture: ComponentFixture<EqisTextCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EqisTextCardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EqisTextCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
