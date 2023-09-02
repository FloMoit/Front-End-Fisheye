let currentMedia;

function displayCarousel(id) {
  const modal = document.getElementById("carousel_modal");
  modal.style.display = "flex";

  currentMedia = document.querySelector(
    ".media-carousel[data-id='" + id + "']"
  );
  currentMedia.style.display = "flex";
  currentMedia.setAttribute("aria-hidden", "false");

  const body = document.querySelector("body");
  body.style.position = "fixed";

  //On ajoute les évènements
  window.addEventListener("keydown", function keysHandler(e) {
    if (e.code === "ArrowRight") {
      nextMedia();
    } else if (e.code === "ArrowLeft") {
      previousMedia();
    } else if (e.code === "Escape") {
      closeCarousel();
      window.removeEventListener("keydown", keysHandler);
    }
  });

  // Switch des attributs d'accessibilité
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  header.ariaHidden = true;
  main.ariaHidden = true;
  modal.ariaHidden = false;

  modal.focus();
}

function closeCarousel() {
  const modal = document.getElementById("carousel_modal");
  modal.style.display = "none";

  const allMedias = document.querySelectorAll(".media-carousel");
  allMedias.forEach(function (oneMedia) {
    oneMedia.style.display = "none";
  });

  const body = document.querySelector("body");
  body.style.position = "static";

  const header = document.querySelector("header");
  const main = document.querySelector("main");
  header.ariaHidden = false;
  main.ariaHidden = false;
  modal.ariaHidden = true;
}

function nextMedia() {
  const nextMedia = currentMedia.nextElementSibling;
  if (nextMedia != null) {
    currentMedia.style.display = "none";
    nextMedia.style.display = "flex";
    currentMedia.setAttribute("aria-hidden", "true");
    nextMedia.setAttribute("aria-hidden", "false");

    currentMedia = nextMedia;
  } else {
    // Si on est sur la dernière image
    const firstMedia = document.querySelector(".media-carousel");
    currentMedia.style.display = "none";
    firstMedia.style.display = "flex";
    currentMedia.setAttribute("aria-hidden", "true");
    firstMedia.setAttribute("aria-hidden", "false");
    currentMedia = firstMedia;
  }
}

function previousMedia() {
  const previousMedia = currentMedia.previousElementSibling;
  if (previousMedia != null) {
    currentMedia.style.display = "none";
    previousMedia.style.display = "flex";
    currentMedia.setAttribute("aria-hidden", "true");
    previousMedia.setAttribute("aria-hidden", "false");
    currentMedia = previousMedia;
  } else {
    // Si on est sur la première image
    const lastMedia = document.querySelector(".media-carousel:last-child");
    currentMedia.style.display = "none";
    lastMedia.style.display = "flex";
    currentMedia.setAttribute("aria-hidden", "true");
    lastMedia.setAttribute("aria-hidden", "false");
    currentMedia = lastMedia;
  }
}
