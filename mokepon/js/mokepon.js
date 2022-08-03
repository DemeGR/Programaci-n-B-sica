function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}
function seleccionarMascotaJugador(){
   let inputHipodoge = document.getElementById('hipodoge')
   let inputCapipepo = document.getElementById('capipepo')
   let inputRatigueya = document.getElementById('ratigueya')
   let spanMascotaJugador = document.getElementById('mascota-jugador')

   //checar que mascota se selecciono y mostrarlo en 
   //la seccion seleccionar-ataque
   if(inputHipodoge.checked){//checked checa si es falso o true el ratio
        spanMascotaJugador.innerHTML ='Hipodoge'
   } else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML ='Capipepo'
   } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML ='Ratigueya'
   }else{
        alert('Selecciona a una mascota')
   }

   //seleccion del enemigo
   seleccionarMascotaEnemigo()
}

//funcion seleccionar mascota enemigo
function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge' //se inserta en el html el nombre de la mascota 
    }else if(ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }else{
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

//numero aleatorio
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}


//confirmar que el html haya cargado todo, despues, llamar 
//iniciarJuego()
window.addEventListener('load', iniciarJuego)