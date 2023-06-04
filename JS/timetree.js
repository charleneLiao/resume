$(document).ready(function(){

  //DEBOUNCE
  
  debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
		};
  }; 
    
  //SCROLL ANIMATED
  
  $(function(){
    var $target = $('[data-anime="scroll"],[data-anime-top="scroll-top"],[data-anime-left="scroll-left"],[data-anime-right="scroll-right"],[data-anime-bottom="scroll-bottom"]'),
      animationClass = 'animate',
      offset = $(window).height() * 3/4;
  
    function animeScroll(){
      var documentTop = $(document).scrollTop();
      $target.each(function(){
        var itemTop = $(this).offset().top;
        
        if (documentTop > itemTop - offset){
          $(this).addClass(animationClass);
        } else {
          $(this).removeClass(animationClass);
        }
      });
    }

    animeScroll();

    $(document).scroll(debounce(function(){
      animeScroll();
    }, 200));
    
  });
  

});