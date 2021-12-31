import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LayananService } from 'src/app/_service/layanan.service';

@Component({
  selector: 'app-detail-layanan',
  templateUrl: './detail-layanan.component.html',
  styleUrls: ['./detail-layanan.component.css']
})
export class DetailLayananComponent implements OnInit {
  detail : any
  daftar_syarat : any[] = []
  id_layanan : string = ""
  constructor(private layananService : LayananService, private router : Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_layanan = this.activeRoute.snapshot.url[1].path
    this.layananService.get_detail_layanan_data(this.id_layanan).subscribe((d : any)=>{
      this.detail = d['data']['layanan']
      console.log(this.detail)
      this.daftar_syarat = d['data']['syarat']
    })
  }

}
