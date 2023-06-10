const popup = document.querySelector(".popup");

const editButtonProfile = document.querySelector(".profile__edit-button");
const closeButtonProfile = document.querySelector(".popup__close-button");
const submitButtonProfile = document.querySelector(".popup__submit");
const likeButton = document.querySelectorAll(".element__like")

const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const popupTextInputs = document.querySelectorAll(".popup__text-input");
const popupName = popupTextInputs[0];
const popupStatus = popupTextInputs[1];


togglePopup();

function openEditPopupProfile(e) {
  popupName.value = profileName.innerText;
  popupStatus.value = profileStatus.innerText;
  togglePopup();
}

function togglePopup(e) {
  popup.classList.toggle("popup_hidden");
}

function saveChangesProfileEvent(e) {
  saveChangesProfile();
}

function saveChangesProfileKeyDown(e) {
  if (e.keyCode === 13) {
    saveChangesProfile();
  }
}

function saveChangesProfile() {
  profileName.innerText = popupName.value;
  profileStatus.innerText = popupStatus.value;
  togglePopup();
}

function closePopupWithoutSave() {
  popupName.innerText = "";
  popupStatus.innerText  = "";
  togglePopup();
}

editButtonProfile.addEventListener('click', openEditPopupProfile);
closeButtonProfile.addEventListener('click', closePopupWithoutSave);
submitButtonProfile.addEventListener('click', saveChangesProfileEvent);
popup.addEventListener('keydown', saveChangesProfileKeyDown);

