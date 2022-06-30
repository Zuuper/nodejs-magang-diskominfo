import { Component, OnInit } from '@angular/core';
import { LayananService } from 'src/app/_service/layanan.service';

@Component({
  selector: 'app-detail-pengajuan',
  templateUrl: './detail-pengajuan.component.html',
  styleUrls: ['./detail-pengajuan.component.css']
})
export class DetailPengajuanComponent implements OnInit {
  // Start variables
  kategori = "bantuan"
  nama_layanan = "bantuan Masyarakat Terdampak Covid-19"
  detail = {
    id : 1,
    kategori : "Bantuan",
    nama_layanan : "Bantuan Sembako murah",
    warna : "#321",
    detail_progres : [
      {id: '1', nama_progress : 'Pengajuan Layanan', status: '', tgl_progress : ''},
      {id: '2', nama_progress : 'validasi data pengajuan', status: '', tgl_progress : ''},
      {id: '3', nama_progress : 'Penyetujuan pengajuan', status: '', tgl_progress : ''},
      {id: '4', nama_progress : 'penandatanganan pengajuan', status: '', tgl_progress : ''},
      {id: '5', nama_progress : 'pengajuan selesai', status: '', tgl_progress : ''},],
    detail_status : "dokumen sedang diproses menunggu  tandatangan dari kades"
  }
  // End Variables
  // Start CSS Classes
  common_title_text = "text-2xl max-w-xl capitalize\
                        md:text-lg\
                        lg:text-xl lg:max-w-2xl\
                        xl:text-2xl\
                        2xl:text-3xl"
  common_sub_heading_text = "text-sm max-w-xl capitalize\
                              md:text-md\
                              lg:text-lg lg:max-w-2xl\
                              xl:text-xl\
                              2xl:text-2xl"
  // End CSS Classes
  constructor(private layananService : LayananService ) { }

  ngOnInit():void{
  }

}
