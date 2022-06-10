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
}
