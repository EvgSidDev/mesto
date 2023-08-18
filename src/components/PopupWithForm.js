import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popup, openedClass, submitCallback, formValidation, closeButton) {
    super(popup, openedClass, closeButton);
    this._submitCallback = submitCallback;
    this._formValidation = formValidation;
    this._inputs = this._formValidation.getInputs();
    this._setSubmitAction();
  }

  open() {
    super.open();
    this._formValidation.resetValidation();
  }

  setInputValues(data) {
    this._inputs.forEach(element => {
      element.value = data[element.id];
    });
  }

  getInputValues() {
    const data = {};
    this._inputs.forEach(element => {
      data[element.id] = element.value;
    });
    return data;
  }

  _setSubmitAction() {
    const formPopup = this._formValidation.getForm();
    formPopup.addEventListener("submit", (e) => {e.preventDefault(); this._submitCallback()});
  }

}

export default PopupWithForm
