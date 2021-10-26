import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buat-layanan',
  templateUrl: './buat-layanan.component.html',
  styleUrls: ['./buat-layanan.component.css']
})
export class BuatLayananComponent implements OnInit {

  @Input() nama_layanan = "surat Pernyataan mampu"
  @Input() form_field = [
    {id:1, field_name:"Nomor NIK", type:"varchar"},
    {id:2, field_name:"Nomor KK", type:"varchar"},
    {id:3, field_name:"Jenis Kelamin", type:"dropdown", value : [{id : 1, name : 'laki- laki'},
                                                                 {id : 2, name : 'Perempuan'}]},
    {id:4, field_name : 'foto KK', type: "upload_file"}
  ]

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
