function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "flex";

  const body = document.querySelector("body");
  body.style.position = "fixed";

  const header = document.querySelector("header");
  const main = document.querySelector("main");
  header.ariaHidden = true;
  main.ariaHidden = true;
  modal.ariaHidden = false;

  window.addEventListener("keydown", function keysHandler(e) {
    if (e.code === "Escape") {
      closeModal();
      window.removeEventListener("keydown", keysHandler);
    }
  });

  modal.focus();
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";

  const body = document.querySelector("body");
  body.style.position = "static";

  const form = document.getElementById("contact_form");
  form.reset();

  const header = document.querySelector("header");
  const main = document.querySelector("main");
  header.ariaHidden = false;
  main.ariaHidden = false;
  modal.ariaHidden = true;
}

function submitContact(e) {
  e.preventDefault();

  let formValues = {};
  const form = document.getElementById("contact_form");
  const formData = new FormData(form);

  formData.forEach((value, key) => {
    formValues[key] = value;
  });

  console.log(formValues);

  closeModal();
}
