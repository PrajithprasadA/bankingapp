// Retrieve user data from local storage
var userDataJSON = localStorage.getItem("userData");

// Check if user data exists
if(userDataJSON) {
    // Parse the JSON string back into an object
    var userData = JSON.parse(userDataJSON);
    document.getElementById("username").innerText = userData.username;
}

// Function to deposit money
function deposit() {
    var amount = parseFloat(document.getElementById("amount").value);
    if (!isNaN(amount) && amount > 0) {
        // Retrieve current balance from local storage
        var balance = parseFloat(localStorage.getItem("balance")) || 0;
        // Add deposited amount to balance
        balance += amount;
        // Update balance in local storage
        localStorage.setItem("balance", balance);
        // Update balance displayed on the dashboard
        document.getElementById("balance").innerText = balance;
    } else {
        alert("Please enter a valid amount to deposit.");
    }
}

// Function to withdraw money
function withdraw() {
    var amount = parseFloat(document.getElementById("amount").value);
    if (!isNaN(amount) && amount > 0) {
        // Retrieve current balance from local storage
        var balance = parseFloat(localStorage.getItem("balance")) || 0;
        if (balance >= amount) {
            // Deduct withdrawn amount from balance
            balance -= amount;
            // Update balance in local storage
            localStorage.setItem("balance", balance);
            // Update balance displayed on the dashboard
            document.getElementById("balance").innerText = balance;
        } else {
            alert("Insufficient balance.");
        }
    } else {
        alert("Please enter a valid amount to withdraw.");
    }
}
