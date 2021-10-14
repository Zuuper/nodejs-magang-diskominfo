import { Component, OnInit } from '@angular/core';

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
    {id:"1",field_name : 'NIK', type : 'varchar'},
    {id:"2",field_name : 'Password', type : 'password'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
