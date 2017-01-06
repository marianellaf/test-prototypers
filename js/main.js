$(window).load(function() {
2
  $(".btn-nav").on("click tap", function() {
3
    $(".nav-content").toggleClass("showNav hideNav").removeClass("hidden");
4
    $(this).toggleClass("animated");
5
  });
6
});
