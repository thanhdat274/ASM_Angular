import { ToastrService } from 'ngx-toastr';
import { ProductService } from './../../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/type/products';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {

  products: Product[];
  constructor(
    private productService: ProductService,
    private toastr: ToastrService
  ) {
    this.products = [];
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    })
  }

  onDelete(_id: number) {
    const confirmDelete = confirm('Bạn chắc chắn muốn xóa không!');
    if (confirmDelete && _id) {
      this.productService.deleteProduct(_id).subscribe((data) => {
        this.toastr.success("Bạn đã xóa thành công")
        console.log(data);
        this.ngOnInit()
      })
    }
  }
}
