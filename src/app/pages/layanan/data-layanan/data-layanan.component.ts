import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Layanan } from 'src/app/_model/layanan.model';
import { LayananService } from 'src/app/_service/layanan.service';

@Component({
  selector: 'app-data-layanan',
  templateUrl: './data-layanan.component.html',
  styleUrls: ['./data-layanan.component.css']
})
export class DataLayananComponent implements OnInit {
  // Start variables
  data_layanan : Layanan[] = []
  initial_data : Layanan[] = []
  form_field = [
    {id:"1",field_name : 'Cari Pengajuan Layanan Desa', type : 'varchar'},
    {id:"2",field_name : 'Kategori Layanan', type : 'dropdown', value : [{id:1, name: "bantuan"}, 
                                                                          {id:2, name: "Keterangan"},
                                                                          {id:3, name: "pernyataan"}]},
    {id:"3",field_name : 'Desa', type : 'dropdown', value : [{id:1, name: "Padang Bae"}, 
                                                              {id:2, name: "Kerobokan Kaja"},
                                                              {id:3, name: "Peti Tenget"}]},
  ]
  device = false
  // End Variables


  // Start Css Classes
  common_section_margin_class = "mt-8 mb-8 \
                                  md:mt-12\
                                  lg:mt-16 \
                                  xl:mt-18"
  common_subheading_text = "text-xl max-w-xl\
                                  md:text-2xl\
                                  lg:text-3xl\
                                  xl:text-4xl"
  common_title_text = "text-2xl max-w-2xl\
                                  md:text-3xl\
                                  lg:text-4xl\
                                  xl:text-5xl"
  data_layanan_heading_2 = "text-center\
                            mb-8 flex justify-center"
  hidden_component = "hidden"
  // End Css Classes
  constructor(private layananService : LayananService) { }

  ngOnInit(): void {
    this.layananService.get_layanan_data().subscribe((d : any) =>{
      this.data_layanan =  d['data']
      this.initial_data = d['data']
      })
    this.device = Capacitor.isNativePlatform()
  }

}
