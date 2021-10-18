import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-layanan',
  templateUrl: './data-layanan.component.html',
  styleUrls: ['./data-layanan.component.css']
})
export class DataLayananComponent implements OnInit {
  // Start variables
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
  common_section_margin_class = "mt-12 mb-12 \
                                  md:mt-32 md:mb-16\
                                  lg:mt-40 lg:mb-18 \
                                  xl:mt-48 xl:mb-20"
  common_title_text = "text-xl max-w-xl\
                                  md:text-2xl\
                                  lg:text-3xl\
                                  xl:text-4xl"
  // End Css Classes
  constructor() { }

  ngOnInit(): void {
  }

}
