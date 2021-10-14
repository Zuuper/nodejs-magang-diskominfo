import { Component, OnInit } from '@angular/core';

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
  card_pilihan: string = "akunku_web_xl"
  data_dummy = [
    {id: 1, 'kategori':'Surat pengantar', 'nama_layanan': 'Surat Pengantar rumah sakit', 'link_pengajuan':'ini link', 'link_penjelasan':'ini link penjelasan','warna': '#000'},
    {id: 2, 'kategori':'Surat keterangan', 'nama_layanan': 'Surat keterangan sehat', 'link_pengajuan':'ini link', 'link_penjelasan':'ini link penjelasan','warna': '#000'},
    {id: 3, 'kategori':'Surat pernyataan', 'nama_layanan': 'Surat pernyataan orang baik', 'link_pengajuan':'ini link', 'link_penjelasan':'ini link penjelasan','warna': '#000'},
    {id: 4, 'kategori':'bantuan', 'nama_layanan': 'bantuan raskin miskin', 'link_pengajuan':'ini link', 'link_penjelasan':'ini link penjelasan','warna': '#000'}
  ]
  data_dummy_pengajuan = [
    {id: 1, 'nama_layanan' : 'surat pengantar rumah sakit', 'status': 'tahap penyetujuan', 'warna': '#000'},
    {id: 2, 'nama_layanan' : 'surat pengantar rumah sakit', 'status': 'tahap penyetujuan', 'warna': '#000'},
    {id: 3, 'nama_layanan' : 'surat pengantar rumah sakit', 'status': 'tahap penyetujuan', 'warna': '#000'},
  ]
  list_layanan_data = this.data_dummy
  draft_layanan_data = this.data_dummy
  pengajuan_layanan_data = this.data_dummy_pengajuan

  /* 
    CSS Class Value
    -grid_class = digunakan untuk menampilkan card dalam grid
    -no_grid_class = digunakan untk menampilkan card tanpa grid
    -card_class = digunakan untuk konfigurasi tampilan card
  */
  grid_class = "grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
  grid_class_3_cols = "grid grid-cols-3 gap-x-10"
  no_grid_class = "grid grid-cols-1 gap-4 lg:gap-x-30 lg:gap-y-5"
  card_class = "shadow-lg rounded-lg"
  constructor() { }

  ngOnInit(): void {
    
  }
}
