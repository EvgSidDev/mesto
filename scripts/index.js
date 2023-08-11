import Card from "./Card.js";
import FormValidation from "./FormValidation.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";
import {
  initialCards,
  defaultCardTemplate,
  photoContainer,
  constElementValidation,
  editButtonProfile,
  closeButtonProfile,
  popupFormEditProfile,
  addButtonPhoto,
  closeButtonPhoto,
  closeButtonView,
  popupFormAddPhoto,
  viewPhoto,
  viewTitle,
  popupView,
  profileName,
  profileStatus,
  popupEdit,
  popupAddPhoto,
  popupOpenedClass,
} from "./constants.js";

const userInfo = new UserInfo({
  nameElement: profileName,
  statusElement: profileStatus,
});

const formAddPhotoValidation = new FormValidation(
  constElementValidation,
  popupFormAddPhoto
);
formAddPhotoValidation.enableValidation();

const popupAddNewPlace = new PopupWithForm(
  popupAddPhoto,
  popupOpenedClass,
  (e) => {
    const data = popupAddNewPlace._getInputValues();
    initialCards.push({
      name: data.newPhotoName,
      link: data.newPhotoLink,
    });
    section.setItems(initialCards);
    section.renderElements();
    popupAddNewPlace.close(e);
    e.preventDefault();
  },
  () => {
    return;
  },
  formAddPhotoValidation
);
popupAddNewPlace.setEventListeners(closeButtonPhoto);
addButtonPhoto.addEventListener(
  "click",
  popupAddNewPlace.open.bind(popupAddNewPlace)
);

const formEditProfileValidation = new FormValidation(
  constElementValidation,
  popupFormEditProfile
);
formEditProfileValidation.enableValidation();

const popupEditProfile = new PopupWithForm(
  popupEdit,
  popupOpenedClass,
  (e) => {
    const data = popupEditProfile._getInputValues();
    userInfo.setUserInfo({
      nameUser: data.nameUser,
      statusUser: data.statusUser,
    });
    popupEditProfile.close(e);
    e.preventDefault();
  },
  () => {
    return userInfo.getUserInfo();
  },
  formEditProfileValidation
);
popupEditProfile.setEventListeners(closeButtonProfile);
editButtonProfile.addEventListener(
  "click",
  popupEditProfile.open.bind(popupEditProfile)
);

const section = new Section(
  {
    items: initialCards,
    render: (item) => {
      const card = new Card(item, defaultCardTemplate, (element) => {
        viewPopup.open(element);
      });
      const photoElement = card.generateCard();
      section.addItem(photoElement);
    },
  },
  photoContainer
);
section.renderElements();

const viewPopup = new PopupWithImage(
  popupView,
  popupOpenedClass,
  viewPhoto,
  viewTitle
);
viewPopup.setEventListeners(closeButtonView);
