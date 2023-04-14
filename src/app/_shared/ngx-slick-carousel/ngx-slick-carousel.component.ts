import { Component, ElementRef, Input, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import 'slick-carousel';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-ngx-slick-carousel',
  templateUrl:  './ngx-slick-carousel.component.html',
  styleUrls: ['./ngx-slick-carousel.component.scss']
})
export class NgxSlickCarouselComponent  {
  @ViewChild('carousel') carousel!: SlickCarouselComponent;

  @Input() slides!: Array<string> | undefined;
  currentSlideIndex:number = 0
  carouselConfig: any  = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    speed: 500,
  };
  afterChange($event:any){
    this.currentSlideIndex = $event.currentSlide
  }
  isActiveBullet(index: number): boolean {
    return index === this.currentSlideIndex;
  }
  goToSlide(index: number): void {
    jQuery(this.carousel).slick('slickGoTo', index);
  }
}
