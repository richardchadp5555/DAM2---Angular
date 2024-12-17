import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-lista',
  standalone: false,
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})

export class ListaComponent {
  @Input() personajes: Personaje[] = []
  @Output() onEliminarPersonaje: EventEmitter<number> = new EventEmitter();

  eliminar(index: number) {
    this.onEliminarPersonaje.emit(index);
  }
}


