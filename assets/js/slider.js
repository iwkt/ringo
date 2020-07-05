$('.slider').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
});


$('.js-menu_item_link dd').hide();
$('.js_menu_item_link dt').on('click', function () {
  // $(this).next().slideDown();
  alert('click');
})


$(".menu dd").hide();
$(".menu dt").on("click", function () {
  $(this).nextAll().slideToggle();
  $('.nav-item span').css('display', 'block')
});