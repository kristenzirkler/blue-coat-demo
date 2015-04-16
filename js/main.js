$(function(){
  
  // Video Functionality
  $('.circle').click(function(event) {
    event.preventDefault();
    var videoID = $(this).data('videoname');

    $('#video-container').addClass('open');
    $('body').addClass('open-modal');
    $('.audioFrame').remove();

    if (videoID === '') {
      $('#video-player-ctr').html('No Video Found');
    } else {
      $('#video-player-ctr').html('<video class="video-player" width="100%" height="675px" autoplay controls><source src="http://104.236.213.243/wp-content/uploads/videos/'+videoID+'.mp4" type="video/mp4" /><source src="http://104.236.213.243/wp-content/uploads/videos/'+videoID+'.webm" type="video/webm" />');
    }
    
  });
  $('#video-container').click(function(event) {
    event.preventDefault();
    $('#video-player-ctr').html('Video');
    $('#video-container').removeClass('open');
    $('body').removeClass('open-modal');
    addAudio();

  });
  
  // Voice Over
  function addAudio() {
    var aud = document.createElement('iframe');
    aud.setAttribute('src', 'http://104.236.213.243/wp-content/uploads/videos/LifeCycle_VO.mp4'); // replace with actual file path
    aud.setAttribute('width', '1px');
    aud.setAttribute('height', '1px');
    aud.setAttribute('class', 'audioFrame');
    aud.setAttribute('scrolling', 'no');
    aud.style.border = '0px';
    document.body.appendChild(aud);
  }
  addAudio();
    
});