import Popup from "./Popup.js";

export class PopupWithConfirmation extends Popup{
  constructor(popup, openedClass, submitCallback, closeButton, popupFormClass) {
    super(popup, openedClass, closeButton);
    this._submitCallback = submitCallback;
    this._form = this._popup.querySelector(popupFormClass);

  }

  getParams(){
    return this._params;
  }

  setParamsPopup(params) {
    this._params = params;
  }

  resetParamsPopup() {
    this._params = undefined;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._submitCallback();
    });
  }
}

export default PopupWithConfirmation
