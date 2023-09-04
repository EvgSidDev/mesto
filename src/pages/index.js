import "./index.css";
import Card from "../components/Card.js";
import FormValidation from "../components/FormValidation.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import {
  defaultCardTemplate,
  photoContainer,
  validationConfig,
  editButtonProfile,
  popupFormEditProfile,
  addButtonPhoto,
  popupFormAddPhoto,
  popupView,
  profileName,
  profileStatus,
  popupDeleteCard,
  popupEdit,
  popupAddPhoto,
  popupOpenedClass,
  popupFormClass,
  profileAvatar,
  profileAvatarArea,
  classHiddenElement,
  likeClassDark,
  popupEditAvatar,
  formEditAvatar,
} from "../utils/utils.js";

const cardsSection = new Section((item) => {
  const photoElement = createNewCard(item);
  cardsSection.addItem(photoElement);
}, photoContainer);

const userInfo = new UserInfo({
  nameElement: profileName,
  statusElement: profileStatus,
});

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1",
  cohortId: "cohort-74",
  headers: {
    Authorization: "4ca4dfdd-8688-4312-b496-43b033a0044e",
    "Content-Type": "application/json",
  },
});

const popupDelete = new PopupWithConfirmation(
  popupDeleteCard,
  popupOpenedClass,
  () => {
    const params = popupDelete.getParams();
    api
      .deleteCard(params.idCard)
      .then(() => {
        const parent = params.element.parentNode;
        parent.removeChild(params.element);
        popupDelete.resetParamsPopup();
        popupDelete.close();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  },
  popupFormClass
);

Promise.all([api.getUserInfo(), api.getCards()]).then(
  ([info, initialsCards]) => {
    userInfo.setUserInfo({
      nameUser: info.name,
      statusUser: info.about,
      id: info._id,
      avatarUrl: info.avatar,
    });
    profileAvatar.src = userInfo.getAvatarUrl();
    initialsCards.forEach((card) => {
      cardsSection.render(card);
    }).catch((error) => {
          console.log(error);
        });
  }
);

const formAddPhotoValidation = new FormValidation(
  validationConfig,
  popupFormAddPhoto
);
formAddPhotoValidation.enableValidation();

const popupAddNewPlace = new PopupWithForm(
  popupAddPhoto,
  popupOpenedClass,
  (data) => {
    popupAddNewPlace.setSubmitTitle("Сохранение ...");
    api
      .addNewCard({ name: data.newPhotoName, link: data.newPhotoLink })
      .then((data) => {
        const photoElement = createNewCard(data);
        cardsSection.addItem(photoElement);
        popupAddNewPlace.close();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        popupAddNewPlace.setSubmitTitle("Сохранить");
      });
  },
  validationConfig.inputPopupClass,
  popupFormClass
);

const formEditAvatarValidation = new FormValidation(
  validationConfig,
  formEditAvatar
);
formEditAvatarValidation.enableValidation();

const popupFormEditAvatar = new PopupWithForm(
  popupEditAvatar,
  popupOpenedClass,
  (data) => {
    popupFormEditAvatar.setSubmitTitle("Сохранение ...");
    api
      .updateAvatar(data.newAvatarLink)
      .then((data) => {
        userInfo.setAvatarUrl(data.avatar);
        profileAvatar.src = userInfo.getAvatarUrl();
        popupFormEditAvatar.close();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        popupFormEditAvatar.setSubmitTitle("Сохранить");
      });
  },
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
    popupEditProfile.setSubmitTitle("Сохранение ...");
    api
      .saveProfileData({ name: data.nameUser, about: data.statusUser })
      .then((data) => {
        userInfo.setUserInfo({
          nameUser: data.name,
          statusUser: data.about,
          id: data._id,
        });
        popupEditProfile.close();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        popupEditProfile.setSubmitTitle("Сохранить");
      });
  },
  validationConfig.inputPopupClass,
  popupFormClass
);

const viewPopup = new PopupWithImage(popupView, popupOpenedClass);

function createNewCard(data) {
  const card = new Card(
    data,
    defaultCardTemplate,
    (element) => {
      viewPopup.open(element);
    },
    () => {
      popupDelete.setParamsPopup({
        idCard: card.getCardId(),
        element: card.getElement(),
      });
      popupDelete.open();
    },
    () => {
      if (card.likeIsDark()) {
        api
          .deleteLike(card.getCardId())
          .then((response) => {
            card.setLikes(response.likes);
            card.deleteDarkLike();
            card.updateCountLikes();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        api
          .setLike(card.getCardId())
          .then((response) => {
            card.setLikes(response.likes);
            card.setDarkLike();
            card.updateCountLikes();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    likeClassDark
  );

  const photoElement = card.generateCard(
    userInfo.getUserId(),
    classHiddenElement
  );
  return photoElement;
}

editButtonProfile.addEventListener("click", () => {
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  formEditProfileValidation.resetValidation();
  popupEditProfile.open();
});

addButtonPhoto.addEventListener("click", () => {
  popupFormAddPhoto.reset();
  formAddPhotoValidation.resetValidation();
  popupAddNewPlace.open();
});

profileAvatarArea.addEventListener("click", () => {
  formEditAvatar.reset();
  formEditAvatarValidation.resetValidation();
  popupFormEditAvatar.open();
});

popupEditProfile.setEventListeners();
popupAddNewPlace.setEventListeners();
popupFormEditAvatar.setEventListeners();
viewPopup.setEventListeners();
popupDelete.setEventListeners();
