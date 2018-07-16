$(document).ready(function () {
  $('<div></div>').appendTo('body');
  $('form').submit(function (event) {
    event.preventDefault();
    let msg = $('#message').val();
    $('div').append('<h2>' + msg + '</h2>');
  });
  // When the user mouses over the h2 element, assign it a new background color and border radius. 
  $('div').mouseover(function (event) {
    console.log(event);
    $(event.target).css({ 'background-color': getRandomColor(), 'border-radius': '30px' });
  });
  function getRandomColor() {
    let randColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    return randColor;
  }
  // Use jQuery to create an unordered list and append it to the body
  $('<ul></ul>').appendTo('body');
  $('form').submit(function (event) {
    event.preventDefault();
    let msg = $('#message').val();
    $('ul').append('<li>' + msg + '</li>');
  })
  // When the user clicks on the li element, assign it a random color.
  // $('ul').click(getRandomColor());
  $('ul').click(function (event) {
    console.log(event);
    $(event.target).css({ 'background-color': getRandomColor(), 'border-radius': '30px' });
  });
  $('ul').dblclick(function (event){
    $(event.target).remove();
  })
});