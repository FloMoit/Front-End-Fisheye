async function getPhotographers() {
  let photographers = [];

  await fetch(
    "https://raw.githubusercontent.com/FloMoit/Front-End-Fisheye/main/data/photographers.json"
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json.photographers);
      photographers = json.photographers;
    });

  return photographers;
}
async function getMedias() {
  let medias = [];

  await fetch(
    "https://raw.githubusercontent.com/FloMoit/Front-End-Fisheye/main/data/photographers.json"
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json.media);
      medias = json.media;
    });

  return medias;
}

async function displayOnePhotographer(photographers, id) {
  const photographersSectionHeader = document.querySelector("main");

  photographers.forEach((photographer) => {
    if (photographer.id != id) return;

    const photographerHeader = photographerTemplate(photographer);
    const userHeaderDOM = photographerHeader.getUserHeaderDOM();
    photographersSectionHeader.appendChild(userHeaderDOM);
  });
}

async function displayPhotographMedias(medias, id) {
  const mediaContainer = document.querySelector(".medias_container");

  medias.forEach((media) => {
    if (media.photographerId != id) return;

    const mediaList = mediaTemplate(media);
    const mediaCardDOM = mediaList.getMediaCardDOM();
    mediaContainer.appendChild(mediaCardDOM);
  });
}

async function init() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const photographerId = urlParams.get("id");

  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  displayOnePhotographer(photographers, photographerId);

  // Récupère les datas des médias
  const medias = await getMedias();
  displayPhotographMedias(medias, photographerId);
}

init();
