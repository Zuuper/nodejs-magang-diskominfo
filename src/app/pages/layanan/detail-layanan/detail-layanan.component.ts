import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-layanan',
  templateUrl: './detail-layanan.component.html',
  styleUrls: ['./detail-layanan.component.css']
})
export class DetailLayananComponent implements OnInit {
  detail = {
    nama_layanan : "Surat pengantar sehat sejahtera",
    kategori : "pengantar",
    waktu_pengerjaan : "10 - 15 hari",
    daftar_syarat : [{id: 1, nama_syarat : "Foto KK"}, {id:2, nama_syarat : "Foto KTP"}],
    keterangan : "surat ini digunakan untuk anda yang merasa sehat dan sejahtera, biasanya digunakan oleh orang yang ingin melakukan sumbangan organ tubuh",
    output : "ini link output"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
