import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionGalleryDetailComponent } from './election-gallery-detail.component';

describe('ElectionGalleryDetailComponent', () => {
  let component: ElectionGalleryDetailComponent;
  let fixture: ComponentFixture<ElectionGalleryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionGalleryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionGalleryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
