$("#main-carousel").owlCarousel({items:1,lazyLoad:!0,loop:!0,autoplay:!0,nav:!1}),$("#news-carousel").owlCarousel({items:2,lazyLoad:!0,loop:!0,autoplay:!1}),$("#calendar-carousel").owlCarousel({items:1,lazyLoad:!0,loop:!0,autoplay:!0,nav:!0}),$(function(){{var a=new ScrollMagic,b=new ScrollScene({offset:60}).setClassToggle(".navmenu","navmenu-fixed").addTo(a),c=(new ScrollScene({offset:585}).setClassToggle(".secondary-nav","secondary-nav-top").addTo(a),new ScrollScene({offset:585}).setClassToggle("#main-carousel","carusel-margin-add").addTo(a),new ScrollScene({offset:665}).setClassToggle(".secondary-nav","fade-secondary-nav-bg").addTo(a),TweenMax.from(".brand-on",.2,{opacity:0}));new ScrollScene({triggerElement:"#brand-switch",offset:-15}).setTween(c).addTo(a),new ScrollScene({offset:60}).setClassToggle(".form-inline-opening","form-inline-opening-fixed").addTo(a)}b.addIndicators()}),$(".navbar-toggle").on("click",function(){$(this).toggleClass("active")});