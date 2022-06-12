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
  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute:ActivatedRoute
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
        Validators.maxLength(10)
      ]),
      address:new FormControl('', [
        Validators.required,
      ]),
      img:new FormControl('', [
        Validators.required,
      ]),
      role: new FormControl('')
    })
    this.userId = '0'
  }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id'];
    if (this.userId) {
      this.authService.listOneUser(this.userId).subscribe(data => {
        this.userForm.patchValue({
          name: data.name,
          email: data.email,
          password: data.password,
          phone: data.phone,
          address: data.address,
          role: data.role
          // img: data.img,
        });
      });
    }
  }

  onSubmit() {
    const submitData = this.userForm.value;
    return this.authService.updateUser(this.userId, submitData).subscribe(data => {
      this.router.navigateByUrl('/admin/user')
    })
  }
}
