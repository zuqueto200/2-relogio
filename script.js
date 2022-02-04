function atuazlizar() {

    var display = document.querySelector('.display')
    var agora = new Date();
    var horario = corrigir_digito(agora.getHours()) + ':' + corrigir_digito(agora.getMinutes()) + ':' + corrigir_digito(agora.getSeconds());
    console.log(horario);
    display.textContent = horario;
}
function corrigir_digito(numero) {
    if (numero < 10) {
        numero = '0' + numero;
    }
    return numero;
 
    
}
atuazlizar();
setInterval(atuazlizar, 1000)

