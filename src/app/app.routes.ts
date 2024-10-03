import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CineComponent } from './pages/cine/cine.component';
import { DetallesPeliculas1Component } from './componet/detalles.peliculas1/detalles.peliculas1.component';
import { Inicio1Component } from './pages/inicio1/inicio1.component';

export const routes: Routes = [
    {path:'inicio', component:InicioComponent},
    {path:'informacion',component:InformacionComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'cine',component:CineComponent},
    {path:'',redirectTo:'/inicio',pathMatch:'full'},
    {path:'inicios1',component:Inicio1Component},
    


    {path:'pelicula/:id',component:DetallesPeliculas1Component},

];
