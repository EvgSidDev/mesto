class FormValidation {
  constructor(structValidation, form) {
    this._submitButtonSelector = structValidation.submitButtonSelector;
    this._inputPopupClass = structValidation.inputPopupClass;
    this._inactiveButtonClass = structValidation.inactiveButtonClass;
    this._inputErrorClass = structValidation.inputErrorClass;
    this._errorClass = structValidation.errorClass;
    this._form = form;
    this._buttonElement = this._form.querySelector(
      this._submitButtonSelector
    );
  }

  enableValidation() {
    this._inputs = Array.from(
      this._form.querySelectorAll(this._inputPopupClass)
    );
    this._toggleButtonState();

    this._inputs.forEach((input) => {
      input.addEventListener("input", (e) => this._validate(e));
    });
  }

  resetValidation() {
    this._setDisableMod();
    this._inputs.forEach((input) => {
      this._hideError(input);
    })
  }

  getForm(){
    return this._form;
  }

  getInputs(){
    return this._inputs;
  }

  _validate(e) {
    this._checkInputValidity(e);
    this._toggleButtonState();
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._setDisableMod(this._buttonElement, this._inactiveButtonClass)
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

  _hasInvalidInput () {
    return this._inputs.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _setDisableMod = () => {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  }
}

export default FormValidation;
