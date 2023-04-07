import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessLockCardComponent } from './access-lock-card.component';

describe('AccessLockCardComponent', () => {
  let component: AccessLockCardComponent;
  let fixture: ComponentFixture<AccessLockCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessLockCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessLockCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
