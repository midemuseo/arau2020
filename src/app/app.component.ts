import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'mide-arau';
  public emotions:Array<any> = [];
  public hola:string = "hola";
  ngOnInit(): void {
   
  }

  setEmotions($event:any){
    this.emotions = $event;
  }
}

