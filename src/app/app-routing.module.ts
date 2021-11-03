import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ExpoComponent } from './components/pages/expo/expo.component';
import { FotografiaComponent } from './components/pages/fotografia/fotografia.component';
import { VeinteComponent } from './components/pages/veinte/veinte.component';
import { VisitaComponent } from './components/pages/visita/visita.component';
import { AccesibilidadComponent } from './components/pages/accesibilidad/accesibilidad.component';
import { GratificacionComponent } from './components/pages/gratificacion/gratificacion.component';
import { TerminosComponent } from './components/shared/footer/terminos/terminos.component';
import { AvisosComponent } from './components/shared/footer/avisos/avisos.component';
import { AliadosComponent } from './components/shared/footer/aliados/aliados.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'expo', component: ExpoComponent },
  { path: 'fotografia', component: FotografiaComponent },
  { path: 'sobre-2020', component: VeinteComponent },
  { path: 'prepara-tu-visita', component: VisitaComponent},
  { path: 'guia-accesibilidad', component: AccesibilidadComponent},
  { path: 'gratificacion', component: GratificacionComponent},
  { path: 'aliados', component:AliadosComponent},
  { path: 'terminos-y-condiciones', component: TerminosComponent},
  { path: 'aviso-de-privacidad', component: AvisosComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
