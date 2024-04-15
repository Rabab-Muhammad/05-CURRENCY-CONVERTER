#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magenta.bold("\n \tWELCOME TO CURRENCY - CONVERTER\n"));

//Define the list of currencies and their exchange rates
let exchange_rate: any ={
    "USD": 1,  //base currency
    "EUR": 0.9, //Europeon currency(Euro)
    "JYP": 113, //Japanes currency(yen)
    "CAD": 1.3, //Canadian Dollar
    "AUD": 1.65, //Australian Dollar
    "PKR": 280, //Pakistani Rupees
//Add more currency and their exchange rates here
}
let userAnswer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);

//perform currency conversion by using formula
let from_amount = exchange_rate[userAnswer.from_currency];
let to_amount = exchange_rate[userAnswer.to_currency];
let amount = userAnswer.amount

//formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

//display the converted amount
console.log(`converted amonut = ${chalk.green(converted_amount.toFixed(2))}`);