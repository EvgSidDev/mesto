class FormValidation {
  constructor(structValidation, form) {
    this._structValidation = structValidation;
    this._form = form;
  }

  enableValidation() {
    this._buttonElement = this._form.querySelector(
      this._structValidation.submitButtonSelector
    );
    this._inputs = Array.from(
      this._form.querySelectorAll(this._structValidation.inputPopupClass)
    );
    this._toggleButtonState(
      this._inputs,
      this._buttonElement,
      this._structValidation.inactiveButtonClass
    );

    this._inputs.forEach((input) => {
      input.addEventListener("input", (e) => this._validate(e));
    });
  }

  _validate(e) {
    this._checkInputValidity(
      e,
      this._structValidation.inputErrorClass,
      this._structValidation.errorClass
    );
    this._toggleButtonState(
      this._inputs,
      this._buttonElement,
      this._structValidation.inactiveButtonClass
    );
  }

  _toggleButtonState(inputList, buttonElement, buttonClass) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(buttonClass);
      buttonElement.setAttribute("disabled", "true");
    } else {
      buttonElement.classList.remove(buttonClass);
      buttonElement.removeAttribute("disabled");
    }
  }

  _checkInputValidity(e, inputErrorClass, errorClass) {
    const inputElement = e.target;
    if (!inputElement.validity.valid) {
      this._showError(
        inputElement,
        inputElement.validationMessage,
        inputErrorClass,
        errorClass
      );
    } else {
      this._hideError(inputElement, inputErrorClass, errorClass);
    }
  }

  _showError(input, errorMessage, inputErrorClass, errorClass) {
    input.classList.add(inputErrorClass);
    const spanError = input.nextElementSibling;
    spanError.classList.add(errorClass);
    spanError.textContent = errorMessage;
  }

  _hideError(input, inputErrorClass, errorClass) {
    input.classList.remove(inputErrorClass);
    const spanError = input.nextElementSibling;
    spanError.textContent = "";
    spanError.classList.remove(errorClass);
  }

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
}

export default FormValidation;
