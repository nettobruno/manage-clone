// Efeito de slide nas imagens
$('.slide').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
       infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ]
});