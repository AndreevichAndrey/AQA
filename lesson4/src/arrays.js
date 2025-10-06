const strings = ['apple', 'banana', 'pineapple'];
const booleans = [true, false, true, false, true];
const numbers = [1, 2, 3, 4, 5];
const mixed = ['hello', 42, true, { id: 1 }, [9, 8]];

// assign
const assign_string = Object.assign([], strings);
console.log(assign_string);

// push
strings.push('Bubbles');
console.log(strings);

/// pop
const popped_string = strings.pop();
console.log(popped_string);

// forEach
console.log('index :');
strings.forEach((s, i) => console.log(i, s));

// map toUpperCase
const uppercase = strings.map((s) => s.toUpperCase());
console.log(uppercase);

// slice
const slice_func = strings.slice(0, 2);
console.log(slice_func);

// reduce
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log('sum numbers (reduce):', sum);

// reduce (booleans)
const Count = booleans.reduce((acc, b) => acc + (b ? 1 : 0), 0);
console.log(Count);

// map
const Types = mixed.map((item) => typeof item);
console.log(Types);
