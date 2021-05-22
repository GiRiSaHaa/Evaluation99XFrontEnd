import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CartItems } from 'src/app/data/cart-items';

@Component({
  selector: 'app-price-info',
  templateUrl: './price-info.component.html',
  styleUrls: ['./price-info.component.css']
})
export class PriceInfoComponent implements OnInit {

  priceListArray = Array<{qty: number, cost: number}>();

  constructor(private http: HttpClient) {
    
  }

  @Input('cartItem') cartItem!: CartItems;

  ngOnInit(): void {
    // Simple GET request
    for (let index = 1; index <= 50; index++) {
      this.http.get<any>('http://localhost:8080/products/calculate/'+this.cartItem.itemId+'/'+index).subscribe(data => {
      this.priceListArray.push({qty:index,cost:data})      
    })
      
    }
    
  }

}
