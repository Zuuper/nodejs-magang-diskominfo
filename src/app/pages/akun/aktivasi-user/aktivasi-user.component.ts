import { UtilService } from './../../../_service/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aktivasi-user',
  templateUrl: './aktivasi-user.component.html',
  styleUrls: ['./aktivasi-user.component.css']
})
export class AktivasiUserComponent implements OnInit {
  form_detail_akun = [
    {id: 1, nama_form : 'alamat_domisili'},
    {id: 2, nama_form : 'alamat_ktp'},
    {id: 3, nama_form : 'no_kk'},
    {id: 4, nama_form : 'tanggal_lahir'},
    {id: 5, nama_form : 'tempat_lahir'},
    {id: 6, nama_form : 'foto_ktp'},
    {id: 7, nama_form : 'foto_kk'}
  ]


  // 'alamat_domisili' => 'required',
  //               'alamat_ktp' => 'required',
  //               'no_kk' => 'required',
  //               'tanggal_lahir' =>'required|date',
  //               'tempat_lahir' => 'required',
  //               'foto_ktp' => 'required|mimes:jpg,png,bmp',
  //               'foto_kk' => 'required|mimes:jpg,png,bmp'
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
