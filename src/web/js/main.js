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

// SCROLL
function changeNavBGColor() {
  if ($(window).scrollTop() > $('#title').height() - 100) {
    $('#horizontal-nav').addClass('colored');
  } else {
    $('#horizontal-nav').removeClass('colored');
  }
}

$(window).on('scroll', () => {
  changeNavBGColor();
  if ($(window).scrollTop() < $('#news').offset().top) {
    $('.index-img').css('background-image', 'none');
  } else if ($(window).scrollTop() < $('#legend').offset().top) {
    $('.index-img').css('background-image', 'url(\'../img/index_1.jpg\')');
  } else if ($(window).scrollTop() < $('#goods').offset().top) {
    $('.index-img').css('background-image', 'url(\'../img/index_2.jpg\')');
  } else if ($(window).scrollTop() < $('#music').offset().top) {
    $('.index-img').css('background-image', 'url(\'../img/index_3.jpg\')');
  } else if ($(window).scrollTop() > $('#music').offset().top) {
    $('.index-img').css('background-image', 'url(\'../img/index_4.jpg\')');
  }
});

// INITIALIZE
if ($(window).scrollTop() > $('#title').height() - 100) {
  changeNavBGColor();
}

if ($(window).scrollTop() < $('#news').offset().top) {
  $('.index-img').css('background-image', 'none');
} else if ($(window).scrollTop() < $('#legend').offset().top) {
  $('.index-img').css('background-image', 'url(\'../img/index_1.jpg\')');
} else if ($(window).scrollTop() < $('#goods').offset().top) {
  $('.index-img').css('background-image', 'url(\'../img/index_2.jpg\')');
} else if ($(window).scrollTop() < $('#music').offset().top) {
  $('.index-img').css('background-image', 'url(\'../img/index_3.jpg\')');
} else if ($(window).scrollTop() > $('#music').offset().top) {
  $('.index-img').css('background-image', 'url(\'../img/index_4.jpg\')');
}
