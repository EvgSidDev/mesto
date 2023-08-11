export class Popup {
  constructor(popupSelector, openedClass) {
    this._popupSelector = popupSelector;
    this._openedClass = openedClass;
  }

  open() {
    this._popupSelector.classList.add(this._openedClass);
  }

  close(e) {
    if (e.currentTarget != e.target) {
      return;
    };
    this._popupSelector.classList.remove(this._openedClass);
  }

  setEventListeners(closeButtonSelector) {
    document.addEventListener("keydown", this._handleEscClose.bind(this));
    closeButtonSelector.addEventListener("click", this.close.bind(this));
    this._popupSelector.addEventListener("click", this.close.bind(this), true);
  }

  _handleEscClose(e) {
    if (e.key === "Escape") {
      document.removeEventListener("keydown", this._handleEscClose);
      this._popupSelector.classList.remove(this._openedClass);
    }
  }
}

export default Popup
