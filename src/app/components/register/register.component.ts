import { AuthService } from 'src/app/_service/auth.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from '@angular/router'
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
  constructor(private router : Router,private AuthService : AuthService) { }

  ngOnInit(): void {
  }
  getValue(value : any){
    for(let x in value){
      if(value[x] == ''){
        return Swal.fire("Login registrasi", "anda belum mengisikian " + x, 'error')
        
      }else if(typeof value[x] =='undefined'){
        return Swal.fire("Login registrasi", "error sistem undefined", 'error')
      }
    }
    let data !: any
    this.AuthService.registrasi(value).subscribe(d => {
      data = d
      return (data !== null) ? Swal.fire("berhasil registrasi", 'silakan untuk melakukan login','success') : Swal.fire("gagal registrasi", "sepertinya ada yang salah ", 'error')

    })
    return 0
  }
}
