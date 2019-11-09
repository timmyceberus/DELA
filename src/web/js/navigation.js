$(window).resize(() => {
  const width = $(window).width();
  const navList = $('nav#horizontal ul');

  if (width <= 700) {
    navList.find('li').not(':has(> button)').hide();
    navList.find('li:has(> button#show-nav-btn)').show();
  } else {
    navList.find('li').not(':has(> button)').show();
    navList.find('li:has(> button#show-nav-btn)').hide();
    $('nav#vertical').hide();
  }
});

$('#show-nav-btn').on('click', () => {
  $('nav#vertical').toggle();
})