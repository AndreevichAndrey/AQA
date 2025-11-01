import { IAroma } from './interfaces';
import { Plant } from './abstract-class-plant';

export class Flower extends Plant implements IAroma {
    public constructor(
        name: string,
        private color: string
    ) {
        super(name);
    }

    public grow(): void {
        this.increaseAge();
        this.increaseHeight(2);
        console.log(`${this.name} is grow ${this.height} cm hight`);
    }

    public smell(): void {
        console.log(`${this.name} smells nice like ${this.color} flowers!`);
    }
}
