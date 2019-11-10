$('#show-nav-btn').on('click blur', () => {
  $('#vertical-nav').toggle();
});

const mousePos = { x: -1, y: -1 };
const relativePos = { x: -1, y: -1 };
const titleobject = $('#title div');
const titlePos = {
  x: titleobject.offset().left,
  y: titleobject.offset().top,
};


$(document).on('mousemove', (event) => {
  mousePos.x = event.pageX;
  mousePos.y = event.pageY;

  relativePos.x = titlePos.x - mousePos.x;
  relativePos.y = titlePos.y - mousePos.y;

  titleobject.css({
    left: `${(relativePos.x * 0.02) / 16}vw`,
    top: `${(titlePos.y + relativePos.y * 0.02) / 16}em`,
  });
});

$(window).resize(() => {
  titlePos.x = titleobject.offset().left;
  titlePos.y = titleobject.offset().top;
});
