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

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  displayData(photographers);
}

init();
