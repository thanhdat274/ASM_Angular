import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-client-cate-list-pro',
  templateUrl: './product-client-cate-list-pro.component.html',
  styleUrls: ['./product-client-cate-list-pro.component.css']
})
export class ProductClientCateListProComponent implements OnInit {
  productsByCate: any[] = [];
  cateSlug: string;
  cateName: string;
  authorBook: any;
  constructor(
    private categoryService: CategoryService,
    private activateRoute: ActivatedRoute,
    private router:Router
  ) {
    this.cateSlug = '';
    this.cateName = '';
  }

  ngOnInit(): void {
    this.cateSlug = this.activateRoute.snapshot.params['id'];
    this.categoryService.listOneCateAndPro(this.cateSlug).subscribe((data) => {
      console.log('data',data);

      this.cateName = data.categoryId?.name;
      this.productsByCate = data.product;
    });
  }
}
