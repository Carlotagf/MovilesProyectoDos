import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from './contador/contador/contador';
import { Matatopos } from './matatopos/matatopos/matatopos';
import { Menu } from "./menu/menu/menu";
import { NavBar } from "./nav-bar/nav-bar";
import { Carrera } from './carrera/carrera';
import { EyeCandy } from './eye-candy/eye-candy';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SegundoProyecto');
}
