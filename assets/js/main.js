jQuery(function($){
    let headerHeight = $('.site-header').outerHeight();
    $(window).scroll(function(){
        var windowpos = $(window).scrollTop();
        if(windowpos >= headerHeight) {
            $('.site-header').addClass('fixed');
        }
        else {
            $('.site-header').removeClass('fixed');

        }
    });

    $('.content__image').css('padding-top', + headerHeight);
});