import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CanAccessAdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private toasrt: ToastrService
  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const loggerInUer = JSON.parse(localStorage.getItem('loggedInUser')!);
    if (loggerInUer) {
      if (loggerInUer?.user?.role == '1') {
        return true;
      }
      else {
        this.toasrt.info("Bạn không có quyền truy cập");
        this.router.navigateByUrl('/')
        return false
      }
    } else {
      this.toasrt.info("Bạn chưa đăng nhập. Vui lòng mời bạn đăng nhập!");
      this.router.navigateByUrl('/auth/signin')
      return false;
    }
  }

}
