import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from '@angular/router'
import { AuthService } from 'src/app/_service/auth.service';
import { NodeWithI18n } from '@angular/compiler';
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
  form_field = [
    {id:"1",nama_form : 'nik'},
    {id:"2",nama_form : 'password'},
  ]
  constructor(private router : Router, private authService : AuthService) { }

  ngOnInit(): void {
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
