const formButton = document.querySelector(".form__button");
const input = document.querySelectorAll("input");
const svgIcon = document.querySelector("svg");
const inputPhone = document.getElementById("phone");
const iconPhone = document.querySelector(".form__svg-phone");
const inputMail = document.getElementById("mail");
const iconMail = document.querySelector(".form__svg-mail");

formButton.addEventListener("click", (event) => {
  event.preventDefault();
  input.forEach((e) => {
    if (!e.validity.valid) {
      e.classList.add("form__input--invalid");
    }
  });

  if (!inputMail.validity.valid) {
    iconMail.classList.add("form__svg--invalid");
  }

  if (!inputPhone.validity.valid) {
    iconPhone.classList.add("form__svg--invalid");
  }
});

if (!inputMail.validity.valid) {
  inputMail.addEventListener("focus", () => {
    iconMail.classList.remove("form__svg--invalid");
    iconMail.classList.add("form__svg--focus");
  });
  inputMail.addEventListener("focusout", () => {
    iconMail.classList.remove("form__svg--focus");
  });
}

if (!inputPhone.validity.valid) {
  inputPhone.addEventListener("focus", () => {
    iconPhone.classList.remove("form__svg--invalid");
    iconPhone.classList.add("form__svg--focus");
  });
  inputPhone.addEventListener("focusout", () => {
    iconPhone.classList.remove("form__svg--focus");
  });
}
