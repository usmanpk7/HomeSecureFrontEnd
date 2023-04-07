import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceAntennaComponent } from './device-antenna.component';

describe('DeviceAntennaComponent', () => {
  let component: DeviceAntennaComponent;
  let fixture: ComponentFixture<DeviceAntennaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceAntennaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceAntennaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
