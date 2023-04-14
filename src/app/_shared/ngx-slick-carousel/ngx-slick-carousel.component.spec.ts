import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSlickCarouselComponent } from './ngx-slick-carousel.component';

describe('NgxSlickCarouselComponent', () => {
  let component: NgxSlickCarouselComponent;
  let fixture: ComponentFixture<NgxSlickCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSlickCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSlickCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
