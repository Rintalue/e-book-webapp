import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('booksSlider') booksSlider: ElementRef | undefined;

  private swiper: Swiper | null = null;

  ngOnInit(): void {
    if (this.booksSlider) {
      this.swiper = new Swiper(this.booksSlider.nativeElement, {
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
    }
  }

  ngOnDestroy(): void {
    if (this.swiper) {
      this.swiper.destroy();
    }
  }
}
