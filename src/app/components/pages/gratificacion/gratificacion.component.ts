import { Component,  OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppSettings } from 'src/app/app.settings';
import { SliderModel } from 'src/app/models/slidermodel';
import SwiperCore, { SwiperOptions, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Autoplay,Pagination]);
@Component({
  selector: 'app-veinte',
  templateUrl: './gratificacion.component.html',
  styleUrls: ['./gratificacion.component.css']
})

export class GratificacionComponent implements OnInit {

 
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
    cambiarOrden(){
      let s : Array<SliderModel>=[];
      let o = 1;
      let d = 7;
      AppSettings.SLIDERS.forEach(function(item, indice, array) {
        
        
        if(indice >= 6){
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
