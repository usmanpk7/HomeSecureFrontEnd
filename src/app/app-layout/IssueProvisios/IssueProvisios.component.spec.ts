/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IssueProvisiosComponent } from './IssueProvisios.component';

describe('IssueProvisiosComponent', () => {
  let component: IssueProvisiosComponent;
  let fixture: ComponentFixture<IssueProvisiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueProvisiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueProvisiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
