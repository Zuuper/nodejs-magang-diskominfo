import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  /* 
    Variabel yang diperlukan untuk komponen card yaitu : 
    - list_layanan = untuk card yang menampilkan data layanan
    - draft_layanan = untuk card yang menampilkan draft data layanan
    - pengajuan_layanan = untuk card yang menampilkan list pengajuan layanan telah di proses
    - akunku_web_xl = untuk card yang menampilkan detail data terkait layanan desa dan akun user,
                      seperti data diri, draft pengajuan dan pengajuan terproses. jadi ini sejenis
                      button untuk ngarahain ke yg telah tak sebutin diatas 
    - rangkuman = untuk card yang menampilkan rangkuman dari akun yang telah diverifikasi
    - need_grid = untuk menentukan tampilan card apa memerlukan grid atau tidak
  */
  card_pilihan: string = "draft_layanan"
  data_dummy = [
    {id: 1, 'kategori':'Surat pengantar', 'nama_layanan': 'Surat Pengantar rumah sakit', 'link_pengajuan':'ini link', 'link_penjelasan':'ini link penjelasan','warna': '#000'},
    {id: 2, 'kategori':'Surat keterangan', 'nama_layanan': 'Surat keterangan sehat', 'link_pengajuan':'ini link', 'link_penjelasan':'ini link penjelasan','warna': '#000'},
    {id: 3, 'kategori':'Surat pernyataan', 'nama_layanan': 'Surat pernyataan orang baik', 'link_pengajuan':'ini link', 'link_penjelasan':'ini link penjelasan','warna': '#000'},
    {id: 4, 'kategori':'bantuan', 'nama_layanan': 'bantuan raskin miskin', 'link_pengajuan':'ini link', 'link_penjelasan':'ini link penjelasan','warna': '#000'}
  ]
  data_dummy_pengajuan = [
    {id: 1, 'nama_layanan' : 'surat pengantar rumah sakit', 'status': 'tahap penyetujuan'},
    {id: 2, 'nama_layanan' : 'surat pengantar rumah sakit', 'status': 'tahap penyetujuan'},
    {id: 3, 'nama_layanan' : 'surat pengantar rumah sakit', 'status': 'tahap penyetujuan'},
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
  no_grid_class = "grid grid-cols-1 gap-5"
  card_class = "bg-white shadow-lg rounded-lg"
  constructor() { }

  ngOnInit(): void {
    
  }
}
