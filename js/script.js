$("#main-carousel").owlCarousel({items:1,lazyLoad:!0,loop:!0,autoplay:!0}),$("#news-carousel").owlCarousel({items:2,lazyLoad:!0,loop:!0,autoplay:!1}),$("#calendar-carousel").owlCarousel({items:1,lazyLoad:!0,loop:!0,autoplay:!1}),$(function(){{var a=new ScrollMagic,b=new ScrollScene({offset:60}).setClassToggle(".navmenu","navmenu-fixed").addTo(a);new ScrollScene({offset:605}).setClassToggle(".secondary-nav","secondary-nav-top").addTo(a),new ScrollScene({offset:60}).setClassToggle(".form-inline-opening","form-inline-opening-fixed").addTo(a)}b.addIndicators()}),$(".navbar-toggle").on("click",function(){$(this).toggleClass("active")});