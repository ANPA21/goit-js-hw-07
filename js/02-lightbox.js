import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};

function makeGalleryItemList(items) {
  return items
    .map(
      (item) => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
    )
    .join("");
}

refs.gallery.insertAdjacentHTML("afterbegin", makeGalleryItemList(galleryItems));
refs.gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefault();
  console.log("123");
  if (evt.target.classList.value !== "gallery__image") {
    return;
  } else {
    new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });
  }
}
