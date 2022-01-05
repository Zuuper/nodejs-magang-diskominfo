import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayananService {

  private apiURL = "http://192.168.1.128:8000/api"
  
  constructor(private httpClient: HttpClient) { }

  setup_header(){
    let token : any =  localStorage.getItem("access_token");
    token = JSON.parse(token)
    let headers = new HttpHeaders().set('Authorization', `Bearer ${token['value']}`);
   
    return headers
  }
  get_layanan_data() : Observable<any>{
    let token : any =  localStorage.getItem("access_token");
    if(token !== null){
      let option : any = this.setup_header()
      return this.httpClient.get(this.apiURL + "/home", {headers : option}) as Observable<any>
    }
    else{
      return this.httpClient.get(this.apiURL + "/home") as Observable<any>
    }
  }
  get_detail_layanan_data(id : string){
    let token : any =  localStorage.getItem("access_token");
    if(token !== null){
      let option : any = this.setup_header()
      return this.httpClient.get(this.apiURL + "/layanan/detail/" + id, {headers : option}) as Observable<any>
    }
    else{
      return this.httpClient.get(this.apiURL + "/layanan/detail/" + id) as Observable<any>
    }
  }
  get_form_layanan(id : string){
    // disini baru setengah
    const option = this.setup_header()
    // return this.httpClient.get(this.apiURL + "/layanan/" + id + "/form", {headers : option})
    return this.httpClient.get(this.apiURL + "/layanan/" + id + "/form", {headers : option}).pipe(map((res : any)=>{
      const data = res.data.details
      let f : any = {}
      res.form_field = []
      const number_type = ['No']
      const textarea_type = ['alamat','tujuan','alasan','maksud']
      const dropdown_type = ['kelamin','agama']
      const file_type = ['file','berkas','foto']
      data.forEach((element : any)=> {
          let t : string = ""
          let dropdown_val :any[]= []
          if(number_type.some(v => element.name.toLowerCase().includes(v))){
            t = "number"
          }else if(textarea_type.some(v => element.name.toLowerCase().includes(v))){
            t = "textarea"
          }else if(dropdown_type.some(v => element.name.toLowerCase().includes(v))){
            t = 'select'
            if(["jenis kelamin"].includes(element.name.toLowerCase())){
              dropdown_val = [{id : 1, name_value : 'laki - laki'},{id : 2, name_value : 'perempuan'}]
            }else{
              dropdown_val = [{id : 1, name_value : 'hindu'},{id : 2, name_value : 'islam'},{id : 3, name_value : 'kristen protestan'},{id : 4, name_value : 'kritsten katolik'},{id : 5, name_value : 'buddha'},{id : 6, name_value : 'kong hu chu'}]
            }
          }else if(file_type.some(v => element.name.toLowerCase().includes(v))){
            t = "file"
          }else{
            t = "text"
          }
          let val = { "id": element.id, "nama_form" : element.name, 'label' : element.name,"type" : t, dropdown_value : dropdown_val}
          res.form_field.push(val)
          f[element.id] = new FormControl("")
      });
      res.form = new FormGroup(f)
      return res
    }))
  }
}
