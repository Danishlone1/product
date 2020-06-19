import { Component, OnInit } from '@angular/core';
import { Products } from './product';
@Component({
  selector: 'app-common',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class productListComponent implements OnInit{
  productList: Products[] = [
    new Products(1, 'Laptop', 'Available', 1100, 10000),
    new Products(2, 'TVs', 'Available', 30000, 334),
    new Products(3, 'Shoes', 'Available', 40000, 2233),
    new Products(4, 'Tabs', 'Not Available', 200, 33444),
  ];
constructor() {
}
  ngOnInit(): void {
  }
}
