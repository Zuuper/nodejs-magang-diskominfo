import { LayananService } from 'src/app/_service/layanan.service';
import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-pengajuan-terproses',
  templateUrl: './pengajuan-terproses.component.html',
  styleUrls: ['./pengajuan-terproses.component.css']
})
export class PengajuanTerprosesComponent implements OnInit {
  // Start Variables
  device = false
  data_found = true
  form_field = [
    { id: "1", field_name: 'Cari Pengajuan Layanan Desa', type: 'varchar' },
    {
      id: "2", field_name: 'Kategori Layanan', type: 'dropdown', value: [{ id: 1, name: "bantuan" },
      { id: 2, name: "Keterangan" },
      { id: 3, name: "pernyataan" }]
    },
    {
      id: "3", field_name: "status layanan", type: 'dropdown', value: [{ id: 1, name: "selesai" },
      { id: 2, name: "terproses" },
      { id: 3, name: "ditolak" }]
    }
  ]
  data_ : any[] = []
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
  header_flex_class = "flex justify-between"
  hidden_component = "hidden"  
  // End CSS Classes
  constructor(private LayananService : LayananService) { }

  ngOnInit(): void {
    this.device = Capacitor.isNativePlatform()
    this.LayananService.get_all_pengajuan_layanan().subscribe((d : any)=>{
      this.data_ = d.data
      
    })
  }

}
