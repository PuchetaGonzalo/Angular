import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre="Gonzalo";
  textoPlaceholder="Escriba algo aqui";
  deshabilitado=true;
  imgSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"

  constructor() {
    setInterval(() => this.deshabilitado= false, 5000);
  }

  getSuma(numero1: number, numero2: number) {
    return numero1 + numero2;
  }
  textos = "Escriba algo aqui"
  texto = ""

  cambiarTexto():void {
    this.textos = "Cambiando el texto desde angular con click"
  }
}
