import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscripcion: Subscription;

  constructor() {

    this.subscripcion = this.regresaObservable()
    .retry(2)
    .subscribe(
      numero => console.log('Subs ', numero ),
      error => console.error('Error en el obs - 2 veces', error),
      () => console.log('El observador terminó!!!')
    );

  }


  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscripcion.unsubscribe();
  }

  regresaObservable(): Observable<any> {

    return new Observable( observer => {

      let contador = 0;

      let intervalo = setInterval( () => {

        contador ++;

        let salida = {
          valor: contador
        };

        observer.next( salida );

        // if ( contador === 3 ) {
        //   clearInterval( intervalo );
        //   observer.complete();
        // }

        // if ( contador === 2 ) {
        //   // clearInterval( intervalo );
        //   observer.error('Auxilio');
        // }

      }, 500);

    })
    .retry(2)
    .map( (resp: any) => {
      return resp.valor;
    })
    .filter( (valorRecibido, index) => {
      // console.log('filter ', valorRecibido);

      if ( (valorRecibido % 2) === 1) {
        // impar
        return true;
      } else {
        // par
        return false;
      }
    });

  }
}
