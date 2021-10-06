$(document ).ready(function() {
    var BannerSlider = new Swiper(".banner .swiper-container", {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".banner .swiper-pagination",
            clickable: true,
        },
    });

    var AnouncwsSlider = new Swiper(".announces .swiper-container", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 20,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".announces .swiper-pagination",
            clickable: true,
        },
    });

    $(".footer__to-top").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
});