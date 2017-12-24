import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  url = "https://jsonplaceholder.typicode.com/posts";
  products;

  selectedProductId: any;
  constructor(private http: Http) {
    this.http.get(this.url).subscribe(res => {
      this.products = res.json();
    });
  }


  viewDetails(selectedId) {
    this.selectedProductId = 0;
    setTimeout(() => {
      this.selectedProductId = selectedId;
    }, 2000);

  }

}
