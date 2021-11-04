import { CardDialogComponent } from './card-dialog/card-dialog.component';
import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  /* 
    Variabel yang diperlukan untuk komponen card yaitu : 
    - card_pilihan = pilihan data yang akan ditampilkan dengan card, pilihannya yaitu : 
                      1. list_layanan => list layanan desa
                      2. draft_layanan => list draft layanan user
                      3. pengajuan_layanan => list pengajuan user telah terproses
                      4. rangkuman => detail proses apa saja telah dilakukan user
                      5. akunku_web_xl  => khusus untuk website dengan screem diatas 720p merupakan 
                                           card untuk link menuju draft, pengajuan, dan akun user
  */
  @Input() card_pilihan = "list_layanan"
  @Input() data_ : any
  @Input() mobile = false

  /* 
    CSS Class Value
    -grid_class = digunakan untuk menampilkan card dalam grid
    -no_grid_class = digunakan untk menampilkan card tanpa grid
    -card_class = digunakan untuk konfigurasi tampilan card
  */
  grid_class = "grid gap-3 grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
  grid_class_3_cols = "grid grid-cols-3 gap-x-10"
  grid_class_1_cols = "grid grid-cols-1 gap-x-10"
  no_grid_class = "grid grid-cols-1 gap-4 lg:gap-x-30 lg:gap-y-5"
  card_class = "shadow-lg rounded-lg"
  common_title_text ="text-lg max-w-xl capitalize\
                      md:text-xl\
                      lg:text-2xl lg:max-w-2xl\
                      xl:text-3xl\
                      2xl:text-4xl"
  common_sub_heading_text = "text-sm max-w-xl capitalize\
                              md:text-md\
                              lg:text-lg lg:max-w-2xl\
                              xl:text-xl\
                              2xl:text-2xl"
  common_cta_text = "text-xs max-w-lg capitalize\
                      2xl:text-sm"
  rangkuman_card_text = "pl-2 my-auto text-white"
  akunku_web_xl_card_class = "bg-white shadow-lg rounded-lg grid grid-cols-8 gap-4 py-4 my-4"
  akunku_web_Xl_image_class = "ml-0 w-10/12 col-start-2 col-span-3"
  akunku_web_xl_text_class = "my-auto col-span-4"
  akunku_web_xl_list_class = "bg-white shadow-lg rounded-lg my-4"
    constructor(
      public dialog : MatDialog
    ) {
  }

  ngOnInit(): void {
    
  }
  openPengajuanDialog(id_pengajuan: string ): void{
    const dialogRef = this.dialog.open(CardDialogComponent, {
      width: '250px',
      data: id_pengajuan
    });

  }
}
