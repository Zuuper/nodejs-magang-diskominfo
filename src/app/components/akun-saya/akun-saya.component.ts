import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TextFieldHelper } from './../../_helper/text-field-helper';
import { AuthService } from './../../_service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InputField } from 'src/app/_model/input-field.model';

@Component({
  selector: 'app-akun-saya',
  templateUrl: './akun-saya.component.html',
  styleUrls: ['./akun-saya.component.css']
})
export class AkunSayaComponent implements OnInit {
  user !: any
  form_akun = [];
  form_field : InputField[] = []
  form !: FormGroup


    // Start CSS Classes
    common_section_margin_class = "mt-8 mb-8 \
    md:mt-12\
    lg:mt-16 \
    xl:mt-18"
    common_title_text = "text-md max-w-xl capitalize\
    md:text-lg\
    lg:text-xl lg:max-w-2xl\
    xl:text-2xl\
    2xl:text-3xl"
    common_sub_heading_text = "text-sm max-w-xl capitalize\
    md:text-md\
    lg:text-lg lg:max-w-2xl\
    xl:text-xl\
    2xl:text-2xl"
    common_cta_text = "text-xs max-w-lg capitalize\
    2xl:text-sm"
    card_class = "md:shadow-lg md:rounded-lg md:p-8"
    // End CSS Classes
  constructor( private router : Router, private authService : AuthService, private textUtil : TextFieldHelper) { }

  ngOnInit(){

    this.form_field = this.getData()

    console.log("form akun : ",this.form_akun)
    this.form = new FormGroup(this.setFormGroup())
  }
  setFormGroup(){
    const f : any = {}
    this.form_field.forEach((res : any) => {
      f[res.nama_form] = new FormControl(res.value, Validators.required)
    })
    return f
  }
  getData(){
    let form : any[] = []
    this.authService.detail_user().subscribe(d => {
      let data = d['data']
      let x = 1
      let bag_of_word = ['email', 'nik', 'status']
      for(let key in data){
        if(bag_of_word.includes(key)){
          let value = {"id" : x, "nama_form" : key, 'label' : key.toUpperCase, "value": data[key]}
          form.push(value)
          x++
        }
      }
    })
    return form
  }

}
