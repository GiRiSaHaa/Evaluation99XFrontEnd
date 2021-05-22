import { HttpClient } from '@angular/common/http';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';

import { CartItems } from '../data/cart-items';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  constructor(private http: HttpClient) { }

  cartItemList: CartItems[] = [
    {
      itemId : 1,
      name:'Penguin-ears',
      qty: 1,
      unitPrice: 11.38,
      total: 11.38,
      unitPerCarton: 20,
      cartonPrice: 175
    },
    {
      itemId : 2,
      name:'Horseshoe',
      qty: 1,
      unitPrice: 214.50,
      total: 214.50,
      unitPerCarton: 5,
      cartonPrice: 825
    }
  ];

  total = 0;

  ngOnInit(): void {
    for (var cartItem of this.cartItemList) {
      this.total = this.total + cartItem.total;
    }
  }

  onEnter(event: any, item: number) { 
    
    this.cartItemList[item-1].qty = event.target.valueAsNumber;

    // Simple POST request with a JSON body and response type <any>
    this.http.get<any>('http://localhost:8080/products/calculate/'+item+'/'+this.cartItemList[item-1].qty).subscribe(data => {
      this.cartItemList[item-1].total = data;
      this.total = getTotal(this.cartItemList);
    })   
    
  }

}
function getTotal(cartItemList: CartItems[]): number {
  let sum = 0;
  for (var cartItem of cartItemList) {
    sum = sum + cartItem.total;
  }
  return sum;
}

