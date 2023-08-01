class FormValidation {
  constructor(structValidation, form) {
    this._structValidation = structValidation;
    this._submitButtonSelector = structValidation.submitButtonSelector;
    this._inputPopupClass = structValidation.inputPopupClass;
    this._inactiveButtonClass = structValidation.inactiveButtonClass;
    this._inputErrorClass = structValidation.inputErrorClass;
    this._errorClass = structValidation.errorClass;
    this._form = form;
  }

  enableValidation() {
    this._buttonElement = this._form.querySelector(
      this._submitButtonSelector
    );
    this._inputs = Array.from(
      this._form.querySelectorAll(this._inputPopupClass)
    );
    this._toggleButtonState(
      this._inputs,
      this._buttonElement,
      this._inactiveButtonClass
    );

    this._inputs.forEach((input) => {
      input.addEventListener("input", (e) => this._validate(e));
    });
  }

  _validate(e) {
    this._checkInputValidity(e);
    this._toggleButtonState();
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputs)) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", "true");
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled");
    }
  }

  _checkInputValidity(e) {
    const inputElement = e.target;
    if (!inputElement.validity.valid) {
      this._showError(
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideError(inputElement);
    }
  }

  _showError(input, errorMessage) {
    input.classList.add(this._inputErrorClass);
    const spanError = input.nextElementSibling;
    spanError.classList.add(this._errorClass);
    spanError.textContent = errorMessage;
  }

  _hideError(input) {
    input.classList.remove(this._inputErrorClass);
    const spanError = input.nextElementSibling;
    spanError.textContent = "";
    spanError.classList.remove(this._errorClass);
  }

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
}

export default FormValidation;
