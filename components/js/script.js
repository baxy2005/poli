$('.custom1').owlCarousel({
    items:1,
    lazyLoad:false,
    loop:true,
	autoplay: true,
	nav:true,
});

$('#main-carousel').owlCarousel({
	animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    lazyLoad:true,
    loop:true,
	autoplay: true,
	nav:false,
	margin:30,
});

$('#news-carousel').owlCarousel({
    items:2,
    lazyLoad:true,
    loop:true,
	autoplay: false,
});
$('#calendar-carousel').owlCarousel({
    lazyLoad:true,
    loop:true,
	autoplay: true,
	nav:true,
	 responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        440:{
            items:2,
            nav:true
        },
		        767:{
            items:3,
            nav:true
        },

        992:{
            items:1,
            nav:true,
            loop:false
        }
    }
});

$('.owl-artwork').owlCarousel({
    loop:true,
	autoplay: false,
	nav:true,
	 responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        440:{
            items:1,
            nav:true
        },
		        767:{
            items:1,
            nav:true
        },

        992:{
            items:1,
            nav:true,
            loop:false
        }
    }
});

  
$(function() {
  
  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic({
    globalSceneOptions: {
      triggerHook: "onLeave"
    }
  });

  //pin the navigation
  var pin = new ScrollScene({
    triggerElement: '#nav-trigger',
	offset: 5  /*offset the trigger 150px below #scene's top */
  })
  .setPin('.secondary-nav')
  .addTo(scrollMagicController);
 
    var scene3 = new ScrollScene({
	triggerElement: '#nav-trigger',
  	offset: 6  /*offset the trigger 150px below #scene's top */

  })
    .setClassToggle('.secondary-nav', 'secondary-nav-top')
   .addTo(scrollMagicController);

	 var scene6 = new ScrollScene({
	triggerElement: '#nav-trigger',
  	offset: 120  /*offset the trigger 150px below #scene's top */
	
  })
    .setClassToggle('.secondary-nav', 'fade-secondary-nav-bg')
    .addTo(scrollMagicController);
	

    var scene = new ScrollScene({
    offset: 60 /* offset the trigger 150px below #scene's top */
	
  })
    .setClassToggle('.navmenu', 'navmenu-fixed')
    .addTo(scrollMagicController);
	
	
	
	
	//var tween = TweenMax.from('.brand-on', 0.2, {
//    opacity: 0,
//  });
//		 var scene7 = new ScrollScene({
//			  triggerElement: 'brand-on',
//			   offset: 433
//	
//  })
//    .setTween(tween)
//    .addTo(scrollMagicController);
	
	
	 var scene4 = new ScrollScene({
    offset: 60 /* offset the trigger 150px below #scene's top */
	
  })
    .setClassToggle('.form-inline-opening', 'form-inline-opening-fixed')
    .addTo(scrollMagicController);
	
	  var scene8 = new ScrollScene({
    offset: 60 /* offset the trigger 150px below #scene's top */
	
  })
    .setClassToggle('.secondary-nav-subpage', 'secondary-nav-top')
    .addTo(scrollMagicController);
	
		 var scene9 = new ScrollScene({
    offset: 90 /* offset the trigger 150px below #scene's top */
	
  })
    .setClassToggle('.secondary-nav-subpage', 'fade-secondary-nav-bg')
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

$('.secondary-nav-subpage ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(170);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(170);
});

/*
$('.navmenu-default ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(170);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(170);
});*/


 // Adds and removes body class depending on screen width.
  function screenClass() {
    if($(window).innerHeight() < 735) {
      $('.brand-on').addClass('brand-off');
    } else {
      $('.brand-on').removeClass('brand-off');
    }
  }

  // Fire.
  screenClass();

  // And recheck if window gets resized.
  $(window).bind('resize',function(){
    screenClass();
  });

