/* burger menu up and down */
$(document).ready(function(){
    $('.burgermenu').on('click', function(){
        console.log("clicked");
        $('.mobile-nav').toggle();
    })});
  // $(document).ready(function resetMenu(){
  //   if(window.innerWidth >= 1024) {
  //     document.getElementById('nav-container').style.display = 'flex';
  //   } else if (window.innerWidth < 1024) {
  //     document.getElementById('nav-container').style.display = 'none';
  //   }
  // });
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
var fields = {} 
document.addEventListener("DOMContentLoaded", function() {
  fields.firstName = document.getElementById('firstName');
  fields.lastName = document.getElementById('lastName');
  fields.email = document.getElementById('email');
  fields.address = document.getElementById('address');
  fields.houseNumber = document.getElementById('houseNumber');
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
  valid &= fieldValidation(fields.address, isNotEmpty);
  valid &= fieldValidation(fields.country, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  valid &= fieldValidation(fields.houseNumber, isNumber);
  valid &= fieldValidation(fields.question, isNotEmpty);
 
  return valid;
 }
 class User {
  constructor(firstName, lastName, address, country, email, newsletter, question) {
  this.firstName = firstName;
  this.lastName = lastName;
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