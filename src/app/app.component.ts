import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LaboIV2021EjercicioUno';
  miUsuario:Usuario = new Usuario();
  edadUno:number;
  edadDos:number;
  suma:number;
  promedio:number;
  saludar()
  {
    console.log("hola como va=?");
  }

  calcular()
  {
    this.suma= this.edadUno + this.edadDos;
    this.promedio = this.suma /2;
  }
  limpiar()
  {
    this.suma=0;
    this.promedio=0;
    this.edadUno=0;
    this.edadDos=0;
  }

}
