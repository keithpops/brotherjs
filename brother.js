$(document).mousemove(function(e) {
    var logo = $('#brother');
    logo.stop();
    if (!logo.hasClass('death')) {
      var hulkTop = logo.position().top;
      var hulkLeft = logo.position().left;

      var hulkAbove = (hulkTop > e.clientY && hulkTop < e.clientY + 100);
      var hulkBelow = (hulkTop < e.clientY && hulkTop > e.clientY - 100);
      var hulkToLeft = (hulkLeft > e.clientX && hulkLeft < e.clientX + 100);
      var hulkToRight = (hulkLeft < e.clientX && hulkLeft > e.clientX - 100);


      if (hulkLeft > e.clientX) {
        logo.addClass('invert');
      } else {
        logo.removeClass('invert');
      }
      if (hulkAbove && (hulkToLeft || hulkToRight)) {
        logo.removeClass('kick').addClass('punch-right');
      } else if (hulkBelow && (hulkToLeft || hulkToRight)) {
        logo.removeClass('punch-right').addClass('kick');
      }
      else {
        if (hulkTop > e.clientY) {
            logo.removeClass('walk-front punch-right kick rest-front').addClass('walk-back');
        } else {
            logo.removeClass('walk-back punch-right kick rest-front').addClass('walk-front');
        }
      }
      logo.animate({
          left: e.clientX - (logo.width() /2),
          top: e.clientY - (logo.height() /2)
      }, 5000, "linear", function() {
        logo.removeClass('walk-front walk-back kick punch-right').addClass('rest-front');
      });
    }
});
$('#kill-brother').on('click', function() {
  $('#brother').removeClass('walk-front walk-back kick punch-right rest-front').addClass('death').stop();
});