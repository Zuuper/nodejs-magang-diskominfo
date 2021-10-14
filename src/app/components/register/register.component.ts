import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register :string = "Sign Up"
  penjelasan_register :string = "Daftar dulu agar bisa melakukan pengajuan pelayanan online"
  buat_akun : string = "sudah punya akun ?"
  registrasi : string = "login aja"
  form_field = [
    {id:"1",field_name : 'NIK', type : 'varchar'},
    {id:"2",field_name : 'Nama', type : 'varchar'},
    {id:"3",field_name : 'password', type : 'password'},
    {id:"4",field_name : 'ketik ulang password', type : 'password'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
