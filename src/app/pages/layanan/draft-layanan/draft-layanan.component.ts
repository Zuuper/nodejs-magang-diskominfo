import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draft-layanan',
  templateUrl: './draft-layanan.component.html',
  styleUrls: ['./draft-layanan.component.css']
})
export class DraftLayananComponent implements OnInit {

  // Start Variables
  data_found = true
  form_field = [
    {id:"1",field_name : 'Cari Pengajuan Layanan Desa', type : 'varchar'},
    {id:"2",field_name : 'Kategori Layanan', type : 'dropdown', value : [{id:1, name: "bantuan"}, 
                                                                          {id:2, name: "Keterangan"},
                                                                          {id:3, name: "pernyataan"}]}
  ] 
  data_draft = [
    {id : 1, nama_layanan : "subsidi BBM pemerintah", kategori : "bantuan", warna : '#000'},
    {id : 2, nama_layanan : "Surat Pernyataan Masih Hidup", kategori : "surat pernyataan", warna : '#000'},
    {id : 3, nama_layanan : "Surat Pernyataan Menduda", kategori : "surat pernyataan", warna : '#000'},
  ]
  // End Variables
  // Start CSS Classes
  common_section_margin_class = "mt-8 mb-8 \
                                  md:mt-12\
                                  lg:mt-16 \
                                  xl:mt-18"
  common_title_text ="text-md max-w-xl capitalize\
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
  // End CSS Classes
  constructor() { }

  ngOnInit(): void {
  }

}
