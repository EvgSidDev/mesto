class Card {
  constructor({name, link, likes, _id, owner}, templateSelector, handleImageClick, handleImageDelete, handleCardLike, likeClassDark) {
    this._title = name;
    this._url = link;
    this._id = _id;
    this._idOwner = owner._id;
    this._template = templateSelector;
    this._handleImageClick = handleImageClick;
    this._handleImageDelete = handleImageDelete;
    this.setLikes(likes);
    this._handleCardLike = handleCardLike;
    this._likeClassDark = likeClassDark;
  }

  generateCard(thisUserId, classHiddenElement) {
    this._element = this._getTemplate();
    this._elementLike = this._element.querySelector(".element__like");
    this._elementDelete = this._element.querySelector(".element__delete");
    this._elementImage = this._element.querySelector(".element__image");
    this._elementLikes = this._element.querySelector(".element__likes");
    this.updateCountLikes();
    this._setValues();
    this._setEventListener();

    if (this._idOwner === thisUserId) {
      this._unsetHiddenDelete(classHiddenElement);
    }
    if (this._containsMyLike(thisUserId)) {
      this.setDarkLike();
    }
    return this._element;
  }

  setLikes(likes) {
    this._likes = likes;
  }

  updateCountLikes() {
    this._elementLikes.textContent = this._likes.length;
  }

  setDarkLike () {
    this._elementLike.classList.add(this._likeClassDark)
  }

  deleteDarkLike () {
    this._elementLike.classList.remove(this._likeClassDark)
  }

  likeIsDark() {
    return this._elementLike.classList.contains(this._likeClassDark);
  }

  getCardId() {
    return this._id;
  }

  getElement() {
    return this._element;
  }

  getOwnerId() {
    return this._idOwner;
  }

  removeCard() {
    this._element.parentNode.removeChild(this._element);
  }

  _unsetHiddenDelete(classHidden){
    this._elementDelete.classList.remove(classHidden);
  }

  _containsMyLike(id) {
    return this._likes.some((like) => {
      return like._id === id;
    });
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
    this._elementLike.addEventListener("click", () => {
      this._handleCardLike();
    });
    this._elementDelete.addEventListener("click", () => {
      this._handleImageDelete();
    });
    this._elementImage.addEventListener("click", () => {
      this._handleImageClick({src: this._url, title: this._title});
    });
  }

}

export default Card;
