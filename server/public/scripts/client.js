var jokeObject = {
  whoseJoke: '',
  jokeQuestion: '',
  punchLine: ''
}

$(document).ready(function() {
  console.log('jquery loaded');

  $.ajax({
    type: 'GET',
    url: '/jokes',
    success: function(response) {
      console.log(response);
      for (var i = 0; i < response.length; i++) {
        $('#jokeDisplay').append('<h3>' + response[i].whoseJoke + '</h3>' +
        '<p>' + response[i].jokeQuestion + '</p>' +
        '<p>' + response[i].punchLine + '</p>')
      }; // end of for loop
    } // end of success function
  }); // end of AJAX GET request


  $('#submitButton').on('click', function(){
    jokeObject.whoseJoke = $('#jokeAuthor').val();
    jokeObject.jokeQuestion = $('#jokeQuestion').val();
    jokeObject.punchLine = $('#punchline').val();
    $.ajax({
      type: 'POST',
      url: '/addJoke',
      data: jokeObject,
      success: function(response) {
        console.log(response);
      } // end of success function
    }); // end of ajax post
  }); // end of submit button listener


  $('#clearButton').on('click', function(){
    $('#jokeAuthor').val('');
    $('#jokeQuestion').val('');
    $('#punchline').val('');
  }); // end of clear button listener

}); // end of doc ready
