//varaibles globales
let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'//style mofica propedades. display oculta los 
    //elementos HTML
    
    let sectionReiniciar = document.getElementById('reiniciar')//ocultar la seccion reiniciar
    sectionReiniciar.style.display = 'none'//que contiene el boton reiniciar

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
     //seleccion del ataque 
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}
function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'//style mofica propedades. display oculta los 
    //elementos HTML 
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'//style mofica propedades. display muestr los 
    //elementos HTML 

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

   //llamar funcion seleccion del enemigo
   seleccionarMascotaEnemigo()
}

//funcion seleccionar mascota enemigo
function seleccionarMascotaEnemigo(){
    let mascotaAletoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(mascotaAletoria == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge' //se inserta en el html el nombre de la mascota 
    }else if(mascotaAletoria == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }else{
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

//funciones del ataque
function ataqueFuego(){
    ataqueJugador = 'FUERGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    }else{
        ataqueEnemigo = 'TIERRA'
    }
    
    combate()
}

//uso de cleateElement 
function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
    //p es una etiqueta para parrafos

    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

//numero aleatorio
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueEnemigo == ataqueJugador){
                crearMensaje("EMPATE🤦‍♂️")
    }else if( (ataqueJugador == 'FUEGO' &&  ataqueEnemigo == 'TIERRA') ||
               (ataqueJugador == 'AGUA' &&  ataqueEnemigo == 'FUEGO') ||
               (ataqueJugador == 'TIERRA' &&  ataqueEnemigo == 'AGUA') ){
                crearMensaje("GANASTE🥳")
                vidasEnemigo--
                spanVidasEnemigo.innerHTML = vidasEnemigo
               }else{
                crearMensaje("PERDISTE👎")
                vidasJugador--
                spanVidasJugador.innerHTML = vidasJugador
               }

     revisarVidas()          
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("¡GANASTE! :)")
    }else if(vidasJugador == 0){
        crearMensajeFinal("¡PERDISTE! :(")        
    }
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('resultado')
    //p es una etiqueta para parrafos
 
    sectionMensajes.innerHTML  = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')//muestra la seccion reiniciar
    sectionReiniciar.style.display = 'block'//que contiene el boton reiniciar

}

function reiniciarJuego(){
    location.reload()
}
//confirmar que el html haya cargado todo, despues, llamar 
//iniciarJuego()
window.addEventListener('load', iniciarJuego)