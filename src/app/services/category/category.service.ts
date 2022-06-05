import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryType } from 'src/app/type/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  listCate(): Observable<CategoryType[]>{
    return this.http.get<CategoryType[]>(environment.category)
  }
  listOneCate(_id: string): Observable<CategoryType>{
    return this.http.get<CategoryType>(`${environment.category}/${_id}`)
  }
  deleteCate(_id: string|number): Observable<any>{
    return this.http.delete(`${environment.category}/${_id}`)
  }
  addCate(data: CategoryType):Observable<CategoryType> {
    return this.http.post<CategoryType>(`${environment.category}`, data)
  }
  updateCate(_id: string | number, data: CategoryType):Observable<CategoryType>{
    return this.http.put<CategoryType>(`${environment.category}/${_id}`, data)
  }
}
