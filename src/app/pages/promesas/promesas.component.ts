import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    // Una forma de hacer
    // promesa.then(
    //   () => console.log('Terminar'),
    //   () => console.error('Error')
    // );

    // Otra forma mas limpia de hacer
    this.contarTres().then(
      mensaje => console.log('Termino! ', mensaje)
    )
    .catch( errorrec => console.error('Error en la promesa', errorrec));
  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    let promesa: Promise<boolean> = new Promise( (resolve, reject) => {

      let contador = 0;

      let intervalo = setInterval( () => {

        console.log(contador);

        contador += 1;
        if ( contador === 3 ) {
          resolve(true);
          clearInterval(intervalo);
        }
      }, 1000);

    });

    return promesa;
  }
}
