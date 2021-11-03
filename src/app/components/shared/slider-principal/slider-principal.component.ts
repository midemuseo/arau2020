import { Component, Input, OnInit } from "@angular/core";
import { SliderModel } from "src/app/models/slidermodel";
import SwiperCore, { SwiperOptions, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Autoplay,Pagination]);

@Component({
    selector: 'slider-principal',
    templateUrl: './slider-principal.component.html',
    styleUrls: ['./slider-principal.component.css']
  })
  export class SliderPrincipalComponent implements OnInit {
   
    @Input() imagenesArr : Array<SliderModel> = [];
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

    ngOnInit(): void {
      this.imagenesArr.sort(((a, b) => a.orden - b.orden));
    }
    onSwiper(swiper: any) {
    
    }
    onSlideChange() {

    }
  }