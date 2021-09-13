import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    {provide : MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue : {appearance : 'outline'}}
  ]
})
export class StylingModule { }
