import { PengajuanTerprosesComponent } from './pages/pengajuan-terproses/pengajuan-terproses.component';
import { MainUserComponent } from './pages/akun/main-user/main-user.component';
import { MasukComponent } from './pages/masuk/masuk.component';
import { DetailUserComponent } from './pages/akun/detail-user/detail-user.component';
import { AktivasiUserComponent } from './pages/akun/aktivasi-user/aktivasi-user.component';
import { AkunUserComponent } from './pages/akun/akun-user/akun-user.component';
import { CaraPengajuanComponent } from './pages/bantuan/cara-pengajuan/cara-pengajuan.component';
import { BuatLayananComponent } from './pages/layanan/buat-layanan/buat-layanan.component';
import { DataLayananComponent } from './pages/layanan/data-layanan/data-layanan.component';
import { DraftLayananComponent } from './pages/layanan/draft-layanan/draft-layanan.component';
import { ListLayananComponent } from './pages/layanan/list-layanan/list-layanan.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MainComponent } from './pages/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AkunSayaComponent } from './components/akun-saya/akun-saya.component';
import { DetailAkunSayaComponent } from './components/detail-akun-saya/detail-akun-saya.component';

const routes: Routes = [
  {path: '', redirectTo : 'auth/masuk', pathMatch: 'full'},
  {path: 'menu', redirectTo : 'menu/home', pathMatch: 'full'},
  {path: 'menu/layanan', redirectTo:'menu/layanan/data-layanan', pathMatch: 'full'},
  {path : 'auth', component: MasukComponent, children : [
    {path : 'masuk', component : LoginComponent},
    {path : 'registrasi', component: RegisterComponent}
  ]},
  {path: 'menu', component: MainComponent, children : [
    {path: 'home', component: LandingPageComponent},
    {path: 'layanan', component: ListLayananComponent, children: [
      {path: 'draft-layanan', component: DraftLayananComponent, children: [
      ]},
      {path: 'data-layanan', component: DataLayananComponent},
      {path: 'buat-layanan', component: BuatLayananComponent},
      {path: 'pengajuan-layanan', component: PengajuanTerprosesComponent}
    ]},
    {path: 'bantuan', component: CaraPengajuanComponent},
    {path: 'akun', component: MainUserComponent, children: [
      {path: '', component: AkunUserComponent},
      {path: 'aktivasi-user', component: AktivasiUserComponent},
      {path: 'detail-user', component: DetailUserComponent},
      {path: 'detail-akun-user', component: DetailAkunSayaComponent},
      {path: 'akun-user', component: AkunSayaComponent},
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
