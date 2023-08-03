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
  popupName,
  profileName,
  popupStatus,
  profileStatus,
  popupEdit,
  popupAddPhoto,
  popupAddNamePlace,
  popupAddLinkPlace,
  closePopup,
  openPopup
} from "./constants.js";
function initiateCards() {
  initialCards.forEach((element) => {
    const photoElement = initiateCard(element);
    addCard(photoElement);
  });
}

function initiateCard(data) {
  const card = new Card(data.name, data.link, defaultCardTemplate);
  const photoElement = card.generateCard();
  return photoElement;
}

function addCard(element) {
  photoContainer.prepend(element);
}

function openEditPopupProfile() {
  popupName.value = profileName.textContent;
  popupStatus.value = profileStatus.textContent;
  formEditProfileValidation.setDisableMod();
  openPopup(popupEdit);
}

function closeEditPopup() {
  closePopup(popupEdit);
}

function openAddPopup() {
  resetDataInput(popupFormAddPhoto);
  formAddPhotoValidation.setDisableMod();
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
  const photoElement = initiateCard({
    name: popupAddNamePlace.value,
    link: popupAddLinkPlace.value,
  });
  addCard(photoElement);
  closeAddPopup(popupAddPhoto);
  e.preventDefault();
}

function closeView() {
  viewPhoto.src = "";
  viewPhoto.alt = "";
  viewTitle.textContent = "";
  closePopup(popupView);
}

function resetDataInput(form) {
  form.reset();
}

initiateCards();

const formAddPhotoValidation = new FormValidation(constElementValidation, popupFormAddPhoto);
formAddPhotoValidation.enableValidation();

const formEditProfileValidation = new FormValidation(constElementValidation, popupFormEditProfile);
formEditProfileValidation.enableValidation();

// events
editButtonProfile.addEventListener("click", openEditPopupProfile);
closeButtonProfile.addEventListener("click", closeEditPopup);
popupFormEditProfile.addEventListener("submit", saveChangesProfileEvent);

addButtonPhoto.addEventListener("click", openAddPopup);
closeButtonPhoto.addEventListener("click", closeAddPopup);
popupFormAddPhoto.addEventListener("submit", addNewPlace);

closeButtonView.addEventListener("click", closeView);

