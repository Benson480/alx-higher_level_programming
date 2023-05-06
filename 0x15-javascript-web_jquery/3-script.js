/* adds class red to <header> when #red_header is clicked */
$(document).ready(function setClass () {
  $('DIV#red_header').click(function activeFunction () {
    $('HEADER').attr('class', 'red');
  });
});
