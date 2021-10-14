import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landing-page-section',
  templateUrl: './landing-page-section.component.html',
  styleUrls: ['./landing-page-section.component.css']
})
export class LandingPageSectionComponent implements OnInit {
  // Input variable
  @Input() section_ !:string

  // Css Class
  hero_left_side_main_component_class = "pt-8 pb-5 grid-cols-1 \
                                         md:mt-10 md:z-10 md:absolute  md:grid-cols-none\
                                         lg:mt-20"
  hero_left_side_red_small_text = "uppercase text-white md:text-primary"
  hero_left_side_title_text = "uppercase text-2xl text-white max-w-xs\
                               md:text-black md:text-2xl md:max-w-xs\
                               lg:text-4xl lg:max-w-lg \
                               xl:text-5xl xl:max-w-xl"
  hero_right_side_image = "md:z-0 hidden md:flex md:relative ml-auto w-8/12 justify-end"
  hero_image_side = "w-11/12 xl:w-10/12"

  common_title_text = "text-2xl max-w-xs\
                       md:text-2xl\
                       lg:text-4xl\
                       xl:text-5xl"
  // Text component
  silades_description = "Silades Memberikan Kemudahan bagi para penggunanya dalam melakukan pengajuan layanan, tidak perlu ke kantor dan mengantri hanya untuk mengajukan sebuah layanan"
  cta_1 = "Buat Pengajuan"
  cta_2 = "Pelajari lebih lanjut"
  constructor() { }

  ngOnInit(): void {
  }

}
