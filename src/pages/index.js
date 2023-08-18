// import "./index.css";
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
} from "../utils.js";

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
  (e) => {
    const data = popupAddNewPlace.getInputValues();
    addAndRenderNewCard({
      name: data.newPhotoName,
      link: data.newPhotoLink,
    });
    popupAddNewPlace.close(e);
  },
  formAddPhotoValidation,
  closeButtonPhoto
);

const formEditProfileValidation = new FormValidation(
  validationConfig,
  popupFormEditProfile
);
formEditProfileValidation.enableValidation();

const popupEditProfile = new PopupWithForm(
  popupEdit,
  popupOpenedClass,
  (e) => {
    const data = popupEditProfile.getInputValues();
    userInfo.setUserInfo({
      nameUser: data.nameUser,
      statusUser: data.statusUser,
    });
    popupEditProfile.close();
  },
  formEditProfileValidation,
  closeButtonProfile
);

const cardsSection = new Section(
  {
    items: initialCards,
    render: (item) => {
      addAndRenderNewCard(item);
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

function addAndRenderNewCard(data) {
  const card = new Card(
    data,
    defaultCardTemplate,
    (element) => {
      viewPopup.open(element);
    }
  );
  const photoElement = card.generateCard();
  section.addItem(photoElement);
}

editButtonProfile.addEventListener("click", () => {
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  popupEditProfile.open();
});

addButtonPhoto.addEventListener("click", () => {
  const formPopup = formAddPhotoValidation.getForm();
  formPopup.reset();
  popupAddNewPlace.open();
});
