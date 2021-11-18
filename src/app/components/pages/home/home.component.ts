import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { SwiperOptions, Pagination, Autoplay } from 'swiper';
import Swal from 'sweetalert2';
import { NavigationEnd, Router } from '@angular/router';
import { SliderModel } from 'src/app/models/slidermodel';
import { AppSettings } from 'src/app/app.settings';

SwiperCore.use([Autoplay,Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public Sliders : Array<SliderModel> = [];
  
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay:{
      delay:3000,
      disableOnInteraction: false
    }
  };

  public animateBox:any;
  
  constructor(private router: Router) { 
    
    this.Sliders = AppSettings.SLIDERS; 

    this.animateBox = {
      reset: true,  easing: 'ease-in-out', duration: 300, delay: 500, distance:'0px'
    }  

  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
    
    if(localStorage.getItem('idEmotion')!=null){

    }

    let leido = localStorage.getItem("leido");
    
    if (leido == null) {
      var boton = document.getElementById("btn-menu");
      boton?.classList.add("btn-menu-inactive");

      Swal.fire({
        position: 'center-left',
        customClass: { container: 'inicioHome' },
        backdrop: 'rgba(255,255,255,0.8)',
        html: '<div class="contenidohoy">'+
          '<div class= "tamanohoy">'+
          '<div class="imghoy"><img src="assets/img/logo-mide-digital-popup-min.png" alt = "Mide digital"></div>'+
          '<div class= "textohoy">'+
          '<p>La pandemia nos ha despertado múltiples emociones...</p>' +
          '<div class="titulohoy">¿Qué sientes hoy?</div>'+
          '<p>Utiliza la barra de colores para expresar tus emociones.</p>' +
          '<div class="flechita"><img src="assets/img/menu/arrow-min.png" alt="Mide digital Flechita"></div>' +
          '</div>' +
          '</div>'+
          '</div>',
        showConfirmButton: false,
        showCloseButton: true,
        allowOutsideClick: false,
      }).then(() => {
        localStorage.setItem("leido", "1");
        var boton = document.getElementById("btn-menu");
        boton?.classList.remove("btn-menu-inactive");
      });
    }
  }

  onSwiper(swiper: any) {
    /* console.log(swiper); */
  }
  onSlideChange() {

  }
  IraVisita(){
    this.router.navigate(['/prepara-tu-visita']);
  }
}
