import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoductServiceService {

  constructor() { }
  bookDetails =[{
    bookId: 1,
    bookName:"The GodFather",
    bookPrice:50,
    bookImg:"../../../assets/bookcovers/cover1.png",
    bookQuantity: 1
  },
  {
    bookId: 2,
    bookName:"The GodFather",
    bookPrice:50,
    bookImg:"../../../assets/bookcovers/cover1.png",
    bookQuantity: 1
},
{
    bookId:3,
    bookName:"The GodFather",
    bookPrice:50,
    bookImg:"../../../assets/bookcovers/cover1.png",
    bookQuantity: 1
},
{
  bookId:4,
  bookName:"The GodFather",
  bookPrice:50,
  bookImg:"../../../assets/bookcovers/cover1.png",
  bookQuantity: 1
}
]
}
