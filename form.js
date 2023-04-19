const form = document.querySelector('.form');
const firstName = document.querySelector('.firstName');
const secName = document.querySelector('.secName');
const email = document.querySelector('.email');
const password = document.querySelector('.pass');
const iconError = document.querySelector('.iconError');

const firstErrorMessage = document.querySelector('#firstErrorMessage');
const secErrorMessage = document.querySelector('#secErrorMessage');
const emailErrorMessage = document.querySelector('#emailErrorMessage');
const passErrorMessage = document.querySelector('#passErrorMessage');
const nameIconError = document.querySelector('#nameIconError');
const secNameIconError = document.querySelector('#secNameIconError');
const emailIconError = document.querySelector('#emailIconError');
const passwordIconError = document.querySelector('#passwordIconError');

form.addEventListener('submit', (validateForm) => {
    validateForm.preventDefault();

    function validEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email)
    }
    const emailInput = email.value.trim()

    if (firstName.value === '') {
        firstErrorMessage.classList.remove('hidden');
        nameIconError.style.display = "block"
    } else {
        firstErrorMessage.classList.add('hidden');
        nameIconError.style.display = "none"
    }
    
    if (secName.value === '') {
        secErrorMessage.classList.remove('hidden');
        secNameIconError.style.display = "block"
    } else {
        secErrorMessage.classList.add('hidden');
        secNameIconError.style.display = "none"
    }
    
    if (!validEmail(emailInput) || email.value === '') {
        emailErrorMessage.classList.remove('hidden');
        emailIconError.style.display = "block"
    } else {
        emailErrorMessage.classList.add('hidden');
        emailIconError.style.display = "none"
    }
    
    if (password.value === '') {
        passErrorMessage.classList.remove('hidden');
        passwordIconError.style.display = "block"
    } else {
        passErrorMessage.classList.add('hidden');
        passwordIconError.style.display = "none"
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


  


    

    

    
