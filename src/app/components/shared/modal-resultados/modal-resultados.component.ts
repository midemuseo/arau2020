import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color, Label } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { EmotionService } from 'src/app/services/emotions.service';

@Component({
  selector: 'app-modal-resultados',
  templateUrl: './modal-resultados.component.html',
  styleUrls: ['./modal-resultados.component.css']
})
export class ModalResultadosComponent implements OnInit {

  
  @Input() emociones : Array<any> = [];

  constructor(private emotionService:EmotionService) { }
  
  
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales : {
      yAxes: [{
         ticks: {
            beginAtZero: true,
            max : 100,
          }
      }]
    }
  };
  
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];

  ngOnInit(): void {

  }
  
  ngOnChanges(){
    this.armarGrafico();
  }

  armarGrafico(){
    this.barChartLabels = [];
    this.barChartData = [];
    let promedios = Array();
    let colores = Array();
    this.emociones.forEach(emocion => {
            
      this.barChartLabels.push(emocion.nombre);
      promedios.push(emocion.promedio);
      colores.push(emocion.color);
  
    });
    
    this.barChartData = [ { data: promedios, label: 'Emociones' , backgroundColor:colores } ];
    
  }
}
