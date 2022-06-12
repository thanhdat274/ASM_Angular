import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/type/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(environment.products)
  }
  getProduct(_id: string): Observable<Product>{
    return this.http.get<Product>(`${environment.products}/${_id}`)
  }
  deleteProduct(_id: string|number): Observable<any>{
    return this.http.delete(`${environment.products}/${_id}`)
  }
  addProducts(data: Product):Observable<Product> {
    return this.http.post<Product>(`${environment.products}`, data)
  }
  updateProduct(_id: string | number, data: Product):Observable<Product>{
    return this.http.put<Product>(`${environment.products}/${_id}`, data)
  }
}
