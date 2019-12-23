// Input.
let input = [
    '2043'
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution



let year = +gets();

if ((year - 2000) % 12 == 0) {
    print("Dragon");
} else if ((year - 2001) % 12 == 0) {
    print("Snake");
} else if ((year - 2002) % 12 == 0) {
    print("Horse");
} else if ((year - 2003) % 12 == 0) {
    print("Sheep");
} else if ((year - 2004) % 12 == 0) {
    print("Monkey");
} else if ((year - 2005) % 12 == 0) {
    print("Rooster");
} else if ((year - 2006) % 12 == 0) {
    print("Dog");
} else if ((year - 2007) % 12 == 0) {
    print("Pig");
} else if ((year - 2008) % 12 == 0) {
    print("Rat");
} else if ((year - 2009) % 12 == 0) {
    print("Ox");
} else if ((year - 2010) % 12 == 0) {
    print("Tiger");
} else if ((year - 2011) % 12 == 0) {
    print("Hare");
}
