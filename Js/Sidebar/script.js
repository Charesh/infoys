https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js

$(document).ready(function(){
    $('menu').click(function(){
        $('sidebar').addClass('active');
        $('menu').css("visibility","hidden");
    });
    $('.close-btn').click(function(){
        $('sidebar').removeClass('active');
        $('menu').css("visibility","visible");
    });
    $('sub-menu').click(function(){
        $(this).next('.submenu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });
});
