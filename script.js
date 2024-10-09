function vela_estado(){
    interruptor = document.getElementById('interruptor');
    vela = document.getElementById('vela');
    console.log(vela);
    if (interruptor.innerText == 'Apagar'){
        vela.src = 'images/apagado.jpg'
        interruptor.innerText = 'Encender'
    } else {
        vela.src = 'images/encendido.jpg'
        interruptor.innerText = 'Apagar'
    }
}
