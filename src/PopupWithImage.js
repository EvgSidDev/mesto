import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector, openedClass, photoView, viewTitle) {
    super(popupSelector, openedClass);
    this._photoView = photoView;
    this._titleView = viewTitle;
  }
  open(element) {
    super.open();
    this._photoView.src = element.src
    this._photoView.alt = element.alt;
    this._titleView.textContent = element.alt;
  }
}

export default PopupWithImage
