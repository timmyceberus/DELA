//GLOBAL
$(document).on('click', (event)=>{
  console.log(event.target);
  if(!event.target.matches('#login-section *')){
    if($('#log-out-nav').is(':visible')){
      $('#log-out-nav').hide()
    }
  }

  if(!event.target.matches('.show-nav-btn-item')){
    if($('#vertical-nav').is(':visible')){
      $('#vertical-nav').hide()
    }
  }
})

// NAVIGATION
$('#show-nav-btn, #show-nav-btn *').on('click', (event) => {
  $('#vertical-nav').toggle();
  event.stopPropagation();
});

$('.nav-item').on('click', function () {
  const value = $(this).find('div').text();

  switch (value) {
    case 'DELA':
      window.scrollBy({
        left: 0,
        top: $('#title').offset().top - $(window).scrollTop(),
        behavior: 'smooth',
      });
      break;
    case '新聞':
      window.scrollBy({
        left: 0,
        top: $('#news').offset().top - $(window).scrollTop() - 60,
        behavior: 'smooth',
      });
      break;
    case '傳說故事':
      window.scrollBy({
        left: 0,
        top: $('#legend').offset().top - $(window).scrollTop() - 60,
        behavior: 'smooth',
      });
      break;
    case '文創商品':
      window.scrollBy({
        left: 0,
        top: $('#goods').offset().top - $(window).scrollTop() - 60,
        behavior: 'smooth',
      });
      break;
    case '優美音樂':
      window.scrollBy({
        left: 0,
        top: $('#music').offset().top - $(window).scrollTop() - 60,
        behavior: 'smooth',
      });
      break;
    case '關於我們':
      window.scrollBy({
        left: 0,
        top: $('#about').offset().top - $(window).scrollTop() - 60,
        behavior: 'smooth',
      });
      break;
    default:
      // pass
  }
});

$('#login-section div span, #login-section div').on('click', (event)=>{
  $('#log-out-nav').toggle();
  event.stopPropagation();
})

$('#log-out-btn').on('click', ()=>{
  localStorage.removeItem('name');
  location.reload();
})

// TITLE
$('.icon-box div').on('mouseover', function () {
  $(this).addClass('hover');
});

$('.icon-box div').on('mouseout', function () {
  $(this).removeClass('hover');
});


$(window).on('scroll', () => {
  // Change background image's background color
  if ($(window).scrollTop() < $('#news').offset().top) {
    $('#index-img-1').hide();
  } else if ($(window).scrollTop() < $('#legend').offset().top) {
    $('#index-img-1').show();
    $('#index-img-2').hide();
  } else if ($(window).scrollTop() < $('#goods').offset().top) {
    $('#index-img-1').hide();
    $('#index-img-2').show();
    $('#index-img-3').hide();
  } else if ($(window).scrollTop() < $('#music').offset().top) {
    $('#index-img-2').hide();
    $('#index-img-3').show();
    $('#index-img-4').hide();
  } else {
    $('#index-img-3').hide();
    $('#index-img-4').show();
  }

  // Change navigation bar's background color
  if ($(window).scrollTop() > $('#title').height() - 100) {
    $('#horizontal-nav').addClass('colored');
  } else {
    $('#horizontal-nav').removeClass('colored');
  }
});

/* INITIALIZE */
if ($(window).scrollTop() > $('#title').height() - 100) {
  $('#horizontal-nav').addClass('colored');
} else {
  $('#horizontal-nav').removeClass('colored');
}

if ($(window).scrollTop() < $('#news').offset().top) {
  $('#index-img-1').hide();
  $('#index-img-2').hide();
  $('#index-img-3').hide();
  $('#index-img-4').hide();
} else if ($(window).scrollTop() < $('#legend').offset().top) {
  $('#index-img-1').show();
  $('#index-img-2').hide();
  $('#index-img-3').hide();
  $('#index-img-4').hide();
} else if ($(window).scrollTop() < $('#goods').offset().top) {
  $('#index-img-1').hide();
  $('#index-img-2').show();
  $('#index-img-3').hide();
  $('#index-img-4').hide();
} else if ($(window).scrollTop() < $('#music').offset().top) {
  $('#index-img-1').hide();
  $('#index-img-2').hide();
  $('#index-img-3').show();
  $('#index-img-4').hide();
} else {
  $('#index-img-1').hide();
  $('#index-img-2').hide();
  $('#index-img-3').hide();
  $('#index-img-4').show();
}

