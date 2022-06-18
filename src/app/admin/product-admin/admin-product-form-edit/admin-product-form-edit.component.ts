import { CategoryService } from './../../../services/category/category.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { CategoryType } from 'src/app/type/category';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-product-form-edit',
  templateUrl: './admin-product-form-edit.component.html',
  styleUrls: ['./admin-product-form-edit.component.css']
})
export class AdminProductFormEditComponent implements OnInit {

  productForm: FormGroup;
  productId: string;
  category: CategoryType[]
  img: string;
  productData: any

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoryService:CategoryService,
    private http: HttpClient
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32)
      ]),
      price: new FormControl('',[
        Validators.required
      ]),
      sale_price: new FormControl('',[
        Validators.required
      ]),
      quantity: new FormControl('',[
        Validators.required
      ]),
      short_desc: new FormControl('',[
        Validators.required
      ]),
      desc: new FormControl('',[
        Validators.required
      ]),
      img: new FormControl(''),
      categoryId: new FormControl(0)
    })
    this.productId = '0';
    this.category =[];
    this.img=''
  }

  ngOnInit(): void {
    this.categoryService.listCate().subscribe(data=>{
      this.category = data
    })
    this.productId = this.activatedRoute.snapshot.params['id'];
    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe(data => {
        this.img = data.img
        this.productForm.patchValue({
          categoryId: data.categoryId,
          name: data.name,
          price: data.price,
          sale_price: data.price,
          quantity: data.quantity,
          short_desc: data.short_desc,
          desc: data.desc,
        });
      });
    }
  }
  onSubmit() {
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
        this.productService.updateProduct(this.productId, this.productData).subscribe(data => {
          this.img= this.productData.img;
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
