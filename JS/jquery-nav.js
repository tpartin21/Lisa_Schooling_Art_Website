/* burger menu up and down */
$(document).ready(function(){
    $('.burgermenu').on('click', function(){
        console.log("clicked");
        $('.mobile-nav').toggle();
    })
});

/* smooth scroll */
const links = document.querySelectorAll(".mobile-nav a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

/*contact form */

if(navigator.userAgent.toLowerCase().indexOf('android') > -1)
        document.getElementById('metaViewport').setAttribute('content', 'width='+screen.width+', initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
var fields = {} 
document.addEventListener("DOMContentLoaded", function() {
  fields.firstName = document.getElementById('firstName');
  fields.lastName = document.getElementById('lastName');
  fields.email = document.getElementById('email');
  fields.address = document.getElementById('address');
  fields.houseNumber = document.getElementById('houseNumber');
  fields.country = document.getElementById('country');
  fields.password = document.getElementById('password');
  fields.passwordCheck = document.getElementById('passwordCheck');
  fields.newsletter = document.getElementById('newsletter');
  fields.question = document.getElementById('question');
 })

 function isNotEmpty(value) {
  if (value == null || typeof value == 'undefined' ) return false;
  return (value.length > 0);
 }

 function isNumber(num) {
  return (num.length > 0) && !isNaN(num);
 }

 function isEmail(email) {
   let regez =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; 
   return regez.test(String(email).toLowerCase());
 }

 function fieldValidation(field, validationFunction) {
  if (field == null) return false;
 
  let isFieldValid = validationFunction(field.value)
  if (!isFieldValid) {
  field.className = 'placeholderRed';
  } else {
  field.className = '';
  }
 
  return isFieldValid;
 }
 function isValid() {
  var valid = true;
  
  valid &= fieldValidation(fields.firstName, isNotEmpty);
  valid &= fieldValidation(fields.lastName, isNotEmpty);
  valid &= fieldValidation(fields.gender, isNotEmpty);
  valid &= fieldValidation(fields.address, isNotEmpty);
  valid &= fieldValidation(fields.country, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  valid &= fieldValidation(fields.houseNumber, isNumber);
  valid &= fieldValidation(fields.question, isNotEmpty);
 
  return valid;
 }
 class User {
  constructor(firstName, lastName, gender, address, country, email, newsletter, question) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = gender;
  this.address = address;
  this.country = country;
  this.email = email;
  this.newsletter = newsletter;
  this.question = question;
  }
 }

 function sendContact (){
   if (isValid()) {
     let usr = new User(firstName.value, lastName.value, address.value, country.value, email.value, newsletter.checked);

     alert (`${usr.firstName} Thanks for registering.`)
} else {
  alert("Thank you")
} 
 }