import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-layanan',
  templateUrl: './data-layanan.component.html',
  styleUrls: ['./data-layanan.component.css']
})
export class DataLayananComponent implements OnInit {
  // Start variables
  data_found = false
  form_field = [
    {id:"1",field_name : 'Cari Pengajuan Layanan Desa', type : 'varchar'},
    {id:"2",field_name : 'Kategori Layanan', type : 'dropdown', value : [{id:1, name: "bantuan"}, 
                                                                          {id:2, name: "Keterangan"},
                                                                          {id:3, name: "pernyataan"}]},
    {id:"3",field_name : 'Desa', type : 'dropdown', value : [{id:1, name: "Padang Bae"}, 
                                                              {id:2, name: "Kerobokan Kaja"},
                                                              {id:3, name: "Peti Tenget"}]},
  ]
  // End Variables


  // Start Css Classes
  common_section_margin_class = "mt-8 mb-8 \
                                  md:mt-20 md:mb-12\
                                  lg:mt-28 lg:mb-14 \
                                  xl:mt-36 xl:mb-18"
  common_subheading_text = "text-xl max-w-xl\
                                  md:text-2xl\
                                  lg:text-3xl\
                                  xl:text-4xl"
  common_title_text = "text-2xl max-w-2xl\
                                  md:text-3xl\
                                  lg:text-4xl\
                                  xl:text-5xl"
  // End Css Classes
  constructor() { }

  ngOnInit(): void {
  }

}
