import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form_field = [
    {form_label : 'email', input : 'matInput', type : 'text'},
    {form_label : 'name', input : 'matInput', type : 'text'},
    {form_label : 'username', input : 'matInput', type : 'text'},
    {form_label: 'password', input: 'matInput', type: 'password'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
