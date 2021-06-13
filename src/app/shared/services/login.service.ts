import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/interface/login.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:3000/login'
  constructor(private http: HttpClient) { }

  public getUser(): Observable<LoginModel[]> {
    return this.http.get<LoginModel[]>(this.url)
  }
}
