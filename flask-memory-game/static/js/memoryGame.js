$(function(){
  var charList = ''

  $('#gameForm').submit(function(evt){
    evt.preventDefault();

    $.ajax({
      url: '/memorygame',
      data: $('#gameForm').serialize() + "&charList=" + charList,
      type: 'POST',
      dataType: 'json',
      success: function(response){
        $('.lettersSpan').text(response.data);
        if(response.result == 'fail') {
          charList = ''
        } else {
          charList += response.data
        }
        $('.responseMsg').show();
        // console.log(response);
      },
      error: function(error){
        console.log(error);
      }
    });

    $('#inputLetters').val('')
  
  });

  $('#btnReset').click(function(evt){
    $.ajax({
      url: '/reset-game',
      type: 'GET',
      dataType: 'json',
      success: function(response){
        $('.lettersSpan').text(response.data);
        charList = response.data
        $('.responseMsg').show();
        // console.log(response);
      },
      error: function(error){
        console.log(error);
      }
    });
  });


});