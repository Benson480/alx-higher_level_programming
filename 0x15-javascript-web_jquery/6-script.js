/* updates text of <header> to "New Header!!!" on DIV#update_header click */
$(document).ready(function updateHeader () {
  $('DIV#update_header').click(function onlyUpdateText () {
    $('HEADER').text('New Header!!!');
  });
});
