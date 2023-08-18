export class Popup {
  constructor(popup, openedClass, closeButton) {
    this._popup = popup;
    this._openedClass = openedClass;
    this._closeButton = closeButton;
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
    this._handleButtonClick = this.close.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
    this.setEventListeners();
  }

  open() {
    this._popup.classList.add(this._openedClass);
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove(this._openedClass);
    document.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", this._handleButtonClick);
    this._popup.addEventListener("click", this._handleOverlayClick, true);
  }

  _handleOverlayClick(e) {
    if (e.currentTarget != e.target) {
        return;
      };
      console.log(this);
    this.close();
    e.stopPropagation();
  }

  _handleEscClose(e) {
    console.log(this);
    if (e.key === "Escape") {
      this.close();
    }
  }
}

export default Popup
