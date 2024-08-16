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
// /////////////////////////////////////////
const formLogin = document.getElementById("formLogin")
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const alertError = document.getElementById("alertError");


formLogin.addEventListener("submit", function (e) {

  e.preventDefault();
  const userLocal = JSON.parse(localStorage.getItem("usres")) || [];

  const findUser = userLocal.find(
    (user) =>
      user.email === emailElement.value &&
     user.password === passwordElement.value
);

 if(!findUser){
  alert("thong tin ko dung")

 }else{
  window.location.href = "../html/index.html"
 }
});