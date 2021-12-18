var windowWidth = $(window).width();

//DROPDOWN MENU
$("nav i.fa-bars").on("click", function(e) {
  e.preventDefault();
  $("section.menu-dropdown").css("display", "block").css("text-align", "center").animate({marginLeft: "+=1000px"});
});

$(".menu-x-out").on("click", function(e) {
  e.preventDefault();
  $(".menu-dropdown").animate({marginLeft: "-=1000px"});
});

//FIXED RIBBON
$("img.x-out").on("click", function() {
  $("div.fixed").hide();
});

//SCROLL UP ANIMATIONS
$(document).ready(function() {
    $(window).scroll( function(){
        $(".bestsellers-fig, .skin-fig").each(function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({"opacity": 1},250);
            }
          });
    });
});
// REVIEW COMPANIES DIV
$("p.vogue-text").show();

$("img#vogue-img").on("mouseover", function() {
  $("p.vogue-text").attr("id", "on").css({opacity: 0}).animate({opacity: 1}, 250);
  $("p.elle-text, p.vanityfair-text").attr("id", "off");
});

$("img#elle-img").on("mouseover", function() {
  $("p.elle-text").attr("id", "on").css({opacity: 0}).animate({opacity: 1}, 250);
  $("p.vogue-text, p.vanityfair-text").attr("id", "off");
});


$("img#vanityfair-img").on("mouseover", function() {
  $("p.vanityfair-text").attr("id", "on").css({opacity: 0}).animate({opacity: 1}, 250);
  $("p.vogue-text, p.elle-text").attr("id", "off");
});
