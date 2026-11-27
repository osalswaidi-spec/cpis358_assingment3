function validateLogin() {
    if (document.loginForm.email.value != "") {
        if (document.loginForm.pwd.value != "") {
            document.loginForm.submit();
        } else {
            alert("Please enter your password.");
            document.loginForm.pwd.focus();
        }
    } else {
        alert("Please enter your email address.");
        document.loginForm.email.focus();
    }
}

function validateSignup() {
    var f = document.signupForm;

    if (f.fname.value == "") {
        alert("First name must be filled out.");
        f.fname.focus();
    } else if (f.lname.value == "") {
        alert("Last name must be filled out.");
        f.lname.focus();
    } else if (f.email.value == "") {
        alert("Email address must be filled out.");
        f.email.focus();
    } else if (f.phone.value == "") {
        alert("Phone number must be filled out.");
        f.phone.focus();
    } else if (f.pwd.value == "") {
        alert("Please choose a password.");
        f.pwd.focus();
    } else if (f.pwd.value != f.pwd2.value) {
        alert("The two passwords do not match.");
        f.pwd2.focus();
    } else if (f.city.value == "") {
        alert("Please select your city.");
        f.city.focus();
    } else {
        alert("Thank you " + f.fname.value + ", your account form is ready to be sent!");
        f.submit();
    }
}

function checkEmpty(fieldName, msgId) {
    if (document.signupForm[fieldName].value == "") {
        document.getElementById(msgId).innerHTML = "This field cannot be empty.";
    } else {
        document.getElementById(msgId).innerHTML = "";
    }
}

function checkPasswords() {
    if (document.signupForm.pwd.value != document.signupForm.pwd2.value) {
        document.getElementById("pwd2Msg").innerHTML = "The two passwords do not match.";
    } else {
        document.getElementById("pwd2Msg").innerHTML = "";
    }
}

function showPhoneHelp() {
    document.getElementById("phoneHelp").innerHTML = "Enter 10 digits, for example 0501234567";
}

function hidePhoneHelp() {
    document.getElementById("phoneHelp").innerHTML = "";
}

function formCleared() {
    alert("The form was cleared.");
}
