//varaibles globales
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')//ocultar la seccion reiniciar
const botonTierra = document.getElementById('boton-tierra')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')

const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

//Clases. Los clases debe de empezar con mayuscula
class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
    }
}

//Objetos
let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)

let capipepo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',5)

let ratigueya = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png',5)

function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = 'none'//style mofica propedades. display oculta los 
    //elementos HTML
    
    sectionReiniciar.style.display = 'none'//que contiene el boton reiniciar

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
     //seleccion del ataque 
    
    botonFuego.addEventListener('click', ataqueFuego)
    
    botonAgua.addEventListener('click', ataqueAgua)
    
    botonTierra.addEventListener('click', ataqueTierra)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}
function seleccionarMascotaJugador(){
    
    sectionSeleccionarMascota.style.display = 'none'//style mofica propedades. display oculta los 
    //elementos HTML 
    
    sectionSeleccionarAtaque.style.display = 'flex'//style mofica propedades. display muestr los 
    //elementos HTML 

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
    
    let nuevoAtaqueDelJugador = document.createElement('p') //p es una etiqueta para parrafos
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
    
    sectionMensajes.innerHTML  = resultadoFinal

    botonFuego.disabled = true
    
    botonAgua.disabled = true
    
    botonTierra.disabled = true

    sectionReiniciar.style.display = 'block'//que contiene el boton reiniciar

}

function reiniciarJuego(){
    location.reload()
}
//confirmar que el html haya cargado todo, despues, llamar 
//iniciarJuego()
window.addEventListener('load', iniciarJuego)