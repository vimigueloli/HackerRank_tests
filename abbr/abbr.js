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
 * Complete the 'abbreviation' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function abbreviation(a, b) {
    const aOnlyUpper = a.replace( /[a-z]/g, '' ).split('');
    const converted = a.toUpperCase().split('')
    let shortedConverted = a.toUpperCase().split('')
    const confirmationArray = b.split('')
    const orderArray = []

    confirmationArray.forEach(letter =>{
        if(shortedConverted.includes(letter)){
            orderArray.push(converted.indexOf(letter))
            shortedConverted.splice(0, shortedConverted.indexOf(letter)+1)
        }
    })

    if(orderArray.length !== confirmationArray.length){
        return 'NO'
    }else{
        orderArray.forEach((id, idx)=>{
            if(idx > 0){
                if(id < orderArray[idx-1]){
                    return 'NO'
                }
            }
        })
        if(aOnlyUpper.length > confirmationArray.length){
            return 'NO'
        }else{
            let validator = true
            aOnlyUpper.forEach((letter)=>{
                if(confirmationArray.includes(letter) !== true){
                    validator = false
                }
            })
            if(validator){
                return `YES`
            }else{
                return 'NO'
            }
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const a = readLine();

        const b = readLine();

        const result = abbreviation(a, b);

        ws.write(result + '\n');
    }

    ws.end();
}