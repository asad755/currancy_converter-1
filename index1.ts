import inquirer from "inquirer";

const currencyRates = {
    USD: 1,
    EUR: 0.9,
    GBP: 0.8,
    INR: 75,
    PKR: 175,
    DIN: 46
};

async function convertCurrency() {
    try {
        const userAnswer = await inquirer.prompt([
            {
                name: "from",
                message: "Enter from currency:",
                type: "list",
                choices: Object.keys(currencyRates)
            },
            {
                name: "to",
                message: "Enter to currency:",
                type: "list",
                choices: Object.keys(currencyRates)
            },
            {
                name: "amount",
                message: "Enter amount:",
                type: "number"
            }
        ]);

        const userFromCurrency = userAnswer.from;
        const userToCurrency = userAnswer.to;
        const amount = userAnswer.amount;

        if (userFromCurrency === userToCurrency) {
            console.log("Cannot convert the same currency.");
            return;
        }

        const fromRate = currencyRates[userFromCurrency];
        const toRate = currencyRates[userToCurrency];

        if (!fromRate || !toRate) {
            console.log("Invalid currency.");
            return;
        }

        const baseAmount = amount / fromRate;
        const convertedAmount = baseAmount * toRate;

        console.log(`${amount} ${userFromCurrency} is equal to ${convertedAmount} ${userToCurrency}.`);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

convertCurrency();
