import { AlumnoComponent } from './alumno/alumno.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  {
    path: 'home',
    component: CalculadoraComponent
  },
  {
    path: 'alumno',
    component: AlumnoComponent
  },
];

export const routing = RouterModule.forRoot(appRoutes);
