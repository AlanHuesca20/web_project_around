let buttonEdit = document.querySelector(".profile__button-edit");
let formEdit = document.querySelector(".popup__form");
let popupEdit = document.querySelector("#popup__edit");
let popupOpen = document.querySelector("popup_open");
let closeButtonEdit = popupEdit.querySelector(".popup__button-typeclose");

function openModal() {
  popupEdit.classList.add("popup_open");
}

buttonEdit.addEventListener("click", openModal);

function closeModal() {
  popupEdit.classList.remove("popup_open");
}

closeButtonEdit.addEventListener("click", closeModal);

//formulario

let formElement = document.querySelector(".popup__form");

function handleProfileFormSubmit(event) {
  event.preventDefault();
}

let nameInput = document.querySelector(".popup__input-name");
let jobInput = document.querySelector(".popup__input-profesion");

nameInput.value;
jobInput.value;

nameInput.textContent = nameInput.value;
jobInput.textContent = jobInput.value;

formElement.addEventListener("submit", handleProfileFormSubmit);
