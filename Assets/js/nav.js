
$("#down").on("click", function() {
    $("#down__option").toggle(duration=200);
  })

$("#header__button__active").on("click",function() {
  $("#header__menu").fadeIn(duration=200);
})
$("#header__button__close").on("click",function() {
  $("#header__menu").fadeOut(duration=200);
})