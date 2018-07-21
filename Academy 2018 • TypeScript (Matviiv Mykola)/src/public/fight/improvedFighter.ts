// Create class ImprovedFighter
import Fighter , {IFighter} from "./fighter";

export interface IImprovedFighter extends IFighter{
    doubleHit: (enemy: ImprovedFighter, points: number) => void;
}

export default class ImprovedFighter extends Fighter implements IImprovedFighter{
    doubleHit(enemy: IImprovedFighter | Fighter, points: number) {
        super.hit(enemy, points * 2);
    }
}