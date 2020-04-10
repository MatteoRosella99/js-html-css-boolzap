
//Variabili
var input = $('.msg');
var risposta = $('.risp');
var ricontact = $('.ricontact');
var z = 0;


$('.tlg').click(message)

//Funzione per rimuovere l'icona del messaggio se si clicca su qualsiasi punto
$("body").click(
  function() {
    $('.mic').removeClass('none');
    $('.tlg').addClass('none');
});


//FUNZIONI PER APPARIRE CHAT

//Chat 1
$('.uuno').click(
  function(){
    $('.chat').removeClass('chatattivo');
    $('.chat').addClass('none');
    $('.cuno').addClass('chatattivo');
    $('.cuno').removeClass('none')
  }
)
//Chat 2
$('.udue').click(
  function(){
    $('.chat').removeClass('chatattivo');
    $('.chat').addClass('none');
    $('.cdue').addClass('chatattivo');
    $('.cdue').removeClass('none')
  }
)
//Chat 3
$('.utre').click(
  function(){
    $('.chat').removeClass('chatattivo');
    $('.chat').addClass('none');
    $('.ctre').addClass('chatattivo');
    $('.ctre').removeClass('none')
  }
)
//Chat 4
$('.uquattro').click(
  function(){
    $('.chat').removeClass('chatattivo');
    $('.chat').addClass('none');
    $('.cquattro').addClass('chatattivo');
    $('.cquattro').removeClass('none')
  }
)
//Chat 5
$('.ucinque').click(
  function(){
    $('.chat').removeClass('chatattivo');
    $('.chat').addClass('none');
    $('.ccinque').addClass('chatattivo');
    $('.ccinque').removeClass('none')
  }
)
//Chat 6
$('.usei').click(
  function(){
    $('.chat').removeClass('chatattivo');
    $('.chat').addClass('none');
    $('.csei').addClass('chatattivo');
    $('.csei').removeClass('none')
  }
)
//Chat 7
$('.usette').click(
  function(){
    $('.chat').removeClass('chatattivo');
    $('.chat').addClass('none');
    $('.csette').addClass('chatattivo');
    $('.csette').removeClass('none')
  }
)
//Chat 8
$('.uotto').click(
  function(){
    $('.chat').removeClass('chatattivo');
    $('.chat').addClass('none');
    $('.cotto').addClass('chatattivo');
    $('.cotto').removeClass('none')
  }
)

//Funzione per cambio icona da microfono a invio del messaggio
$('.msg').click(
  function(evento){
    $('.mic').addClass('none');
    $('.tlg').removeClass('none');
    evento.stopPropagation();
  }
)

//Funzione per ricerca tra i contatti
$('.ricontact').keyup( //Durante la scrittura da parte dell'utente
  function(){
    var nome = $(this).val().toLowerCase();//indifferenza tra maiuscole e minuscole
    $('.persona').each(
      function(){
        var nomepersona = $(this).find('.utente .text h3').text().toLowerCase();
        var trovato = nomepersona.indexOf(nome);//Verifica se la o le lettere date sono presenti nel nome
        if (trovato > -1) { //Se ritorna 0 o superiore vuol dire che sono presenti
          $(this).addClass('attivo');
          $(this).removeClass('none');
        }
        else{ //Altrimenti ritorna -1 e il contatto sparisce
          $(this).addClass('none');
          $(this).removeClass('attivo');
        }
      }
    )
  }
)

//Funzione per fare cambiare il contatto in primo piano
$('.persona').click(
  function(){
    $('.attualescritte h3').text($(this).find('.utente .text h3').text());
    $('.attualecontatto img').attr('src' , $(this).find('.utente img').attr('src'))
  }
)

//Funzione chat con risposta automatica del pc
function message(){
  $('.mic').removeClass('none');
  $('.tlg').addClass('none');
  var text = input.val();//Acquisizione frase da scrivere in chat
  $('.chatattivo').append('<div class="chatmsg"><span class="msgsend">' + text + '</span><br><span class="msgtime">23:44</span></div>');
  $('.msg').val('');
  setTimeout(function() { //Attesa di un secondo prima dell'inserimenti di un messaggio automatico
    $('.chatattivo').append('<div class="pcmsg"><span class="msgsend">Non mi interessa!</span><br><span class="msgtime">23:44</span></div>')
    z = z + 1;
  }, 1000);
}
