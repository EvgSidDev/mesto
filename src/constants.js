// import './pages/index.css';
export const initialCards = [
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

//profile
export const popupEdit = document.querySelector("#edit-profile");
export const popupFormEditProfile = document.querySelector("form[name=edit-profile]");
export const editButtonProfile = document.querySelector(".profile__edit-button");
export const closeButtonProfile = document.querySelector("#close-edit-profile");
export const profileName = document.querySelector(".profile__name");
export const profileStatus = document.querySelector(".profile__status");

//photo
export const popupAddPhoto = document.querySelector("#add-photo");
export const popupFormAddPhoto = document.querySelector("form[name=add-photo]");
export const addButtonPhoto = document.querySelector(".profile__add-button");
export const closeButtonPhoto = document.querySelector("#close-add-photo");
export const photoContainer = document.querySelector(".elements__photos");


// view
export const popupView = document.querySelector("#view-photo");
export const closeButtonView = document.querySelector("#close-view-photo");
export const viewPhoto = document.querySelector(".view__photo");
export const viewTitle = document.querySelector(".view__title");

// popups
export const popupOpenedClass = 'popup_opened';

export const constElementValidation = {
  inputPopupClass: '.popup__type-input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__type-input_error',
  errorClass: 'popup_input-error_active'
};

export const defaultCardTemplate = document.querySelector("#template-element").content;

export * as constants from './constants.js';
