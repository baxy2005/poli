$("#main-carousel").owlCarousel({items:1,lazyLoad:!0,loop:!0,autoplay:!0}),$("#news-carousel").owlCarousel({items:2,lazyLoad:!0,loop:!0,autoplay:!1}),$("#calendar-carousel").owlCarousel({items:1,lazyLoad:!0,loop:!0,autoplay:!1}),$(function(){{var a=new ScrollMagic,b=new ScrollScene({offset:60}).setClassToggle(".navbar-toggle","navbar-toggle-fixed").addTo(a);new ScrollScene({offset:800}).setClassToggle("body","scene-2-active").addTo(a)}b.addIndicators()});