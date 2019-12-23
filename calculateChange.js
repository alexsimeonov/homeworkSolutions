// Input.
let input = [
    '4.21',
    '5'
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let price = +gets();
let pay = +gets();

let one = 0.01;
let two = 0.02;
let five = 0.05;
let ten = 0.10;
let twenty = 0.20;
let fifty = 0.50;
let lev = 1;
let change = pay - price;
let check = change / lev;

if (change.toFixed(2) > lev) {
    print((parseInt(change / lev)) + " x 1 lev");
    change = (change % Math.floor(change)).toFixed(2);
}
if (change > fifty) {
    print((parseInt(change / fifty)) + " x 50 stotinki");
    change = (change % fifty).toFixed(2);
}
if (change > twenty) {
    print((parseInt(change / twenty)) + " x 20 stotinki");
    change = (change % twenty).toFixed(2);
}
if (change >= ten) {
    print((parseInt(change / ten)) + " x 10 stotinki");
    change = (change % ten).toFixed(2);
}
if (change >= five) {
    print((parseInt(change / five)) + " x 5 stotinki");
    change = (change % five).toFixed(2);
}
if (change >= two) {
    print((parseInt(change / two)) + " x 2 stotinki");
    change = (change % two).toFixed(2);
}
if (change >= one) {
    print((parseInt(change / one)) + " x 1 stotinka");
    change = (change % one).toFixed(2);
}