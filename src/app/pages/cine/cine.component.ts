import { Component } from '@angular/core';
import { Tabla1Component } from '../../componet/tabla1/tabla1.component';
import { Tabla2Component } from "../../componet/tabla2/tabla2.component";

@Component({
  selector: 'app-cine',
  standalone: true,
  imports: [Tabla1Component, Tabla2Component],
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css'
})
export class CineComponent {

  
  nocturno=true 

  filtro = false


  vista(){
    this.nocturno=!this.nocturno
  }

}
