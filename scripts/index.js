let buttonEdit = document.querySelector(".profile__button-edit");
let formEdit = document.querySelector(".popup__form");
let popupEdit = document.querySelector("#popup__edit");
let popupOpen = document.querySelector("popup_open");
let closeButtonEdit = popupEdit.querySelector(".popup__button-typeclose");
let nameInput = document.querySelector(".popup__input-name");
let jobInput = document.querySelector(".popup__input-profesion");
let formElement = document.querySelector(".popup__form");

function openModal() {
  popupEdit.classList.add("popup_open");
}

buttonEdit.addEventListener("click", openModal);

function closeModal() {
  popupEdit.classList.remove("popup_open");
}

closeButtonEdit.addEventListener("click", closeModal);

function handleProfileFormSubmit(event) {
  event.preventDefault();
  nameInput.textContent = nameInput.value;
  jobInput.textContent = jobInput.value;
  closeModal();
}

formElement.addEventListener("submit", handleProfileFormSubmit);
