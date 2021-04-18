//nav bar outside the container

$('#BlogHover').mouseover(function () {
  if ($('#BlogDown').css("display") == "none") {

    $('#BlogDown').css("display", "block")

  }
});
$('#BlogHover').mouseout(function () {
  $('#BlogDown').css("display", "none")

});

$('#PegasHover').mouseover(function () {
  if ($('#PegasDown').css("display") == "none") {

    $('#PegasDown').css("display", "block")

  }
});
$('#PegasHover').mouseout(function () {
  $('#PegasDown').css("display", "none")

})




//nav bar in container

$('#BlogHoverContainer').mouseover(function () {
  if ($('#BlogDownContainer').css("display") == "none") {

    $('#BlogDownContainer').css("display", "block")

  }
});
$('#BlogHoverContainer').mouseout(function () {
  $('#BlogDownContainer').css("display", "none")

});
$('#PegasHoverContainer').mouseover(function () {
  if ($('#PegasDownContainer').css("display") == "none") {

    $('#PegasDownContainer').css("display", "block")

  }
});
$('#PegasHoverContainer').mouseout(function () {
  $('#PegasDownContainer').css("display", "none")

});

$(window).scroll(function() {
  var height = $(window).scrollTop();
  console.log(height)
  if(height  > 150) {
     $('#NavBarSticky').css("display","none")
     $('#col7').css("margin-top","4.5em")
     $('#col5').css("margin-top","4.5em")
  }
  else{
    $('#NavBarSticky').css("display","block")
    $('#col7').css("margin-top","0em")
    $('#col5').css("margin-top","0em")
  }
});
$(window).scroll(function() {
var height = $(window).scrollTop();
console.log(height)
if(height  < 150) {
   $('#NavBarFixset').css("display","none")
}
else{
  $('#NavBarFixset').css("display","block")
  $('#NavBarFixset').css("background-color"," rgba(34, 34, 34, 0.9)")
}
});





$(function () {

  let myli = $(".myli");
  $(myli).on('click', function () {
    $('.myli.active').removeClass('active');
    $(this).addClass('active');
  });

});

$(document).ready(function () {

  $('.autoplay').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $('.autoplay2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  });

});