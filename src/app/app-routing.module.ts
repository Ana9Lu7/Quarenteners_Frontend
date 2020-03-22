import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginPageComponent} from '../app/pages/login-page/login-page.component';
import{HomePageComponent} from '../app/pages/home-page/home-page.component';
import{LaudosMedicoPageComponent} from '../app/pages/laudos-medico-page/laudos-medico-page.component';
import{AnaliseExamesPageComponent} from '../app/pages/analise-exames-page/analise-exames-page.component';
import{OrientacaoMedicaPageComponent} from '../app/pages/orientacao-medica-page/orientacao-medica-page.component';
import{TeleconsultaPageComponent} from '../app/pages/teleconsulta-page/teleconsulta-page.component';
import{EspecialistaPageComponent} from '../app/pages/especialista-page/especialista-page.component';
import{AppComponent} from '../app/app.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomePageComponent
  },
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "laudos",
    component: LaudosMedicoPageComponent
  },
  {
    path: "analise",
    component: AnaliseExamesPageComponent
  },
  {
    path: "orientacao",
    component: OrientacaoMedicaPageComponent
  },
  {
    path: "teleconsulta",
    component: TeleconsultaPageComponent
  },
  {
    path: "especialista",
    component: EspecialistaPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
