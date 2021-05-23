import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Simple GET request
    this.http.get<any>('http://localhost:8080/product/products').subscribe(data => {
      this.products = data;

      console.log(this.products);
    })
  }

}
