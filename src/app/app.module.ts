import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { FooterClientComponent } from './client/layouts/footer-client/footer-client.component';
import { HeaderClientComponent } from './client/layouts/header-client/header-client.component';
import { HomeComponent } from './client/home/home.component';
import { NavAdminComponent } from './admin/nav-admin/nav-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CategoryAdminComponent } from './admin/category-admin/category-admin.component';
import { ProductAdminComponent } from './admin/product-admin/product-admin.component';
import { AdminProductListComponent } from './admin/product-admin/admin-product-list/admin-product-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminProductDetailComponent } from './admin/product-admin/admin-product-detail/admin-product-detail.component';
import { AdminProductFormAddComponent } from './admin/product-admin/admin-product-form-add/admin-product-form-add.component';
import { AdminProductFormEditComponent } from './admin/product-admin/admin-product-form-edit/admin-product-form-edit.component';
import { ShowValidateComponent } from './show-validate/show-validate.component';
import { AdminCategoryListComponent } from './admin/category-admin/admin-category-list/admin-category-list.component';
import { AdminCategoryFormAddComponent } from './admin/category-admin/admin-category-form-add/admin-category-form-add.component';
import { AdminCategoryFormEditComponent } from './admin/category-admin/admin-category-form-edit/admin-category-form-edit.component';
import { SwiperModule } from 'swiper/angular';
import { SigninComponent } from './client/auth/signin/signin.component';
import { SignupComponent } from './client/auth/signup/signup.component';
import { ProductClientListComponent } from './client/product/product-client-list/product-client-list.component';
import { ProductClientDetailComponent } from './client/product/product-client-detail/product-client-detail.component';
import { CartComponent } from './client/cart/cart.component';
import { UserAdminComponent } from './admin/user-admin/user-admin.component';
import { AdminUserListComponent } from './admin/user-admin/admin-user-list/admin-user-list.component';
import { AdminUserFormAddComponent } from './admin/user-admin/admin-user-form-add/admin-user-form-add.component';
import { AdminUserFormEditComponent } from './admin/user-admin/admin-user-form-edit/admin-user-form-edit.component';
import { ProductClientCateListProComponent } from './client/product/product-client-cate-list-pro/product-client-cate-list-pro.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClientComponent,
    FooterClientComponent,
    HeaderClientComponent,
    HomeComponent,
    NavAdminComponent,
    DashboardComponent,
    CategoryAdminComponent,
    ProductAdminComponent,
    AdminProductListComponent,
    AdminProductDetailComponent,
    AdminProductFormAddComponent,
    AdminProductFormEditComponent,
    ShowValidateComponent,
    AdminCategoryListComponent,
    AdminCategoryFormAddComponent,
    AdminCategoryFormEditComponent,
    SigninComponent,
    SignupComponent,
    ProductClientListComponent,
    ProductClientDetailComponent,
    CartComponent,
    UserAdminComponent,
    AdminUserListComponent,
    AdminUserFormAddComponent,
    AdminUserFormEditComponent,
    ProductClientCateListProComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SwiperModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
