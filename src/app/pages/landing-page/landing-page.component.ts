import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  // Start variables
    device = false
    user_status = false
    search_not_login_form = [
      {id: "1", field_name : 'Cari Desa', type : 'varchar'}
    ] 
    data_layanan = [
      {id : 1, nama_layanan : "subsidi BBM pemerintah", kategori : "bantuan", warna : '#000'},
      {id : 2, nama_layanan : "Surat Pernyataan Masih Hidup", kategori : "surat pernyataan", warna : '#000'},
      {id : 3, nama_layanan : "Surat Pernyataan Menduda", kategori : "surat pernyataan", warna : '#000'},
      {id : 4, nama_layanan : "Surat Keterangan Kaya raya", kategori : "surat keterangan", warna : '#000'},
    ]
    draft_layanan = [
      {id : 1, nama_layanan : "subsidi BBM pemerintah", kategori : "bantuan", warna : '#000'},
      {id : 2, nama_layanan : "Surat Pernyataan Masih Hidup", kategori : "surat pernyataan", warna : '#000'},
    ]
  // End Variables
  // Start CSS Classes
  container_component = "px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32"
  common_title_text = "text-xl max-w-xl\
                        md:text-2xl\
                        lg:text-3xl\
                        xl:text-4xl"
  common_heading_text = "text-center text-xm max-w-xl text-bold\
                          md:text-lg md:max-w-2xl\
                          lg:text-xl\
                          xl:text-2xl"
  common_section_margin_class = "mt-12 mb-12 \
                                  md:mt-32 md:mb-16\
                                  lg:mt-40 lg:mb-18 \
                                  xl:mt-48 xl:mb-20"

  hero_component_class = "bg-gradient-to-tr from-primary to-secondary md:bg-none"
  left_side_hero_child_component_class = "hidden md:block"
  right_side_hero_child_component_class = "md:hidden pt-8"

  fitur_text_class = "leading-loose mt-5 text-center md:text-left max-w-xl"
  fitur_img_class = "w-full md:w-3/4 mx-auto"
  cta_fitur_child_component_class = 'mt-8 text-center md:text-left'

  penutup_text_class = "flex justify-center text-white px-4 py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24 "
  // End CSS Classes


  // Start Text 
  cta_1 = "Buat Pengajuan"
  cta_2 = "Pelajari lebih lanjut"
  fitur_1_title = "Pengajuan layanan Online"
  fitur_1_text = "ajukan dimanapun dan kapanpun menggunakan  perangkat anda, tidak perlu repot ke kantor desa hanya untuk mengajukan permohonan layanan  "
  fitur_2_title = "Proses transparant"
  fitur_2_text = "tidak perlu takut apabila pengajuan anda tidak terproses  karena anda dapat mengetahui semua proses pengajuan dari sistem"
  fitur_3_title = "Mudah digunakan"
  fitur_3_text = "setiap fitur pengajuan dapat digunakan oleh semua kalangan usia, sistem juga menyediakan panduan penggunaan aplikasi."
  penutup_text = "Di era Dunia digital kita diharuskan untuk mulai mengingkatkan produktifitas kita dengan memanfaatkan teknologi digital"
  // End Text


  constructor() { }

  ngOnInit(): void {
    this.device = Capacitor.isNativePlatform()
  }
  setUserStatus(){
    let user = localStorage.getItem('user_loggin')
    this.user_status = (user == 'false') ? false : true
  }
}
