// Input.
let input = [
    'April',
    '5'
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let month = gets();
let date = +gets();

// Spring
if (month == 'March' && 20 <= date) {
    print("Spring");
} else if (month == 'April') {
    print("Spring");
} else if (month == 'May') {
    print("Spring");
} else if (month == 'June' && date <= 20) {
    print("Spring");

    // Summer

} else if (month == 'June' && 21 <= date) {
    print("Summer");
} else if (month == 'July') {
    print("Summer");
} else if (month == 'August') {
    print("Summer");
} else if (month == 'September' && date <= 21) {
    print("Summer");

    // Autumn

} else if (month == 'September' && 22 <= date) {
    print("Autumn");
} else if (month == 'October') {
    print("Autumn");
} else if (month == 'November') {
    print("Autumn");
} else if (month == 'December' && date <= 20) {
    print("Autumn");

    // Winter

} else if (month == 'December' && 21 <= date) {
    print("Winter");
} else if (month == 'January') {
    print("Winter");
} else if (month == 'February') {
    print("Winter");
} else if (month == 'March' && date <= 19) {
    print("Winter");
}