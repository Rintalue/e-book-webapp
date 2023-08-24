import { Component, OnInit } from '@angular/core';

import { Input } from '@angular/core';
@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {
  @Input() cartItems: any[] = [];
  @Input() totalPrice: number = 0;
  @Input() orderDate: string = '';
  @Input() orderNumber: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
