const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const classOpacityLight = "popup_opacity_light";
const classOpacityDark = "popup_opacity_dark";

//profile
const popupEdit = document.querySelector("#edit-profile");
const popupFormEditProfile = document.querySelector("form[name=edit-profile]");
const editButtonProfile = document.querySelector(".profile__edit-button");
const closeButtonProfile = document.querySelector("#close-edit-profile");
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const popupName = document.querySelector("#input-name");
const popupStatus = document.querySelector("#input-status");

//photo
const popupAddPhoto = document.querySelector("#add-photo");
const popupFormAddPhoto = document.querySelector("form[name=add-photo]");
const addButtonPhoto = document.querySelector(".profile__add-button");
const closeButtonPhoto = document.querySelector("#close-add-photo");
const popupAddNamePlace = document.querySelector("input[name=title-for-photo]");
const popupAddLinkPlace = document.querySelector("input[name=url-for-photo]");
const photoContainer = document.querySelector(".elements__photos");


// view
const popupView = document.querySelector("#view-photo");
const closeButtonView = document.querySelector("#close-view-photo");
const viewPhoto = document.querySelector(".view__photo");
const viewTitle = document.querySelector(".view__title");

// popups
const popupOpenedClass = 'popup_opened';
const inputPopupClass = '.popup__type-input';

const constElementValidation = {
  formSelector: '.popup__form',
  inputPopupClass: '.popup__type-input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__type-input_error',
  errorClass: 'popup_input-error_active'
};
