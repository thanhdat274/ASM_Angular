import { Component, OnInit } from '@angular/core';
import { Product } from '../../type/products';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductService) {
    this.products = [];
   }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products = data;
    })
  }

}
