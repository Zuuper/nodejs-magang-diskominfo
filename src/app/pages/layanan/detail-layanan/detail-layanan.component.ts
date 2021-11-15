import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-layanan',
  templateUrl: './detail-layanan.component.html',
  styleUrls: ['./detail-layanan.component.css']
})
export class DetailLayananComponent implements OnInit {
  detail = {
    nama_layanan : "",
    kategori : "",
    waktu_pengerjaan : "",
    daftar_syarat : [{id: 1, nama_syarat : "KK"}],
    keterangan : "",
    output : ""
  }
  constructor() { }

  ngOnInit(): void {
  }

}
