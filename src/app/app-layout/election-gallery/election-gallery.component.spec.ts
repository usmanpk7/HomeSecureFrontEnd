import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionGalleryComponent } from './election-gallery.component';

describe('ElectionGalleryComponent', () => {
  let component: ElectionGalleryComponent;
  let fixture: ComponentFixture<ElectionGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
