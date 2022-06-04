import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminProductDetailComponent } from './admin/product-admin/admin-product-detail/admin-product-detail.component';
import { AdminProductFormAddComponent } from './admin/product-admin/admin-product-form-add/admin-product-form-add.component';
import { AdminProductFormEditComponent } from './admin/product-admin/admin-product-form-edit/admin-product-form-edit.component';
import { AdminProductListComponent } from './admin/product-admin/admin-product-list/admin-product-list.component';
import { ProductAdminComponent } from './admin/product-admin/product-admin.component';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './client/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: HomeComponent
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
