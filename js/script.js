$(document).ready(function(){
    $("[data-toggle='tooltip']").tooltip();

    $(".main-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        nextArrow: '<i class="fas fa-angle-right"></i>',
        prevArrow: '<i class="fas fa-angle-left"></i>',
        responsive:[
            {
                breakpoint:577,
                settings:{
                    slidesToShow:2,
                    slidesToScroll: 2
                }
            }
        ]
    });
});
