import { ICalc } from './ICalc';
export class Calc implements ICalc {

    num1: number;
    num2: number;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    Suma(): number {
        return this.num1 +  this.num2;
    }
    Resta(): number {
        return this.num1 -  this.num2;
    }
    Mult(): number {
        return this.num1 *  this.num2;
    }
    Div(): number {
        return this.num1 /  this.num2;
    }
}
