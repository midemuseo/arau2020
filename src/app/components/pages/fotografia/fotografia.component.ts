import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppSettings } from 'src/app/app.settings';
import { SliderModel } from 'src/app/models/slidermodel';
import SwiperCore, { SwiperOptions, Navigation, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Autoplay, Navigation, Pagination]);

@Component({
  selector: 'app-fotografia',
  templateUrl: './fotografia.component.html',
  styleUrls: ['./fotografia.component.css']
})
export class FotografiaComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true , type: 'fraction'},
    scrollbar: { draggable: true }
  };
  public Sliders : Array<SliderModel> = [];
  public audio1 :string = "";
  public bloque :number = 1;
  constructor(private router:Router) {
    this.audio1 = "assets/audios/file_example_MP3_700KB.mp3";
    this.Sliders = this.cambiarOrden();
  }

  audioList1 = [
    {
      url: "assets/audios/MIDE_Digital_Joel_Meyerowitz.mp3",
      title: "Ver el mundo que nos rodea",
      cover: "assets/img/covers/_joel-meyerowitz-min.jpg"
    }
  ];
  audioList2 = [
    {
      url: "assets/audios/MIDE_Digital_Mariana_Yampolsky.mp3",
      title: "El color pide color",
      cover: "assets/img/covers/mariana-yampolsky-min.jpg"
    }
  ];
  audioList3 = [
    {
      url: "assets/audios/MIDE_Digital_Jose_Kochen.mp3",
      title: "La conquista del aire",
      cover: "assets/img/covers/juan-jose-koche-min.jpg"
    }
  ];

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
  verBloque(bloque:number){
    this.bloque = bloque;
  }
  
  link(){
    window.open('https://www.mide.org.mx/la-vida-contenida/', '_blank');
  }
  cambiarOrden(){
      let s : Array<SliderModel>=[];
      let o = 1;
      let d = 7;
      AppSettings.SLIDERS.forEach(function(item, indice, array) {
        
        
        if(indice >= 2){
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
