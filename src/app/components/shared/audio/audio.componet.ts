import { Component,  Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
  
  @Input() urlAudio : any;
  public audio :any;
  public iniciado : boolean = false;

  constructor() { }
  
  ngOnInit(): void {
    this.audio = new Audio(this.urlAudio);
    console.log(this.urlAudio);
  }

  reproducir() {
    this.audio.play();
    this.iniciado = true;
  }
  detener(){
    this.audio.pause();
    this.iniciado = false;
  }
}