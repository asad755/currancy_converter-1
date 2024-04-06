#!/usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.9,
    GBP: 0.8,
    INR: 75,
    PKR: 175,
    DIN: 46,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency?",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "DIN"]
    },
    {
        name: "to",
        message: "Enter to currency?",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "DIN"]
    },
    {
        name: "amount",
        message: "Enter amount?",
        type: "number"
    }
]);
let userFromCurrency = user_answer.from;
let userToCurrency = user_answer.to;
let fromAmount = currency[userFromCurrency]; // exchange rate
let toAmount = currency[userToCurrency]; // exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // USA base currency  //4
let convertedAmount = baseAmount * toAmount; // converted amount // 4 * 0.9 = 3.6
//console.log(fromAmount);
//console.log(toAmount);
console.log(convertedAmount);
