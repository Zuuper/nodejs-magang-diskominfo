import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  form_field = [
    {id:"1",field_name : 'email', type : 'email'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
