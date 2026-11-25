
# SpendWise Budget Tracker

## Project Description

SpendWise is a simple budget tracking application developed using HTML, CSS, and JavaScript.

The application helps users manage their monthly budgets by entering their budget amount and recording their expenses. It automatically calculates total expenses and the remaining balance.

The goal of this project is to apply JavaScript fundamentals to transform a static dashboard into an application that can collect, process, and calculate financial information.

## Technologies Used

- HTML – Provides the structure of the application.
- CSS – Styles the dashboard.
- JavaScript – Handles user input, data storage, calculations, and functions.

## JavaScript Concepts Implemented

### 1. Variables

Variables are used to store important budgeting information.

Examples:

- monthlyBudget stores the user's monthly budget.
- totalExpenses stores the total amount spent.
- remainingBalance stores the remaining money.
- expenses stores expense records in an array.

The `let` keyword is used because these values can change during program execution.

### 2. Data Types

The application uses different JavaScript data types:

- Numbers – Store budget and expense amounts.
- Strings – Store expense descriptions.
- Arrays – Store multiple expense records.
- Objects – Store individual expense details.

### 3. User Input

The JavaScript `prompt()` function collects information from users.

Users are asked to enter:
- Their monthly budget.
- The number of expenses they want to record.
- Expense descriptions.
- Expense amounts.

The `Number()` function converts numerical input into numbers so calculations can be performed.

### 4. Budget Calculations

JavaScript arithmetic operators are used to calculate spending and remaining balances.

Total Expenses:

Total Expenses = Sum of all recorded expenses.

Remaining Balance:

Remaining Balance = Monthly Budget - Total Expenses.

The application also checks whether the user is within their budget or has exceeded it.

### 5. Functions

Functions help organize the application code and make calculations reusable.

The application includes:

- `calculateTotalExpenses()` – Calculates the total amount spent.
- `calculateRemainingBalance()` – Calculates the remaining budget after expenses.

### 6. Arrays and Objects

An array called `expenses` stores multiple expense records.

Each expense is stored as an object containing:

- name – The expense description.
- amount – The expense amount.

The `push()` method adds new expense objects to the array.

### 7. Conditional Statements

The application uses `if`, `else if`, and `else` statements to validate user input and check budget status.

This helps identify invalid amounts and determine whether the user has money remaining or has exceeded the budget.

### 8. Loops

The `for` loop collects multiple expenses from users.

The `for...of` loop processes expense records when calculating and displaying the total expenses.

### 9. Console Output

The `console.log()` function displays the budget report in the browser developer console.

The report includes:
- Monthly budget.
- Total expenses.
- Remaining balance.
- Individual expense details.
- Budget status.

## How to Run the Application

1. Download or clone the SpendWise repository from GitHub.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Enter your monthly budget when prompted.
5. Enter the number of expenses.
6. Provide each expense description and amount.
7. Open the browser developer tools using F12.
8. Select the Console tab to view the SpendWise budget report.

## Expected Output

The application calculates the total expenses and remaining balance based on the information entered by the user.

Example:

- Monthly Budget: Ksh 50,000
- Total Expenses: Ksh 22,000
- Remaining Balance: Ksh 28,000

## Conclusion

SpendWise demonstrates the practical application of JavaScript fundamentals, including variables, data types, user input, arrays, objects, loops, conditional statements, functions, and arithmetic operations.

The project provides a foundation for developing more advanced personal finance management applications.

## Author

Developed as part of the JavaScript learning assignment.
