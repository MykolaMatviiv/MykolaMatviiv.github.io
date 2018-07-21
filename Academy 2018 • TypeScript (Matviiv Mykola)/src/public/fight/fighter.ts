// Create class Fighter
export interface IFighter{
    name: string;
    health: number;
    power: number;
    setDamage: (damage: number) => void;
    hit: (enemy: IFighter, point: number) => void;
    knockout: () => Promise<{}>;
}

export default class Fighter implements IFighter{
    name: string;
    health: number;
    power: number;
    constructor(name: string, health: number, power: number){
        this.name = name;
        this.health = health;
        this.power = power;
    }
    setDamage(damage: number) {
        this.health = this.health - damage;
        if (this.health < 0) {
        this.health = 0;
        }
        console.log(`${this.name} health: ${this.health}`);
    }
    hit(enemy: IFighter, point: number) {
        let damage = point * this.power;
        enemy.setDamage(damage);
    }
    knockout() {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("time is over");
        }, 500);
        });
    }
}