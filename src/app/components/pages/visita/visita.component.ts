import { Component,  OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppSettings } from 'src/app/app.settings';
import { SliderModel } from 'src/app/models/slidermodel';
import SwiperCore, { SwiperOptions, Navigation, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Autoplay,Navigation, Pagination]);

@Component({
  selector: 'app-visita',
  templateUrl: './visita.component.html',
  styleUrls: ['./visita.component.css']
})

export class VisitaComponent implements OnInit {

    config: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 50,
        navigation: true,
        pagination: { clickable: true , type: 'fraction'},
        scrollbar: { draggable: true },
        autoplay:{
            delay:3000,
            disableOnInteraction: false
        },
      };
    
      configDos: SwiperOptions = {
        navigation: true,
        slidesPerView: 1,breakpoints: {
          // when window width is >= 320px
            768: {
                slidesPerView: 2
            }
        },
        watchSlidesProgress:true,
        
        /* autoplay:{
            delay:5000,
            disableOnInteraction: false
        } */
      }

      public actividades : Array<any> = [{
        //titulo:'Recorrido Fotografías que nos conectan',
        texto:'Recorrido a través de la exposición que invitará a los visitantes a realizar conexiones emocionales, compartir vivencias, hilar narrativas y descubrir en las fotografías un espejo que muestra las diversas realidades que cada persona experimentó desde que se oficializó la pandemia en México.',
        dirigido:'Visitantes de la exposición 2020.',
        urlImg:'assets/img/visita/conectan.jpg',
        tiempo:40,
        participantes:10,
        fechas:null,
        horarios:'13:00 y 16:00 H.',
        ubicacion:'Trampantojo, Planta baja.',
        class:''
      },
      {
        //titulo:'Laboratorio de foto creativa',
        texto:'Taller que permitirá a los participantes descubrir algunas técnicas para crear diferentes filtros con objetos convencionales para explotar el potencial de la cámara de su celular, particularmente en retratos o autorretratos.',
        dirigido:'Jóvenes y adultos.',
        urlImg:'assets/img/visita/laboratorio.jpg',
        tiempo:30,
        participantes:8,
        fechas:null,
        horarios:'13:00 y 16:00 H.',
        ubicacion:'Zona de talleres, Planta baja.',
        class:'logo-lg'
      },
      {
        //titulo:'El MIDE desde el cielo: principios básicos de la fotografía aérea',
        texto:'Demostración realizada por los especialistas de Drones de México, expertos en la toma de fotografías aéreas, que permitirá a los participantes descubrir los principios de la fotografía aérea mediante una demostración con las cámaras y drones que se utilizan para realizarla.',
        dirigido:'Jóvenes y adultos.',
        urlImg:'assets/img/visita/cielo.jpg',
        tiempo:30,
        participantes:30,
        fechas:'7 de noviembre y 5 de diciembre de 2021, 16 de enero, 20 de febrero, 13 de marzo, 17 de abril y 8 de mayo de 2022.',
        horarios:'12:00 y 13:15 H.',
        ubicacion:'Patio principal.',
        boton: 'hola',
        class:''
      },
      {
        //titulo:'La fotografía a través del tiempo: taller de fotografía estereoscópica',
        texto:'Taller que invita a los participantes a experimentar la fotografía como se realizaba a finales del siglo XIX en el Fotoestudio Vergara y a explorar la fotografía tridimensional a través de un artefacto llamado estereoscopio.',
        dirigido:'Jóvenes y adultos.',
        urlImg:'assets/img/visita/tiempo.jpg',
        tiempo:45,
        participantes:8,
        fechas:null,
        horarios:'12:00 y 15:00 H.',
        ubicacion:'Zona de talleres, Planta baja.',
        class:''
      }
    ];
    
      public Sliders : Array<SliderModel> = [];
    
    constructor(private router:Router) { 
      this.Sliders = this.cambiarOrden();
    
    }
    
    ngOnInit(): void {
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
      });
    }
    onSwiper(swiper: any) {
        /* console.log(swiper); */
    }
    onSlideChange() {
    }

    comprar(){
       window.open("https://www.mide.org.mx/venta-de-boletos/", "_blank");
    }

    cambiarOrden(){
      let s : Array<SliderModel>=[];
      let o = 1;
      let d = 7;
      AppSettings.SLIDERS.forEach(function(item, indice, array) {
        
        
        if(indice >= 4){
          item.orden = o;
          s.push(item);
          o++;
        } else {
          item.orden = d;
          s.push(item);
          d--;
        }
      });
      
    return s;
  }
}