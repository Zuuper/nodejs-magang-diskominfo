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
  */
  list_layanan = true
  draft_layanan = false
  pengajuan_layanan = false
  akunku_web_xl = false
  rangkuman = false
  need_grid = false
  list_layanan_data = [
    {id: 1, 'kategori':'Surat pengantar', 'nama_layanan': 'Surat Pengantar rumah sakit', 'link_pengajuan':'ini link', 'link_penjelasan':'ini link penjelasan','warna': '#000'},
    {id: 2, 'kategori':'Surat keterangan', 'nama_layanan': 'Surat keterangan sehat', 'link_pengajuan':'ini link', 'link_penjelasan':'ini link penjelasan','warna': '#000'},
    {id: 3, 'kategori':'Surat pernyataan', 'nama_layanan': 'Surat pernyataan orang baik', 'link_pengajuan':'ini link', 'link_penjelasan':'ini link penjelasan','warna': '#000'},
    {id: 4, 'kategori':'bantuan', 'nama_layanan': 'bantuan raskin miskin', 'link_pengajuan':'ini link', 'link_penjelasan':'ini link penjelasan','warna': '#000'}
  ]
  constructor() { }

  ngOnInit(): void {
    this.check_grid_status()
  }
  check_grid_status(){
    if(this.list_layanan || this.rangkuman == true ){
      this.need_grid = true
    }else{
      this.need_grid == false
    }
  }
}
