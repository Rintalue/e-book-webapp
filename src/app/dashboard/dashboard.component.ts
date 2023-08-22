import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements  AfterViewInit{
  @ViewChild('booksSlider') booksSlider: ElementRef | undefined;
  @ViewChild('featuredSlider') featuredSlider: ElementRef | undefined;
  @ViewChild('arrivalsSlider') arrivalsSlider: ElementRef | undefined;
  private swiper: Swiper | null = null;

  ngAfterViewInit(): void {
    if (this.booksSlider) {
      this.swiper = new Swiper(this.booksSlider.nativeElement, {
        direction: 'horizontal',
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 9500,
          disableOnInteraction: false,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });
      console.log('Swiper instance created: ', this.swiper);
    }
    if (this.featuredSlider) {
      this.swiper = new Swiper(this.featuredSlider.nativeElement, {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 10,
        centeredSlides: true,
        autoplay: {
          delay: 9500,
          disableOnInteraction: false,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          450:{
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        },
      });
      console.log('Swiper instance created: ', this.swiper);
    }
    if (this.arrivalsSlider) {
      this.swiper = new Swiper(this.arrivalsSlider.nativeElement, {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 10,
        centeredSlides: true,
        autoplay: {
          delay: 9500,
          disableOnInteraction: false,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });
      console.log('Swiper instance created: ', this.swiper);
    }
  }

  ngOnDestroy(): void {
    if (this.swiper) {
      this.swiper.destroy();
    }
  }
}
