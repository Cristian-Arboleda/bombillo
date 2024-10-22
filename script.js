function bombillo_estado(){
    var interruptor = document.getElementById('interruptor');
    var bombillo = document.getElementById('bombillo');
    var audio_interruptor = document.getElementById('audio_interruptor');
    audio_interruptor.play();
    console.log('hola')
    if (interruptor.innerText == 'Apagar'){
        bombillo.src = 'images/apagado.jpg';
        interruptor.innerText = 'Encender';
    } else {
        bombillo.src = 'images/encendido.jpg';
        interruptor.innerText = 'Apagar';
        contador += 1;
        if (contador % 5 == 0){
            alert(`Ya has encendido el bombillo ${contador} veces. Recuerda ahorrar energia!`);
        }
    }
}

contador = 0