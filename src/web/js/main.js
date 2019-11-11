// NAVIGATION
$('#show-nav-btn').on('click', () => {
  $('#vertical-nav').toggle();
});

$('.nav-item').on('click', function scroll() {
  const value = $(this).text();

  switch (value) {
    case 'DELA':
      window.scrollBy({
        left: 0,
        top: $('#title').offset().top - $(window).scrollTop(),
        behavior: 'smooth',
      });
      break;
    case '傳說故事':
      window.scrollBy({
        left: 0,
        top: $('#langedary').offset().top - $(window).scrollTop() - 60,
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
    default:
      // pass
  }

  if ($('#vertical-nav').is(':visible')) {
    $('#vertical-nav').toggle()
  }
})

$(window).on('scroll', () => {
  if ($(window).scrollTop() > $('#title').height() - 100) {
    $('#horizontal-nav').addClass('colored');
  } else {
    $('#horizontal-nav').removeClass('colored');
  }
});

// TITLE
const mousePos = { x: -1, y: -1 };
const relativePos = { x: -1, y: -1 };
const titleobject = $('#title div');
const titlePos = {
  x: titleobject.offset().left + titleobject.width() / 2,
  y: titleobject.offset().top + titleobject.height() / 2,
};

$(document).on('mousemove', (event) => {
  mousePos.x = event.pageX;
  mousePos.y = event.pageY;

  relativePos.x = titlePos.x - mousePos.x;
  relativePos.y = titlePos.y - mousePos.y;

  titleobject.css({
    left: `${(relativePos.x * 0.02) / 16}vw`,
    top: `${(relativePos.y * 0.02)}px`,
  });
});

$(window).resize(() => {
  titlePos.x = titleobject.offset().left + titleobject.width() / 2;
  titlePos.y = titleobject.offset().top + titleobject.height() / 2;
});

$(window).on('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
});
