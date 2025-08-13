document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;

    // Get values
    let name = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Reset errors
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    // Full Name Validation
    if (name.length < 2) {
        document.getElementById("nameError").textContent = "Name must be at least 2 characters.";
        isValid = false;
    }

    // Email Validation
    let emailPattern = /^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        isValid = false;
    }

    // Mobile Validation
    if (!/^[1-9][0-9]{9}$/.test(mobile)) {
        document.getElementById("mobileError").textContent = "Mobile must be 10 digits, numeric, and not start with 0.";
        isValid = false;
    }

    // Gender Validation
    if (!gender) {
        document.getElementById("genderError").textContent = "Please select your gender.";
        isValid = false;
    }

    // Password Validation
    let passwordErrors = [];
    if (password.length < 6) passwordErrors.push("Must be at least 6 characters.");
    if (!/[A-Z]/.test(password)) passwordErrors.push("Must contain at least one uppercase letter.");
    if (/\d/.test(password)) passwordErrors.push("Must not contain numbers.");
    if (passwordErrors.length > 0) {
        document.getElementById("passwordError").textContent = passwordErrors.join(" ");
        isValid = false;
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    }

    // Final check
    if (isValid) {
        alert("✅ Registration Successful!");
        document.getElementById("registerForm").reset();
    }
});