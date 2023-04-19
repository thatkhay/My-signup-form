const form = document.querySelector('.form');
const firstName = document.querySelector('.firstName');
const secName = document.querySelector('.secName');
const email = document.querySelector('.email');
const password = document.querySelector('.pass');

const firstErrorMessage = document.querySelector('#firstErrorMessage');
const secErrorMessage = document.querySelector('#secErrorMessage');
const emailErrorMessage = document.querySelector('#emailErrorMessage');
const passErrorMessage = document.querySelector('#passErrorMessage');

form.addEventListener('submit', (validateForm) => {
    validateForm.preventDefault();

    function validEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email)
    }
    const emailInput = email.value.trim()

if (firstName.value === '') {
    firstErrorMessage.classList.remove('hidden')
}else{
    firstErrorMessage.classList.add('hidden')
}

if (secName.value === '') {
    secErrorMessage.classList.remove('hidden')
}else{
    secErrorMessage.classList.add('hidden')
}

if (!validEmail(emailInput) || email.value === '') {
    emailErrorMessage.classList.remove('hidden')

 }else{    
     emailErrorMessage.classList.add('hidden')
 }

// if (email.value === '' ) {
//     emailErrorMessage.classList.remove('hidden')
// }else{
//     emailErrorMessage.classList.add('hidden')
// }


if (password.value === '' ) {
    passErrorMessage.classList.remove('hidden')
}else{
    passErrorMessage.classList.add('hidden')
}

})


  


    

    

    
