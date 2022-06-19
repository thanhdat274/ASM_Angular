import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signin: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.signin = new FormGroup({
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16)
      ]),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.login(this.signin.value).subscribe(data => {
      localStorage.setItem('loggedInUser', JSON.stringify(data));
      this.toastr.success("Đăng nhập thành công. Chuyển trang sau 2s")
      setTimeout(() => {
        this.router.navigateByUrl('/')
      }, 2000);
    });
  }
}
