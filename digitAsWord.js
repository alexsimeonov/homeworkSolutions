// Input.
let input = [
    '7'
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution


let a = gets();

if (a == 0) {
    print("zero");
} else if (a == 1) {
    print("one");
} else if (a == 2) {
    print("two");
} else if (a == 3) {
    print("three");
} else if (a == 4) {
    print("four");
} else if (a == 5) {
    print("five");
} else if (a == 6) {
    print("six");
} else if (a == 7) {
    print("seven");
} else if (a == 8) {
    print("eight");
} else if (a == 9) {
    print("nine");
} else if (a != 0 || a != 1 || a != 2 || a != 3 || a != 4 || a != 5 || a != 6 || a != 7 || a != 8 || a != 9) {
    print("not a digit");
}