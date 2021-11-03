import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SliderPrincipalComponent } from './components/shared/slider-principal/slider-principal.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AvisosComponent } from './components/shared/footer/avisos/avisos.component';
import { TerminosComponent } from './components/shared/footer/terminos/terminos.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { AudioComponent } from './components/shared/audio/audio.componet';
import { EmotionsComponent } from './components/shared/emotions/emotions.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ExpoComponent } from './components/pages/expo/expo.component';
import { FotografiaComponent } from './components/pages/fotografia/fotografia.component';
import { ModalResultadosComponent } from './components/shared/modal-resultados/modal-resultados.component';
import { VeinteComponent } from './components/pages/veinte/veinte.component';
import { VisitaComponent } from './components/pages/visita/visita.component';
import { GratificacionComponent } from './components/pages/gratificacion/gratificacion.component';

import { SwiperModule } from 'swiper/angular';
import { AngMusicPlayerModule } from 'ang-music-player';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
// Servicios
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AccesibilidadComponent } from './components/pages/accesibilidad/accesibilidad.component';
import { AliadosComponent } from './components/shared/footer/aliados/aliados.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';



@NgModule({
  declarations: [
    AppComponent,
    SliderPrincipalComponent,
    FooterComponent,
    AliadosComponent,
    AvisosComponent,
    TerminosComponent,
    AudioComponent,
    MenuComponent,
    EmotionsComponent,
    HomeComponent,
    ExpoComponent,
    FotografiaComponent,
    ModalResultadosComponent,
    VeinteComponent,
    VisitaComponent,
    AccesibilidadComponent,
    GratificacionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    AngMusicPlayerModule,
    SweetAlert2Module.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    YouTubePlayerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    { 
      provide: LocationStrategy, 
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
