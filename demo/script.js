document.getElementById("signupLink").addEventListener("click", function () {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
    document.title = "Sign Up Form";
    document.getElementById("submitBtn").value = "Sign Up";
});

document.getElementById("loginForm").onsubmit = function (e) {
    e.preventDefault();
    validateForm(this);
    document.title = "Login Form";
    document.getElementById("submitBtn").value = "Login";
};

document.getElementById("signupForm").onsubmit = function (e) {
    e.preventDefault();
    validateForm(document.getElementById("signupForm")); // Corrected this line
    document.title = "Sign Up Form";
    document.getElementById("submitBtn").value = "Sign Up";
};

function validateForm(form) {
    const emailField = form.querySelector(".email");
    const emailInput = emailField.querySelector("input");
    const passwordField = form.querySelector(".password");
    const passwordInput = passwordField.querySelector("input");
    const emailError = emailField.querySelector(".error-txt");
    const passwordError = passwordField.querySelector(".error-txt");

    if (emailInput.value.trim() === "") {
        emailField.classList.add("shake", "error");
        emailError.style.display = "block";
    } else {
        emailField.classList.remove("shake", "error");
        emailError.style.display = "none";
    }

    if (passwordInput.value === "") {
        passwordField.classList.add("shake", "error");
        passwordError.style.display = "block";
    } else {
        passwordField.classList.remove("shake", "error");
        passwordError.style.display = "none";
    }

    setTimeout(() => {
        emailField.classList.remove("shake");
        passwordField.classList.remove("shake");
    }, 500);

    emailInput.onkeyup = () => { validateEmail(); };
    passwordInput.onkeyup = () => { validatePassword(); };

    function validateEmail() {
        if (emailInput.value.trim() === "") {
            emailField.classList.add("error");
            emailField.classList.remove("valid");
            emailError.style.display = "block";
        } else {
            emailField.classList.remove("error");
            emailField.classList.add("valid");
            emailError.style.display = "none";
        }
    }

    function validatePassword() {
        if (passwordInput.value === "") {
            passwordField.classList.add("error");
            passwordField.classList.remove("valid");
            passwordError.style.display = "block";
        } else {
            passwordField.classList.remove("error");
            passwordField.classList.add("valid");
            passwordError.style.display = "none";
        }
    }

    if (!emailField.classList.contains("error") && !passwordField.classList.contains("error")) {
        window.location.href = form.getAttribute("action");
    }
}

