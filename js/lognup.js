$(document).ready(function () {
    $('#eye').click(function () {
        $(this).toggleClass('open');
        $(this).children('i').toggleClass(' fa-eye-slash  fa-eye');
        if ($(this).hasClass('open')) {
            // alert('Tyle text');
            $(this).prev().attr('type', 'text');
        } else {
            $(this).prev().attr('type', 'password');
        }

    });
});
$(document).ready(function () {
    $('#eyes').click(function () {
        $(this).toggleClass('open');
        $(this).children('i').toggleClass(' fa-eye-slash  fa-eye');
        if ($(this).hasClass('open')) {
            // alert('Tyle text');
            $(this).prev().attr('type', 'text');
        } else {
            $(this).prev().attr('type', 'password');
        }

    });
});
// /////////////////////////////////////////

const formRegister = document.getElementById("formRegister");
const userNameElement = document.getElementById("username");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const rePasswordElement = document.getElementById("repassword");




const userNameError = document.getElementById("userNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const repasswordError = document.getElementById("repasswordError");

const userLocal = JSON.parse(localStorage.getItem("usres")) || [];

function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(

    )
}
formRegister.addEventListener("submit", function (e) {

    e.preventDefault();
    // username
    if (!userNameElement.value) {
        userNameError.style.display = "block";
    } else {
        userNameError.style.display = "none";
    }
    // email

    if (!emailElement.value) {
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
    }
    // pass
    if (!passwordElement.value) {
        passwordError.style.display = "block";
    } else {
        passwordError.style.display = "none";
    }


    // repass
    if (!rePasswordElement.value) {
        repasswordError.style.display = "block";
    } else {
        repasswordError.style.display = "none";
    }

    if (!rePasswordElement.value) {
        repasswordError.style.display = "block";
        repasswordError.innerHTML = " mat khau khong khop"
    }

    if (
        userNameElement.value &&
        emailElement.value &&
        passwordElement.value &&
        rePasswordElement.value &&
        passwordElement.value ===  rePasswordElement.value &&
        validateEmail(emailElement.value)
        
     ) 
     {
        const user ={
            userId: Math.ceil(Math.random() *  1000000000),
            userName: userNameElement.value,
            email: emailElement.value,
            password: passwordElement.value

        };

        userLocal.push(user);
        localStorage.setItem("users", JSON.stringify(userLocal));
        setTimeout(function(){
           window.location.href = "../html/login.html"
        },1000);
        
     }

});