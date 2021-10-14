import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {
  /* 
    variabel :
    hide_password = value untuk form password, apabila True maka password akan disembunyikan dan berlaku
                    sebaliknya
    email = form control untuk inputan email, dipake buat validasi formn emailnya
  */
  hide_password = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  @Input() form_field: any 
  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    // fungsi untuk nampilin error di form
    if (this.email.hasError('required')) {
      return 'tolong di isi emailnya ya';
    }
    if (this.email.hasError('email')){
      return 'Not a valid email';
    }
    return '';
  }
}
