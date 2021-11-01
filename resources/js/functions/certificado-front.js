$('.ui.form')
  .form({
    fields: {
      nome: 'empty',
      email: 'empty',
      telefone: 'empty',
      assunto: 'empty',
      mensagem: 'empty',
    }
  })
;
if( $('.ui.form').form('is valid')) {
  // form is valid (both email and name)
}

function printValue(id, value) {
  inputId = "#" + id + "-val";
  $(inputId).text(value);
  inputId = "";
}
$("input").on("keyup", function() {
  printValue($(this).attr('id'), $(this).val());
})

function registrar(form) {
  data = JSON.stringify($(form).serializeArray());
  sessionStorage.setItem('mensagem', data);
  alert("A mensagem foi salva em sessão.");
  recuperar();
  return false; //don't submit
}

function recuperar() {
  retorno = JSON.parse(sessionStorage.mensagem);
  $('#certificado-form').addClass('d-none');
  $('#dados').removeClass('d-none');
  console.log(retorno);
  for (var campo in retorno) {
    htmlCampo = '<h4><b>' + retorno[campo].name + '</b>: ' + retorno[campo].value + '</h4>';
    $('#retorno').append(htmlCampo);
  }

}
$("#certificado-form").submit(function(e){
  e.preventDefault();
  console.log('meu caralho');
  registrar($(this));
  e.stopImmediatePropagation();
});