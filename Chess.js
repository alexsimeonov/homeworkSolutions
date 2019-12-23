// Input.
let input = [
    'b',
    '5'
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let R = gets();
let L = +gets();


if (R == 'a' && L % 2 != 0) {

    print("dark");

} else if (R == 'a' && L % 2 == 0) {

    print("light");

} else if (R == 'b' && L % 2 != 0) {

    print("light");

} else if (R == 'b' && L % 2 == 0) {

    print("dark");

} else if (R == 'c' && L % 2 != 0) {

    print("dark");

} else if (R == 'c' && L % 2 == 0) {

    print("light");

} else if (R == 'd' && L % 2 != 0) {

    print("light");

} else if (R == 'd' && L % 2 == 0) {

    print("dark");

} else if (R == 'e' && L % 2 != 0) {

    print("dark");

} else if (R == 'e' && L % 2 == 0) {

    print("light");

} else if (R == 'f' && L % 2 != 0) {

    print("light");

} else if (R == 'f' && L % 2 == 0) {

    print("dark");

} else if (R == 'g' && L % 2 != 0) {

    print("dark");

} else if (R == 'g' && L % 2 == 0) {

    print("light");

} else if (R == 'h' && L % 2 != 0) {

    print("light");

} else if (R == 'h' && L % 2 == 0) {

    print("dark");
}