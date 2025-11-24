import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.html',
  imports: [CommonModule],
  styleUrl: './products.css',
})
export class Products {
 product: any;

  constructor(private http: HttpClient) {
    this.http.get('https://dummyjson.com/products/1').subscribe(data => {
      this.product = data;
    });
  }
}
