import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityNumberModelComponent } from './authority-number-model.component';

describe('AuthorityNumberModelComponent', () => {
  let component: AuthorityNumberModelComponent;
  let fixture: ComponentFixture<AuthorityNumberModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorityNumberModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorityNumberModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