// GET USER NAME FROM LOCAL STORAGE
if (localStorage.getItem('name') !== null) {
  $('#login-section button').hide();
  $('#login-section div').show();

  $('#user-name').text(localStorage.getItem('name'));
}

// AUDIO PLAY

const playlist = ['', '斯瓦細格', 'Voyage', 'vavayan女人', '洄游', '渲染', '椏幹', 'cepo\'混濁了', '輕快的生活', '美麗的末日預言', '美好的日子'];
const artists = ['', '雅維·茉芮', 'CMO樂團', '阿爆', '吳昊恩', '桑梅娟', '桑布伊', '阿努·卡力亭·沙力朋安', '以莉·高露', '芮斯', '舒米恩']
const audio = document.getElementsByTagName('audio')[0];

// Leading zero
function pad(num) {
  let s = `${num}`;
  while (s.length < 2) s = `0${s}`;
  return s;
}

function play() {
  audio.play();
  $('.play-button').html('<i class="fas fa-pause"></i>');

  $(`.play-btn[data-track=${audio.getAttribute('track')}]`)
    .html('<i class="far fa-pause-circle"></i>');
}

function pause() {
  audio.pause();
  $('.play-button').html('<i class="fas fa-play"></i>');

  $(`.play-btn[data-track=${audio.getAttribute('track')}]`)
    .html('<i class="far fa-play-circle"></i>');
}

function nextSong(track) {
  if (track < 1 || track > 10) {
    pause();
    return;
  }

  // Slide album
  const distance = (track - 1) * 90;
  $('.album-slider').css({
    transform: `translate(-${distance}px, 0)`,
  });

  // Cnange song title
  $('.song-title')
    .text($(`.album[data-track=${track}]`).text())
    .attr({'title':`${playlist[track]}`});
  $('.song-artist')
    .text($(`.singer[data-track=${track}]`).text())
    .attr({'title':`${artists[track]}`});

  // Change audio
  audio.setAttribute('src', `../audio/${playlist[track]}.mp3`);
  audio.setAttribute('track', `${track}`);
  audio.currentTime = 0;
  audio.play();

  // Change icons
  $('.play-btn').html('<i class="far fa-play-circle"></i>');
  $(`.play-btn[data-track=${track}]`).html('<i class="far fa-pause-circle"></i>');
  $('.play-button').html('<i class="fas fa-pause"></i>');
}

// Change duration
$('audio').on('loadedmetadata', () => {
  $('.end-time').text(`${Math.floor(audio.duration / 60)}:${pad(Math.floor(audio.duration) % 60)}`);
});

$('audio').on('timeupdate', () => {
  const percentage = (audio.currentTime / audio.duration) * 100;
  $('.progress-bar').css('width', `${percentage}%`);
  $('.start-time').text(`${Math.floor(audio.currentTime / 60)}:${pad(Math.floor(audio.currentTime) % 60)}`);
});

// Auto play next song
$('audio').on('ended', function () {
  nextSong(parseInt($(this).attr('track'), 10) + 1);
});

$('.play-button').on('click', function () {
  if ($(this).html() === '<i class="fas fa-play"></i>') {
    play();
  } else {
    pause();
  }
});

$('.previous-button').on('click', () => {
  const track = parseInt($('audio').attr('track'), 10) - 1;
  if (track >= 1) nextSong(track);
});

$('.next-button').on('click', () => {
  const track = parseInt($('audio').attr('track'), 10) + 1;
  if (track <= 10) nextSong(track);
});

$('.progress-box').on('click', function () {
  const percentage = (event.pageX - $(this).offset().left) / $(this).width();
  audio.addEventListener('seeked', function (){
    audio.currentTime = audio.duration * percentage;
    audio.play();
  }, true);
});

$('.play-btn').on('click', function () {

  $('#player').addClass('show');
  $('.hide-player-button').html('<i class="fas fa-chevron-down"></i>');

  // Playing then pause
  if ($(this).html() === '<i class="far fa-pause-circle"></i>') {
    pause();
    return;
  }

  // Same song and pausing then play
  if ($(this).data('track') === parseInt(audio.getAttribute('track'), 10)) {
    play();
    return;
  }

  nextSong($(this).data('track'));
});

$('.hide-player-button').on('click', function (){
  $('#player').toggleClass('show');
  if($('#player').hasClass('show')){
    $(this).html('<i class="fas fa-chevron-down"></i>')
  } else {
    $(this).html('<i class="fas fa-chevron-up"></i>');
  }
})
