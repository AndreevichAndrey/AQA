import { IPlant } from './interfaces';

export abstract class Plant implements IPlant {
    protected height: number;
    protected age: number;

    public constructor(public name: string) {
        this.height = 0;
        this.age = 0;
    }

    public abstract grow(): void;

    public photosynthesis(): void {
        console.log(`${this.name} is growing`);
    }

    protected increaseAge(): void {
        this.age++;
    }

    protected increaseHeight(value: number): void {
        this.height += value;
    }
}
