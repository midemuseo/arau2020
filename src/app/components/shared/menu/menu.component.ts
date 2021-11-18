import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public cerrarMenu(){
    
    var menu = document.getElementById("menus");
    var contenido = document.getElementById("contenido");
    var boton = document.getElementById("btn-menu");
    menu?.classList.add("menu-oculto");
    contenido?.classList.add("contenido-full");
    boton?.classList.remove("btn-menu-inactive");
    boton?.classList.add("btn-menu-active");
  }
}
