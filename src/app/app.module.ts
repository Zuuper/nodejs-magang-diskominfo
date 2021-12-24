import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StylingModule } from './styling/styling.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
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
import { ListLayananComponent } from './pages/layanan/list-layanan/list-layanan.component';
import { ProgressPengajuanStepperComponent } from './components/progress-pengajuan-stepper/progress-pengajuan-stepper.component';
import { MasukComponent } from './pages/masuk/masuk.component';
import { MainUserComponent } from './pages/akun/main-user/main-user.component';
import { PengajuanTerprosesComponent } from './pages/pengajuan-terproses/pengajuan-terproses.component';
import { CardDialogComponent } from './components/card/card-dialog/card-dialog.component';
import { DialogIconComponent } from './components/card/card-dialog/dialog-icon/dialog-icon.component';
import { AkunSayaComponent } from './components/akun-saya/akun-saya.component';
import { DetailAkunSayaComponent } from './components/detail-akun-saya/detail-akun-saya.component';
import { DraftPengajuanComponent } from './components/draft-pengajuan/draft-pengajuan.component';
import { DetailPengajuanComponent } from './pages/pengajuan-terproses/detail-pengajuan/detail-pengajuan.component';
import { DetailLayananComponent } from './pages/layanan/detail-layanan/detail-layanan.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { UniversalDialogComponent } from './components/universal-dialog/universal-dialog.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VerifikasiUserComponent } from './pages/akun/verifikasi-user/verifikasi-user.component';
import { TextFieldHelper } from './_helper/text-field-helper';
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
    ListLayananComponent,
    ProgressPengajuanStepperComponent,
    MasukComponent,
    MainUserComponent,
    PengajuanTerprosesComponent,
    CardDialogComponent,
    DialogIconComponent,
    AkunSayaComponent,
    DetailAkunSayaComponent,
    DraftPengajuanComponent,
    DetailPengajuanComponent,
    DetailLayananComponent,
    ForgotPasswordComponent,
    UniversalDialogComponent,
    VerifikasiUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StylingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    TextFieldHelper
    
  ],
  entryComponents : [
    CardDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
