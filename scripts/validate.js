function showError(input, errorMessage) {
  input.classList.add("popup__type-input_error");
  let spanError = input.nextElementSibling;
  spanError.classList.add('popup_input-error_active');
  spanError.textContent = errorMessage;
};

function hideError(input) {
  input.classList.remove("popup__type-input_error");
  let spanError = input.nextElementSibling;
  spanError.textContent = '';
  spanError.classList.remove('popup_input-error_active');
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
  const forms = Array.from(element.querySelectorAll(".popup__form"));
  forms.forEach((form) => {
    const buttonElement = form.querySelector(".popup__submit")
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
  const forms = Array.from(element.querySelectorAll(".popup__form"));
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
    buttonElement.classList.add('popup__submit_inactive');
  } else {
    buttonElement.classList.remove('popup__submit_inactive');
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
