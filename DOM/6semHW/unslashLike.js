"use strict";

const imgEl = document.querySelector(".img");
const authorEl = document.querySelector(".author");
const likeEl = document.querySelector(".btnLike");

async function fetchPhotos() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=erF7gH5EAebOqFyGJaEWlGjDNZp2eQxUV00uVJv8v70`
    );
    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error("Ошибка при загрузке фотографий:", error);
    return [];
  }
}

async function loadMorePhotos() {
  const photos = await fetchPhotos();
  const img = document.createElement("img");
  img.src = photos.urls.small;
  imgEl.appendChild(img);
  authorEl.textContent = photos.user.name;
}
loadMorePhotos();

likeEl.addEventListener("click", (e) => {
  if (imgEl.classList.contains("like")) {
    imgEl.classList.remove("like");
  } else {
    imgEl.classList.add("like");
  }
});
