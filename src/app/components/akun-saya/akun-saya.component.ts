import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-akun-saya',
  templateUrl: './akun-saya.component.html',
  styleUrls: ['./akun-saya.component.css']
})
export class AkunSayaComponent implements OnInit {
  form_akun = [
    {id: 1, field_name : 'status verifikasi', type:"varchar"},
    {id: 2, field_name : 'Username', type:"varchar"},
    {id: 3, field_name : 'NIK', type:"varchar"},
    {id: 4, field_name : 'Email', type:"email"},
  ]

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
  constructor() { }

  ngOnInit(): void {
  }

}
