// 11. ATM Cash Withdrawal System
// Question: Write a function that simulates an ATM. It should check if the balance 
//             is sufficient and allow withdrawals in multiples of 100 only.
// Input: atmWithdraw(1500, 700);

function atmWithdraw(balance, amount) {
    if (amount % 100 !== 0) {
        return "Withdrawal amount must be in multiples of 100.";
    }
    if (amount > balance) {
        return "Insufficient balance.";
    }
    balance = balance - amount;
    return `Withdrawal successful. Remaining balance: ${balance}`;
}

console.log(atmWithdraw(1500, 700)); 