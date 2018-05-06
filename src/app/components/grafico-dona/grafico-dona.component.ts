import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() graficoD: any;

  public titulo: string;
  public doughnutChartLabels: string[];
  public doughnutChartData: number[];
  public doughnutChartType: string;

  constructor() {

   }

  ngOnInit() {

    this.titulo = this.graficoD['leyenda'];
    this.doughnutChartLabels = this.graficoD['labels'];
    this.doughnutChartData = this.graficoD['data'];
    this.doughnutChartType = this.graficoD['type'];
  }

}

