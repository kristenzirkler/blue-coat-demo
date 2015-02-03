$(function(){
  
  // Show Video
  $('a').click(function() {
  	event.preventDefault();
    //$('#video-container').show('slow');
    $('#video-container').addClass('open');
    $('body').addClass('open-modal');
  });
  $('#video-container').click(function() {
    //$('#video-container').hide('slow');
    $('#video-container').removeClass('open');
    $('body').removeClass('open-modal');

  });
    
});