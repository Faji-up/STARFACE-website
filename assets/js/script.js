firstname = '';
lastname = '';
email_account = "";
phone = "";
password = "";

var create = document.querySelector("#create");
var fname = document.querySelector("#fname2");
var lname = document.querySelector("#lname2");
var email2 = document.querySelector("#email2");
var mobile = document.querySelector("#mobile2");
var pass2 = document.querySelector("#pass2");

var email = document.querySelector("#email");
var pass = document.querySelector("#pass");
function insert() {
    firstname = fname;
    lastname = lname;
    email_account = email2;
    phone = phone;
    password = pass2;

    alert('Account Registered');
}
function login() {
    if (email == email2 && pass == pass2) {
        alert('Successfully Log in');
    } else {
        alert("Invalid Account");
    }
}





