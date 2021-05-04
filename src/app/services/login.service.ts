import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../views/login/interface/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:3000/login'
  constructor(private http: HttpClient) { }

  public getUser(): Observable<any> {
    return this.http.get(this.url)
  }
}