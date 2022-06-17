import { Component, OnInit } from '@angular/core';
import { Product } from '../../../type/products';
import { ProductService } from '../../../services/product/product.service';
import { CategoryType } from '../../../type/category';

@Component({
  selector: 'app-product-client-cate-list-pro',
  templateUrl: './product-client-cate-list-pro.component.html',
  styleUrls: ['./product-client-cate-list-pro.component.css']
})
export class ProductClientCateListProComponent implements OnInit {

  products: Product[];
  cate: CategoryType[]
  constructor(private productService: ProductService) {
    this.products = [];
    this.cate =[]
   }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products = data;
    })
  }
}
