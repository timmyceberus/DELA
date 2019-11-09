$(window).resize(function () {
  const width = $(window).width();
  const navList = $('nav ul');

  if (width <= 700) {
    navList.find('li').not(':has(> button)').hide();
    navList.find('li:has(> button#nav-menu)').show();
  }
  else {
    navList.find('li').not(':has(> button)').show();
    navList.find('li:has(> button#nav-menu)').hide();
  }
})