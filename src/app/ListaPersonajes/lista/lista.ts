import { Component } from '@angular/core';
import { Personaje } from '../../models/Personaje.model';
import { Ficha } from '../ficha/ficha';

@Component({
  selector: 'app-lista',
  imports: [Ficha],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista {

  personajes: Personaje[] = [];



}
