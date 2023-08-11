import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, openedClass, submitCallback, getInputData, formValidation) {
    super(popupSelector, openedClass);
    this._submitCallback = submitCallback;
    this._formValidation = formValidation;
    this._getInputData = getInputData;
  }

  setEventListeners(closeButtonSelector) {
    super.setEventListeners(closeButtonSelector);
    this._formValidation._buttonElement.addEventListener("click", this._submitCallback);
  }

  open() {
    super.open();
    this._setInputValues(this._getInputData());
    this._formValidation.setDisableMod();
  }

  _setInputValues(data) {
    this._formValidation._inputs.forEach(element => {
      element.value = data[element.id];
    });
  }

  close(e) {
    if (e.currentTarget != e.target) {
      return;
    };
    this._resetDataInput();
    this._popupSelector.classList.remove(this._openedClass);
  }

  _getInputValues() {
    const data = {};
    this._formValidation._inputs.forEach(element => {
      data[element.id] = element.value;
    });
    return data;
  }

  _resetDataInput() {
    this._formValidation.resetForm();
  }
}

export default PopupWithForm
