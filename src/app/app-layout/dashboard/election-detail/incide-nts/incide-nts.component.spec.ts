import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncideNtsComponent } from './incide-nts.component';

describe('IncideNtsComponent', () => {
  let component: IncideNtsComponent;
  let fixture: ComponentFixture<IncideNtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncideNtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncideNtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
