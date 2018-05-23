import { Operacion } from './../operacion';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

export class CalculadoraComponent  {

  public result: number;
  model = new Operacion(0, 0);

  Suma() {
    this.model = new Operacion(this.model.num1, this.model.num2);
    this.result = this.model.suma();
  }

  Resta() {
    this.model = new Operacion(this.model.num1, this.model.num2);
    this.result = this.model.resta();
  }

  Mult() {
    this.model = new Operacion(this.model.num1, this.model.num2);
    this.result = this.model.mult();
  }

  Div() {
    this.model = new Operacion(this.model.num1, this.model.num2);
    this.result = this.model.div();
  }

}
