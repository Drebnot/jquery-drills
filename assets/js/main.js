$( document ).ready(function() {
  $("form").submit(function () {
    let msg = $('#message').val();
    if (msg.length === 0) {
      $("#btn").prop("disabled", true);
    }
    else {
      alert(msg);
    }
  // });
  $('<div></div>').appendTo('body');
  
  
  $('form').submit(function(event){
    event.preventDefault();
    let msg = $('#message').val();
    $('div').append('<h2>' + msg + '</h2>');

    });
  });
