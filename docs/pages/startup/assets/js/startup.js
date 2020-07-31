$(window).scroll(function(){
var scroll = $(window).scrollTop();

if (scroll >= 550) {
    $("nav").addClass("navscroll")
}

else if (scroll < 550){
    $("nav").removeClass("navscroll")
}

    })

