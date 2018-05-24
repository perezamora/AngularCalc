import { ICalc } from './ICalc';
import { Calc } from './Calc';
import { environment } from './../../environments/environment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

export class CalculadoraComponent {

  resultat: number;
  model = new Calc(0, 0);
  subtitle = environment.subtitle;

  Suma() {
    this.model = new Calc(this.model.num1, this.model.num2);
    this.resultat = this.model.Suma();
  }

  Resta() {
    this.model = new Calc(this.model.num1, this.model.num2);
    this.resultat = this.model.Resta();
  }

  Mult() {
    this.model = new Calc(this.model.num1, this.model.num2);
    this.resultat = this.model.Mult();
  }

  Div() {
    this.model = new Calc(this.model.num1, this.model.num2);
    this.resultat = this.model.Div();
  }

}

