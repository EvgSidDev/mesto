function showError(input, errorMessage, inputErrorClass, errorClass) {
  input.classList.add(inputErrorClass);
  const spanError = input.nextElementSibling;
  spanError.classList.add(errorClass);
  spanError.textContent = errorMessage;
};

function hideError(input, inputErrorClass, errorClass) {
  input.classList.remove(inputErrorClass);
  const spanError = input.nextElementSibling;
  spanError.textContent = '';
  spanError.classList.remove(errorClass);
};

function checkInputValidity(e, inputErrorClass, errorClass) {
  const inputElement = e.target;
  if (!inputElement.validity.valid) {
    showError(inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
  } else {
    hideError(inputElement, inputErrorClass, errorClass);
  }
}

function toggleButtonState(inputList, buttonElement, buttonClass) {
  if (hasInvalidInput(inputList)) {
    console.log(buttonClass);
    buttonElement.classList.add(buttonClass);
    buttonElement.setAttribute('disabled', "true");
  } else {
    buttonElement.classList.remove(buttonClass);
    buttonElement.removeAttribute('disabled');
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

function enableValidation(structValidation) {
  const forms = Array.from(document.querySelectorAll(structValidation.formSelector));
  forms.forEach((form) => {
    const buttonElement = form.querySelector(structValidation.submitButtonSelector);
    const inputs = Array.from(form.querySelectorAll(structValidation.inputPopupClass));
    toggleButtonState(inputs, buttonElement, structValidation.inactiveButtonClass);
    inputs.forEach((input) => {
      input.addEventListener('input', function(e) {
        checkInputValidity(e, structValidation.inputErrorClass, structValidation.errorClass);
        toggleButtonState(inputs, buttonElement, structValidation.inactiveButtonClass);
      });
    });
  });
}
