function showError(input, errorMessage) {
  input.classList.add(constElementValidation.inputErrorClass);
  let spanError = input.nextElementSibling;
  spanError.classList.add(constElementValidation.errorClass);
  spanError.textContent = errorMessage;
};

function hideError(input) {
  input.classList.remove(constElementValidation.inputErrorClass);
  let spanError = input.nextElementSibling;
  spanError.textContent = '';
  spanError.classList.remove(constElementValidation.errorClass);
};

function checkInputValidity(e) {
  let inputElement = e.target;
  if (!inputElement.validity.valid) {
    showError(inputElement, inputElement.validationMessage);
  } else {
    hideError(inputElement);
  }
}

function setFormListener(element) {
  const forms = Array.from(element.querySelectorAll(constElementValidation.formSelector));
  forms.forEach((form) => {
    const buttonElement = form.querySelector(constElementValidation.submitButtonSelector);
    const inputs = Array.from(form.querySelectorAll(".popup__type-input"));
    toggleButtonState(inputs, buttonElement);
    inputs.forEach((input) => {
      input.addEventListener('input', function(e) {
        checkInputValidity(e);
       toggleButtonState(inputs, buttonElement);
      });
    });
  });
}

function removeFormListener(element) {
  const forms = Array.from(element.querySelectorAll(constElementValidation.formSelector));
  forms.forEach((form) => {
    const inputs = Array.from(form.querySelectorAll(".popup__type-input"));
    inputs.forEach((input) => {
      input.removeEventListener('input', checkInputValidity);
    });
    form.reset();
  });
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(constElementValidation.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(constElementValidation.inactiveButtonClass);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
