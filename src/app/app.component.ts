import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipes';
  nombre: string = 'Capitán América';
  nombre2: string = 'dAnIel lÓpeZ';
  numberCard = '  dfgdfgfg  '; //'1234 5678 9012 3456';
  obfuscation = {key: 'email', value: 'd.lopez.1740@gmail.com'}
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();

  idioma: string = 'es';
  videoUrl: string = 'https://www.youtube.com/embed/yo8KJB147BI';

  valorPromesa = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  })

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }

  cambiarIdioma(idioma: string) {
    this.idioma = idioma;
  }
}
