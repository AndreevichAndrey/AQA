function sumArr1(arr: (number | string | boolean | undefined)[]): number {
    let sum = 0;
    arr.forEach((element) => {
        if (typeof element === 'number' || typeof element === 'string') {
            sum += Number(element);
        } else {
            console.log(`'${element}'Invalid type of arg !`);
        }
    });
    return sum;
}

const arr11 = [1, 2, 3, 3, 7, 9, 15];
const arr22 = ['1', '2', '4', '1', '2', '4'];
const arr33 = ['1', true, undefined, 2];
const res1 = sumArr1(arr11);
const res22 = sumArr1(arr22);
const res33 = sumArr1(arr33);
console.log(res1);
console.log(res22);
console.log(res33);
