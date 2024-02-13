import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _url: string = "../../assets/login.json"
  constructor(private http: HttpClient) { }
  public get(): Observable<any> {
    return this.http.get<Login[]>(this._url);
  }

}
