import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  // Start Variables 
  form_akun = [
    {id: 1, field_name : 'status verifikasi', type:"varchar"},
    {id: 2, field_name : 'Username', type:"varchar"},
    {id: 3, field_name : 'NIK', type:"varchar"},
    {id: 4, field_name : 'Email', type:"email"},
  ]
  form_detail_akun = [
    {id: 1, field_name : 'Alamat domisili', type:"textarea"},
    {id: 2, field_name : 'Nama', type:"varchar"},
    {id: 3, field_name : 'Nomor KK', type:"varchar"},
    {id: 4, field_name : 'Alamat KTP', type:"textarea"},
    {id: 5, field_name : 'tempat tanggal lahir', type:"varchar"}
  ]
  // End Variables

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
