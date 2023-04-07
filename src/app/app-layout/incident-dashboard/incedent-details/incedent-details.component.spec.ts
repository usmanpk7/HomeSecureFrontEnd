import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncedentDetailsComponent } from './incedent-details.component';

describe('IncedentDetailsComponent', () => {
  let component: IncedentDetailsComponent;
  let fixture: ComponentFixture<IncedentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncedentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncedentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
