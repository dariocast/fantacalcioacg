import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {FormazioniComponent} from './formazioni/formazioni.component';
import {SchieraFormazioneComponent} from './schiera-formazione/schiera-formazione.component';
import {RegolamentoComponent} from './regolamento/regolamento.component';
import {QuotazioniComponent} from './quotazioni/quotazioni.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './_guards/auth.guard';
import {AdminGuard} from './_guards/admin.guard';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'formazioni', component: FormazioniComponent, canActivate: [AuthGuard]},
  {path: 'schiera-formazione', component: SchieraFormazioneComponent, canActivate: [AuthGuard]},
  {path: 'regolamento', component: RegolamentoComponent},
  {path: 'quotazioni', component: QuotazioniComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
