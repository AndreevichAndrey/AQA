import { IPlant } from './interfaces';
import { Flower } from './class-flower';
import { FruitTree } from './class-tree';

function simulateGrowth(plant: IPlant, days = 3): void {
    console.log(`Simulating growth for ${plant.name} over ${days} days...`);

    for (let day = 1; day <= days; day++) {
        console.log(`Day ${day}:`);
        plant.photosynthesis();
        plant.grow();
    }

    console.log(`Simulation for ${plant.name} completed.\n`);
}
const CherryTree = new FruitTree('CherryTree', 'Cherry`s');
const Rose = new Flower('Rose', 'Red');

simulateGrowth(CherryTree, 2);
simulateGrowth(Rose, 3);
