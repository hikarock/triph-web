if (Meteor.isClient) {
  $(window).on('resize', function(evt) {
    var height = $(window).innerHeight();
    $('body').css({
      height: height,
      width: '100%'
    });
  });
  setTimeout(function(){
    $(window).trigger('resize');
  }, 300);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
