/* fetches character name from url and displays in DIV#character */
$(document).ready(function getCharacter () {
  $.get('https://swapi-api.hbtn.io/api/people/5/?format=json', function apiName (data) {
    $('#character').text(data.name);
  });
});
