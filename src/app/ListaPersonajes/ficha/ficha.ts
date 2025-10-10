import { Component, Input } from '@angular/core';
import { Personaje } from '../../models/Personaje.model';

@Component({
  selector: 'app-ficha',
  imports: [],
  templateUrl: './ficha.html',
  styleUrl: './ficha.css'
})
export class Ficha {

  @Input() psj: Personaje | undefined;

}
