//varaibles globales
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')//ocultar la seccion reiniciar

const botonReiniciar = document.getElementById('boton-reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')



const spanMascotaJugador = document.getElementById('mascota-jugador')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let mokepones = [] //arreglo de mokepones
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones 
let inputHipodoge 
let inputCapipepo 
let inputRatigueya 
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego      //En estas alturas los botones aun no existen en HTML
let botonAgua       //En estas alturas los botones aun no existen en HTML
let botonTierra  //En estas alturas los botones aun no existen en HTML    
let botones = [] //para los botones de ataques
let indexAtaquejugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3

//Clases. Los clases deben de empezar con mayuscula
class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

//Objetos de instancias que se construyen por la clase
let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)

let capipepo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',5)

let ratigueya = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png',5)

//creacion de un objeto
hipodoge.ataques.push( 
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)

//creacion de un objeto
capipepo.ataques.push( 
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    
)

//creacion de un objeto
ratigueya.ataques.push( 
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)

mokepones.push(hipodoge, capipepo,ratigueya)

function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = 'none'//style mofica propedades. display oculta los 
    //elementos HTML

    mokepones.forEach((mokepon) => { 
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for = ${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones //AGREGA MOKEPONES EN HTML

         inputHipodoge = document.getElementById('Hipodoge')
         inputCapipepo = document.getElementById('Capipepo')
         inputRatigueya = document.getElementById('Ratigueya')
    })
    
    sectionReiniciar.style.display = 'none'//que contiene el boton reiniciar

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
     //seleccion del ataque 
    
    

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
        spanMascotaJugador.innerHTML = inputHipodoge.id      //Una sola fuente. Se llama directamente el nombre objeto por medio de su id.
        mascotaJugador = inputHipodoge.id
    } else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML =inputCapipepo.id
        mascotaJugador = inputCapipepo.id
   } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id     //.innerHTML va agregando textos
        mascotaJugador = inputRatigueya.id     //se guarda el nombre de la mascota seleccionada 
   }else{
        alert('Selecciona una mascota')
   }

   extraerAtaques(mascotaJugador)
   //llamar funcion seleccion del enemigo
   seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++){
        if (mascotaJugador == mokepones[i].nombre){
                ataques = mokepones[i].ataques
        }
    }
    
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) =>{ // para esta linea de codigo los botones ya existen
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon //Los botones son inyectados directamente en HTML y ya existen
    })

     botonFuego = document.getElementById('boton-fuego') //A estas alturas los botones ya existen
     botonAgua = document.getElementById('boton-agua')//A estas alturas los botones ya existen
     botonTierra = document.getElementById('boton-tierra')
     botones = document.querySelectorAll('.BAtaque')

}

function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener('click',(e) => {
            if(e.target.textContent ==='🔥'){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background= '#112f58'
                boton.disabled = true
            }else if(e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }else{
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }

            ataqueAleatorioEnemigo() 
        })
    })
    
}

//funcion seleccionar mascota enemigo
function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0,mokepones.length -1)  //0: desde el indice cero
                                                            //mokepones.length: logitud de la cadena
                                                            //-1: porque la logitud de un array es una menos
    
  spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre  //el arreglo llama a la mascota correspondiente. El .innerHMTL lo agrega en la parte de mascotas seleccionadas.
  ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques    //guarda los ataques NOTA!
  console.log(ataquesMokeponEnemigo)
  console.log(ataquesMokeponEnemigo[2])
  secuenciaAtaque()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1)
    console.log(ataqueAleatorio)
    if(ataquesMokeponEnemigo[ataqueAleatorio].nombre ==='🔥'){   //NOTA! Unos atques se guardan en "ataquesMokeponEnemigo", por tanto "ataquesMokeponEnemigo" puede obtener "nombre" del ataque que le pertenece a "ataques"
        ataqueEnemigo.push('FUEGO')  //Agrega el ataque en el arreglo 
        console.log(ataqueEnemigo)
    }else if(ataquesMokeponEnemigo[ataqueAleatorio].nombre === '💧'){
        ataqueEnemigo.push('AGUA')
        console.log(ataqueEnemigo)
    }else{
        ataqueEnemigo.push('TIERRA')
        console.log(ataqueEnemigo)
    }


   // if( (ataqueAleatorio == 0) || (ataqueAleatorio == 1) ){
      //  ataqueEnemigo.push('FUEGO')  //Agrega el ataque en el arreglo 
   // }else if((ataqueAleatorio == 3) || (ataqueAleatorio == 4)){
    //    ataqueEnemigo.push('AGUA')
    //}else{
    //    ataqueEnemigo.push('TIERRA')
   // }
    iniciarPelea()
}

function iniciarPelea(){
    if(ataqueJugador.length === 5){ //Primero seleccionar 5 ataques, depues lanazla validacion de quien gano 
        combate()
    }
}
//uso de cleateElement 
function crearMensaje(resultado){
    
    let nuevoAtaqueDelJugador = document.createElement('p') //p es una etiqueta para parrafos
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaquejugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

//numero aleatorio
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaquejugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]){
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE🙅")   
        }else if(( ataqueJugador[index] === 'FUEGO' &&  ataqueEnemigo[index] === 'TIERRA') ||
                 (ataqueJugador[index] === 'AGUA' &&  ataqueEnemigo[index] === 'FUEGO') ||
                 (ataqueJugador[index] === 'TIERRA' &&  ataqueEnemigo[index] === 'AGUA') ){
                    indexAmbosOponentes(index, index)
                    crearMensaje("GANASTE :)")   
                    victoriasJugador++
                    spanVidasJugador.innerHTML = victoriasJugador
                 }else{
                    indexAmbosOponentes(index, index)
                    crearMensaje("PERDISTE :)")
                    victoriasEnemigo++
                    spanVidasEnemigo.innerHTML = victoriasEnemigo
                 }
    }
     revisarVidas()  
}

function revisarVidas(){
    if(victoriasJugador === victoriasEnemigo){
        crearMensajeFinal("Esto fue un empate!")
    }else if(victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("FELICITACIONES! Ganaste :)")        
    }else{
        crearMensajeFinal("Lo siendo, perdiste :(")  
    }
}

function crearMensajeFinal(resultadoFinal){
    
    sectionMensajes.innerHTML  = resultadoFinal

    sectionReiniciar.style.display = 'block'//que contiene el boton reiniciar
}

function reiniciarJuego(){
    location.reload()
}
//confirmar que el html haya cargado todo, despues, llamar 
//iniciarJuego()
window.addEventListener('load', iniciarJuego)