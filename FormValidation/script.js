const eachInput = document.querySelectorAll('input');

document.querySelector('.submit').addEventListener('click', (event) => {
  if (verifyAllInput()) {
    console.log('All inputs are valid');
    if (validPassword()) {
      console.log('Data submitted');
    } else {
      event.preventDefault();
    }
  } else {
    console.log('Something is wrong with the inputs');
    event.preventDefault();
  }
})

eachInput.forEach(element => {
  element.addEventListener('input', () => {
    const attributes = element.validity;
    const inputContainer = element.parentNode;
    const elementSpan = inputContainer.querySelector('span');

    if (element.id === 'password' || element.id === 'passwordConfirmation') {
      if (attributes.valueMissing) {
        createErrorMessage(elementSpan, 'Please, fill the field');
      } else if (attributes.tooShort) {
        createErrorMessage(elementSpan, 'The password must contain at least 8 characters');
      } else if (!/\d/.test(element.value)) {
        createErrorMessage(elementSpan, "The password must contain at least one number");
      } else if (!/[A-Z]/.test(element.value)) {
        createErrorMessage(elementSpan, "The password must contain at least one capital letter");
      } else {
        createErrorMessage(elementSpan, '');
      }
    } else {
      if (attributes.valueMissing) {
        createErrorMessage(elementSpan, "Please, fill the field");
      } else if (attributes.rangeUnderflow) {
        createErrorMessage(elementSpan, 'The value is under the minimum range');
      } else if (attributes.typeMismatch) {
        createErrorMessage(elementSpan, 'This value isn\'t valid');
      } else {
        createErrorMessage(elementSpan, '');
      }
    }

    
  })
});

function verifyAllInput() {
  let isValid = true;
  eachInput.forEach(element => {
    if (!element.validity.valid) {
      isValid = false;
      const spanElement = element.parentNode.querySelector('span');
      createErrorMessage(spanElement, 'Verify this input');
    }
  });
  return isValid;
}

function createErrorMessage(elementSpan, errorMessage) {
  elementSpan.textContent = errorMessage;
}

function validPassword() {
  let isValid = true
  const password = document.getElementById('password');
  const passwordConfirmation = document.getElementById('passwordConfirmation');

  if (password.value !== passwordConfirmation.value) {
    console.log('The password doesn\'t match');
    const elementSpan = passwordConfirmation.parentNode.querySelector('span');

    createErrorMessage(elementSpan, 'The password doesn\'t match');
    isValid = false;
  }

  return isValid;
}