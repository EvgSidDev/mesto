import Card from "./Card.js";
import FormValidation from "./FormValidation.js";
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
  popupFormAddPhoto,
  closeButtonView,
  viewPhoto,
  viewTitle,
  popupView,
  popupOpenedClass,
  popupName,
  profileName,
  popupStatus,
  profileStatus,
  popupEdit,
  popupAddPhoto,
  popupAddNamePlace,
  popupAddLinkPlace
} from "./constants.js";
function initiateCards() {
  initialCards.forEach((element) => {
    initiateCard(element);
  });
}

function initiateCard(data) {
  const card = new Card(data.name, data.link, defaultCardTemplate);
  const photoElement = card.generateCard();
  setGeneralEvents(photoElement);
  addCard(photoElement);
}

function setGeneralEvents(element) {
  element.addEventListener("click", openView);
}

function addCard(element) {
  photoContainer.prepend(element);
}

function openEditPopupProfile() {
  popupName.value = profileName.textContent;
  popupStatus.value = profileStatus.textContent;
  openPopup(popupEdit);
}

const openPopup = (popup) => {
  popup.classList.add(popupOpenedClass);
  setCloseEvent(popup);
};

function closePopup(popup) {
  removeCloseEvent(popup);
  popup.classList.remove(popupOpenedClass);
}

function closeEditPopup() {
  closePopup(popupEdit);
}

function openAddPopup() {
  const form = popupAddPhoto.querySelector(constElementValidation.formSelector);
  resetDataInput(form);
  openPopup(popupAddPhoto);
}

function closeAddPopup() {
  closePopup(popupAddPhoto);
}

function saveChangesProfileEvent(e) {
  saveChangesProfile();
  e.preventDefault();
}

function saveChangesProfile() {
  profileName.textContent = popupName.value;
  profileStatus.textContent = popupStatus.value;
  closePopup(popupEdit);
}

function addNewPlace(e) {
  initiateCard({
    name: popupAddNamePlace.value,
    link: popupAddLinkPlace.value,
  });
  closeAddPopup(popupAddPhoto);
  e.preventDefault();
}

function openView(e) {
  viewPhoto.src = e.target
    .closest(".element")
    .querySelector(".element__image").src;
  viewPhoto.alt = e.target.alt;
  viewTitle.textContent = e.target
    .closest(".element")
    .querySelector(".element__title").textContent;
  openPopup(popupView);
}

function closeView() {
  viewPhoto.src = "";
  viewPhoto.alt = "";
  viewTitle.textContent = "";
  closePopup(popupView);
}

function setCloseEvent(popup) {
  document.addEventListener("keydown", closeAnyPopupByEsc);
  popup.addEventListener("click", closeAnyPopup);
}

function removeCloseEvent(popup) {
  document.removeEventListener("keydown", closeAnyPopupByEsc);
  popup.removeEventListener("click", closeAnyPopup);
}

function closeAnyPopupByEsc(e) {
  if (e.key === "Escape") {
    const openedPopup = document.querySelector(`.${popupOpenedClass}`);
    closePopup(openedPopup);
  }
}

function closeAnyPopup(e) {
  closePopup(e.target);
}

function resetDataInput(form) {
  form.reset();
}

initiateCards();
const forms = Array.from(
  document.querySelectorAll(constElementValidation.formSelector)
);
forms.forEach((form) => {
  const formValidation = new FormValidation(constElementValidation, form);
  formValidation.enableValidation();
});

// events
editButtonProfile.addEventListener("click", openEditPopupProfile);
closeButtonProfile.addEventListener("click", closeEditPopup);
popupFormEditProfile.addEventListener("submit", saveChangesProfileEvent);

addButtonPhoto.addEventListener("click", openAddPopup);
closeButtonPhoto.addEventListener("click", closeAddPopup);
popupFormAddPhoto.addEventListener("submit", addNewPlace);

closeButtonView.addEventListener("click", closeView);
