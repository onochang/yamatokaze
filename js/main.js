$(function () {
  // drawer
  $(".drawer").drawer();

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