// css classes
export const likeClassDark = "element__like_dark";

//profile
export const popupEdit = document.querySelector("#edit-profile");
export const popupFormEditProfile = document.querySelector("form[name=edit-profile]");
export const editButtonProfile = document.querySelector(".profile__edit-button");
export const profileName = document.querySelector(".profile__name");
export const profileStatus = document.querySelector(".profile__status");
export const profileAvatar = document.querySelector(".profile__avatar");
export const profileAvatarArea = document.querySelector(".profile__avatar-area");

//photo
export const popupAddPhoto = document.querySelector("#add-photo");
export const popupFormAddPhoto = document.querySelector("form[name=add-photo]");
export const addButtonPhoto = document.querySelector(".profile__add-button");
export const photoContainer = document.querySelector(".elements__photos");

//avatar
export const popupEditAvatar = document.querySelector("#edit-avatar");
export const formEditAvatar = document.querySelector("form[name=edit-avatar]");


// view
export const popupView = document.querySelector("#view-photo");

// popups
export const popupOpenedClass = 'popup_opened';
export const popupFormClass = '.popup__form';
export const popupDeleteCard = document.querySelector("#delete-photo");
export const classHiddenElement = 'element__delete_hidden';

export const validationConfig = {
  inputPopupClass: '.popup__type-input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__type-input_error',
  errorClass: 'popup_input-error_active'
};

export const defaultCardTemplate = document.querySelector("#template-element").content;

export * as constants from './utils.js';
