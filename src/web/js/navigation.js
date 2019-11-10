$('#show-nav-btn').on('click blur', () => {
  $('#vertical-nav').toggle();
});

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
    left: `${titlePos.x + relativePos.x * 0.02 - titleobject.width() / 2}px`,
    top: `${titlePos.y + relativePos.y * 0.02 - titleobject.height() / 2}px`,
  });
  // console.log(mouse, title, relative);
});
