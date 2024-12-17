import { Component } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface'

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent {
  personajes: Personaje[] = [
    {nombre: 'Goku', poder:9000},
    {nombre: 'Vegeta', poder: 8500}
  ];

  eliminarPersonaje(index: number) {
    const personajeEliminado = this.personajes.splice(index, 1)[0];
    console.log("Personaje eliminado: ", personajeEliminado);
  }
}
