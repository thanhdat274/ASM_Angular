import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/type/products';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  _id: string
  product: Product;
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService

  ) {
    this._id = '';
    this.product ={
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
  }

  ngOnInit(): void {
    this._id = this.activateRoute.snapshot.params["id"];
    console.log(this._id);
    this.productService.getProduct(this._id).subscribe((data) => {
      this.product = data;
      console.log(data);

    })

  }

}
