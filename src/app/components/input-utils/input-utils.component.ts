import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputField } from './../../_model/input-field.model';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UtilService } from 'src/app/_service/util.service';
import { throwIfEmpty } from 'rxjs/operators';

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
  constructor(private utilService : UtilService) { }
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
  setAlamatValue(e:any){
    // this.form.setValue(e)
    console.log(e)
    console.log(this.form)
  }
}
