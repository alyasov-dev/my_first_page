$(document).ready(function(){
    $('.first-element').addClass('first-element__animated');
    $('.second-element').addClass('second-element__animated');
    $('.third-element').addClass('third-element__animated');
    $('.fourth-element').addClass('fourth-element__animated');
    $('.fifth-element').addClass('fifth-element__animated');

    var owl = $(".owl-carousel");

    owl.owlCarousel({
      loop: true,
      smartSpeed: 900,
      margin: 20,
      dots: true,
      responsive:{
        0:{
          items:1,
        },
        768:{
          items:2,
        },
        1299:{
          items:3
        }
      }
    });
    $(".left--arrow__button").click(function(){
       owl.trigger("prev.owl.carousel");
    });
    $(".right--arrow__button").click(function(){
      owl.trigger("next.owl.carousel");
    });

    //Кнопка меню
    $('.header--about__hidden-button').click(function(event){
      event.preventDefault();
    });

    $('.header--about__hidden-button').click(function(){
      $('.header--about__list').slideToggle()
    });

    $('.header--about__item').click(function(){
      if ($(window).width() < 1300) {
        $('.header--about__list').slideToggle()
      }
    });

    $(window).resize(function(){
      if ($(window).width() > 320) {
        $('.header--about__list').removeAttr('style');
      }
    });

    //Скроллы
    $('.header--about__item a, .footer--container__item a').click(function(event){
      event.preventDefault();

      let href = $(this).attr('href');
      let offset = $(href).offset().top;
      
      $('body, html').animate({
        scrollTop: offset
      }, 500);
    });
  
    //Всплывающее окно

      // left: 37, up: 38, right: 39, down: 40,
      // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
      const keys = {37: 1, 38: 1, 39: 1, 40: 1};
  
      function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;  
      }
  
      function preventDefaultForScrollKeys(e) {
          if (keys[e.keyCode]) {
              preventDefault(e);
              return false;
          }
      }
  
      function disableScroll() {
        if (window.addEventListener) // older FF
            window.addEventListener('DOMMouseScroll', preventDefault, false);
  
        console.log('modernizr', Modernizr.passiveeventlisteners);
  
        window.addEventListener('wheel', preventDefault,
            Modernizr.passiveeventlisteners ? {passive: false} : false); // modern standard
        document.addEventListener('mousewheel', preventDefault,
            Modernizr.passiveeventlisteners ? {passive: false} : false); // older browsers, IE
        window.addEventListener('mousewheel', preventDefault,
            Modernizr.passiveeventlisteners ? {passive: false} : false); // older browsers, IE
        window.addEventListener('touchmove', preventDefault,
            Modernizr.passiveeventlisteners ? {passive: false} : false); // mobile
        document.onkeydown  = preventDefaultForScrollKeys;
      }
  
      function enableScroll() {
          if (window.removeEventListener)
              window.removeEventListener('DOMMouseScroll', preventDefault, false);
          document.removeEventListener('mousewheel', preventDefault, false);
          window.removeEventListener('mousewheel', preventDefault, false);
          window.removeEventListener('wheel', preventDefault, false);
          window.removeEventListener('touchmove', preventDefault, false);
          document.onkeydown = null;
      }

      $('.common__button').click(function(){
        $('.popup--container').fadeToggle(disableScroll);
      });
  
      $('.popup--container').click(function(event){
        if(event.target == this) {
          $(this).hide(enableScroll);
        }
      });

      $('.popup--container__button').click(function(){
        $('.popup--container').fadeToggle(enableScroll);
        $('.popup--container__form').reset();
      });

      $('.popup--container__tel').inputmask({'mask' : '+7 999 999 99 99'});

   $('.popup--container__select').click(function(e){

    e.preventDefault();
    
    let th = $('form')
    let pop = $('.popup--container')
    
    $.ajax({
    type: "POST",
    url: "mail.php",
    data: th.serialize(),
    success: function (data) {
        th.reset;  
        setTimeout(function () {
          pop.fadeToggle(enableScroll)
        }, 400);
    }
    });
});
});