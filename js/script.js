function screenClass(){$(window).innerHeight()<669?$(".brand-on").addClass("brand-off"):$(".brand-on").removeClass("brand-off")}$(".custom1").owlCarousel({items:1,lazyLoad:!1,loop:!0,autoplay:!0,nav:!0}),$("#main-carousel").owlCarousel({animateOut:"fadeOut",animateIn:"fadeIn",items:1,lazyLoad:!0,loop:!0,autoplay:!0,nav:!1,margin:30}),$("#news-carousel").owlCarousel({items:2,lazyLoad:!0,loop:!0,autoplay:!1}),$("#calendar-carousel").owlCarousel({lazyLoad:!0,loop:!0,autoplay:!0,nav:!0,responsiveClass:!0,responsive:{0:{items:1,nav:!0},440:{items:2,nav:!0},767:{items:3,nav:!0},992:{items:1,nav:!0,loop:!1}}}),$(".owl-artwork").owlCarousel({loop:!0,autoplay:!1,nav:!0,responsiveClass:!0,responsive:{0:{items:1,nav:!0},440:{items:1,nav:!0},767:{items:1,nav:!0},992:{items:1,nav:!0,loop:!1}}}),$(function(){{var a=new ScrollMagic({globalSceneOptions:{triggerHook:"onLeave"}}),b=(new ScrollScene({triggerElement:"#nav-trigger",offset:5}).setPin(".secondary-nav").addTo(a),new ScrollScene({triggerElement:"#nav-trigger",offset:6}).setClassToggle(".secondary-nav","secondary-nav-top").addTo(a),new ScrollScene({triggerElement:"#nav-trigger",offset:120}).setClassToggle(".secondary-nav","fade-secondary-nav-bg").addTo(a),new ScrollScene({offset:60}).setClassToggle(".navmenu","navmenu-fixed").addTo(a));new ScrollScene({offset:60}).setClassToggle(".form-inline-opening","form-inline-opening-fixed").addTo(a),new ScrollScene({offset:60}).setClassToggle(".secondary-nav-subpage","secondary-nav-top").addTo(a),new ScrollScene({offset:90}).setClassToggle(".secondary-nav-subpage","fade-secondary-nav-bg").addTo(a)}b.addIndicators()}),$(".navbar-toggle").on("click",function(){$(this).toggleClass("active")}),$(".secondary-nav ul.nav li.dropdown").hover(function(){$(this).find(".dropdown-menu").stop(!0,!0).delay(0).fadeIn(170)},function(){$(this).find(".dropdown-menu").stop(!0,!0).delay(0).fadeOut(170)}),$(".secondary-nav-subpage ul.nav li.dropdown").hover(function(){$(this).find(".dropdown-menu").stop(!0,!0).delay(0).fadeIn(170)},function(){$(this).find(".dropdown-menu").stop(!0,!0).delay(0).fadeOut(170)}),screenClass(),$(window).bind("resize",function(){screenClass()});