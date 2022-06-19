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
    let cf = window.confirm("Bạn chắc chắn muốn đăng xuất?");
    if (cf) {
      localStorage.removeItem('loggedInUser');
      this.toastr.success("Đăng xuất thành công");
      setTimeout(() => {
        this.router.navigate(['/auth/signin'])
      }, 1000);
    }
  }

}
