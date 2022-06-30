import { LayananService } from 'src/app/_service/layanan.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputField } from './../../_model/input-field.model';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UtilService } from 'src/app/_service/util.service';
import { throwIfEmpty } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-input-utils',
  templateUrl: './input-utils.component.html',
  styleUrls: ['./input-utils.component.css']
})
export class InputUtilsComponent implements OnInit, OnChanges  {
  @Input() form !: FormGroup
  @Input() form_fields !: any;
  @Input() readonly_form : boolean = false
  provinsi : Array<any> = []
  kabupaten : Array<any> = []
  kecamatan : Array<any> = []
  desa : Array<any> = []
  data_daerah !: Array<any>
  form_provinsi = new FormControl('',Validators.required)
  constructor(
    private utilService : UtilService, 
    private layananService : LayananService,
    private activeRoute: ActivatedRoute,
    private router : Router) { }
  ngOnInit(): void {
    this.utilService.getListDesa().subscribe((d: any)=>{
      this.provinsi = d.data.provinsi
      this.data_daerah = d.data
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  text_field = ['nik','nama','email','alasan','pekerjaan','no','tempat', 'status','kewarganegaraan','tujuan']
  alamat_field = ['alamat']
  date_field = ['tanggal']
  select_field = ['agama','kelamin']
  file_field = ['berkas','foto','file']
  onSubmit(){
    const id_layanan = this.activeRoute.snapshot.url[1].path
  
    let formdata = new FormData;

    const number_type = ['No']
    const textarea_type = ['alamat','tujuan','alasan','maksud']
    const dropdown_type = ['kelamin','agama']
    const file_type = ['file','berkas','foto']
    this.form_fields.forEach((element : any)=> {
      console.log(element);
      if(file_type.some(v => element.nama_form.toLowerCase().includes(v))){
        formdata.append("file["+element.id+"]", this.form.get(`file${element.id}`)?.value);
      }else{
        formdata.append("value["+element.id+"]", this.form.get(`value${element.id}`)?.value);
      }
    });
    this.layananService.post_layanan(formdata,id_layanan).subscribe((d: any)=>{
      return this.router.navigate([''])
    })

  }
  checkString(string_val : string, substring : any[]){
    return (substring.some(v => string_val.toLowerCase().includes(v)))
  }
  getKabupaten(e : any){
    let kab : any[] = []
    Object.keys(this.data_daerah).map((k :any)=>{
      if(k == "kabupaten"){
        kab = this.data_daerah[k]
      }
    })
    this.kabupaten = kab.filter(k => k.province_id == e.value.toString())
    this.kecamatan = []
    this.desa = []
  }
  getKecamatan(e:any){
    let kec : any[] = []
    Object.keys(this.data_daerah).map((k :any)=>{
      if(k == "kecamatan"){
        kec = this.data_daerah[k]
      }
    })
    this.kecamatan = kec.filter(k => k.regency_id == e.value.toString())
  }
  getDesa(e:any){
    let desa : any[] = []
    Object.keys(this.data_daerah).map((k :any)=>{
      if(k == "desa"){
        desa = this.data_daerah[k]
      }
    })
    this.desa = desa.filter(k => k.district_id == e.value.toString())
  }
  onFileChanged(e: any, field_name:String){
    // this.form.setValue(e)

    let fileupload: File | null = null;
    fileupload = e.target.files.item(0);
    
    console.log(fileupload, field_name);
    this.form.patchValue({
      [`${field_name}`]: fileupload
    });
  }
}
