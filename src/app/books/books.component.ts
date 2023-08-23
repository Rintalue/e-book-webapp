import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { PoductServiceService } from '../poduct-service.service';
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
constructor(private productservice: PoductServiceService){}
bookData:any;

ngOnInit(): void {
  this.bookData=this.productservice.bookDetails;
}
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
  }
handleQuantityInc(bd:any){
  if(bd.bookQuantity !=15){
    bd.bookQuantity += 1;
  }
  }

handleQuantityDec(bd:any){
  if(bd.bookQuantity !=1){
    bd.bookQuantity -= 1;
  }
}
itemsCart:any=[];
addToCart(category:any){
  console.warn(category);
  let cartDataNull=localStorage.getItem('localCart');
  if(cartDataNull == null){
    let storeDataGet: any=[];
    storeDataGet.push(category);
    localStorage.setItem('localCart', JSON.stringify(storeDataGet));
  }else{
    var id = category.bookId;
    let index:number= -1;
    this.itemsCart = JSON.parse(cartDataNull);
   for(let i=0; i<this.itemsCart.length; i++){
    if(parseInt(id) === parseInt(this.itemsCart[i].id)){
      this.itemsCart[i].bookQuantity = category.bookQuantity;
      index = i;
      break;
   }
  }
  if(index == -1){
    this.itemsCart.push(category);
    localStorage.setItem('localCart',JSON.stringify(this.itemsCart))
    alert('Successfully added to Cart')
  }else{
    localStorage.setItem('localCart',JSON.stringify(this.itemsCart))
  }
  }}

}
