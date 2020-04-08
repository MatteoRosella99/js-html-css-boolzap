
var chat = $('.chat');
var input = $('.msg');
var risposta = $('.risp');
var ricontact = $('.ricontact');
var z = 0;

$('.tlg').click(
  function(){
    $('.mic').removeClass('none');
    $('.tlg').addClass('none');
    var text = input.val();
    chat.append('<div class="chatmsg"><span class="msgsend">' + text + '</span><br><span class="msgtime">23:44</span></div>');
    $('.msg').val('');

    if (z === 0) {
      setTimeout(function() {
        chat.append('<div class="pcmsg"><span class="msgsend">Non mi interessa!</span><br><span class="msgtime">23:44</span></div>')
        z = z + 1;
      }, 1000);
    }
    else if (z === 1){
      setTimeout(function() {
        chat.append('<div class="pcmsg"><span class="msgsend">Ancora che mi scrivi? Non mi interessa!</span><br><span class="msgtime">23:44</span></div>')
        z = z + 1;
      }, 1000);
    }
    else if (z === 2){
      setTimeout(function() {
        chat.append('<div class="pcmsg"><span class="msgsend">Senti basta, ora ti scrivo solo più "ok" almeno sei felice</span><br><span class="msgtime">23:44</span></div>')
        z = z + 1;
      }, 1000);
    }
    else if (z > 2){
      setTimeout(function() {
        chat.append('<div class="pcmsg"><span class="msgsend">Ok</span><br><span class="msgtime">23:44</span></div>')
      }, 1000);
    }
  }
)


$("body").click(function() {
  $('.mic').removeClass('none');
  $('.tlg').addClass('none');
});


$('.msg').click(
  function(evento){
    $('.mic').addClass('none');
    $('.tlg').removeClass('none');
    evento.stopPropagation();
  }
)
$('.search').click(
  function(){
    var nome = $('.ricontact').val();
    $('.persona').each(
      function(){
        var nomepersona = $(this).find('.utente .text h3').text();
        var trovato = nomepersona.indexOf(nome);
        if (trovato > -1) {
          $(this).addClass('attivo');
          $(this).removeClass('none');
        }
        else{
          $(this).addClass('none');
          $(this).removeClass('attivo');
        }
      }
    )
    $('.ricontact').val('');
  }
)
