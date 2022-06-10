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
    private authService:AuthService,
    private router: Router
  ) {
    this.signin = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.login(this.signin.value).subscribe(data => {
      // 2. Lưu thông tin user vào localStorage: setItem(tên key lưu vào ls, dữ liệu string)
      localStorage.setItem('loggedInUser', JSON.stringify(data));
      // localStorage.getItem('loggedInUser');
      // 3. di chuyển về màn admin/products
      this.router.navigateByUrl('/admin/products');
    });
  }
}
