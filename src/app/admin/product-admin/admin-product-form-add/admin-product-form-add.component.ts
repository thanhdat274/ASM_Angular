import { CategoryService } from './../../../services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryType } from 'src/app/type/category';
import { UploadService } from 'src/app/services/upload/upload.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-product-form-add',
  templateUrl: './admin-product-form-add.component.html',
  styleUrls: ['./admin-product-form-add.component.css']
})
export class AdminProductFormAddComponent implements OnInit {

  productForm: FormGroup;
  category: CategoryType[];
  img: string;
  productData: any
  constructor(
    private productService: ProductService,
    private router: Router,
    private categoryService: CategoryService,
    private uploadImg: UploadService,
    private http: HttpClient
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100)
      ]),
      price: new FormControl('', [
        Validators.required
      ]),
      sale_price: new FormControl('', [
        Validators.required
      ]),
      quantity: new FormControl('', [
        Validators.required
      ]),
      short_desc: new FormControl('', [
        Validators.required
      ]),
      desc: new FormControl('', [
        Validators.required
      ]),
      img: new FormControl(''),
      categoryId: new FormControl(0)
    })
    this.category = []
    this.img = '';
  }

  ngOnInit(): void {
    this.categoryService.listCate().subscribe(data => {
      this.category = data
    })
  }

  onSubmit(): void {
    console.log(1);

    const CLOUDINARY_PRESET_KEY = "js8yqruv";
    const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dvj4wwihv/image/upload";

    if (this.img) {
      const formData = new FormData();
      formData.append("file", this.img);
      formData.append("upload_preset", CLOUDINARY_PRESET_KEY);
      this.http.post(CLOUDINARY_API_URL, formData).subscribe((data: any) => {
        this.productData = {
          categoryId: this.productForm.value.categoryId,
          name: this.productForm.value.name,
          price: this.productForm.value.price,
          sale_price: this.productForm.value.price,
          quantity: this.productForm.value.quantity,
          short_desc: this.productForm.value.short_desc,
          img: data.url,
          desc: this.productForm.value.desc

        }
        console.log(this.productData);
        this.productService.addProducts(this.productData).subscribe(data => {
          this.router.navigateByUrl('/admin/products')
        })
      })
    }
  }
  upload(event: any) {
    this.img = event.target.files[0];
    console.log(this.img);
  }
}
