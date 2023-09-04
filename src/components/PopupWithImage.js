import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popup, openedClass) {
    super(popup, openedClass);
    this._photoView = this._popup.querySelector(".view__photo");;
    this._titleView = this._popup.querySelector(".view__title");
  }
  open(data) {
    super.open();
    this._photoView.src = data.src
    this._photoView.alt = data.title;
    this._titleView.textContent = data.title;
  }
}

export default PopupWithImage
