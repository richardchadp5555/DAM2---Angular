import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-add-personaje',
  standalone: false,
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css'
})

export class AddPersonajeComponent {
  nuevo: Personaje = {nombre: '', poder: 0};

  // Evento que emite el nuevo personaje al componente padre
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  // Método para agregar un personaje
  agregar() {
    if (this.nuevo.nombre.trim().length === 0 || this.nuevo.poder <= 0) {
      return;
    }
    // Emitimos el personaje al componente padre
    this.onNuevoPersonaje.emit(this.nuevo);

    // Reiniciamos el formulario
    this.nuevo = { nombre: '', poder: 0};
  }
}
