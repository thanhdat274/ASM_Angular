import { ToastrService } from 'ngx-toastr';
import { CategoryService } from './../../../services/category/category.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-category-form-edit',
  templateUrl: './admin-category-form-edit.component.html',
  styleUrls: ['./admin-category-form-edit.component.css']
})
export class AdminCategoryFormEditComponent implements OnInit {

  cateForm: FormGroup;
  cateId: string
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.cateForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32)
      ])
    })
    this.cateId = '0'
  }

  ngOnInit(): void {
    this.cateId = this.activatedRoute.snapshot.params['id'];
    if (this.cateId) {
      this.categoryService.listOneCate(this.cateId).subscribe(data => {
        this.cateForm.patchValue({
          name: data.name
        });
      });
    }
  }

  onSubmit() {
    const submitData = this.cateForm.value;
    return this.categoryService.updateCate(this.cateId, submitData).subscribe(data => {
      this.toastr.success("Cập nhật thành công. Chuyển trang sau 2s")
      setTimeout(() => {
        this.router.navigateByUrl('/admin/category')
      }, 2000);

    })
  }

}
