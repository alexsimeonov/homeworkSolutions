// Input.
let input = [
    '@@x*@@**@@@x',
    '1 2 2 -5 19',
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let soulCounter = 0;
let foodCounter = 0;
let deadlockCounter = 0;
let moves = 0;
let position = 0;
let endgame = 0;

let firstLine = (gets().split(''));
let secondLine = (gets().split(' ').map(Number));
secondLine.unshift(0);

for (i = 0; i < secondLine.length; i++) {
    moves = secondLine[i];
    if (moves < 0) {
        position += moves;
        while (position < 0) {
            position += firstLine.length;
        }
    }
    if (moves > 0) {
        position += moves;
        while (position > firstLine.length - 1) {
            position -= firstLine.length;
        }
    }

    if (firstLine[position] === 'x') {
        if (position % 2 === 0) {
            if (soulCounter <= 0) {
                print(`You are deadlocked, you greedy kitty!\nJumps before deadlock: ${i}`);
                endgame += 1;
                break;
            }
            soulCounter -= 1;
            deadlockCounter += 1;
            firstLine[position] = '@';
        } else if (position % 2 !== 0) {
            if (foodCounter <= 0) {
                print(`You are deadlocked, you greedy kitty!\nJumps before deadlock: ${i}`);
                endgame += 1;
                break;
            }
            foodCounter -= 1;
            deadlockCounter += 1;
            firstLine[position] = '*';
        }
    } else if (firstLine[position] === '@') {
        soulCounter += 1;
        firstLine[position] = '';
    } else if (firstLine[position] === '*') {
        foodCounter += 1;
        firstLine[position] = '';
    }

}

if (endgame === 0) {
    print(`Coder souls collected: ${soulCounter}\nFood collected: ${foodCounter}\nDeadlocks: ${deadlockCounter}`);
}
