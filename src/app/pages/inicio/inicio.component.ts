import { Component } from '@angular/core';
import { Inicio1Component } from '../inicio1/inicio1.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [Inicio1Component],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
