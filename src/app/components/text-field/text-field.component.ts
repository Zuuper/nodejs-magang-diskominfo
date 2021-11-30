import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  @Input() grid = false
  @Input() type_form = ''
  form_data !: FormGroup;

  constructor() { }

  // Start Css Classes
  no_class = ""
  input_form_grid_class = 'grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-x-4 md:gap-y-0'
  form_grid_field = 'form-field w-full pb-5'
  form_no_grid_field = 'form-field w-full pb-5'
  // End Css Classes
  ngOnInit(): void {
    this.setNewFormField()
  }
  setNewFormField(){ 
    let new_form: any = {}
    for (let x in this.form_field){
      new_form[this.form_field[x]['field_name']] = new FormControl('')
    }
    this.form_data = new FormGroup(new_form)
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
  onSubmit(){
    console.log(this.form_data.value)
  }
}
