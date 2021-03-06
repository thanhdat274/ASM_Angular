import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-category-form-add',
  templateUrl: './admin-category-form-add.component.html',
  styleUrls: ['./admin-category-form-add.component.css']
})
export class AdminCategoryFormAddComponent implements OnInit {
  cateForm: FormGroup;
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.cateForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32)
      ])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const submitData = this.cateForm.value;
    return this.categoryService.addCate(submitData).subscribe(data => {
      this.toastr.success("Thêm mới thành công. Chuyển trang sau 2s")
      setTimeout(() => {
        this.router.navigateByUrl('/admin/category')
      }, 2000);
    })
  }

}
