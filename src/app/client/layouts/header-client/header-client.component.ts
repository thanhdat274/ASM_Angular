import { Component, OnInit } from '@angular/core';
import { CategoryType } from 'src/app/type/category';
import { CategoryService } from '../../../services/category/category.service';
import { Router } from '@angular/router';
import { toUnicode } from 'punycode';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.css']
})
export class HeaderClientComponent implements OnInit {
  category: CategoryType[];
  userLogin: any
  cartValue: any
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.category = [];
    this.userLogin = JSON.parse(localStorage.getItem('loggedInUser')!);
    this.cartValue = JSON.parse(localStorage.getItem('cart')!);
    console.log(' this.userLogin', this.userLogin);

  }

  ngOnInit(): void {
    this.categoryService.listCate().subscribe((data) => {
      this.category = data;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false
    })
  }
  logout() {
    let cf = window.confirm("Bạn chắc chắn muốn đăng xuất?");
    if (cf) {
      localStorage.removeItem('loggedInUser');
      this.toastr.success("Đăng xuất thành công");

      setTimeout(() => {
        this.router.navigate(['/auth/signin'])
      }, 2000);
    }

  }

}
