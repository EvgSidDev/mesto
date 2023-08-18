import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popup, openedClass, photoView, viewTitle, closeButton) {
    super(popup, openedClass, closeButton);
    this._photoView = photoView;
    this._titleView = viewTitle;
  }
  open(data) {
    super.open();
    this._photoView.src = data.src
    this._photoView.alt = data.title;
    this._titleView.textContent = data.title;
  }
}

export default PopupWithImage
