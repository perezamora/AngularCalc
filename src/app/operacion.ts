export class Operacion {

    constructor(
        public num1: number,
        public num2: number
    ) { }

    suma() {
        return this.num1 + this.num2;
    }

    resta() {
        return this.num1 - this.num2;
    }

    mult() {
        return this.num1 * this.num2;
    }

    div() {
        return this.num1 / this.num2;
    }

}
