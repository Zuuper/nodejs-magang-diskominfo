import { FormGroup } from '@angular/forms';
import { InputField } from './../../_model/input-field.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-utils',
  templateUrl: './input-utils.component.html',
  styleUrls: ['./input-utils.component.css']
})
export class InputUtilsComponent implements OnInit {
  @Input() form !: FormGroup
  @Input() form_field : InputField[] = []
  @Input() readonly_form : boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){}

}
