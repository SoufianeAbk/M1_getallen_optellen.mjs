import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let som = 0;

while (true) {
    let getal = parseFloat(await userInput.question('Voer een getal in: '));

    if (getal <= 0) {
        break;
    }

    som += getal;
}

console.log(`De som van de ingevoerde getallen is: ${som}`);

process.exit();