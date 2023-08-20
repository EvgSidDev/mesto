import "./index.css";
import Card from "../components/Card.js";
import FormValidation from "../components/FormValidation.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  defaultCardTemplate,
  photoContainer,
  validationConfig,
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
  popupFormClass
} from "../utils/utils.js";

const userInfo = new UserInfo({
  nameElement: profileName,
  statusElement: profileStatus,
});

const formAddPhotoValidation = new FormValidation(
  validationConfig,
  popupFormAddPhoto
);
formAddPhotoValidation.enableValidation();

const popupAddNewPlace = new PopupWithForm(
  popupAddPhoto,
  popupOpenedClass,
  (data) => {
    const photoElement = createNewCard({
      name: data.newPhotoName,
      link: data.newPhotoLink,
    });
    cardsSection.addItem(photoElement);
    popupAddNewPlace.close();
  },
  closeButtonPhoto,
  validationConfig.inputPopupClass,
  popupFormClass
);

const formEditProfileValidation = new FormValidation(
  validationConfig,
  popupFormEditProfile
);
formEditProfileValidation.enableValidation();

const popupEditProfile = new PopupWithForm(
  popupEdit,
  popupOpenedClass,
  (data) => {
    userInfo.setUserInfo({
      nameUser: data.nameUser,
      statusUser: data.statusUser,
    });
    popupEditProfile.close();
  },
  closeButtonProfile,
  validationConfig.inputPopupClass,
  popupFormClass
);

const cardsSection = new Section(
  {
    items: initialCards,
    render: (item) => {
      const photoElement = createNewCard(item);
      cardsSection.addItem(photoElement);
    },
  },
  photoContainer
);
cardsSection.renderElements();

const viewPopup = new PopupWithImage(
  popupView,
  popupOpenedClass,
  viewPhoto,
  viewTitle,
  closeButtonView
);

function createNewCard(data) {
  const card = new Card(data, defaultCardTemplate, (element) => {
    viewPopup.open(element);
  });
  const photoElement = card.generateCard();
  return photoElement;
}

editButtonProfile.addEventListener("click", () => {
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  formEditProfileValidation.resetValidation();
  popupEditProfile.open();
});

addButtonPhoto.addEventListener("click", () => {
  popupFormAddPhoto.reset();
  formAddPhotoValidation.resetValidation()
  popupAddNewPlace.open();
});

popupEditProfile.setEventListeners();
popupAddNewPlace.setEventListeners();
viewPopup.setEventListeners();
