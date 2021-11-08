import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landing-page-section',
  templateUrl: './landing-page-section.component.html',
  styleUrls: ['./landing-page-section.component.css']
})
export class LandingPageSectionComponent implements OnInit {
  // Input variable
  @Input() section_ !:string


  // Start CSS Classes
  hero_left_side_main_component_class = "pt-8 pb-5 grid-cols-1 \
                                         md:mt-10 md:z-10 md:absolute  md:grid-cols-none\
                                         lg:mt-20"
  hero_left_side_red_small_text = "uppercase text-white md:text-primary"
  hero_left_side_title_text = "uppercase text-2xl text-white max-w-xs\
                               md:text-black md:text-2xl md:max-w-xs\
                               lg:text-3xl lg:max-w-md \
                               xl:text-5xl xl:max-w-lg"
  hero_right_side_image = "md:z-0 hidden md:flex md:relative ml-auto w-8/12 justify-end"
  hero_image_side = "w-11/12 xl:w-10/12"

  common_title_text = "text-2xl max-w-lg\
                       md:text-3xl\
                       lg:text-4xl\
                       xl:text-5xl"
  common_subheading_text = "text-xl max-w-xl\
                            md:text-2xl\
                            lg:text-3xl\
                            xl:text-4xl"
  pengantar_main_component_class = "grid grid-cols-1 md:grid-cols-2 gap-4"
  pengantar_left_side_class = "grid grid-cols-1 gap-1"
  penutup_main_class = "mb-4 px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32"
  akun_hero_main_class = "px-8 bg-gradient-to-br from-accent to-primary rounded-none -mx-6\
                          md:mt-16 md:bg-none md:bg-accent md:rounded-lg md:mx-0 md:grid md:grid-cols-2\
                          lg:px-20 \
                          xl:px-24 \
                          2xl:px-28"
  akun_hero_image_side = "hidden md:flex md:relative ml-auto w-8/12 justify-end"
  // End CSS Classes


  // Start Text component
  silades_description = "Silades Memberikan Kemudahan bagi para penggunanya dalam melakukan pengajuan layanan, tidak perlu ke kantor dan mengantri hanya untuk mengajukan sebuah layanan"
  cta_1 = "Buat Pengajuan"
  cta_2 = "Pelajari lebih lanjut"
  // End Text Component

  
  constructor() { }

  ngOnInit(): void {
  }

}
