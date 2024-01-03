const open = document.getElementById("open");
const overlay = document.getElementById("overlay");
const drawer = document.getElementById("drawer");
const close = document.getElementById("close");
const menu = document.getElementsByClassName("drawer-menu-item");

open.addEventListener("click", openDrawer);
close.addEventListener("click", closeDrawer);
overlay.addEventListener("click", closeDrawer);
menu[0].addEventListener("click", closeDrawer);
menu[1].addEventListener("click", closeDrawer);
menu[2].addEventListener("click", closeDrawer);
menu[3].addEventListener("click", closeDrawer);
function openDrawer() {
  overlay.classList.add("is-active");
  drawer.classList.add("is-active");
}

function closeDrawer() {
    overlay.classList.remove("is-active");
    drawer.classList.remove("is-active");
}


$(function () {
  // slick
  $(".experience-list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(window).fadeThis({
    reverse: false,
    spped: 1000
  });
})