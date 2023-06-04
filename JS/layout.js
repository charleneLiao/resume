$(function() {
  $('.circle-graph').easyPieChart({
    scaleColor: false,
    lineWidth: 20,
    lineCap: 'butt',
    barColor: '#5fcb71',
    trackColor: '#dfdfdf' ,
    size: 120,
    animate: 800
  });
  $('.circle-graph01').easyPieChart({
    scaleColor: false,
    lineWidth: 20,
    lineCap: 'butt',
    barColor: '#5fcb71',
    trackColor: '#dfdfdf' ,
    size: 120,
    animate: 800
  });
});


// pop
$(document).ready(function(){
  $('.img-list a').on('click', function(e){
    e.preventDefault();

    var imgLink = $(this).children('img').attr('src');

    $('.mask').html('<div class="img-box"><img src="'+ imgLink +'"><a class="close">&times;</a>');

    $('.mask').addClass('is-visible fadein').on('animationend', function(){
      $(this).removeClass('fadein is-visible').addClass('is-visible');
    });

    $('.close').on('click', function(){
      $(this).parents('.mask').addClass('fadeout').on('animationend', function(){
        $(this).removeClass('fadeout is-visible')
      });
    });

  });
});
