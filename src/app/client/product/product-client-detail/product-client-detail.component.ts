import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';
import { Product } from '../../../type/products';
import { LocalStorageService } from '../../../services/LocalStorage/local-storage.service';

@Component({
  selector: 'app-product-client-detail',
  templateUrl: './product-client-detail.component.html',
  styleUrls: ['./product-client-detail.component.css']
})
export class ProductClientDetailComponent implements OnInit {
  _id: string ;
  product : Product;
  cartValue: number;
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private lsService: LocalStorageService
    ) {
    this._id = '';
    this.product = {
      _id: 0,
      name: '',
      price: 0,
      sale_price: 0,
      quantity: 0,
      short_desc: '',
      desc: '',
      img: '',
      categoryId: 0
    }
    this.cartValue = 1;
   }

  ngOnInit(): void {
    this._id = this.activateRoute.snapshot.params['id'];
    this.productService.getProduct(this._id).subscribe((data) => {
      this.product = data;
    });
  }

  onChangeCartValue(event: any) {
    this.cartValue = event.target.value;
  }

  onAddToCart() {
    const addItem = {
      ...this.product,
      value: +this.cartValue
    };
    this.lsService.setItem(addItem);
    this.cartValue = 1;

  }
}
