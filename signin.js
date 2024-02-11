window.onload = function() {
    // Add event listener to the sign-in form
    document.getElementById("signinForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get the entered account number and password
        var enteredAccountNumber = document.getElementById("accountnumber").value;
        var enteredPassword = document.getElementById("password").value;

        // Retrieve user data from local storage
        var userDataJSON = localStorage.getItem("userData");

        // Check if user data exists
        if(userDataJSON) {
            // Parse the JSON string back into an object
            var userData = JSON.parse(userDataJSON);

            // Check if the entered account number and password match stored data
            if(userData.accountNumber == enteredAccountNumber && userData.password == enteredPassword) {
                // Authentication successful
                alert("Login successful!");
                // Redirect the user to a dashboard or homepage
                 window.location.href = "deposite.html";
            } else {
                // Authentication failed
                alert("Invalid account number or password. Please try again.");
            }
        } else {
            // No user data found
            alert("No user data found. Please sign up first.");
        }
    });
};
