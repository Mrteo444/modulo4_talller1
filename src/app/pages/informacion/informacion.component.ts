import { Component } from '@angular/core';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent {

  selectMovie(movie: string) {
    alert(`Has seleccionado la película: ${movie}. ¡Disfruta del espectáculo!`);
  }
}
