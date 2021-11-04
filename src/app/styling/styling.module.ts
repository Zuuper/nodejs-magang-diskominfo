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
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
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
    MatSelectModule,
    MatExpansionModule,
    MatStepperModule,
    MatCheckboxModule,
    MatListModule,
    MatSlideToggleModule,
    MatDialogModule
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
    MatSelectModule,
    MatExpansionModule,
    MatStepperModule,
    MatCheckboxModule,
    MatListModule,
    MatSlideToggleModule,
    MatDialogModule
  ],
  providers: [
    {provide : MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue : {appearance : 'outline'}}
  ]
})
export class StylingModule { }
