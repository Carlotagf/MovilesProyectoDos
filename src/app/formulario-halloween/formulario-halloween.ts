import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators,  } from '@angular/forms';

@Component({
  selector: 'app-formulario-halloween',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-halloween.html',
  styleUrl: './formulario-halloween.css'
})
export class FormularioHalloween {
f: any;
mensaje() {
throw new Error('Method not implemented.');
}
  

  formulario: FormGroup;
  enviado = false;
  mensajeBienvenida = '';

  tiposInvitado = ['Humano', 'Fantasma', 'Vampiro', 'Bruja'];

  constructor(private fb: FormBuilder){
    this.formulario = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.email, Validators.required ]],
    tipoInvitado: [' ', Validators.required],
    disfraz: ['', Validators.required],
    fechaLlegada: ['', Validators.required],
    aceptaReglas: ['']
  });
  
  

  

}
}


