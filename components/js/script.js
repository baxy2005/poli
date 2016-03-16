// JavaScript Document
$('#main-carousel').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
	autoplay: false,
	nav:false,
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
	autoplay: true,
	nav:true,
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
    offset: 585 /* offset the trigger 150px below #scene's top */
	
  })
    .setClassToggle('.secondary-nav', 'secondary-nav-top')
    .addTo(scrollMagicController);
	
	 var scene5 = new ScrollScene({
    offset: 585 /* offset the trigger 150px below #scene's top */
	
  })
    .setClassToggle('#main-carousel', 'carusel-margin-add')
    .addTo(scrollMagicController);
	
		 var scene6 = new ScrollScene({
    offset: 665 /* offset the trigger 150px below #scene's top */
	
  })
    .setClassToggle('.secondary-nav', 'fade-secondary-nav-bg')
    .addTo(scrollMagicController);
	
	
	var tween = TweenMax.from('.brand-on', 0.2, {
    opacity: 0,
  });
		 var scene7 = new ScrollScene({
			  triggerElement: '#brand-switch',
			   offset: -15
	
  })
    .setTween(tween)
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


$('.secondary-nav ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(170);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(170);
});