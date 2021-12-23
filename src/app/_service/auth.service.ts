import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import {catchError, map } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiAuthURL = "http://localhost:8000/api/auth"
  private apiURL = "http://localhost:8000/api"
  
  constructor(private httpClient: HttpClient) {

  }

  setup_header(){
    let token : any =  localStorage.getItem("access_token");
    token = JSON.parse(token)
    let headers = new HttpHeaders().set('Authorization', `Bearer ${token['value']}`);
   
    return headers
  }
  masuk(data :any): Observable<any>{
    return this.httpClient.post(`${this.apiAuthURL}/masuk`,data).pipe(
      catchError(this.handleError)
    )
  }
  registrasi(data : any){
    return this.httpClient.post(this.apiAuthURL + "/registrasi",data)
  }
  keluar(){

  }
  detail_user() : Observable<any>{
    let option : any = this.setup_header()
    return this.httpClient.get(this.apiURL + "/user/detail-user", {headers : option})
  }
  detai_akun() : Observable<any>{
    return this.httpClient.get(this.apiURL + "/user/detail-akun")
  }
  isLoggenIn():boolean{
    if(localStorage.getItem('access_token') !== null){
      return true
    }
    return false
  }
  handleError(error : HttpErrorResponse){
    let msg = ""
    if(error.error instanceof ErrorEvent){
      msg = error.error.message
    }else{
      msg = `Error code : ${error.status}\n Message : ${error.message}`
    }
    return throwError(msg)
  }
}
