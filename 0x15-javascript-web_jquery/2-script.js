/* updates color of <header> to #FF0000 when #red_header is clicked */
$(document).ready(function textColor () {
  $('DIV#red_header').click(function changeColor () {
    $('HEADER').css({ color: '#FF0000' });
  });
});

