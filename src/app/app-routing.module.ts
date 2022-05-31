import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminProductFromComponent } from './admin/product-admin/admin-product-from/admin-product-from.component';
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
            component: AdminProductFromComponent
          },
          {
            path: 'edit/:id',
            component: AdminProductFromComponent
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
