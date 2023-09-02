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
  popupDeleteCard,
  popupEdit,
  popupAddPhoto,
  popupOpenedClass,
  popupFormClass,
  profileAvatar,
  profileAvatarArea,
  closeButtonPopupDeleteCard,
  classHiddenElement,
  likeClassDark,
  popupEditAvatar,
  formEditAvatar,
  closeButtonAvatar,
} from "../utils/utils.js";

const cardsSection = new Section(
  {
    items: [],
    render: (item) => {
      const photoElement = createNewCard(item);
      cardsSection.addItem(photoElement);
    },
  },
  photoContainer
);

const userInfo = new UserInfo({
  nameElement: profileName,
  statusElement: profileStatus,
});

let userId = userInfo.getUserId();

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
    api
      .deleteCard(popupDelete.getParams())
      .then((response) => {
        if (response.ok === false) {
          return Promise.reject(new Error(response.statusText));
        } else {
          return response.json();
        }
      })
      .then(() => {
        loadCards();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        popupDelete.resetParamsPopup();
        popupDelete.close();
      });
  },
  closeButtonPopupDeleteCard,
  popupFormClass
);

api
  .getUserInfo()
  .then((response) => {
    if (response.ok === false) {
      return Promise.reject(new Error(response.statusText));
    } else {
      return response.json();
    }
  })
  .then((data) => {
    userInfo.setUserInfo({
      nameUser: data.name,
      statusUser: data.about,
      id: data._id,
    });
    userId = userInfo.getUserId();
    profileAvatar.src = data.avatar;
    loadCards();
  })
  .catch((error) => {
    console.log(error);
  });

function loadCards() {
  api
    .getCards()
    .then((response) => {
      if (response.ok === false) {
        return Promise.reject(new Error(response.statusText));
      } else {
        return response.json();
      }
    })
    .then((data) => {
      cardsSection.setItems(data);
      cardsSection.renderElements();
    })
    .catch((error) => {
      console.log(error);
    });
}
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
      .then((response) => {
        if (response.ok === false) {
          return Promise.reject(new Error(response.statusText));
        } else {
          return response.json();
        }
      })
      .then((data) => {
        const photoElement = createNewCard(data);
        cardsSection.addItem(photoElement);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        popupAddNewPlace.setSubmitTitle("Сохранить");
        popupAddNewPlace.close();
      });
  },
  closeButtonPhoto,
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
      .then((response) => {
        if (response.ok === false) {
          return Promise.reject(new Error(response.statusText));
        } else {
          return response.json();
        }
      })
      .then((data) => {
        profileAvatar.src = data.avatar;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        popupFormEditAvatar.setSubmitTitle("Сохранить");
        popupFormEditAvatar.close();
      });
  },
  closeButtonAvatar,
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
      .then((response) => {
        if (response.ok === false) {
          return Promise.reject(new Error(response.statusText));
        } else {
          return response.json();
        }
      })
      .then((data) => {
        userInfo.setUserInfo({ nameUser: data.name, statusUser: data.about });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        popupEditProfile.setSubmitTitle("Сохранить");
        popupEditProfile.close();
      });
  },
  closeButtonProfile,
  validationConfig.inputPopupClass,
  popupFormClass
);

const viewPopup = new PopupWithImage(
  popupView,
  popupOpenedClass,
  viewPhoto,
  viewTitle,
  closeButtonView
);

function createNewCard(data) {
  const card = new Card(
    data,
    defaultCardTemplate,
    (element) => {
      viewPopup.open(element);
    },
    () => {
      popupDelete.setParamsPopup(card.getCardId());
      popupDelete.open();
    },
    () => {
      if (card.likeIsDark()) {
        api
          .deleteLike(card.getCardId())
          .then((response) => {
            if (response.ok === false) {
              return Promise.reject(new Error(response.statusText));
            } else {
              return response.json();
            }
          })
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
            if (response.ok === false) {
              return Promise.reject(new Error(response.statusText));
            } else {
              return response.json();
            }
          })
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

  const photoElement = card.generateCard();
  if (card.getOwnerId() === userInfo.getUserId()) {
    card.unsetHiddenDelete(classHiddenElement);
  }
  if (card.containsMyLike(userId)) {
    card.setDarkLike();
  }
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
