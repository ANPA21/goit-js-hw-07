import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};

function makeGalleryItemList(items) {
  return items
    .map(
      (item) => `
    <div class="gallery__item">
        <a class="gallery__link" href="${item.original}" ">
            <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
        </a>
    </div>`
    )
    .join("");
}

refs.gallery.insertAdjacentHTML("afterbegin", makeGalleryItemList(galleryItems));

refs.gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefault();
  const modal = basicLightbox.create(`<img class="gallery__modal" src="${evt.target.dataset.source}">`);

  if (evt.target.classList.value !== "gallery__image") {
    return;
  } else {
    modal.show();
  }

  if (document.querySelector(".basicLightbox") !== null) {
    document.body.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Escape") {
          modal.close();
        }
      },
      { once: true }
    );
  }
}
