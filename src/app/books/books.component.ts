import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements  AfterViewInit{
  @ViewChild('booksSlider') booksSlider: ElementRef | undefined;
  @ViewChild('books2Slider') books2Slider: ElementRef | undefined;
  private swiper: Swiper | null = null;

  ngAfterViewInit(): void {
    if (this.booksSlider) {
      this.swiper = new Swiper(this.booksSlider.nativeElement, {
        loop: true,
        spaceBetween:20,
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
          1020: {
            slidesPerView: 3,
          },
        },
      });
      console.log('Swiper instance created: ', this.swiper);
    }
    if (this.books2Slider) {
      this.swiper = new Swiper(this.books2Slider.nativeElement, {
        loop: true,
        spaceBetween:20,
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
          1020: {
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
  }}
