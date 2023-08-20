import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popup, openedClass, submitCallback, closeButton, inputPopupClass, popupFormClass) {
    super(popup, openedClass, closeButton);
    this._submitCallback = submitCallback;
    this._form = this._popup.querySelector(popupFormClass);
    this._inputs = Array.from(
      this._popup.querySelectorAll(inputPopupClass)
    );
  }

  setInputValues(data) {
    this._inputs.forEach((element) => {
      element.value = data[element.id];
    });
  }

  _getInputValues() {
    const data = {};
    this._inputs.forEach((element) => {
      data[element.id] = element.value;
    });
    return data;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._submitCallback(this._getInputValues());
    });
  }
}

export default PopupWithForm;
