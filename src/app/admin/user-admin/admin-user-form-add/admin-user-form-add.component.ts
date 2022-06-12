import { Component, OnInit } from '@angular/core';
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
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.userForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32)
      ]),
      email:new FormControl('', [
        Validators.required
      ]),
      password:new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16)
      ]),
      phone:new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]),
      address:new FormControl('', [
        Validators.required,
      ]),
      // img:new FormControl('', [
      //   Validators.required,
      // ]),
      role: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const submitData = this.userForm.value;
    return this.authService.addUser(submitData).subscribe(data => {
      this.router.navigateByUrl('/admin/user')
    })
  }
}
