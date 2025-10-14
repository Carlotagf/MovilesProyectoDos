import { Routes } from '@angular/router';
import { Contador } from './contador/contador/contador';
import { Matatopos } from './matatopos/matatopos/matatopos';
import { Carrera } from './carrera/carrera';
import { EyeCandy } from './eye-candy/eye-candy';
import { Lista } from './ListaPersonajes/lista/lista';

export const routes: Routes = [
    {path: 'contador', component: Contador},
    {path: 'matatopos', component: Matatopos},
    {path: 'carrera', component: Carrera},
    {path: 'eyecandy', component: EyeCandy},
    {path: 'ListaPersonajes', component: Lista}
    

];
