import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from '@angular/router'
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  form_field = [
    {id:"1",field_name : 'email', type : 'email'},
  ]
  constructor(private router : Router) { }

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
    Swal.fire("Berhasil mengubah password", "silakan cek email anda", 'success')
    return this.router.navigate(['/auth/login']);
  }
}
