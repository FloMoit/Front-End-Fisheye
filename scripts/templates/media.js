function mediaTemplate(data) {
  const { id, photographerId, title, image, video, likes, date, price } = data;

  function getMediaCardDOM() {
    const article = document.createElement("article");
    article.setAttribute("class", "media-card");
    article.setAttribute("data-id", id);

    const imgZoom = document.createElement("div");
    imgZoom.setAttribute("class", "img-zoom");
    imgZoom.addEventListener("click", () => {
      displayCarousel(id);
    });

    if (video != undefined && getMediaType(video) === "video") {
      const videoLink = `assets/images/${photographerId}/${video}`;
      const videoTag = document.createElement("video");
      videoTag.setAttribute("src", videoLink);
      videoTag.setAttribute("class", "main-media");
      videoTag.setAttribute("alt", title);
      imgZoom.appendChild(videoTag);
    } else if (image != undefined && getMediaType(image) === "image") {
      const picture = `assets/images/${photographerId}/${image}`;
      const img = document.createElement("img");
      img.setAttribute("src", picture);
      img.setAttribute("class", "main-media");
      img.setAttribute("alt", title);
      imgZoom.appendChild(img);
    } else {
      const img = document.createElement("img");
      img.setAttribute("src", "assets/images/unknown.jpg");
      img.setAttribute("class", "main-media");
      img.setAttribute("alt", title);
      imgZoom.appendChild(img);
    }

    article.appendChild(imgZoom);

    const mediaInfos = document.createElement("div");
    mediaInfos.setAttribute("class", "media-infos");
    const mediaTitle = document.createElement("h2");
    mediaTitle.textContent = title;
    mediaInfos.appendChild(mediaTitle);

    const mediaLikesWrapper = document.createElement("div");
    mediaLikesWrapper.setAttribute("class", "media-likes-wrapper");

    const mediaLikes = document.createElement("span");
    mediaLikes.textContent = likes;
    mediaLikes.setAttribute("class", "media-likes");
    mediaLikesWrapper.appendChild(mediaLikes);

    const likeIcon = document.createElement("img");
    likeIcon.setAttribute("src", "assets/icons/favorite.svg");
    likeIcon.setAttribute("alt", "likes");
    mediaLikesWrapper.appendChild(likeIcon);

    mediaInfos.appendChild(mediaLikesWrapper);
    article.appendChild(mediaInfos);

    return article;
  }

  function getMediaCarouselDOM() {
    const article = document.createElement("article");
    article.setAttribute("class", "media-carousel");
    article.setAttribute("data-id", id);
    article.setAttribute("aria-hidden", "true");

    const imgZoom = document.createElement("div");
    imgZoom.setAttribute("class", "img-zoom");
    if (video != undefined && getMediaType(video) === "video") {
      const videoLink = `assets/images/${photographerId}/${video}`;
      const videoTag = document.createElement("video");
      videoTag.setAttribute("src", videoLink);
      videoTag.setAttribute("class", "main-media");
      videoTag.setAttribute("alt", title);
      videoTag.setAttribute("autoplay", "autoplay");
      videoTag.setAttribute("controls", "");
      imgZoom.appendChild(videoTag);
    } else if (image != undefined && getMediaType(image) === "image") {
      const picture = `assets/images/${photographerId}/${image}`;
      const img = document.createElement("img");
      img.setAttribute("src", picture);
      img.setAttribute("class", "main-media");
      img.setAttribute("alt", title);
      imgZoom.appendChild(img);
    } else {
      const img = document.createElement("img");
      img.setAttribute("src", "assets/images/unknown.jpg");
      img.setAttribute("class", "main-media");
      img.setAttribute("alt", title);
      imgZoom.appendChild(img);
    }

    article.appendChild(imgZoom);

    const mediaInfos = document.createElement("div");
    mediaInfos.setAttribute("class", "media-infos");
    const mediaTitle = document.createElement("h2");
    mediaTitle.textContent = title;
    mediaInfos.appendChild(mediaTitle);

    article.appendChild(mediaInfos);

    return article;
  }

  function getMediaType(filename) {
    const extension = filename.split(".").pop();
    const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp"];
    const videoExtensions = ["mp4", "webm"];
    if (imageExtensions.includes(extension)) {
      return "image";
    } else if (videoExtensions.includes(extension)) {
      return "video";
    } else {
      return "unknown";
    }
  }

  return { title, getMediaCardDOM, getMediaCarouselDOM };
}
