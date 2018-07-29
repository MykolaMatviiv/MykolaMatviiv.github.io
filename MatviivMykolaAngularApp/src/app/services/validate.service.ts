import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {
  expression: string;
  confirmValue: number;

  constructor() {
    let number1 = Math.round(Math.random() * 100);
    let number2 = Math.round(Math.random() * 100);
    this.expression = number1 + ' + ' + number2 + ' = ';
    this.confirmValue = number1 + number2;
  }

  confirmValidation(answer: number){
    return (answer == this.confirmValue);
  }

}
