import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  escaleraOutputA: string[] = [];
  escaleraOutputB: string[] = [];
  escaleraOutputC: string[] = [];

  public agenteA = 4;
  public agenteB = 4;
  public agenteC = 15;

  public textRequire: string = 'El tamaño de la escalera debe estar en el rango de 1 y 100';

  constructor() {
    this.GetStartFuntionAgenteA();
    this.GetStartFuntionAgenteB();
    this.GetStartFuntionAgenteC();
  }

  GetStartFuntionAgenteA() {
    this.escaleraOutputA = [];
    if (this.agenteA <= 0 || this.agenteA >= 100) {
      return;
    }

    for (let i = 1; i <= this.agenteA; i++) {
      const spaces = " ".repeat(this.agenteA - i);
      const hashes = "#".repeat(i);

      this.escaleraOutputA.push(spaces + hashes);

      if (i !== this.agenteA) {
        this.escaleraOutputA.push("\n");
      }
    };
    return this.escaleraOutputA;
  }


  GetStartFuntionAgenteB() {
    this.escaleraOutputB = [];
    if (this.agenteB <= 0 || this.agenteB >= 100) {
      return;
    }

    for (let i = 1; i <= this.agenteB; i++) {
      let spaces = "";
      spaces += " ".repeat(i)
      const hashes = "#".repeat(this.agenteB - i + 1);

      this.escaleraOutputB.push(spaces + hashes);

      if (i !== this.agenteB) {
        this.escaleraOutputB.push("\n");
      }
    }

    return this.escaleraOutputB;
  }

  GetStartFuntionAgenteC() {
    this.escaleraOutputC = [];
    if (this.agenteC <= 0 || this.agenteC >= 100) {
      return;
    }
    for (let i = 1; i <= this.agenteC; i += 2) {
      const spaces = " ".repeat((this.agenteC - i) / 2);
      const hashes = "#".repeat(i);
      this.escaleraOutputC.push(spaces + hashes);
      if (i !== this.agenteC) {
        this.escaleraOutputC.push("\n");
      }
    }

    this.escaleraOutputC.push("\n");

    for (let i = this.agenteC - 2; i >= 1; i -= 2) {
      const spaces = " ".repeat((this.agenteC - i) / 2);
      const hashes = "#".repeat(i);
      this.escaleraOutputC.push(spaces + hashes);
      if (i !== this.agenteC) {
        this.escaleraOutputC.push("\n");
      }
    }

    return this.escaleraOutputC;
  }
}
