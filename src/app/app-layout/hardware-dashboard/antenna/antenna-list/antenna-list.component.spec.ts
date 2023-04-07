import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntennaListComponent } from './antenna-list.component';

describe('AntennaListComponent', () => {
  let component: AntennaListComponent;
  let fixture: ComponentFixture<AntennaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntennaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntennaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
