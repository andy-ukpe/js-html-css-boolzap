$(document).ready(function(){


  // click on send button
  $('.send-button').click(function(){
    sendMessage();
  });

  $('.massage-input input').keypress(function(){
    if(event.which == 13 || event.ketCode == 13 ){
      sendMessage();
    }
  })
// funzione per inviare messaggio
    function sendMessage(){
      // catturo il valore nell'input
      var messageText = $('.massage-input input').val();
      // Se il valore è vuoto non invio
      if( messageText != ' ' ) {
      // Il messaggio viene clonato
      var newMessage = $('.template .my-chat').clone();
      // Aggiungo al messaggio a conversazione
      newMessage.children('.conversation').text(messageText);


      // catturo il valore nell'input
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var time = addZero(hours) + ' : ' + addZero(minutes);
      // funzione appendere 0
      function addZero(number){
        if(number < 10){
          return '0'+ number;
        }
        return number;
      }

      // Aggiungo al messaggio a conversazione
      newMessage.children('.hours').text(time);

      // aggiungo il messaggio a chat
      $('.chat-conversation').append(newMessage);
      // andare infondo con lo scroll
      $('.chat').scrollTop($('.chat').height());

    }

    };
});
