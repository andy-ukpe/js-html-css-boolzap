$(document).ready(function(){


  // click on send button on message bar
  $('.send-button').click(function(){
    // funzione risposta
    sendMessage();
    // funzione risposta
    setTimeout(answerMessage, 3000);

    // click on enter on message bar
  $('.message-input input').keypress(function(){
    if(event.which === 13 || event.keyCode === 13 ){
      sendMessage();
      setTimeout(answerMessage, 3000);
    }
  })
  // click on send button on message bar
  $('.glass-icon').click(function(){
    // funzione risposta
    filterList();


    // click on enter on message bar
  $('.search-bar input').keypress(function(){
    if(event.which === 13 || event.keyCode === 13 ){
      filterList();

    }
  })
  });
// funzione per inviare messaggio
    function sendMessage(){
      // catturo il valore nell'input
      var messageText = $('.message-input input').val();
      // Se il valore è vuoto non invio
      if( messageText != ' ' ) {
      // Il messaggio viene clonato
      var newMessage = $('.template .my-chat').clone();
      // Aggiungo al messaggio la conversazione
      newMessage.children('.conversation').text(messageText);

      // Calcolo l'orario
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var time = addZero(hours) + ' : ' + addZero(minutes);
      // Aggiungo al messaggio l'orario
      newMessage.children('.hours').text(time);

      // aggiungo il messaggio a chat
      $('.chat-conversation').append(newMessage);
      // andare infondo con lo scroll
      $('.chat').scrollTop($('.chat').height());

    }

    };
  });


// messaggio di risposta

  function answerMessage() {

    // Il messaggio viene clonato
    var newAnswerMessage = $('.template .his-chat').clone();
    // Aggiungo al messaggio a conversazione
    newAnswerMessage.children('.conversation').text('ok');
    // aggiungo il messaggio a chat
    $('.chat-conversation').append(newAnswerMessage);
    // andare infondo con lo scroll
    $('.chat').scrollTop($('.chat').height());
    // Calcolo l'orario
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var time = addZero(hours) + ' : ' + addZero(minutes);
    // Aggiungo al messaggio l'orario
    newAnswerMessage.children('.hours').text(time);
  }

  // funzione mettere lo 0 nell'orario
  function addZero(number){
    if(number < 10){
      return '0'+ number;
    }
    return number;
  }
  ////////////////////////////////////////////////////////////

  // funzione filtraggio lista
  $('.search-bar input').on("keyup", function() {
  var contactValue = this.value.toLowerCase().trim();
  $(".contact ul li").show().filter(function() {
    return $(this).text().toLowerCase().trim().indexOf(contactValue) == -1;
  }).hide();
});



})
