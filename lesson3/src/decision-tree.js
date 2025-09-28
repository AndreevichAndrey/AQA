const a = 5;
const b = 10;
const c = 5;

console.log('-------');
if (a < b) {
  console.log(true);
}

console.log('-------');
if (a > b) {
  console.log(false);
} else if (a === c) {
  console.log(true);
} else {
  console.log(false);
}

console.log('-------');
if (a < b && b > c) {
  console.log(true);
} else {
  console.log(false);
}
