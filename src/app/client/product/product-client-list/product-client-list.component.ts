import { Component, OnInit } from '@angular/core';
import { Product } from '../../../type/products';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-product-client-list',
  templateUrl: './product-client-list.component.html',
  styleUrls: ['./product-client-list.component.css']
})
export class ProductClientListComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    })
  }

}
