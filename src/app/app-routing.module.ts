import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminCategoryFormAddComponent } from './admin/category-admin/admin-category-form-add/admin-category-form-add.component';
import { AdminCategoryFormEditComponent } from './admin/category-admin/admin-category-form-edit/admin-category-form-edit.component';
import { AdminCategoryListComponent } from './admin/category-admin/admin-category-list/admin-category-list.component';
import { CategoryAdminComponent } from './admin/category-admin/category-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminProductDetailComponent } from './admin/product-admin/admin-product-detail/admin-product-detail.component';
import { AdminProductFormAddComponent } from './admin/product-admin/admin-product-form-add/admin-product-form-add.component';
import { AdminProductFormEditComponent } from './admin/product-admin/admin-product-form-edit/admin-product-form-edit.component';
import { AdminProductListComponent } from './admin/product-admin/admin-product-list/admin-product-list.component';
import { ProductAdminComponent } from './admin/product-admin/product-admin.component';
import { AdminUserFormAddComponent } from './admin/user-admin/admin-user-form-add/admin-user-form-add.component';
import { AdminUserFormEditComponent } from './admin/user-admin/admin-user-form-edit/admin-user-form-edit.component';
import { AdminUserListComponent } from './admin/user-admin/admin-user-list/admin-user-list.component';
import { UserAdminComponent } from './admin/user-admin/user-admin.component';
import { SigninComponent } from './client/auth/signin/signin.component';
import { SignupComponent } from './client/auth/signup/signup.component';
import { CartComponent } from './client/cart/cart.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './client/home/home.component';
import { ProductClientDetailComponent } from './client/product/product-client-detail/product-client-detail.component';
import { ProductClientListComponent } from './client/product/product-client-list/product-client-list.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'sanpham',
        component: ProductClientListComponent
      },
      {
        path: 'sanpham/:id',
        component: ProductClientDetailComponent
      },
      {
        path:'cart',
        component: CartComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children:[
      {
        path:'',
        component: DashboardComponent
      },
      {
        path:'category',
        component: CategoryAdminComponent,
        children:[
          {
            path:'',
            component:AdminCategoryListComponent
          },
          {
            path: 'add',
            component: AdminCategoryFormAddComponent
          },
          {
            path: 'edit/:id',
            component: AdminCategoryFormEditComponent
          }
        ]
      },
      {
        path:'products',
        component: ProductAdminComponent,
        children:[
          {
            path: '',
            component:AdminProductListComponent
          },
          {
            path: 'add',
            component: AdminProductFormAddComponent
          },
          {
            path: 'edit/:id',
            component: AdminProductFormEditComponent
          },
          {
            path: ':id',
            component: AdminProductDetailComponent
          }
        ]
      },
      {
        path: 'user',
        component: UserAdminComponent,
        children: [
          {
            path: '',
            component: AdminUserListComponent
          },
          {
            path: 'add',
            component: AdminUserFormAddComponent
          },
          {
            path: 'edit/:id',
            component: AdminUserFormEditComponent
          }
        ]
      }
    ]
  },
  {
    path: 'auth',
    children:[
      {
        path:'signin',
        component: SigninComponent
      },
      {
        path:'signup',
        component: SignupComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
