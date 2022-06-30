import { LayananService } from 'src/app/_service/layanan.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Capacitor } from '@capacitor/core';
@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.css']
})
export class CardDialogComponent implements OnInit {
  device = false
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
  constructor(
    public dialogRef: MatDialogRef<CardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public layananService : LayananService) { }

  ngOnInit(): void {
    this.layananService.get_detail_pengajuan_layanan(this.data).subscribe((d:any)=>{
      console.log(d)
    })
    this.device = Capacitor.isNativePlatform()
  }

  returnOnClick(): void{
    this.dialogRef.close()
  }
}
