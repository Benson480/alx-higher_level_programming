/*JavaScript script that toggles the class of the <header> element when the user clicks on the tag DIV#toggle_header*/
$(document).ready(function changeRed () {
  $('DIV#toggle_header').click(function toogleHeader () {
    if ($('HEADER').attr('class') !== 'red') {
      $('HEADER').attr('class', 'red');
    } else {
      $('HEADER').attr('class', 'green');
    }
  });
});
