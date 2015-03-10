$(function(){
  $('.tweet-badge').on('click', function(){
    $('html, body').animate({scrollTop: $("#tweet").offset().top}, 2000);
  });
});
