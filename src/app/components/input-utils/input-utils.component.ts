import { FormGroup } from '@angular/forms';
import { InputField } from './../../_model/input-field.model';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-utils',
  templateUrl: './input-utils.component.html',
  styleUrls: ['./input-utils.component.css']
})
export class InputUtilsComponent implements OnChanges  {
  @Input() form !: FormGroup
  @Input() form_fields !: any;
  @Input() readonly_form : boolean = false
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  onSubmit(){
  }

}
