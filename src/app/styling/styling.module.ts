import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatIconModule,
    FormsModule, 
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatIconModule,
    FormsModule, 
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [
    {provide : MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue : {appearance : 'outline'}}
  ]
})
export class StylingModule { }
