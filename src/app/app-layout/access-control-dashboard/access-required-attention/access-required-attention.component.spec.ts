import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessRequiredAttentionComponent } from './access-required-attention.component';

describe('AccessRequiredAttentionComponent', () => {
  let component: AccessRequiredAttentionComponent;
  let fixture: ComponentFixture<AccessRequiredAttentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessRequiredAttentionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessRequiredAttentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
