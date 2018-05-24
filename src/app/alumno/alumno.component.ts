import { Component, OnInit } from '@angular/core';

import { Alumno } from './Alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  public listAlumnos: Array<Alumno>;

  constructor() { }

  ngOnInit() {

    this.listAlumnos = [
      new Alumno('Simón', 'I', '1111111'),
      new Alumno('Santiago', 'II', '2222222'),
      new Alumno('Andrés', 'III', '3333333'),
      new Alumno('Juan', 'IV', '4444444'),
      new Alumno('Felipe', 'V', '5555555'),
      new Alumno('Bartolomé', 'VI', '6666666'),
      new Alumno('Tomás', 'VII', '7777777'),
      new Alumno('Mateo', 'VIII', '88888888'),
      new Alumno('Santiago', 'IX', '999999999'),
      new Alumno('Judas', 'X', '000000000')
    ];

  }

}
