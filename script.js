function menuShowHide(){
    let nav = document.querySelector(".mobile-menu");
  let menuIcon = document.querySelector(".ri-menu-line");
  let closeIcon = document.querySelector(".ri-close-large-line");

  menuIcon.addEventListener("click", function () {
    nav.classList.add("active"); // slide in from left
  });

  closeIcon.addEventListener("click", function () {
    nav.classList.remove("active"); // hide to left
  });
}
menuShowHide();