$(function(){
  // Video Functionality
  $('.circle').click(function(event) {
    event.preventDefault();
    var videoID = $(this).data('videoname');

    $('#video-container').addClass('open');
    $('body').addClass('open-modal');

    if (videoID === '') {
      $('#video-player-ctr').html('No Video Found');
    } else {
      $('#video-player-ctr').html('<video class="video-player" autoplay controls><source src="http://kristenzirkler.com/wp-content/uploads/video/'+videoID+'.mp4" type="video/mp4" /><source src="http://kristenzirkler.com/wp-content/uploads/video/'+videoID+'.webm" type="video/webm" />');
    }
    
  });
  $('#video-container').click(function(event) {
    event.preventDefault();
    $('#video-player-ctr').html('Video');
    $('#video-container').removeClass('open');
    $('body').removeClass('open-modal');

  });
    
});