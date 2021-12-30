import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from '@angular/router'
import { AuthService } from 'src/app/_service/auth.service';
import { NodeWithI18n } from '@angular/compiler';
import { InputField } from 'src/app/_model/input-field.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Html text element
  login :string = "Login"
  penjelasan_login :string = "agar bisa melakukan pelayanan online anda harus login terlebih dahulu"
  ganti_password : string = "Lupa password gan ? "
  simpan_login : string = "simpan akun ini"
  buat_akun : string = "belum punya akun ?"
  registrasi : string = "registrasi dulu"
  checked = false
  form_field : InputField[] = [
    {id:1, nama_form : "nik", label : "NIK"},
    {id:2, nama_form : "password", label : "Password"}
  ]
  form !: FormGroup;
  constructor(private router : Router, private authService : AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup(this.setFormGroup())
  }
  setFormGroup(){
    const f : any = {}
    this.form_field.forEach((res : any)=>{
      f[res.nama_form] = new FormControl('',Validators.required)
    })
    return f
  }

  getValue(value : any){
    for(let x in value){
      if(value[x] == ''){
        return Swal.fire("Login Gagal", "anda belum mengisikian " + x, 'error')
        
      }else if(typeof value[x] =='undefined'){
        return Swal.fire("Login Gagal", "error sistem undefined", 'error')

      }
    }
    // nanti di check ke 
    let data !: any
    this.authService.masuk(value).subscribe(d =>{
      const now = new Date()
      data = d['data'];
      if(d['success'] == true){
        const item = {
          value : data['token']['token'],
          expiry : now.getTime() + (28800 * 1000) // ditambah 8 jam
        }
        localStorage.setItem('access_token', JSON.stringify(item))
        return this.router.navigate(['/menu'])
      }
      else{
        return Swal.fire("Login Gagal", "akun tidak ditemukan, mungkin ada salah dengan NIK atau password", 'error')
      }

    })

    return console.log(data)
    //return (data !== null) ?  ) : 
  }
}
