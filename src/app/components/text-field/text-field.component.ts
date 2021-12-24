import { UtilService } from './../../_service/util.service';
import { Component, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

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
  @Input() auth_form = false
  @Input() readonly_form = false
  @Input() view_only = false
  @Output() form_result: EventEmitter<any> = new EventEmitter();;
  @Input() form_data !: FormGroup;
  provinsi = []
  kabupaten = []
  kecamatan = []
  desa = []
  // form = {id: int, nama_form : string, value : [{id: int, name_value: string}] default(null)}
  constructor(private utils : UtilService) { }

  // Start Css Classes
  no_class = ""
  input_form_grid_class = 'grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-x-4 md:gap-y-0'
  form_grid_field = 'form-field w-full pb-5'
  form_no_grid_field = 'form-field w-full pb-5'
  // End Css Classes
  ngOnInit(): void {
    // this.setNewFormField()
  }
  // ngOnChanges(changes: SimpleChanges){
  //   this.setNewFormField()
  //   console.log(changes)
  // }
  // jgn pake nama form, pake id aja oke 
  setNewFormField() {
    // let new_form: any = {}
    // for (let x in this.form_field) {
    //   if (this.auth_form || this.view_only) {
    //     if (this.form_field[x]['nama_form'] == "email" || this.form_field[x]['nama_form'] == 'password' || this.form_field[x]['nama_form'] == "re-password") {
    //       new_form[this.form_field[x]['nama_form']] = (this.view_only === true) ? new FormControl(this.form_field[x]['value']) : new FormControl('', Validators.required)
    //     }
    //     new_form[this.form_field[x]['nama_form']] = (this.view_only === true) ? new FormControl(this.form_field[x]['value']) :  new FormControl('')
    //   }else {
    //     if (this.form_field[x]['nama_form'] == "email" || this.form_field[x]['nama_form'] == 'password' || this.form_field[x]['nama_form'] == "re-password") {
    //       new_form[this.form_field[x]['id']] = new FormControl('', Validators.required)
    //     }
    //     new_form[this.form_field[x]['id']] = new FormControl('')
    //   }
      
    // }
    // this.form_data = new FormGroup(new_form)
  }
  getErrorMessage() {
    // fungsi untuk nampilin error di form
    if (this.email.hasError('required')) {
      return 'tolong di isi emailnya ya';
    }
    if (this.email.hasError('email')) {
      return 'Not a valid email';
    }
    return '';
  }
  onSubmit() {
    console.log(this.form_data.value)
    this.form_result.emit(this.form_data.value)
  }

}
