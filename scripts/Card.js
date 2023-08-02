import {
  viewPhoto,
  viewTitle,
  popupView,
  openPopup,
} from "./constants.js";

class Card {
  constructor(cardTitle, cardUrl, templateSelector) {
    this._title = cardTitle;
    this._url = cardUrl;
    this._template = templateSelector;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementLike = this._element.querySelector(".element__like");
    this._elementDelete = this._element.querySelector(".element__delete");
    this._elementImage = this._element.querySelector(".element__image");
    this._setValues();
    this._setEventListener();
    return this._element;
  }

  _getTemplate() {
    const cardElement = this._template
      .querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  _setValues() {
    this._element.querySelector(".element__title").textContent = this._title;
    this._elementImage.alt = this._title;
    this._elementImage.src = this._url;
  }

  _setEventListener() {
    this._elementLike.addEventListener("click", (e) => {
      this._toggleDarkLike(e);
    });
    this._elementDelete.addEventListener("click", (e) => {
      this._deleteCard(e);
    });
    this._elementImage.addEventListener("click", (e) => {
      this._openView(e);
    });
  }

  _toggleDarkLike(e) {
    this._elementLike.classList.toggle("element__like_dark");
    e.stopPropagation();
  }

  _deleteCard(e) {
    this._elementDelete.closest(".element").remove();
    e.stopPropagation();
  }

  _openView(e) {
    viewPhoto.src = this._elementImage.src;
    viewPhoto.alt = this._elementImage.alt;
    viewTitle.textContent = this._elementImage.alt;
    openPopup(popupView)
  }
}

export default Card;
