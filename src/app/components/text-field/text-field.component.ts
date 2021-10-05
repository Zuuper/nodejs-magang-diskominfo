import { Component, OnInit } from '@angular/core';
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
  title = "Kisah kasih di Rumah"
  null_value = [{'id': 1, 'name': ''},{'id': 2, 'name': ''}]
  form_field = [
    {'id': 1, 'field_name': 'NIK', 'type': 'varchar', 'value': this.null_value},
    {'id': 1, 'field_name': 'email', 'type': 'email', 'value': this.null_value},
    {'id': 1, 'field_name': 'Alamat', 'type': 'textarea', 'value': this.null_value},
    {'id': 1, 'field_name': 'jenis kelamin', 'type': 'dropdown', 'value': [{'id': 1, 'name': 'laki - laki'},{'id': 2, 'name': 'perempuan'}]},
    {'id': 1, 'field_name': 'password', 'type': 'password', 'value': this.null_value},
    {'id': 1, 'field_name': 'dokumen', 'type': 'upload_file', 'value': this.null_value}
  ]
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
