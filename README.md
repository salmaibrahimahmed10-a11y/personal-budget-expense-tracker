
# SpendWise Budget Tracker

## Project Description
SpendWise is an interactive budgeting application that helps users manage their monthly budgets, record expenses, and monitor their remaining balance.

## Week 6 Improvements

The following improvements were made:
- Added the ability to set a monthly budget.
- Added functionality to record expenses.
- Added the ability to delete expenses.
- Added automatic calculation of total expenses and remaining balance.
- Added budget status messages.
- Updated the dashboard dynamically using JavaScript.

## 1. Conditional Statements
Conditional statements such as if, else if, and else are used to validate user input and check budget status.

The application displays different messages depending on whether the user is within budget, approaching the budget limit, or has exceeded the budget.

## 2. Arrays
An array called expenses stores multiple expense records.

Each expense is stored as an object containing its ID, description, category, and amount.

The push() method adds new expenses to the array.

## 3. Loops
For...of loops are used to process expense records and calculate total expenses.

Loops also display stored expenses on the webpage.

## 4. DOM Manipulation
JavaScript uses DOM manipulation to update dashboard information.

The application displays the monthly budget, total expenses, remaining balance, budget status, and expense records directly on the webpage.

## 5. Event Listeners
Event listeners handle user interactions.

The submit event allows users to set their budget and add expenses.

The click event allows users to delete expenses.

## 6. Challenges and Solutions
One challenge was connecting JavaScript to the correct HTML elements.

This was resolved by using document.getElementById() and ensuring that HTML IDs matched the JavaScript code.

Another challenge was updating dashboard calculations after adding or deleting expenses.

This was solved by creating reusable functions that recalculate totals and refresh the dashboard.

## Technologies Used
- HTML
- CSS
- JavaScript
- Git and GitHub

## Conclusion
SpendWise demonstrates JavaScript decision making, arrays, loops, DOM manipulation, and event handling to create an interactive budgeting application.
