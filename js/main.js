const modalWindow = document.querySelector(".modal");
const openModals = document.querySelectorAll(".modal__open");
const closeModal = document.querySelector(".modal__close");
const body = document.querySelector("body");
const modalButton = document.querySelector(".modal__button");
const contens = document.querySelectorAll('.program-line__content')

contens.forEach((elem) => {
  const title = elem.querySelector('.program-line__title');
  const descr = elem.querySelector('.program-line__descr');

  title.addEventListener('click', () => {
    descr.classList.toggle('active')
  })
})

openModals.forEach((item) => {
  item.addEventListener("click", () => {
    modalWindow.style.display = "flex";
    body.classList.add("noscroll");
  });
});

closeModal.addEventListener("click", () => {
  modalWindow.style.display = "none";
  body.classList.remove("noscroll");
});

// Закрытие при клике вне модального окна
modalWindow.addEventListener("click", (e) => {
  if (e.target === modalWindow) {
    modalWindow.style.display = "none";
    body.classList.remove("noscroll");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalWindow.style.display === "flex") {
    modalWindow.style.display = "none";
    body.classList.remove("noscroll");
  }
});

modalButton.addEventListener("click", () => {
  modalWindow.style.display = "none";
  body.classList.remove("noscroll");
});
