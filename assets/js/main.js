(function ($) {
  'use strict';

  $(document).ready(function () {    
          
   function siteMenu(){
        var $trigger = $('.trigger-nav'),// все объекты, которые имеют класс .trigger-nav
            $menu = $('.trigger-victim');//все объекты, которые имеют класс .trigger-victim
        
        $trigger.click(function(){ //по клику запускается анонимная функция
            $(this).next($menu).slideToggle();//находим именно тот триггер, по которому кликнул пользователь
        });
        //когда меняется размер окна, запускаем функцию
        $(window).resize(function(){
           if($(window).width() > 992){//если ширина окна больше 992 
               $menu.removeAttr('style');//убираем атрибут style
           } 
        });        
    }
      siteMenu();
      
    //Owl-carousel
    function siteCarousel(){
        var carousel = $('.owl-carousel');
        carousel.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplaySpeed: 5000,            
            nav: true,
            navText: ["<i class='icon-chevron-with-circle-left'><i>","<i class='icon-chevron-with-circle-right'><i>"]
        });
    }
    siteCarousel();

  }); //end ready

}(jQuery));
