// GLOBAL 
var btnIN = document.getElementById('btnLogIN')
var emailLog = document.getElementById('inputEmailLog')
var passLog = document.getElementById('inputPasswordLog')
var msg1 = document.getElementById('msg1')
var msg2 = document.getElementById('msg2')
var msg3 = document.getElementById('msg3')

// LOCAL STORAGE
var users = JSON.parse(localStorage.getItem("users")) || [];

// LOGIN
function logIn() {
    var infoPerson1 = {
        emailPerson1: emailLog.value,
        passwordPerson1: passLog.value
    }
    if (emailLog.value == '' || passLog.value == '') {
        msg1.classList.remove('d-none')
        msg2.classList.add('d-none')
        msg3.classList.add('d-none')
        passLog.classList.remove('is-invalid');
        emailLog.classList.remove('is-invalid');
    } else {
        var userFound = false;
        var emailExists = false;
        var passwordExists = false;
        for (var index = 0; index < users.length; index++) {
            if (users[index].emailPerson === infoPerson1.emailPerson1) {
                emailExists = true;
            }
            if (users[index].passwordPerson === infoPerson1.passwordPerson1) {
                passwordExists = true;
            }
            if (users[index].emailPerson === infoPerson1.emailPerson1 && users[index].passwordPerson === infoPerson1.passwordPerson1) {
                localStorage.setItem("sessionUsername", users[index].namePerson);
                window.location = "structure/home.html";
                msg1.classList.add('d-none');
                msg2.classList.add('d-none');
                msg3.classList.add('d-none');
                emailLog.classList.remove('is-invalid');
                passLog.classList.remove('is-invalid');
                emailLog.value = null;
                passLog.value = null;
                userFound = true;
                break;
            }
        }
        if (!userFound) {
            if (!emailExists && !passwordExists) {
                msg3.classList.remove('d-none');
                msg1.classList.add('d-none');
                msg2.classList.add('d-none');
                passLog.classList.add('is-invalid');
                emailLog.classList.add('is-invalid');
            } else if (emailExists && passwordExists) {
                msg1.classList.add('d-none');
                msg3.classList.add('d-none');
                msg2.classList.remove('d-none');
            } else {
                if (!emailExists) {
                    emailLog.classList.add('is-invalid');
                    passLog.classList.remove('is-invalid');
                }
                if (!passwordExists) {
                    passLog.classList.add('is-invalid');
                    emailLog.classList.remove('is-invalid');
                }
                msg1.classList.add('d-none');
                msg2.classList.add('d-none');
                msg3.classList.add('d-none');
            }
        }
    }
}
btnIN.addEventListener('click', logIn)