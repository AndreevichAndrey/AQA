const sumArr = (arr) =>
    arr.reduce(
        (sum, el) =>
            typeof el === 'number' || typeof el === 'string' ? sum + Number(el) : (console.log(`'${el}' Invalid type of arg !`), sum),
        0
    );

const arr1 = [1, 2, 3, 3, 7, 9, 15];
const arr2 = ['1', '2', '4', '1', '2', '4'];
const arr3 = ['1', true, undefined, 2];
const res = sumArr(arr1);
const res2 = sumArr(arr2);
const res3 = sumArr(arr3);
console.log(res);
console.log(res2);
console.log(res3);
