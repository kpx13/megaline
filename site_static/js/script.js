$(function () {

    //-----------------Tabs-----------------//


    var tab = $(".tab");
    var tabLink = $(".tab-link");
    tabLink.click(function () {
        var index = $(this).index();
        tab.hide().eq(index).show();
        tabLink.removeClass("active").eq(index).addClass('active');
    })

    $(".cart-item-remove").click(function () {
        $(this).closest('.cart-item').remove()
    })

    //-----------------Gallery-----------------//


    var slide = $(".slide");
    var slideSize = slide.size();
    var slideNav = $(".slider-nav").find('li');
    var time = 6000; // промежуток времени,через которое меняются слайды
    slide.not(":first").hide();

    slideNav.eq(0).addClass("active");
    function rotate() {
        var slideNav = $(".slider-nav").find('li');
        var k = $(".slide.active").index();
        if (k < slideSize - 1) {
            slideNav.eq(k).removeClass("active").next().addClass("active");
            slide.eq(k).fadeOut().removeClass("active").next().dequeue().fadeIn().addClass("active");
        }
        else {
            slide.eq(k).fadeOut().removeClass("active");
            slideNav.eq(k).removeClass("active");
            slide.eq(0).fadeIn().addClass("active");
            slideNav.eq(0).addClass("active");
        }

    }

    var autoplay = setInterval(rotate, time);

    $(document).on('click', '.slider-nav li', function () {
        var slideNav = $(".slider-nav").find('li');
        if (!$(this).hasClass("active")) {
            if (!slide.is(":animated")) {
                clearInterval(autoplay);
                var ind = $(this).index();
                slide.removeClass('active').fadeOut();
                slideNav.removeClass('active');
                slide.eq(ind).addClass('active').fadeIn();
                slideNav.eq(ind).addClass('active');
                autoplay = setInterval(rotate, time);
            }
        }
    });

    $(".sidebar-nav ul li.p").on('mouseover', function () {
        $(this).find('ul').closest('li').addClass("opened");
        $(this).find('ul').slideDown();
    });
    
    $(".sidebar-nav ul").on('mouseleave', function () {
            $(this).find('ul').slideUp()
    });
    
    $(".sidebar-nav ul li a").on('click', function () {
        if ($(this).closest('li').hasClass("opened")) {
            $(this).closest('li').removeClass("opened")
            $(this).closest('li').find('ul').slideUp()
        }
    });
    $(".sidebar-nav ul li a").click(function () {
        $(".sidebar-nav ul li").find("a").removeClass("active")
        $(this).addClass("active")
    })

});