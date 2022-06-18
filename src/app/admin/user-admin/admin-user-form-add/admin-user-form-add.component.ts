import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, enableProdMode } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-user-form-add',
  templateUrl: './admin-user-form-add.component.html',
  styleUrls: ['./admin-user-form-add.component.css']
})
export class AdminUserFormAddComponent implements OnInit {
  userForm: FormGroup;
  img: string;
  userData: any
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient
  ) {
    this.userForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32)
      ]),
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16)
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]),
      address: new FormControl('', [
        Validators.required,
      ]),
      img: new FormControl(''),
      role: new FormControl('')
    })
    this.img = ''
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const CLOUDINARY_PRESET_KEY = "js8yqruv";
    const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dvj4wwihv/image/upload";

    if (this.img) {
      const formData = new FormData();
      formData.append("file", this.img);
      formData.append("upload_preset", CLOUDINARY_PRESET_KEY);
      this.http.post(CLOUDINARY_API_URL, formData).subscribe((data: any) => {
        this.userData = {
          name: this.userForm.value.name,
          email: this.userForm.value.email,
          password: this.userForm.value.password,
          phone: this.userForm.value.phone,
          address: this.userForm.value.address,
          role: this.userForm.value.role,
          img: data.url
        }
        console.log(this.userData);
        this.authService.addUser(this.userData).subscribe(data => {
          this.toastr.success("Thêm mới thành công. Chuyển trang sau 2s")
          setTimeout(() => {
            this.router.navigateByUrl('/admin/user')
          }, 2000);
        })
      })
    }
  }
  upload(event: any) {
    this.img = event.target.files[0];
    console.log(this.img);
  }
}
