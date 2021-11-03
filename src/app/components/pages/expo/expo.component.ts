import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppSettings } from 'src/app/app.settings';
import { SliderModel } from 'src/app/models/slidermodel';
import SwiperCore, { SwiperOptions, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Autoplay,Pagination]);

@Component({
  selector: 'app-expo',
  templateUrl: './expo.component.html',
  styleUrls: ['./expo.component.css']
})
export class ExpoComponent implements OnInit {
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

  constructor(private router: Router) {
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
      AppSettings.SLIDERS.forEach(function(item, indice, array) {
        
        if(indice >= 1){
          item.orden = o;
          s.push(item);
          o++;
        } else {
          item.orden = 8-o;
          s.push(item);
        }
      });
      
    return s;
  }
}
