//const passwordField = document.querySelector("#password");
//const submitButton = document.querySelector("#submit-btn");
//
// Parolni vaqtincha ko'rsatish
//const showPassword = () => {
//    passwordField.type = "text";
//};
//
// Parolni yana yashirish
//const hidePassword = () => {
//    passwordField.type = "password";
//};
//
// Tugma holatini yangilash
//const updateButtonState = () => {
//    if (passwordField.value.trim() !== "") {
//        submitButton.classList.add("active");
//        submitButton.disabled = false;
//    } else {
//        submitButton.classList.remove("active");
//        submitButton.disabled = true;
//    }
//};

const passwordEye = document.querySelector('#password');
const submitButton = document.querySelector('#submit-btn');

const showPassword = () => {
    passwordEye.type = "text";
};

const hidePassword = () => {
    passwordEye.type = "password"
};

const updateButtonState = () => {
    if (passwordEye.value.trim() !== "hello bro") {
        submitButton.classList.add("active")
        submitButton.disabled = false;
    } else {
        submitButton.classList.remove("active");
        submitButton.disabled = "true";
    }
};

