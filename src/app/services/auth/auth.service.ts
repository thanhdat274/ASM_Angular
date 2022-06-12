import { UserType } from './../../type/auth';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth, LoginResponse } from 'src/app/type/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(data: Auth):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${environment.signin}`, data)
  }


  listUser(): Observable<UserType[]>{
    return this.http.get<UserType[]>(environment.user)
  }
  listOneUser(_id: string): Observable<UserType>{
    return this.http.get<UserType>(`${environment.user}/${_id}`)
  }
  deleteUser(_id: string|number): Observable<any>{
    return this.http.delete(`${environment.user}/${_id}`)
  }
  addUser(data: UserType):Observable<UserType> {
    return this.http.post<UserType>(`${environment.user}`, data)
  }
  updateUser(_id: string | number, data: UserType):Observable<UserType>{
    return this.http.put<UserType>(`${environment.user}/${_id}`, data)
  }
}
