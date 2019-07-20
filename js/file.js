wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       false,       // default
    live:         true        // default
    }
                    )
    wow.init();

$('.gallery').Mosaic();

$(".arrow").on('click', function () {
    $('html, body').animate({
        'scrollTop': $(".about-section").offset().top
    }, 600);
});

$(".about-link").on('click', function () {
    $('html, body').animate({
        'scrollTop': $(".about-section").offset().top
    }, 600);
});

$(".ser-link").on('click', function () {
    $('html, body').animate({
        'scrollTop': $(".services").offset().top
    }, 600);
});

$(".stat-link").on('click', function () {
    $('html, body').animate({
        'scrollTop': $(".title-stat").offset().top
    }, 600);
});

$(".gallery-link").on('click', function () {
    $('html, body').animate({
        'scrollTop': $(".title ").offset().top
    }, 600);
});

$(".contact-btn").on('click', function () {
    $('html, body').animate({
        'scrollTop': $(".contact").offset().top
    }, 600);
});


$('.counter').counterUp({
    delay: 10,
    time: 1200,
    formatter: function (n) {
        return n.replace(/,/g, '.');
    }
});



$(document).ready(function(){
    
    $(".spinner").fadeOut(10000 , function(){
        
        $(".loadingscreen").fadeOut(1000);
        $("body").css("overflow","auto")
    });
})