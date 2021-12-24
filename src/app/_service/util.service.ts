import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private url = "http://localhost:8000/api/"
  
  constructor(private httpClient : HttpClient) { }

  getListDesa(){
    return this.httpClient.get(`${this.url}list-desa`)
  }
}
