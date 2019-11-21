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
    default:
      // pass
  }

  if ($('#vertical-nav').is(':visible')) {
    $('#vertical-nav').toggle();
  }
});

function changeNavBGColor() {
  if ($(window).scrollTop() > $('#title').height() - 100) {
    $('#horizontal-nav').addClass('colored');
  } else {
    $('#horizontal-nav').removeClass('colored');
  }
}

$(window).on('scroll', () => {
  changeNavBGColor();
  if ($(window).scrollTop() < $('#legend').offset().top) {
    $('.index-img').css('background-image', 'url(\'../img/index_1.jpg\')');
  } else if ($(window).scrollTop() > $('#legend').offset().top) {
    $('.index-img').css('background-image', 'url(\'../img/index_2.jpg\')');
  }
});

if ($(window).scrollTop() > $('#title').height() - 100) {
  changeNavBGColor();
}

if ($(window).scrollTop() < $('#legend').offset().top) {
  $('.index-img').css('background-image', 'url(\'../img/index_1.jpg\')');
} else if ($(window).scrollTop() > $('#legend').offset().top) {
  $('.index-img').css('background-image', 'url(\'../img/index_2.jpg\')');
}
