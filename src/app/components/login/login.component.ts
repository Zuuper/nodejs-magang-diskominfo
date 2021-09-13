import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form_field = [
    {form_label : 'username', input : 'matInput', type : 'text'},
    {form_label: 'password', input: 'matInput', type: 'password'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
