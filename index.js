// 1. Write to .txt file
// Create a function that writes all numbers between given 2 values in a text(txt) file.
// _Example: writetext(22,55)


const fs = require('fs');

function writeText(number1, number2) {

    for (let i = number1; i <= number2; i++) {

        fs.appendFileSync('./myFile.txt', `${i} \n`);
    }

}
writeText(15, 20);



// 2. Read from .txt file
// Create a function that gets the content of given text file and prints it on the console.
// _Example: printText('mytextFile.txt')

function readFile(fileName) {
    let fileText = fs.readFileSync(`./${fileName}`).toString();

    return fileText;
}

readFile('myFile.txt');


// 3. Merge files
// Create a function that gets the content of given text files and creates a new file with all the content.

// _Example: mergeFiles('mytextFile.txt', 'yourTextFile.txt')

function mergeFiles(fileName1, fileName2) {

    let textOne = readFile(fileName1);
    let textTwo = readFile(fileName2);

    console.log(textOne, textTwo);

    fs.appendFileSync('./newFile.txt', textOne + textTwo);
}
mergeFiles('myfile.txt', 'secondFile.txt');

// 4. Using external module
// Install and import moment.js(a js libary) via NPM and create a function that prints the day name of X(given number as an argument) days later on the console by using moment.js


// _Example: getFutureDay()


const moment = require('moment');

function printDate(x) {
    console.log(moment().add(x, 'days').format("LLL"));
}
printDate(10)