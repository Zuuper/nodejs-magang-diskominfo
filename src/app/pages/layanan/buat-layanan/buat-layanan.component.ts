import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { InputField } from 'src/app/_model/input-field.model';
import { LayananService } from 'src/app/_service/layanan.service';
@Component({
  selector: 'app-buat-layanan',
  templateUrl: './buat-layanan.component.html',
  styleUrls: ['./buat-layanan.component.css']
})
export class BuatLayananComponent implements OnInit {

  nama_layanan = "surat Pernyataan mampu"
  form_field : InputField[] = []
  form !: FormGroup
  id_layanan : string = ""
    // Start Css Classes
  common_section_margin_class = "mt-8 mb-8 \
                                  md:mt-20 md:mb-12\
                                  lg:mt-28 lg:mb-14 \
                                  xl:mt-36 xl:mb-18"
  common_subheading_text = "text-xl max-w-xl\
                            md:text-2xl\
                            lg:text-3xl\
                            xl:text-4xl"
  common_title_text = "text-2xl max-w-2xl\
                        md:text-3xl\
                        lg:text-4xl\
                        xl:text-5xl"
// End Css Classes
  constructor(private router : Router, private layananService : LayananService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_layanan = this.activeRoute.snapshot.url[1].path
    this.layananService.get_form_layanan(this.id_layanan).subscribe((d : any) =>{
      this.form =  d.form
      this.form_field = d.form_field
    })
  }
  getValue(value : any){
    for(let x in value){

      if(value[x] == ""){
        return Swal.fire({
          icon : "warning",
          title : "data belum lengkap",
          text : 'menuyimpan sebagai draft yang akan di edit nanti ?',
          showDenyButton : true,
          confirmButtonText : 'simpan draft',
          denyButtonText : `batal dan hapus`
      }).then((result)=>{
        if(result.isConfirmed){
          Swal.fire("draft tersimpan","","success")
        }else if(result.isDenied){Swal.fire("draft terhapus","","info")}
      })
      }    
      else if(value[x] == "undefined"){
        return Swal.fire('value undefined',"kemungkinan ada error dalam sistem", 'error')
      }
    }
    Swal.fire({
      icon : "question",
      title : "lakukan pengajuan", 
      text : 'data anda akan disimpan dan diproses untuk pengajuan',
      showDenyButton : true,
      showCancelButton : true,
      confirmButtonText : 'ajukan pengajuan',
      denyButtonText : 'simpan draft',
      cancelButtonText : 'kembali'
    }).then((result)=>{
      if(result.isConfirmed){
        Swal.fire('Pengajuan Berhasil','','success')
      }else if(result.isDenied){
        Swal.fire('Draft tersimpan','','info')
      }
    })
    return this.router.navigate([''])
  }
}
