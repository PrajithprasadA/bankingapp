function signup() {
    // Get form values
    var username = document.getElementById("username").value;
    var accountNumber = document.getElementById("accountnumber").value;
    var password = document.getElementById("password").value;
    var termsAgreed = document.getElementById("terms").checked;

    // Check if all fields are filled and terms are agreed
    if (username && accountNumber && password && termsAgreed) {
        // Create an object to hold user data
        var userData = {
            username: username,
            accountNumber: accountNumber,
            password: password
        };

        // Convert the object to a JSON string
        var userDataJSON = JSON.stringify(userData);

        // Store the JSON string in local storage
        localStorage.setItem("userData", userDataJSON);

        // Inform user about successful signup
        alert("Sign up successful!");

        // Optionally, you can redirect the user to another page
         window.location.href = "singin.html";
    } else {
        // Inform user to fill all fields and agree to terms
        alert("Please fill all fields and agree to terms.");
    }
}
