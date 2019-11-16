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
});

if ($(window).scrollTop() > $('#title').height() - 100) {
  changeNavBGColor();
}

// TITLE
let sitewidth = $(window).width();
const mousePos = { x: -1, y: -1 };
const relativePos = { x: -1, y: -1 };
const bgobject = $('#title');
const titleobject = $('#title div');
const titlePos = {
  x: sitewidth / 2,
  y: titleobject.offset().top + titleobject.height() / 2,
};

$(document).on('mousemove', (event) => {
  mousePos.x = event.pageX;
  mousePos.y = event.pageY;

  relativePos.x = titlePos.x - mousePos.x;
  relativePos.y = titlePos.y - mousePos.y;

  titleobject.css({
    left: `${((titlePos.x + relativePos.x * 0.03) / sitewidth) * 100}vw`,
    top: `${(titlePos.y + relativePos.y * 0.03)}px`,
  });

  bgobject.css('background-position', `${50 + relativePos.x * 0.001}% ${50 + relativePos.y * 0.01}%`);
});

$(window).resize(() => {
  sitewidth = $(window).width();
  titlePos.x = sitewidth / 2;
  titlePos.y = titleobject.offset().top + titleobject.height() / 2;
});
