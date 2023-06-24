
//profile
const popupEdit = document.querySelector("#edit-profile");
const popupFormEditProfile = document.querySelector("form[name=edit-profile]");
const editButtonProfile = document.querySelector(".profile__edit-button");
const closeButtonProfile = document.querySelector("#close-edit-profile");
const profileName = document.querySelector(".profile__name");
const profileStatus = document.querySelector(".profile__status");
const popupName = document.querySelector("#input-name");
const popupStatus = document.querySelector("#input-status");

//photo
const popupAddPhoto = document.querySelector("#add-photo");
const popupFormAddPhoto = document.querySelector("form[name=add-photo]");
const addButtonPhoto = document.querySelector(".profile__add-button");
const closeButtonPhoto = document.querySelector("#close-add-photo");
const popupAddNamePlace = document.querySelector("input[name=title-for-photo]");
const popupAddLinkPlace = document.querySelector("input[name=url-for-photo]");
const photoContainer = document.querySelector(".elements__photos");


// view
const popupView = document.querySelector("#view-photo");
const closeButtonView = document.querySelector("#close-view-photo");
const viewPhoto = document.querySelector(".view__photo");
const viewTitle = document.querySelector(".view__title");

function initiateCards() {
  initialCards.forEach((element) => {
    initiateCard(element.name, element.link);
  });
}

function initiateCard(name, link) {
  const photoTemplate = document.querySelector("#template-element").content;
  const photoElement = photoTemplate.querySelector(".element").cloneNode(true);
  photoElement.querySelector(".element__title").textContent = name;
  photoElement.querySelector(".element__image").src = link;
  photoElement.querySelector(".element__image").alt = name;
  photoContainer.prepend(photoElement);

  let likeElement = photoElement.querySelector(".element__like");
  likeElement.addEventListener("click", toggleDarkLike);

  let deleteElement = photoElement.querySelector(".element__delete");
  deleteElement.addEventListener("click", deletePlace);

  let imageElement = photoElement.querySelector(".element__image");
  imageElement.addEventListener("click", openView);
}

function openEditPopupProfile() {
  popupName.value = profileName.textContent;
  popupStatus.value = profileStatus.textContent;
  togglePopupEditProfile();
}

function togglePopupEditProfile() {
  togglePopup(popupEdit, classOpacityLight);
}

function togglePopupAddPhoto() {
  togglePopup(popupAddPhoto, classOpacityLight);
}

function togglePopup(element, classOpacity) {
  element.classList.toggle("popup_opened");
  element.classList.toggle(classOpacity);
}

function saveChangesProfileEvent(e) {
  saveChangesProfile();
  e.preventDefault();
}

function saveChangesProfile() {
  profileName.textContent = popupName.value;
  profileStatus.textContent = popupStatus.value;
  togglePopupEditProfile();
}

function addNewPlace(e) {
  initiateCard(popupAddNamePlace.value, popupAddLinkPlace.value);
  togglePopup(popupAddPhoto, classOpacityLight);
  popupAddNamePlace.value = "";
  popupAddLinkPlace.value = "";
  e.preventDefault();
}

function toggleDarkLike(e) {
  console.log(e);
  e.target.classList.toggle("element__like_dark");
}

function deletePlace(e) {
  e.target.closest(".element").remove();
}

function openView(e) {
  viewPhoto.src = e.target.src;
  viewPhoto.alt = e.target.alt;
  viewTitle.textContent = e.target.closest(".element").querySelector(".element__title").textContent;
  togglePopup(popupView, classOpacityDark);
}

function closeView() {
  viewPhoto.src = "";
  viewPhoto.alt = "";
  viewTitle
  togglePopup(popupView, classOpacityDark);
}

initiateCards();

// events
editButtonProfile.addEventListener("click", openEditPopupProfile);
closeButtonProfile.addEventListener("click", togglePopupEditProfile);
popupFormEditProfile.addEventListener("submit", saveChangesProfileEvent);

addButtonPhoto.addEventListener("click", togglePopupAddPhoto);
closeButtonPhoto.addEventListener("click", togglePopupAddPhoto);
popupFormAddPhoto.addEventListener("submit", addNewPlace);

closeButtonView.addEventListener('click', closeView)



