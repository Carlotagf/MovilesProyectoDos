import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-matatopos',
  imports: [CommonModule],
  templateUrl: './matatopos.html',
  styleUrl: './matatopos.css'
})
export class Matatopos {

  topos : number[] = [1,0,0,0,0,0,0,0,0];

   
  mataTopo(index:number){
    console.log(index);
  }

  

}
