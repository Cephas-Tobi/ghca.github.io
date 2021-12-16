$(document).ready(() => {
    // navbar
    $('.navbar-show-btn').click(() => {
        $('.navbar-collapse').addClass('showNavbar');
    });

    $('.navbar-hide-btn').click(() => {
        $('.navbar-collapse').removeClass('showNavbar');
    });

    // slick slider
    $('.hero-slider').slick({
        infinite: true,
        sliderToShow: 1,
        dots: true,
        speed: 200,
        arrows: false,
        autoplay:true,
        autoplaySpeed: 3000,
    });
});
