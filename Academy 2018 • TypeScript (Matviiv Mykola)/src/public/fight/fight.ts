// create async function fight
import Fighter from "./fighter";
import ImprovedFighter from "./improvedFighter";


export default async function fight(fighter: Fighter, improvedFighter: ImprovedFighter, ...point: number[]) {
    for (let i = 0; i < point.length; i++) {
      fighter.hit(improvedFighter, point[i]);
      if (improvedFighter.health <= 0) {
        console.log(`ImprovedFighter ${improvedFighter.name} is in knockout!`);
        await improvedFighter.knockout().then(message => console.log(message));
        console.log(`Game over!!! Fighter ${fighter.name} is the winner!`);
        break;
      }
      improvedFighter.doubleHit(fighter, point[i]);
      if (fighter.health <= 0) {
        console.log(`Fighter ${fighter.name} is in knockout!`);
        await fighter.knockout().then(message => console.log(message));
        console.log(
          `Game over!!! ImprovedFighter ${improvedFighter.name} is the winner!`
        );
        break;
      }
    }
  }
  


























// import Driver, { IDriver } from './driver';

// export interface IUser extends IDriver{
//     setInfo: () => void;
// }

// export class User extends Driver implements IUser{
//     constructor() {
//         super();
//     }

//     setInfo(): void{
//         const nameInput = document.getElementById('name') as HTMLInputElement;
//         const speedInput = document.getElementById('speed') as HTMLInputElement;

//         this.name = nameInput.value;
//         this.speed = Number(speedInput.value);
        
//         this._showInfo(this.name, this.speed);
//     }

//     private _showInfo(name: string, speed: number){
//         const $user = document.getElementById('user-info');
//         $user.innerText = `Name: ${name}, speed - ${speed}mph`;
//     }
// }
