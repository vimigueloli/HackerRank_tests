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
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(s) {
    const onlyAlternate = [...new Set(s)];
    const outputStrings = []
    onlyAlternate.forEach((letter,idx)=>{
        for(let i = idx+1; i < onlyAlternate.length; i++){
            outputStrings.push(s.replace(new RegExp(`[^${letter},${onlyAlternate[i]}]`, 'g'),''))
        } 
    })
    
    let longestString = ''
    outputStrings.forEach(combinatedString => {
        if(longestString.length < combinatedString.length){
            const temporaryString = combinatedString.split('')
            let validator = true
            temporaryString.forEach((letter,idx)=>{
                if(idx > 0 && letter === temporaryString[idx-1]){
                    validator = false
                }
            })
            if(validator){
                longestString = combinatedString
            }
        }
    })
    return longestString.length
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);

    const s = readLine();

    const result = alternate(s);

    ws.write(result + '\n');

    ws.end();
}
