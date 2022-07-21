'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'hanoi' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY posts as parameter.
 */

function hanoi(posts) {
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const loc = readLine().replace(/\s+$/g, '').split(' ').map(locTemp => parseInt(locTemp, 10));

    const res = hanoi(loc);

    ws.write(res + '\n');

    ws.end();
}
