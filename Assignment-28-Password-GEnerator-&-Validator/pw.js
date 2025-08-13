/* ===== Assignment 1: Secure Password Generator ===== */
function generatePassword() {
    const length = parseInt(document.getElementById("passLength").value);
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeSpecial = document.getElementById("includeSpecial").checked;

    let lowerChars = "abcdefghijklmnopqrstuvwxyz";
    let numberChars = "0123456789";
    let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let allChars = lowerChars;
    if (includeNumbers) allChars += numberChars;
    if (includeUppercase) allChars += upperChars;
    if (includeSpecial) allChars += specialChars;

    if (allChars === "") {
        alert("Please select at least one option!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    document.getElementById("generatedPassword").value = password;
}

/* ===== Assignment 2: OTP Generator & Validator ===== */
let generatedOTP = "";

function generateOTP() {
    generatedOTP = "";
    for (let i = 0; i < 4; i++) {
        generatedOTP += Math.floor(Math.random() * 10);
    }
    alert("Your OTP is: " + generatedOTP);
}

function validateOTP() {
    let enteredOTP = 
        document.getElementById("otp1").value +
        document.getElementById("otp2").value +
        document.getElementById("otp3").value +
        document.getElementById("otp4").value;

    if (enteredOTP === generatedOTP && generatedOTP !== "") {
        alert("✅ OTP Verified Successfully!");
    } else {
        alert("❌ Invalid OTP!");
    }
}