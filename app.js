const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle('nav-toggle');
 });

 const watch = document.querySelector(".watch");
 watch.addEventListener("click", () => {
    window.open("https://www.youtube.com/watch?v=dntmuB6kw_A");
});
const rating = document.querySelector(".rating");
 rating.addEventListener("click", () => {
    window.open("https://www.google.com/shopping/product/9424516302856189969/reviews?q=review+on+jordan+1s&oq=review+on+jordan+1s&aqs=chrome..69i57j33i160.5628j0j4&sourceid=chrome&ie=UTF-8&sa=X&ved=2ahUKEwjB7v3jovT7AhUdoXIEHT5HCLYQ4jV6BAgEECk");
});

let modal;
document.addEventListener("click", (e) => {
  if (e.target.className === "modal-open") {
    modal = document.getElementById(e.target.dataset.id);
    openModal(modal);
  } else if (e.target.className === "modal-close") {
    closeModal(modal);
  } else {
    return;
  }
});
const openModal = (modal) => {
  document.body.style.overflow = "hidden";
  modal.setAttribute("open", "true");
  document.addEventListener("keydown", escClose);
  let overlay = document.createElement("div");
  overlay.id = "modal-overlay";
  document.body.appendChild(overlay);
};
const closeModal = (modal) => {
  document.body.style.overflow = "auto";
  modal.removeAttribute("open");
  document.removeEventListener("keydown", escClose);
  document.body.removeChild(document.getElementById("modal-overlay"));
};
const escClose = (e) => {
  if (e.keyCode == 27) {
    closeModal();
  }
};