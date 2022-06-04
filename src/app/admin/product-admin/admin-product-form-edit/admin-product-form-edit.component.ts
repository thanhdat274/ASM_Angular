import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-form-edit',
  templateUrl: './admin-product-form-edit.component.html',
  styleUrls: ['./admin-product-form-edit.component.css']
})
export class AdminProductFormEditComponent implements OnInit {

  productForm: FormGroup;
  productId: string;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32)
      ]),
      price: new FormControl(0),
      quantity: new FormControl(0),
      short_desc: new FormControl(''),
      desc: new FormControl(''),
      img: new FormControl(''),
      // categoryId: new FormControl(0)
    })
    this.productId = '0';
  }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe(data => {
        this.productForm.patchValue({
          name: data.name,
          price: data.price,
          quantity: data.quantity,
          short_desc: data.short_desc,
          desc: data.desc,
          img: data.img,
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
