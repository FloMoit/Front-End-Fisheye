function photographerTemplate(data) {
  const { name, portrait, city, country, price, tagline } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");

    const imgZoom = document.createElement("div");
    imgZoom.setAttribute("class", "img-zoom");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);
    imgZoom.appendChild(img);
    const link = document.createElement("a");
    link.setAttribute("href", "photographer.html?id=" + data.id);
    link.appendChild(imgZoom);

    const h2 = document.createElement("h2");
    h2.textContent = name;
    link.appendChild(h2);

    article.appendChild(link);

    const h3 = document.createElement("h3");
    h3.textContent = city + ", " + country;
    article.appendChild(h3);

    const quoteTagline = document.createElement("span");
    quoteTagline.textContent = tagline;
    quoteTagline.setAttribute("class", "quote-tagline");
    article.appendChild(quoteTagline);

    const pricePerDay = document.createElement("span");
    pricePerDay.textContent = price + "€/jour";
    pricePerDay.setAttribute("class", "price-per-day");
    article.appendChild(pricePerDay);

    return article;
  }

  function getUserHeaderDOM() {
    const header = document.createElement("div");
    header.setAttribute("class", "photograph-header");

    const photographDescription = document.createElement("div");
    photographDescription.setAttribute("class", "photograph-description");

    const h1 = document.createElement("h1");
    h1.textContent = name;
    photographDescription.appendChild(h1);

    const h2 = document.createElement("h2");
    h2.textContent = city + ", " + country;
    photographDescription.appendChild(h2);

    const quoteTagline = document.createElement("span");
    quoteTagline.textContent = tagline;
    quoteTagline.setAttribute("class", "quote-tagline");
    photographDescription.appendChild(quoteTagline);

    header.appendChild(photographDescription);

    const contactButton = document.createElement("button");
    contactButton.setAttribute("class", "contact-button");
    contactButton.setAttribute("aria-label", "Contactez-moi");
    contactButton.textContent = "Contactez-moi";
    contactButton.setAttribute("onclick", "displayModal()");

    header.appendChild(contactButton);

    const imgZoom = document.createElement("div");
    imgZoom.setAttribute("class", "img-zoom");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);
    imgZoom.appendChild(img);

    header.appendChild(imgZoom);

    return header;
  }

  return { name, picture, getUserCardDOM, getUserHeaderDOM };
}
