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

if (Math.max(a, b, c) == a && Math.min(a, b, c) == c) {
    print(`${a} ${b} ${c}`);
} else if (Math.max(a, b, c) == a && Math.min(a, b, c) == b) {
    print(`${a} ${c} ${b}`);
} else if (Math.max(a, b, c) == b && Math.min(a, b, c) == c) {
    print(`${b} ${a} ${c}`);
} else if (Math.max(a, b, c) == b && Math.min(a, b, c) == a) {
    print(`${b} ${c} ${a}`);
} else if (Math.max(a, b, c) == c && Math.min(a, b, c) == a) {
    print(`${c} ${b} ${a}`);
} else if (Math.max(a, b, c) == c && Math.min(a, b, c) == b) {
    print(`${c} ${a} ${b}`);
}