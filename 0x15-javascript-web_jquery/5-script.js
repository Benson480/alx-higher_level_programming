/* adds <li> items to UL.my_list everytime DIV#add_item is clicked */
$(document).ready(function addLi () {
  $('DIV#add_item').click(function addItem () {
    const add = $('<li></li>').text('Item');
    $('UL.my_list').append(add);
  });
});
