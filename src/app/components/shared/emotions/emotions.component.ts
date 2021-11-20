import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmotionModel } from 'src/app/models/emotion.model';
import { EmotionService } from 'src/app/services/emotions.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-emotions',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.css']
})
export class EmotionsComponent implements OnInit {
  @Input() emociones : Array<any> = [];
  @Output() emotions = new EventEmitter<Array<any>>();
  public Emocion :EmotionModel;
  public viewResult:boolean = false;
  
  constructor(private emotionService:EmotionService) { 
    this.Emocion = new EmotionModel();
  }

  ngOnInit(): void {
    var boton = document.getElementById("btn-menu");
    boton?.classList.add("btn-menu-inactive");
    let leido = localStorage.getItem("leido");
    if(leido!=null){
      this.viewResult = true;  
    }
    
    this.getData();
  }

  public changeEmotion(id: number) {
    this.viewResult = true;
    let contenido:any;
    let menuresponsive: any;
    let logoresponsive:any;
    var input=document.getElementById("globalColor");
    input?.setAttribute('value',id.toString());
    localStorage.setItem('tipo_emocion', id.toString());
    contenido = window.document.getElementById("contenido");
    menuresponsive = window.document.getElementById("menu-responsive");
    logoresponsive = window.document.getElementById("logo-d");
    if (contenido) {}
    this.clearColors(contenido);
    this.clearColors(menuresponsive);
    this.clearColors(logoresponsive);
    this.clieaActive(id);
    if(id !== 7){          
      logoresponsive.classList.add("logo-color-hidden");
    }
    switch (id) {
        case 1:
          contenido.classList.add("bc-body-1");
          menuresponsive.classList.add("bc-body-1");
          break;
        case 2:
          contenido.classList.add("bc-body-2");
          menuresponsive.classList.add("bc-body-2")
            break;
        case 3:
          contenido.classList.add("bc-body-3");
          menuresponsive.classList.add("bc-body-3") 
            break;
        case 4:
          contenido.classList.add("bc-body-4");
          menuresponsive.classList.add("bc-body-4")
            break;
        case 5:
          contenido.classList.add("bc-body-5");
          menuresponsive.classList.add("bc-body-5") 
            break;
        case 6:
          contenido.classList.add("bc-body-6");
          menuresponsive.classList.add("bc-body-6")
            break;
        case 7:
          contenido.classList.add("bc-body-7");
          menuresponsive.classList.add("bc-body-7")
            break;
        default:
            break;
    }
    this.Emocion.tipo = id;
    if(localStorage.getItem('ip')!=null){
      let ip = localStorage.getItem('ip');
      this.Emocion.ip = String(ip);
    }
    if(localStorage.getItem('id')!=null){
      let id : any = localStorage.getItem('id');
      this.Emocion.id = parseInt(id);
    }
    this.sendData();
  }
  public clearColors(element:any){
    element.classList.remove("bc-body-1");
    element.classList.remove("bc-body-2");
    element.classList.remove("bc-body-3");
    element.classList.remove("bc-body-4");
    element.classList.remove("bc-body-5");
    element.classList.remove("bc-body-6");
    element.classList.remove("bc-body-7");
    element.classList.remove("logo-color-hidden");
  }
  public clieaActive(id:number){

    for (let i = 1; i <= 7; i++) {
      let option = document.getElementById("numbEmotion"+i);
      if(i==id){
        option?.classList.add("active");
      }  else {
        option?.classList.remove("active");
      }
    }
  }
  public mostrarMenu(){
    var menu = document.getElementById("menus");
    var contenido = document.getElementById("contenido");
    var boton = document.getElementById("btn-menu");
    menu?.classList.remove("menu-oculto");
    contenido?.classList.remove("contenido-full");
    boton?.classList.remove("btn-menu-active");
    boton?.classList.add("btn-menu-inactive");
  }
  
  public sendData(){
    this.emotionService.sendEmotion(this.Emocion).subscribe(
      (resp:any)=>{
        this.Emocion.id = resp.ID;
        localStorage.setItem('id', resp.ID);
        this.getData();
      },
      err=>{
        Swal.fire({
          icon: 'error',
          title: 'Error al guardar emoción',
          text: ''
        })
      }
    );
  }

  public getData(){
    this.emotionService.getEmotions().subscribe(
      (resp: Array<any>) => {
          this.emociones = resp;
          this.emotions.emit(this.emociones);
      }
    );
  }
}
