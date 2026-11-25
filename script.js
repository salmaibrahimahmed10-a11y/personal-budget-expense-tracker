
// ==========================================
// SPENDWISE BUDGET TRACKER
// JavaScript Foundation - Week 6 Assignment
// ==========================================


// 1. STORE APPLICATION DATA

let monthlyBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// Array to store expense records
let expenses = [];


// 2. DISPLAY WELCOME MESSAGE

console.log("==================================");
console.log("WELCOME TO SPENDWISE BUDGET TRACKER");
console.log("==================================");


// 3. COLLECT USER INPUT

// Ask the user for their monthly budget
let budgetInput = prompt(
    "Welcome to SpendWise! Enter your monthly budget in Ksh:"
);

// Convert input into a number
monthlyBudget = Number(budgetInput);

// Validate the budget
if (
    budgetInput === null ||
    budgetInput.trim() === "" ||
    !Number.isFinite(monthlyBudget) ||
    monthlyBudget <= 0
) {
    console.log("Invalid budget entered. Please enter a valid amount.");
} else {

    // Ask how many expenses the user wants to record
    let expenseCountInput = prompt(
        "How many expenses would you like to record?"
    );

    let numberOfExpenses = Number(expenseCountInput);

    if (
        expenseCountInput === null ||
        expenseCountInput.trim() === "" ||
        !Number.isInteger(numberOfExpenses) ||
        numberOfExpenses < 0
    ) {
        console.log("Invalid number of expenses entered.");

    } else {

        // Collect individual expense details
        for (let i = 0; i < numberOfExpenses; i++) {

            let expenseName = prompt(
                "Enter the description of expense " + (i + 1) + ":"
            );

            if (expenseName === null || expenseName.trim() === "") {
                console.log("Expense description cannot be empty.");
                i--;
                continue;
            }

            let expenseAmountInput = prompt(
                "Enter the amount for " + expenseName + " in Ksh:"
            );

            let expenseAmount = Number(expenseAmountInput);

            if (
                expenseAmountInput === null ||
                expenseAmountInput.trim() === "" ||
                !Number.isFinite(expenseAmount) ||
                expenseAmount <= 0
            ) {
                console.log("Invalid expense amount. Please try again.");
                i--;
                continue;
            }

            // Store expense information in an object
            let expense = {
                name: expenseName,
                amount: expenseAmount
            };

            // Add expense to the expenses array
            expenses.push(expense);

        }


        // 4. CREATE REUSABLE FUNCTIONS

        // Function to calculate total expenses
        function calculateTotalExpenses() {

            totalExpenses = 0;

            for (let expense of expenses) {
                totalExpenses += expense.amount;
            }

            return totalExpenses;
        }


        // Function to calculate remaining balance
        function calculateRemainingBalance() {

            remainingBalance =
                monthlyBudget - calculateTotalExpenses();

            return remainingBalance;
        }


        // 5. PERFORM BUDGET CALCULATIONS

        calculateTotalExpenses();
        calculateRemainingBalance();


        // 6. DISPLAY RESULTS IN THE CONSOLE

        console.log("");
        console.log("==================================");
        console.log("       SPENDWISE BUDGET REPORT     ");
        console.log("==================================");

        console.log("Monthly Budget: Ksh " + monthlyBudget.toFixed(2));

        console.log("Total Expenses: Ksh " + totalExpenses.toFixed(2));

        console.log("Remaining Balance: Ksh " + remainingBalance.toFixed(2));

        console.log("----------------------------------");
        console.log("EXPENSE DETAILS");
        console.log("----------------------------------");

        // Display each expense
        for (let expense of expenses) {

            console.log(
                expense.name + ": Ksh " + expense.amount.toFixed(2)
            );

        }

        console.log("----------------------------------");

        // Check budget status
        if (remainingBalance > 0) {

            console.log("Status: You are within your budget.");

        } else if (remainingBalance === 0) {

            console.log("Status: You have used your entire budget.");

        } else {

            console.log("Status: Warning! You have exceeded your budget.");

        }

        console.log("==================================");
        console.log("Thank you for using SpendWise!");

    }

}
