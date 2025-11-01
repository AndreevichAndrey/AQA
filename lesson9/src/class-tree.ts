import { Plant } from './abstract-class-plant';
import { IFruit } from './interfaces';

export class FruitTree extends Plant implements IFruit {
    public constructor(
        name: string,
        private fruitType: string
    ) {
        super(name);
    }

    public grow(): void {
        this.increaseAge();
        this.increaseHeight(3);
        console.log(`${this.name} is ${this.height} metres hight`);
    }

    public produceFruit(): void {
        console.log(`${this.name} has an fruit like ${this.fruitType}`);
    }
}
