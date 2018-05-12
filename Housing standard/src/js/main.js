$(document).ready(function(){
    $(".sixth-wrap__accordion h3").click(function(){

        $(this).next("p").slideToggle("300")
        .siblings("p:visible").slideUp("300");
        $(this).toggleClass("active");
        $(this).siblings("h3").removeClass("active");
     });

    $('#carouselOne').owlCarousel({
    	nav: true,
        dots: true,
        loop: true,
        items: 2,
        smartSpeed: 1000,
        autoplayTimeout: 2000,
        touchDrag: true,
        autoWidth: false,
        navText: false,
        responsive:{ 
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            1000:{
                items: 1
            }
        }
    });

    $('#carouselTwo').owlCarousel({
    	nav: true,
        dots: true,
        loop: true,
        items: 1,
        smartSpeed: 1000,
        autoplayTimeout: 2000,
        touchDrag: true,
        autoWidth: false,
        navText: false,  
        responsive:{ 
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            1000:{
                items: 1
            }
        }
    });
	
		var link = $(".menu-link");
		var link_active = $(".menu-link_active");
		var menu = $(".menu");
		var nav_link = $(".menu a");
	
			link.click(function(){
					link.toggleClass("menu-link_active");
					menu.toggleClass("menu_active");
			});
			
			nav_link.click(function(){
					link.removeClass("menu-link_active");
					menu.removeClass("menu_active");
			});

      var top_show = 150;
      var delay = 1000;

      $(window).scroll(function(){
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $("#top").fadeOut();
      });
      $("#top").on("click", function(){
        $("body, html").animate({
          scrollTop: 0
        }, delay);
      });
 });
