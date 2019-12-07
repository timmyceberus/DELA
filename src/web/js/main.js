// NAVIGATION
$('#show-nav-btn').on('click', () => {
  $('#vertical-nav').toggle();
});

$('.nav-item').on('click', function scroll() {
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

  if ($('#vertical-nav').is(':visible')) {
    $('#vertical-nav').toggle();
  }
});

// TITLE
$('.icon-box div').on('mouseover', function iconsMouseover() {
  $(this).addClass('hover');
});

$('.icon-box div').on('mouseout', function iconsMouseover() {
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

const playlist = ['', '斯瓦細格', 'Voyage', 'vavayan女人', '洄游'];
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
  if (track < 1 || track > 4) {
    pause();
    return;
  }

  // Slide album
  const distance = (track - 1) * 90;
  $('.album-slider').css({
    transform: `translate(-${distance}px, 0)`,
  });

  // Cnange song title
  $('.song-title').text($(`.album[data-track=${track}]`).text());
  $('.song-artist').text($(`.singer[data-track=${track}]`).text());

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
$('audio').on('ended', function func() {
  nextSong(parseInt($(this).attr('track'), 10) + 1);
});

$('.play-button').on('click', function func() {
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
  if (track <= 4) nextSong(track);
});

$('.progress-box').on('click', function f(event) {
  const percentage = (event.pageX - $(this).offset().left) / $(this).width();
  audio.currentTime = audio.duration * percentage;
});

$('.play-btn').on('click', function f() {
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
