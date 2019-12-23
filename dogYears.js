// Input.
let input = [
    '3'
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let HY = +gets();
let DY = 0;

for (i = 1; i < HY + 1; i++) {

    if (i <= 2) {
        DY += 10;
    } else if (i > 2) {
        DY += 4;
    }
}
print(DY);