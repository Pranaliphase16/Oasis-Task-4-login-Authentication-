document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Here, you can add your logic to check the username and password
    // For simplicity, let's consider a hardcoded username and password
    if(username === "user" && password === "password") {
        document.getElementById("error-message").textContent = "Login successful!";
        // Redirect to a secured page after successful login
        window.location.href = "secured.html";
    } else {
        document.getElementById("error-message").textContent = "Incorrect username or password. Please try again.";
    }
});
