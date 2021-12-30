import { FormGroup } from '@angular/forms';
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { InputField } from 'src/app/_model/input-field.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-auth-utils',
  templateUrl: './input-auth-utils.component.html',
  styleUrls: ['./input-auth-utils.component.css']
})
export class InputAuthUtilsComponent implements OnChanges {
  hide_password :boolean = true;
  @Input() readonly_form : boolean = false;
  @Input() form !: FormGroup;
  @Input() form_fields !: any;
  @Output() form_result: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
  }
  onSubmit(){
    console.log(this.form.value)
    this.form_result.emit(this.form.value)
  }
}
