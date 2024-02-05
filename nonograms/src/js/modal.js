const displayModal = () => {
  const overlay = document.querySelector(".overlay");
  const modal = document.querySelector(".modal");
  overlay.classList.add("show");
  modal.classList.add("show");
};

const closeModal = () => {
  const overlay = document.querySelector(".overlay");
  const modal = document.querySelector(".modal");
  overlay.classList.remove("show");
  modal.classList.remove("show");
};

export { displayModal, closeModal };
