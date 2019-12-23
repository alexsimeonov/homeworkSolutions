// Input.
let input = [
    '4',
    '5',
    '20',

];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let a = +gets();
let b = +gets();
let c = +gets();
print(Math.max(a, b, c));