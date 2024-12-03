// GLOBAL 
var firstName = document.getElementById('inputName')
var email = document.getElementById('inputEmail')
var password = document.getElementById('inputPassword')
var btnUP = document.getElementById('btnSignUP')
var msg1 = document.getElementById('msg1')
var msg2 = document.getElementById('msg2')
var msg3 = document.getElementById('msg3')
var info;

//LOCALSTORAGE 
if (localStorage.getItem("users") !== null) {
    info = JSON.parse(localStorage.getItem("users"))
} else {
    info = []
}

// SIGNUP
function signUP() {
    var infoPerson = {
        namePerson: firstName.value,
        emailPerson: email.value,
        passwordPerson: password.value
    }
    if (firstName.value == '' || email.value == '' || password.value == '') {
        msg1.classList.remove('d-none')
        msg2.classList.add('d-none')
        msg3.classList.add('d-none')
    } else if (validName() && validEmail() && validPassword()) {
        var emailExists = false;
        for (var index = 0; index < info.length; index++) {
            if (email.value === info[index].emailPerson) {
                email.classList.add('is-invalid');
                emailExists = true;
            }
        }
        if (emailExists) {
            msg1.classList.add('d-none');
            msg2.classList.add('d-none');
            msg3.classList.remove('d-none');
        }
        else {
            msg1.classList.add('d-none');
            msg2.classList.remove('d-none');
            msg3.classList.add('d-none');
            info.push(infoPerson);
            localStorage.setItem("users", JSON.stringify(info));
            clear()
        }
    }
}
btnUP.addEventListener('click', signUP)

// CLEAR
function clear() {
    firstName.value = null
    email.value = null
    password.value = null
    firstName.classList.remove('is-valid');
    email.classList.remove('is-valid');
    password.classList.remove('is-valid');
}

// VALIDATION
function validName() {
    msg1.classList.add('d-none')
    msg2.classList.add('d-none')
    msg3.classList.add('d-none')
    var regexName = /^[a-z0-9 ]{2,}$/i
    if (regexName.test(firstName.value)) {
        document.getElementById('msgName').classList.add('d-none');
        firstName.classList.remove('is-invalid');
        firstName.classList.add('is-valid');
        return true
    } else {
        document.getElementById('msgName').classList.remove('d-none');
        firstName.classList.add('is-invalid');
        firstName.classList.remove('is-valid');
        return false
    }
}
firstName.addEventListener('input', validName)

function validEmail() {
    msg1.classList.add('d-none')
    msg2.classList.add('d-none')
    msg3.classList.add('d-none')
    var regexEmail = /^[a-zA-Z0-9]{3,}@(gmail|yahoo)\.com$/
    if (regexEmail.test(email.value)) {
        document.getElementById('msgEmail').classList.add('d-none');
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        return true
    } else {
        document.getElementById('msgEmail').classList.remove('d-none');
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        return false
    }
}
email.addEventListener('input', validEmail)

function validPassword() {
    msg1.classList.add('d-none')
    msg2.classList.add('d-none')
    msg3.classList.add('d-none')
    var regexPass = /^[a-zA-Z0-9@#]{8,}$/
    if (regexPass.test(password.value)) {
        document.getElementById('msgPass').classList.add('d-none');
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
        return true
    } else {
        document.getElementById('msgPass').classList.remove('d-none');
        password.classList.add('is-invalid');
        password.classList.remove('is-valid');
        return false
    }
}
password.addEventListener('input', validPassword)