document.getElementById('theUser').innerHTML = localStorage.getItem('sessionUsername')
// LOGIOUT
function logOut() {
    localStorage.removeItem('sessionUsername')
    window.location = "../index.html"
}
document.getElementById('btnLogOut').addEventListener('click', logOut)