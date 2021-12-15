import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL = "http://localhost:800/api/auth/"
  
  constructor(private httpClient: HttpClient) {

  }
  masuk(data :any): Observable<any>{
    return this.httpClient.post(this.apiURL + "/masuk",data)
  }
  registrasi(data : any){
    return this.httpClient.post(this.apiURL + "/registrasi",data)
  }
  keluar(){

  }
  detail_user() : Observable<any>{
    return this.httpClient.get(this.apiURL + "/user/detail-user")
  }
  detai_akun() : Observable<any>{
    return this.httpClient.get(this.apiURL + "/user/detail-akun")
  }
  isLoggenIn():boolean{
    if(localStorage.getItem('auth_token') != null){
      return true
    }
    return false
  }
}
