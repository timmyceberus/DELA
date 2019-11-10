// NAVIGATION
$('#show-nav-btn').on('click blur', () => {
  $('#vertical-nav').toggle();
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
