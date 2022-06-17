import { CategoryService } from './../../../services/category/category.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { CategoryType } from 'src/app/type/category';

@Component({
  selector: 'app-admin-product-form-edit',
  templateUrl: './admin-product-form-edit.component.html',
  styleUrls: ['./admin-product-form-edit.component.css']
})
export class AdminProductFormEditComponent implements OnInit {

  productForm: FormGroup;
  productId: string;
  category: CategoryType[]

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoryService:CategoryService
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
      img: new FormControl('',[
        Validators.required
      ]),
      categoryId: new FormControl(0)
    })
    this.productId = '0';
    this.category =[]
  }

  ngOnInit(): void {
    this.categoryService.listCate().subscribe(data=>{
      this.category = data
    })
    this.productId = this.activatedRoute.snapshot.params['id'];
    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe(data => {
        this.productForm.patchValue({
          categoryId: data.categoryId,
          name: data.name,
          price: data.price,
          sale_price: data.price,
          quantity: data.quantity,
          short_desc: data.short_desc,
          desc: data.desc,
          // img: data.img,
        });
      });
    }
  }

  onValidateNameProduct(control: AbstractControl): ValidationErrors | null {
    const { value } = control;
    if (!value.includes('product')) {
      return { hasProductError: true };
    }
    return null;
  }
  onSubmit() {

    console.log(this.productForm.value);
    const submitData = this.productForm.value;
    return this.productService.updateProduct(this.productId, submitData).subscribe(data => {
      this.router.navigateByUrl('/admin/products');
    });
  }
}
