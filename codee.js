/*menu burger*/

$(".burger").on("click", function () {
    $("aside").toggleClass("show")
})


$('.aboutj').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.about').offset().top
    }, 500)
})

$('.servicesj').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.services').offset().top
    }, 500)
})

$('.galleryj').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.gallery').offset().top
    }, 500)
})

$('.blogj').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.blog').offset().top
    }, 500)
})

$('.contactj').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.contact').offset().top
    }, 500)
})

$('.headerj').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.header').offset().top
    }, 500)

})


function showDiv() {
    document.getElementById('welcomeDiv').style.display = "block";
}

$(document).on('scroll', function () {

    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop();
    // console.log(scrollValue);


    //Pierwsza sekcja

    const $art1 = $('.art1');
    const art1FromTop = $art1.offset().top
    const art1Height = $art1.outerHeight()

    const $art2 = $('.art2');
    const art2FromTop = $art2.offset().top
    // console.log(art2FromTop);
    const art2Height = $art2.outerHeight()
    // console.log(art2Height);


    if (scrollValue > art1FromTop + art1Height - windowHeight) {
        console.log("jestem art 1 wywietlony w całości");
        $art1.addClass('active');
    }


    if (scrollValue > art2FromTop + art2Height - windowHeight) {
        console.log("jestem art 2 wywietlony w całości");
        $art2.addClass('active');
    }



    //Druga sekcja

    const $op1 = $('.op1');
    const $op2 = $('.op2');
    const $op3 = $('.op3');
    const $op4 = $('.op4');
    const $op5 = $('.op5');
    const $op6 = $('.op6');



    const op1FromTop = $op1.offset().top;
    const op2FromTop = $op2.offset().top;
    const op3FromTop = $op3.offset().top;
    const op4FromTop = $op4.offset().top;
    const op5FromTop = $op5.offset().top;
    const op6FromTop = $op6.offset().top;


    const op1Height = $op1.height();
    const op2Height = $op2.height();
    const op3Height = $op3.height();
    const op4Height = $op4.height();
    const op5Height = $op5.height();
    const op6Height = $op6.height();



    if (scrollValue > op1FromTop + op1Height / 2 - windowHeight) {
        $op1.addClass('active');
        console.log('załączeni animacji op1');
    }

    if (scrollValue > op2FromTop + op2Height / 2 - windowHeight) {
        $op2.addClass('active');
        console.log('załączeni animacji op2');
    }


    if (scrollValue > op3FromTop + op3Height / 2 - windowHeight) {
        $op3.addClass('active');
        console.log('załączeni animacji op3');
    }

    if (scrollValue > op4FromTop + op4Height / 2 - windowHeight) {
        $op4.addClass('active');
        console.log('załączeni animacji op3');
    }

    if (scrollValue > op5FromTop + op5Height / 2 - windowHeight) {
        $op5.addClass('active');
        console.log('załączeni animacji op3');
    }

    if (scrollValue > op6FromTop + op6Height / 2 - windowHeight) {
        $op6.addClass('active');
        console.log('załączeni animacji op3');
    }

    if (scrollValue > op7FromTop + op7Height / 2 - windowHeight) {
        $op7.addClass('active');
        console.log('załączeni animacji op3');
    }



})

/*menu*/

$(window).scroll(function () {
    wHeight = $(window).height()
    if ($(document).scrollTop() > wHeight) {
        $('aside').addClass('shrink');
    } else {
        $('aside').removeClass('shrink');
    }
});


$('.btnmm').on("click", function () {
    $('.modal-wrap').addClass('active');
    $('header').addClass('blur');
})

$('.hide').on("click", function () {
    $('.modal-wrap').removeClass('active');
    $('.header').removeClass('blur');
})
/*modal*/