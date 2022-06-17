import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  logout() {
    localStorage.removeItem('loggedInUser');
    this.toastr.success('Logout success');
    this.router.navigate(['/auth/signin']);
  }

}
