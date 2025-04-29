function validateForm() {
    var email = document.forms["loginForm"]["email"].value;
    var password = document.forms["loginForm"]["password"].value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

   
    if (!/[A-Z]/.test(password)) {
        alert("Password must contain at least one uppercase letter.");
        return false;
    }

    if (!/[a-z]/.test(password)) {
        alert("Password must contain at least one lowercase letter.");
        return false;
    }

    if (!/[0-9]/.test(password)) {
        alert("Password must contain at least one digit.");
        return false;
    }

    if (!/[!@#$%^&*]/.test(password)) {
        alert("Password must contain at least one special character (!@#$%^&*).");
        return false;
    }

    alert("You have logged in!");
    return true;
}