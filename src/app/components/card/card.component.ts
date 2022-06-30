import { LayananService } from 'src/app/_service/layanan.service';
import { CardDialogComponent } from './card-dialog/card-dialog.component';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {

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
  total_pengajuan : number = 0
  total_draft : number = 0
  status_verifikasi : number = 0
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
  common_card_title_text ="text-sm max-w-xl capitalize\
                      md:text-lg\
                      lg:text-xl lg:max-w-2xl\
                      xl:text-2xl\
                      2xl:text-3xl"
  common_sub_heading_text = "text-xs max-w-xl capitalize\
                              md:text-md\
                              lg:text-lg lg:max-w-2xl\
                              xl:text-xl\
                              2xl:text-2xl"
  common_cta_text = "text-xs max-w-lg\
                      2xl:text-sm"
  rangkuman_card_text = "pl-2 text-white"
  rangkuman_icon_image = "w-4 h-4 md:w-6 md:h-6 lg:w-12 lg:h-12"
  rangkuman_heading = "text-xs max-w-xl capitalize\
                        md:text-sm\
                        lg:text-md lg:max-w-2xl\
                        xl:text-lg\
                        2xl:text-xl"
  akunku_web_xl_card_class = "bg-white shadow-lg rounded-lg grid grid-cols-8 gap-4 py-4 my-4"
  akunku_web_Xl_image_class = "ml-0 w-10/12 col-start-2 col-span-3"
  akunku_web_xl_text_class = "my-auto col-span-4"
  akunku_web_xl_list_class = "bg-white shadow-lg rounded-lg my-4"
    constructor(
      public dialog : MatDialog,
      public layananService : LayananService
    ) {
  }

  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
      if(this.card_pilihan == "rangkuman"){
        this.layananService.get_total_pengajuan_layanan().subscribe((d: any)=>{
          const data = d.data
          this.total_draft = data.draft
          this.total_pengajuan = data.selesai 
          this.status_verifikasi = data['verifikasi user']['0'].status 
        })
      }
  }

  setDataRangkumanCard(type_data : string){
    if(type_data == 'draft'){
      return (this.total_draft == 0) ? "belum ada draft" : this.total_draft
    }else if(type_data == "pengajuan"){
      return (this.total_pengajuan == 0) ? "belum ada pengajuan selesai" : this.total_pengajuan
    }else if(type_data == "status verifikasi"){
      return (this.status_verifikasi == 0) ? "belum verifikasi" : "terverifikasi"
    }else{
      return "nyari apa sih ?"
    }
  }

  openPengajuanDialog(id_pengajuan: string ): void{
    const dialogRef = this.dialog.open(CardDialogComponent, {
      data: id_pengajuan,
      panelClass: 'w-full'
    });

  }
}
