import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CartItems } from 'src/app/data/cart-items';

@Component({
  selector: 'app-price-info',
  templateUrl: './price-info.component.html',
  styleUrls: ['./price-info.component.css']
})
export class PriceInfoComponent implements OnInit {

  priceListArray = Array<{ qty: number, cost: number }>();

  priceListLimit = 50;

  constructor(private http: HttpClient) {

  }

  @Input('cartItem') cartItem!: CartItems;

  ngOnInit(): void {
    // Simple GET request
    this.http.get<any>('http://localhost:8080/products/calculate/price-list/' + this.cartItem.itemId + '/' + this.priceListLimit).subscribe(data => {
      this.priceListArray = data;
    })



  }

}
