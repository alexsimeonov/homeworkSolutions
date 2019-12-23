// Input.
let input = [
    '55',
    '74'
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let totalMessages = +gets();
let totalMinutes = +gets();
let bill = 12.00;

let extraMessages = totalMessages - 20;
let extraMinutes = totalMinutes - 60;

let messageTax = (extraMessages * 0.06) * (1 / 5);
let minuteTax = (extraMinutes * 0.10) * (1 / 5);



let totalBill;

if (totalMessages <= 20 && totalMinutes <= 60) {
    print("0 additional messages for 0.00 levas");
    print("0 additional minutes for 0.00 levas");
    print("0.00 additional taxes");
    print("12.00 total bill");
} else if (totalMessages <= 20 && totalMinutes > 60) {
    print("0 additional messages for 0.00 levas");
    print(extraMinutes + " additional minutes for " + (extraMinutes * 0.10).toFixed(2) + " levas");
    print(minuteTax.toFixed(2) + " additional taxes");
    print(((bill + (extraMinutes * 0.10) + minuteTax).toFixed(2) + " total bill"));
} else if (totalMessages > 20 && totalMinutes <= 60) {
    print(extraMessages + " additional messages for " + (extraMessages * 0.06).toFixed(2) + " levas");
    print(`0 additional minutes for 0.00 levas`);
    print(messageTax.toFixed(2) + " additional taxes");
    print(((bill + (extraMessages * 0.06) + messageTax).toFixed(2) + " total bill"));
} else if (totalMessages > 20 && totalMinutes > 60) {
    print(extraMessages + " additional messages for " + (extraMessages * 0.06).toFixed(2) + " levas");
    print(extraMinutes + " additional minutes for " + (extraMinutes * 0.10).toFixed(2) + " levas");
    print((messageTax + minuteTax).toFixed(2) + " additional taxes");
    print((bill + (extraMessages * 0.06) + messageTax + (extraMinutes * 0.10) + minuteTax).toFixed(2) + " total bill");
}
