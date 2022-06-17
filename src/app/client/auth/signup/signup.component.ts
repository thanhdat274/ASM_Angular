import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.signup = new FormGroup({
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
      ])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const submitData = this.signup.value;
    return this.authService.addUser(submitData).subscribe(data => {
      this.router.navigateByUrl('/')
    })
  }
}
