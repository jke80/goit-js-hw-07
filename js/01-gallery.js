import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ original, preview, description }) => `<li class ="gallery__item">
    <a href="${original}" class="gallery__link">
    <img class="gallery__image" src="${preview}" 
    data-source="${original}"
     alt="${description}">
     </a>
     </li>`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.addEventListener("click", onClick);

// function onClick(e) {
//   e.preventDefault();

//   if (!e.target.classList.contains("gallery__image")) return;

//   const instance = basicLightbox.create(`
//       <img src="${e.target.dataset.source}" width="800" height="600">
//   `);

//   instance.show();
//   document.addEventListener("keydown", onKeyDown);

//   function onKeyDown(e) {
//     if (e.code === "Escape") {
//       instance.close();
//       document.removeEventListener("keydown", onKeyDown);
//     }
//   }
// }

function onClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) return;

  const instance = basicLightbox.create(
    `
      <img src="${e.target.dataset.source}" width="800" height="600">
  `,
    {
      onShow: () => {
        document.addEventListener("keydown", onKeyDown);
      },
      onClose: () => {
        document.removeEventListener("keydown", onKeyDown);
      },
    }
  );

  function onKeyDown(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }

  instance.show();
}
