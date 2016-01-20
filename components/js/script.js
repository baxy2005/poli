// JavaScript Document
$('#main-carousel').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
	autoplay: true,
});

$('#news-carousel').owlCarousel({
    items:2,
    lazyLoad:true,
    loop:true,
	autoplay: false,
});
$('#calendar-carousel').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
	autoplay: false,
});

  
$(function() {
  
  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic();
  


    var scene = new ScrollScene({
    offset: 60 /* offset the trigger 150px below #scene's top */
	
  })
    .setClassToggle('.navbar-toggle', 'navbar-toggle-fixed')
    .addTo(scrollMagicController);
	
	  var scene2 = new ScrollScene({
		offset: 800
  })
  .setClassToggle('body', 'scene-2-active')
  .addTo(scrollMagicController);
  
  // Add debug indicators fixed on right side
   scene.addIndicators();
   
 
});
