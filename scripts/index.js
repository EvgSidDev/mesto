const popup = document.querySelector(".popup");
const popupForm = document.querySelector("form[name=edit-profile]");

const editButtonProfile = document.querySelector(".profile__edit-button");
const closeButtonProfile = document.querySelector(".popup__close-button");

const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const popupName = document.querySelector("#input-name");
const popupStatus = document.querySelector("#input-status");

function openEditPopupProfile() {
  popupName.value = profileName.textContent;
  popupStatus.value = profileStatus.textContent;
  togglePopup();
}

function togglePopup() {
  popup.classList.toggle("popup_opened");
}

function saveChangesProfileEvent(e) {
  saveChangesProfile();
  e.preventDefault();
}

function saveChangesProfile() {
  profileName.textContent = popupName.value;
  profileStatus.textContent = popupStatus.value;
  togglePopup();
}

editButtonProfile.addEventListener('click', openEditPopupProfile);
closeButtonProfile.addEventListener('click', togglePopup);
popupForm.addEventListener('submit', saveChangesProfileEvent);

