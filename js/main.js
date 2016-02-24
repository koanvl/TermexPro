$(document).ready(function() {

  //clear-header height=header-box
  var header_height = $('.header-container').height();
  var clear_height = $('.clear-header-box');
  clear_height.height(header_height);



  //arrow-top
  var top_show = 150;
  var delay = 1000;
  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > top_show) $('.arrow-top').fadeIn();
      else $('.arrow-top').fadeOut();
    });
    $('.arrow-top').click(function() {
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });

  //anchor menu-click scroll
    var headerHeight = $('.header').height();
  $('a[href*=#]').bind("click", function(e){
var anchor = $(this);
$('html, body').stop().animate({
scrollTop: $(anchor.attr('href')).offset().top - headerHeight
}, 1000);
e.preventDefault();
return false;
});


});
