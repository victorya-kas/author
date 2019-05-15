$(document).ready(function() {
    $('.nav .nav-item:first-child a').addClass('nav-link-active');
  $('.nav .nav-item a').hover(function() {
      $('.nav .nav-item a').removeClass('nav-link-active');
      $(this).addClass('nav-link-active');
  });
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });
    $("#menu-mobile").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });
    (function($) {  
        $(function() {  
           
          $('#back-top').click(function() {  
            $('body,html').animate({scrollTop:0}, 1500);  
            return false;  
          })  
           
        })  
    })

    jQuery(function(f){
        var element = f('#back-top');
        f(window).scroll(function(){
            element['fade'+ (f(this).scrollTop() > 250 ? 'In': 'Out')](500);           
        });
    });

    var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
      });
  });