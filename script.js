
// ==========================================
// SPENDWISE BUDGET TRACKER
// Interactive JavaScript - Week 6 Assignment
// ==========================================


// 1. STORE APPLICATION DATA

let monthlyBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// Array to store multiple expense records
let expenses = [];


// 2. SELECT HTML ELEMENTS USING THE DOM

const budgetForm = document.getElementById("budget-form");
const budgetInput = document.getElementById("monthly-budget");

const expenseForm = document.getElementById("expense-form");
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseCategoryInput = document.getElementById("expense-category");

const budgetDisplay = document.getElementById("budget-display");
const totalExpensesDisplay = document.getElementById("total-expenses");
const remainingBalanceDisplay = document.getElementById("remaining-balance");

const expenseList = document.getElementById("expense-list");
const budgetStatus = document.getElementById("budget-status");


// 3. SET MONTHLY BUDGET

if (budgetForm) {
    budgetForm.addEventListener("submit", function(event) {

        event.preventDefault();

        monthlyBudget = Number(budgetInput.value);

        if (!Number.isFinite(monthlyBudget) || monthlyBudget <= 0) {
            alert("Please enter a valid monthly budget.");
            return;
        }

        updateDashboard();

        budgetInput.value = "";

    });
}


// 4. ADD NEW EXPENSES

if (expenseForm) {
    expenseForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const expenseName = expenseNameInput.value.trim();
        const expenseAmount = Number(expenseAmountInput.value);
        const expenseCategory = expenseCategoryInput.value;

        // Validate expense information
        if (expenseName === "") {
            alert("Please enter an expense description.");
            return;
        }

        if (!Number.isFinite(expenseAmount) || expenseAmount <= 0) {
            alert("Please enter a valid expense amount.");
            return;
        }

        if (expenseCategory === "") {
            alert("Please select an expense category.");
            return;
        }

        // Create expense record
        const expense = {
            id: Date.now(),
            name: expenseName,
            amount: expenseAmount,
            category: expenseCategory
        };

        // Store expense in the array
        expenses.push(expense);

        // Update dashboard
        updateDashboard();

        // Clear form fields
        expenseForm.reset();

    });
}


// 5. CALCULATE TOTAL EXPENSES

function calculateTotalExpenses() {

    totalExpenses = 0;

    for (let expense of expenses) {
        totalExpenses += expense.amount;
    }

    return totalExpenses;
}


// 6. CALCULATE REMAINING BALANCE

function calculateRemainingBalance() {

    remainingBalance = monthlyBudget - calculateTotalExpenses();

    return remainingBalance;
}


// 7. DISPLAY EXPENSES ON THE WEBPAGE

function displayExpenses() {

    if (!expenseList) return;

    expenseList.innerHTML = "";

    if (expenses.length === 0) {

        expenseList.innerHTML = "<p>No expenses recorded yet.</p>";

    } else {

        for (let expense of expenses) {

            const expenseItem = document.createElement("div");

            expenseItem.className = "expense-item";

            const expenseDetails = document.createElement("span");

            expenseDetails.textContent =
                expense.name + " - " +
                expense.category + " - Ksh " +
                expense.amount.toFixed(2);

            const deleteButton = document.createElement("button");

            deleteButton.textContent = "Delete";
            deleteButton.type = "button";

            deleteButton.addEventListener("click", function() {

                expenses = expenses.filter(function(item) {
                    return item.id !== expense.id;
                });

                updateDashboard();

            });

            expenseItem.appendChild(expenseDetails);
            expenseItem.appendChild(deleteButton);

            expenseList.appendChild(expenseItem);

        }

    }

}


// 8. CHECK BUDGET STATUS USING CONDITIONALS

function checkBudgetStatus() {

    if (!budgetStatus) return;

    if (monthlyBudget <= 0) {

        budgetStatus.textContent = "Please set your monthly budget.";

    } else if (remainingBalance < 0) {

        budgetStatus.textContent = "Warning! You have exceeded your budget.";

    } else if (remainingBalance === 0) {

        budgetStatus.textContent = "You have used your entire budget.";

    } else if (remainingBalance <= monthlyBudget * 0.2) {

        budgetStatus.textContent = "Warning! You are approaching your budget limit.";

    } else {

        budgetStatus.textContent = "Great! You are within your budget.";

    }

}


// 9. UPDATE DASHBOARD DYNAMICALLY

function updateDashboard() {

    calculateTotalExpenses();

    calculateRemainingBalance();

    if (budgetDisplay) {
        budgetDisplay.textContent =
            "Ksh " + monthlyBudget.toFixed(2);
    }

    if (totalExpensesDisplay) {
        totalExpensesDisplay.textContent =
            "Ksh " + totalExpenses.toFixed(2);
    }

    if (remainingBalanceDisplay) {
        remainingBalanceDisplay.textContent =
            "Ksh " + remainingBalance.toFixed(2);
    }

    displayExpenses();

    checkBudgetStatus();

}


// 10. INITIALIZE DASHBOARD

updateDashboard();

console.log("SpendWise interactive application is ready!");
