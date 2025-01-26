//cool version
const button = document.querySelector("#myBtn");
const modalWindow = document.querySelector("#myModal");
const close = modalWindow.querySelector(".close");

button.addEventListener("click", openModal(modalWindow));

function addModalEvents(modal) {
  modal
    .querySelector(".close")
    .addEventListener("click", closeModal(modalWindow));
  document.addEventListener("keydown", closeModalEscape(modalWindow));
  modal.addEventListener("click", closeOutside(modal));
}

function removeModalEvents(modal) {
  modal.querySelector(".close").removeEventListener("click", closeModal(modal));
  document.removeEventListener("keydown", closeModalEscape(modalWindow));
}

function openModal(modal) {
  function open() {
    modal.classList.add("open");
    addModalEvents(modal);
  }
  return open;
}

function closeModal(modal) {
  function close() {
    modal.classList.remove("open");
    removeModalEvents(modal);
  }
  return close;
}
function closeModalEscape(modal) {
  function closeEs(event) {
    if (event.key === "Escape") {
      closeModal(modal)();
    }
  }
  return closeEs;
}
function closeOutside(modal) {
  function closeOut(event) {
    const isClickOutside = event.target === modal;
    if (isClickOutside) {
      closeModal(modal)();
    } else {
      console.log("no");
    }
  }
  return closeOut;
}

//my old version
// const button = document.querySelector("#myBtn");
// const modalWindow = document.querySelector("#myModal");
// const exit = document.querySelector(".close");
// exit.addEventListener("click", changeModal(modalWindow, false));
// button.addEventListener("click", changeModal(modalWindow));

// function changeModal(myWindow, show = true) {
//   function change() {
//     if (show) {
//       myWindow.style.display = "block";
//     } else {
//       myWindow.style.display = "none";
//     }
//     console.dir(myWindow);
//   }
//   return change;
// }
