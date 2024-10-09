function bombillo_estado(){
    var interruptor = document.getElementById('interruptor');
    var bombillo = document.getElementById('bombillo');
    if (interruptor.innerText == 'Apagar'){
        bombillo.src = 'images/apagado.jpg';
        interruptor.innerText = 'Encender';
    } else {
        bombillo.src = 'images/encendido.jpg';
        interruptor.innerText = 'Apagar';
        contador += 1;
        console.log(contador)
        if (contador % 5 == 0){
            alert(`Ya has encendido el bombillo ${contador} veces. Recuerda ahorrar energia!`);
        }
    }
}

contador = 0