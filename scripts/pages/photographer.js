async function getData() {
  const data = await fetch(
    "https://raw.githubusercontent.com/FloMoit/Front-End-Fisheye/main/data/photographers.json"
  ).then((response) => response.json());
  return data;
}

async function displayOnePhotographer() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");

  const globalDocument = document.querySelector("body");
  const photographersSectionHeader = document.querySelector("main");

  const data = JSON.parse(localStorage.getItem("data"));
  photographers = data.photographers;

  photographers.forEach((photographer) => {
    if (photographer.id != id) return;

    //On construit le header
    const photographerHeader = photographerTemplate(photographer);
    const userHeaderDOM = photographerHeader.getUserHeaderDOM();
    photographersSectionHeader.appendChild(userHeaderDOM);

    // On crée l'encard de prix
    const userPriceDOM = photographerHeader.getUserPriceDOM(photographer);
    globalDocument.appendChild(userPriceDOM);

    // On ajoute le nom du contact dans le formulaire
    const contactName = document.getElementById("contact_name");
    contactName.textContent = photographer.name;
  });
}
async function displayPhotographMedias() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");

  const data = JSON.parse(localStorage.getItem("data"));
  medias = data.media;

  switch (getSortBy()) {
    case "popularité":
      medias.sort((a, b) => b.likes - a.likes);
      break;
    case "date":
      medias.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
    case "titre":
      medias.sort((a, b) => a.title.localeCompare(b.title));
      break;
  }

  let likeAmount = 0;

  const mediaContainer = document.querySelector(".medias_container");
  const mediaCarouselContainer = document.querySelector(
    ".carousel-medias-container"
  );

  mediaContainer.innerHTML = "";
  mediaCarouselContainer.innerHTML = "";

  medias.forEach((media) => {
    if (media.photographerId != id) return;

    const mediaList = mediaTemplate(media);

    const mediaCardDOM = mediaList.getMediaCardDOM();
    mediaContainer.appendChild(mediaCardDOM);

    const mediaCarouselDOM = mediaList.getMediaCarouselDOM();
    mediaCarouselContainer.appendChild(mediaCarouselDOM);

    likeAmount += media.likes;
  });

  const likeAmountDOM = document.querySelector(".total-likes");
  likeAmountDOM.textContent = likeAmount;
}

async function init() {
  if (!localStorage.getItem("data")) {
    const data = await getData();
    localStorage.setItem("data", JSON.stringify(data));
  } else {
    const data = JSON.parse(localStorage.getItem("data"));
  }

  // On affiche les photographes
  displayOnePhotographer();

  // On affiche les médias
  displayPhotographMedias();
}

function getSortBy() {
  const sortSelect = document.getElementById("sort");
  const sortBy = sortSelect.options[sortSelect.selectedIndex].value;
  return sortBy;
}

init();
