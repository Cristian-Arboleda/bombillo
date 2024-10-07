function bombillo_estado(){
    interruptor = document.getElementById('interruptor');
    bombillo = document.getElementById('bombillo');
    console.log(bombillo);
    if (interruptor.innerText == 'Apagar'){
        bombillo.src = 'images/apagado.jpg'
        interruptor.innerText = 'Encender'
    } else {
        bombillo.src = 'images/encendido.jpg'
        interruptor.innerText = 'Apagar'
    }
}
