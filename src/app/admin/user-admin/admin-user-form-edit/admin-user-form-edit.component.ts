import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-user-form-edit',
  templateUrl: './admin-user-form-edit.component.html',
  styleUrls: ['./admin-user-form-edit.component.css']
})
export class AdminUserFormEditComponent implements OnInit {
  userForm: FormGroup;
  userId: string;
  img: string;
  userData: any
  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
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
      password: new FormControl(''),
      phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(10)
      ]),
      address: new FormControl('', [
        Validators.required,
      ]),
      img: new FormControl(''),
      role: new FormControl('')
    })
    this.userId = '0'
    this.img = ''
  }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id'];
    if (this.userId) {
      this.authService.listOneUser(this.userId).subscribe(data => {
        this.img = data.img
        this.userForm.patchValue({
          name: data.name,
          email: data.email,
          password: data.password,
          phone: data.phone,
          address: data.address,
          role: data.role
        });
      });
    }
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
          phone: this.userForm.value.phone,
          address: this.userForm.value.address,
          role: this.userForm.value.role,
          img: data.url
        }
        console.log(this.userData);
        this.authService.updateUser(this.userId, this.userData).subscribe(data => {
          this.img = this.userData.img;
          this.toastr.success("Cập nhật thành công. Chuyển trang sau 2s")
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
