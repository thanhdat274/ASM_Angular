import { CategoryService } from './../../../services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryType } from 'src/app/type/category';
import { UploadService } from 'src/app/services/upload/upload.service';

@Component({
  selector: 'app-admin-product-form-add',
  templateUrl: './admin-product-form-add.component.html',
  styleUrls: ['./admin-product-form-add.component.css']
})
export class AdminProductFormAddComponent implements OnInit {

  productForm: FormGroup;
  category: CategoryType[];
  file: any
  constructor(
    private productService: ProductService,
    private router: Router,
    private categoryService:CategoryService,
    private uploadImg: UploadService,
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100)
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
      img: new FormControl('',[
        Validators.required
      ]),
      categoryId: new FormControl(0)
    })
    this.category =[]
  }

  ngOnInit(): void {
    this.categoryService.listCate().subscribe(data=>{
      this.category = data
    })
  }
  onValidateNameProduct(control: AbstractControl): ValidationErrors | null {
    const { value } = control;
    if (!value.includes('product')) {
      return { hasProductError: true };
    }
    return null;
  }
  onSubmit() {
    const submitData = this.productForm.value;
    return this.productService.addProducts(submitData).subscribe(data => {
      this.router.navigateByUrl('/admin/products')
    })
  }
}
