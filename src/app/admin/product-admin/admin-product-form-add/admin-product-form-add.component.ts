import { ProductService } from 'src/app/services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-product-form-add',
  templateUrl: './admin-product-form-add.component.html',
  styleUrls: ['./admin-product-form-add.component.css']
})
export class AdminProductFormAddComponent implements OnInit {

  productForm: FormGroup;
  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32)
      ]),
      price: new FormControl(0,[
        Validators.required
      ]),
      quantity: new FormControl(0,[
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
      // categoryId: new FormControl(0)
    })
  }

  ngOnInit(): void {
  }

  onValidateNameProduct(control: AbstractControl): ValidationErrors | null {
    const { value } = control;
    if (!value.includes('product')) {
      return { hasProductError: true };
    }
    return null;
  }
  onSubmit() {

    // console.log(this.productForm.value);
    const submitData = this.productForm.value;
    return this.productService.addProducts(submitData).subscribe(data => {
      this.router.navigateByUrl('/admin/products')
    })
  }
}
