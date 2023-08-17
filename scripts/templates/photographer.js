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

  return { name, picture, getUserCardDOM, data };
}
