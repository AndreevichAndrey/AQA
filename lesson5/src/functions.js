function sumArr(arr) {
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

const arr1 = [1, 2, 3, 3, 7, 9, 15];
const arr2 = ['1', '2', '4', '1', '2', '4'];
const arr3 = ['1', true, undefined, 2];
const res = sumArr(arr1);
const res2 = sumArr(arr2);
const res3 = sumArr(arr3);
console.log(res);
console.log(res2);
console.log(res3);
