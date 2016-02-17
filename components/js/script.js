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
    .setClassToggle('.navmenu', 'navmenu-fixed')
    .addTo(scrollMagicController);
	
	/*  var scene2 = new ScrollScene({
		offset: 600
  })
  .setClassToggle('body', 'scene-2-active')
  .addTo(scrollMagicController);*/
  
  var scene3 = new ScrollScene({
    offset: 605 /* offset the trigger 150px below #scene's top */
	
  })
    .setClassToggle('.secondary-nav', 'secondary-nav-top')
    .addTo(scrollMagicController);
	
	
	 var scene4 = new ScrollScene({
    offset: 60 /* offset the trigger 150px below #scene's top */
	
  })
    .setClassToggle('.form-inline-opening', 'form-inline-opening-fixed')
    .addTo(scrollMagicController);
	
  // Add debug indicators fixed on right side
   scene.addIndicators();
   
 
});


			  $(".navbar-toggle").on("click", function () {
				    $(this).toggleClass("active");
			  });


