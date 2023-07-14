function initiateCards() {
  initialCards.forEach((element) => {
    const photoElement = initiateCard(element.name, element.link);
    addCard(photoElement);
  });
}

function initiateCard(name, link) {
  const photoTemplate = document.querySelector("#template-element").content;
  const photoElement = photoTemplate.querySelector(".element").cloneNode(true);
  photoElement.querySelector(".element__title").textContent = name;
  photoElement.querySelector(".element__image").src = link;
  photoElement.querySelector(".element__image").alt = name;

  const likeElement = photoElement.querySelector(".element__like");
  likeElement.addEventListener("click", toggleDarkLike);

  const deleteElement = photoElement.querySelector(".element__delete");
  deleteElement.addEventListener("click", deleteCard);

  const imageElement = photoElement.querySelector(".element__image");
  imageElement.addEventListener("click", openView);

  return photoElement;
}

function addCard(element) {
  photoContainer.prepend(element);
}

function deleteCard(e) {
  e.target.closest(".element").remove();
}

function openEditPopupProfile() {
  popupName.value = profileName.textContent;
  popupStatus.value = profileStatus.textContent;
  openPopup(popupEdit);
}

function openPopup(popup) {
  popup.classList.add(popupOpenedClass);
  setCloseEvent(popup);
}

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
  const photoElement = initiateCard(popupAddNamePlace.value, popupAddLinkPlace.value);
  addCard(photoElement);
  closeAddPopup(popupAddPhoto);
  popupFormAddPhoto.reset();
  e.preventDefault();
}

function toggleDarkLike(e) {
  e.target.classList.toggle("element__like_dark");
}

function openView(e) {
  viewPhoto.src = e.target.src;
  viewPhoto.alt = e.target.alt;
  viewTitle.textContent = e.target.closest(".element").querySelector(".element__title").textContent;
  openPopup(popupView);
}

function closeView() {
  viewPhoto.src = "";
  viewPhoto.alt = "";
  viewTitle.textContent = "";
  closePopup(popupView);
}

function setCloseEvent(popup) {
  document.addEventListener('keydown', closeAnyPopupByEsc);
  popup.addEventListener('click', closeAnyPopup);
}

function removeCloseEvent(popup) {
  document.removeEventListener('keydown', closeAnyPopupByEsc);
  popup.removeEventListener('click', closeAnyPopup);
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
enableValidation(constElementValidation)

// events
editButtonProfile.addEventListener("click", openEditPopupProfile);
closeButtonProfile.addEventListener("click", closeEditPopup);
popupFormEditProfile.addEventListener("submit", saveChangesProfileEvent);

addButtonPhoto.addEventListener("click", openAddPopup);
closeButtonPhoto.addEventListener("click", closeAddPopup);
popupFormAddPhoto.addEventListener("submit", addNewPlace);

closeButtonView.addEventListener('click', closeView);





