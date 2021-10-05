import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StylingModule } from './styling/styling.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MainComponent } from './pages/main/main.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { LandingPageSectionComponent } from './components/landing-page-section/landing-page-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { DragNDropFileUploadDirective } from './_helper/drag-n-drop-file-upload.directive';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DataLayananComponent } from './pages/layanan/data-layanan/data-layanan.component';
import { DraftLayananComponent } from './pages/layanan/draft-layanan/draft-layanan.component';
import { BuatLayananComponent } from './pages/layanan/buat-layanan/buat-layanan.component';
import { CaraPengajuanComponent } from './pages/bantuan/cara-pengajuan/cara-pengajuan.component';
import { AkunUserComponent } from './pages/akun/akun-user/akun-user.component';
import { DetailUserComponent } from './pages/akun/detail-user/detail-user.component';
import { AktivasiUserComponent } from './pages/akun/aktivasi-user/aktivasi-user.component';
import { RegistrasiComponent } from './pages/masuk/registrasi/registrasi.component';
import { ListLayananComponent } from './pages/layanan/list-layanan/list-layanan.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    TextFieldComponent,
    NavbarComponent,
    CardComponent,
    LandingPageSectionComponent,
    FooterComponent,
    DragNDropFileUploadDirective,
    LandingPageComponent,
    DataLayananComponent,
    DraftLayananComponent,
    BuatLayananComponent,
    CaraPengajuanComponent,
    AkunUserComponent,
    DetailUserComponent,
    AktivasiUserComponent,
    RegistrasiComponent,
    ListLayananComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StylingModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
