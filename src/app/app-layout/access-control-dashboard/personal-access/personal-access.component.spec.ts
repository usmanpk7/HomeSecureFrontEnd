import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAccessComponent } from './personal-access.component';

describe('PersonalAccessComponent', () => {
  let component: PersonalAccessComponent;
  let fixture: ComponentFixture<PersonalAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
