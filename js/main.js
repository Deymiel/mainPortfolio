$('#footer').css('margin-top',$(document).height() - ($('#header').height() + $('#content').height()  ) - $('#footer').height());


$('#back-to-top').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 700);
});

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


$(function() {

    $('.toggle-button').click(function(j) {
  
      $('.toggle-button').not(this).children('.rotate').removeClass("down");
  
      $(this).children('.rotate').toggleClass("down");
  
      
  
      var accordion = $(this).closest('.accordion-body').find('.body-content-accor');
  
      $(this).closest('.accordion-list').find('.body-content-accor').not(accordion).slideUp();
  
  
  
      if ($(this).hasClass('active')) {
  
        $(this).removeClass('active');
  
      } else {
  
        $(this).closest('.accordion-list').find('.toggle-button.active').removeClass('active');
  
        $(this).addClass('active');
  
      }
      accordion.stop(false, true).slideToggle();
  
      j.preventDefault();
  
    });
  
  });



  $(function() {
				$('.do-dont').matchHeight({byRow:false});
  });
  
  // for toggle button on header
  $('.navbar-toggler').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('navbar-toggler--active');
  });

  // for toggling button
  $('.navbar-toggler').click(function() {
    $("header").toggleClass("change_header_bg").toggleClass("main_header_bg");
 });

// Navbar BG effect when scrolling
$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 300) {
          $("header").addClass("active_bg");
      } else {
         $("header").removeClass("active_bg");
      }
  });
});

// for owl carousel
$(document).ready(function() {

  var owl = $('.technical_skill .owl-carousel');
  owl.owlCarousel({
      margin: 50,
      smartSpeed: 1000,
      autoplay:true,
      navText : ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
      nav: true,
      dots: true,
      dotsEach: true,
      loop: true,
      responsive: {
          0: {
              items: 1
             
          },
          991: {
              items: 3
          }
      },
  });
});

// for filtration
(function(){
  'use strict'; 
    // declaration of isotope
    var $projects = $('.projects');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

  $('ul.list-filter > li').on('click', function(e){

    e.preventDefault();

    var filter = $(this).attr('data-filter');

    $('ul.list-filter > li').removeClass('active');
    $(this).addClass('active');

      $projects.isotope({filter: filter});
  });

})(jQuery);

// onscroll active link

$('a').click(function(){
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
  }, 500);
  return false;
});

// Cache selectors
var topMenu = $(".navbar"),
  topMenuHeight = topMenu.outerHeight()+15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function(){
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
  });

// Bind to scroll
$(window).scroll(function(){
 // Get container scroll position
 var fromTop = $(this).scrollTop()+topMenuHeight;

 // Get id of current scroll item
 var cur = scrollItems.map(function(){
   if ($(this).offset().top < fromTop)
     return this;
 });
 // Get the id of the current element
 cur = cur[cur.length-1];
 var id = cur && cur.length ? cur[0].id : "";
 // Set/remove active class
 menuItems
   .parent().removeClass("active")
   .end().filter("[href='#"+id+"']").parent().addClass("active");
});


// for image pop up 
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
});


// for header scroll
(function(){

  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var header = document.getElementById('site-header');

  var checkScroll = function() {

    /*
    ** Find the direction of scroll
    ** 0 - initial, 1 - up, 2 - down
    */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) { 
      //scrolled up
      direction = 2;
    }
    else if (curScroll < prevScroll) { 
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }
    
    prevScroll = curScroll;
  };

  var toggleHeader = function(direction, curScroll) {
    if (direction === 2 && curScroll > 52) { 
      
      //replace 52 with the height of your header in px

      header.classList.add('hide');
      prevDirection = direction;
    }
    else if (direction === 1) {
      header.classList.remove('hide');
      prevDirection = direction;
    }
  };
  
  window.addEventListener('scroll', checkScroll);

})();

//  for wow animation
$(window).ready(function(){
  // SCROLL ANIMATION
  wow = new WOW(
  {
      animateClass: 'animated',
      offset:       250,
      callback:     function(box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
  }
  );
  wow.init();
});

// for scroll reveal
window.sr = ScrollReveal();
var fade = {
    reset: true,
    viewOffset: { bottom: 64 }
}
sr.reveal(".project-reveal", fade, 500);