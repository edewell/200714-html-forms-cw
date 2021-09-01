let myForm = document.getElementById('form');
const results = document.getElementById('result');

const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const eMail = document.getElementById('email');

myForm.addEventListener('submit', (evt) => {
evt.preventDefault();


results.appendChild(document.createTextNode(`${fname.value}`));
results.appendChild(document.createTextNode(`${lname.value}`));
results.appendChild(document.createTextNode(`${email.value}`));

}) 

myForm.reset();