import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-data-layanan',
  templateUrl: './data-layanan.component.html',
  styleUrls: ['./data-layanan.component.css']
})
export class DataLayananComponent implements OnInit {
  // Start variables
  data_found = true
  form_field = [
    {id:"1",field_name : 'Cari Pengajuan Layanan Desa', type : 'varchar'},
    {id:"2",field_name : 'Kategori Layanan', type : 'dropdown', value : [{id:1, name: "bantuan"}, 
                                                                          {id:2, name: "Keterangan"},
                                                                          {id:3, name: "pernyataan"}]},
    {id:"3",field_name : 'Desa', type : 'dropdown', value : [{id:1, name: "Padang Bae"}, 
                                                              {id:2, name: "Kerobokan Kaja"},
                                                              {id:3, name: "Peti Tenget"}]},
  ]
  data_layanan = [
    {id : 1, nama_layanan : "subsidi BBM pemerintah", kategori : "bantuan", warna : '#000'},
    {id : 2, nama_layanan : "Surat Pernyataan Masih Hidup", kategori : "surat pernyataan", warna : '#000'},
    {id : 3, nama_layanan : "Surat Pernyataan Menduda", kategori : "surat pernyataan", warna : '#000'},
    {id : 4, nama_layanan : "Surat Keterangan Kaya raya", kategori : "surat keterangan", warna : '#000'},
    {id : 5, nama_layanan : "subsidi BBM pemerintah", kategori : "bantuan", warna : '#000'},
    {id : 6, nama_layanan : "Surat Keterangan Kartu Keluarga", kategori : "surat keterangan", warna : '#000'},
    {id : 7, nama_layanan : "Surat Pengantar Kawin", kategori : "surat pengantar", warna : '#000'},
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
  constructor() { }

  ngOnInit(): void {
    this.device = Capacitor.isNativePlatform()
  }

}
