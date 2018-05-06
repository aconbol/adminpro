import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('numProgreso') numProgreso: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {

  }

  cambiarValor(valor: number) {

    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;

    this.cambioValor.emit( this.progreso );
  }

  enCamnbios(nuevoNum: number) {

    // const elementoHTML: any = document.getElementsByName('progreso')[0];

    if ( nuevoNum > 100 ) {
      this.progreso = 100;
    } else if ( nuevoNum < 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoNum;
    }

    // elementoHTML.value = this.progreso;
    this.numProgreso.nativeElement.value = this.progreso;

    this.cambioValor.emit( this.progreso );

    this.numProgreso.nativeElement.focus();
  }
}
