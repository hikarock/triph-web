$(window).on('resize', function() {
  var height = $(window).innerHeight();
  $('body').css({
    height: height,
    width: '100%'
  });
});

setTimeout(function(){
  $(window).trigger('resize');
}, 300);

