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

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

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
let botonAire 
let botones = [] //para los botones de ataques
let indexAtaquejugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let lienzo = mapa.getContext("2d") //2d porque se va a trabajar en 2 dimensiones
let intervalo 
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.png'
let mascotaJugadorObjeto
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 350
let vidasJugador = 3
let vidasEnemigo = 3

if(anchoDelMapa > anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa - 20  //si la venta esta muy grande, el ancho del mapa no superara los 350px
}
alturaQueBuscamos = anchoDelMapa * 600/800
mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

//Clases. Los clases deben de empezar con mayuscula
class Mokepon{
    constructor(nombre, foto, vida,fotoMapa){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ataque = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0,mapa.width - this.ancho)   
        this.y = aleatorio(0,mapa.height - this.alto)
        
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadx = 0
        this.velocidady = 0
    }

    pintarMokepon(){
        lienzo.drawImage(  //cargar imagen
        this.mapaFoto,
        this.x,
        this.y,
        this.ancho,
        this.alto
    )
    }
}

//Objetos de instancias que se construyen por la clase
let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge.png')

let capipepo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',5, './assets/capipepo.png')

let ratigueya = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png',5, './assets/ratigueya.png')

//nuevos jugadores
let langostelvis = new Mokepon('Langostelvis','./assets/mokepons_mokepon_langostelvis_attack.png',5,'./assets/langostelvis.png')

let pydos = new Mokepon('Pydos','./assets/mokepons_mokepon_pydos_attack.png',5,'./assets/pydos.png')

let tucapalma = new Mokepon('Tucapalma','./assets/mokepons_mokepon_tucapalma_attack.png',5,'./assets/tucapalma.png')


let hipodogeEnemigo = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge.png')

let capipepoEnemigo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',5, './assets/capipepo.png')

let ratigueyaEnemigo = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png',5, './assets/ratigueya.png')

//nuevos jugadores
let langostelvisEnemigo = new Mokepon('Langostelvis','./assets/mokepons_mokepon_langostelvis_attack.png',5,'./assets/langostelvis.png',220,60)

let pydosEnemigo = new Mokepon('Pydos','./assets/mokepons_mokepon_pydos_attack.png',5,'./assets/pydos.png')

let tucapalmaEnemigo = new Mokepon('Tucapalma','./assets/mokepons_mokepon_tucapalma_attack.png',5,'./assets/tucapalma.png')

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
    { nombre: '💨', id: 'boton-aire' },
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

langostelvis.ataques.push( 
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)

tucapalma.ataques.push( 
    { nombre: '💨', id: 'boton-aire' },
    { nombre: '💨', id: 'boton-aire' },
    { nombre: '💨', id: 'boton-aire' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)

pydos.ataques.push( 
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
)

//creacion de un objeto
hipodogeEnemigo.ataques.push( 
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)

//creacion de un objeto
capipepoEnemigo.ataques.push( 
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💨', id: 'boton-aire' },
    { nombre: '🔥', id: 'boton-fuego' },
    
)

//creacion de un objeto
ratigueyaEnemigo.ataques.push( 
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)

langostelvisEnemigo.ataques.push( 
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)

tucapalmaEnemigo.ataques.push( 
    { nombre: '💨', id: 'boton-aire' },
    { nombre: '💨', id: 'boton-aire' },
    { nombre: '💨', id: 'boton-aire' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)

pydosEnemigo.ataques.push( 
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
)

mokepones.push(hipodoge, capipepo,ratigueya,pydos,tucapalma,langostelvis)

function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = 'none'//style mofica propedades. display oculta los 
    //elementos HTML
    sectionVerMapa.style.display = 'none'

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
         inputLangostelvis = document.getElementById('Langostelvis')
         inputTucapalma = document.getElementById('Tucapalma')
         inputPydos = document.getElementById('Pydos')
    })
    
    sectionReiniciar.style.display = 'none'//que contiene el boton reiniciar

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
     //seleccion del ataque 
    
    botonReiniciar.addEventListener('click', reiniciarJuego)

    unirseAlJuego()  
}

function unirseAlJuego(){
   fetch("http://localhost:8080/unirse")
    .then(function(res){
        if(res.ok){//si hay respuesta y todo salio bien, hacer...
            res.text()
             .then(function(respuesta){
                console.log(respuesta)
             })
        }
    })
   
}

function seleccionarMascotaJugador(){
    
    sectionSeleccionarMascota.style.display = 'none'//style mofica propedades. display oculta los 
    //elementos HTML 
    
    //sectionSeleccionarAtaque.style.display = 'flex'//style mofica propedades. display muestr los 
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
       }else if(inputLangostelvis.checked){
           spanMascotaJugador.innerHTML =inputLangostelvis.id
           mascotaJugador = inputLangostelvis.id
         }else if(inputTucapalma.checked){
            spanMascotaJugador.innerHTML =inputTucapalma.id
            mascotaJugador = inputTucapalma.id
           }else if(inputPydos.checked){
             spanMascotaJugador.innerHTML =inputPydos.id
             mascotaJugador = inputPydos.id
            }else{
            alert('Selecciona una mascota')
           }

   extraerAtaques(mascotaJugador)
   sectionVerMapa.style.display = 'flex'
   iniciarMapa()
   //llamar funcion seleccion del enemigo
   //seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++){
        if (mascotaJugador == mokepones[i].nombre){
                ataques = mokepones[i].ataques
        }
    }
    console.log(ataques)
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
     botonAire = document.getElementById('boton-aire')
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
            }else if(e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }else if(e.target.textContent === '💨'){
                ataqueJugador.push('AIRE')
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
function seleccionarMascotaEnemigo(enemigo){
   // let mascotaAleatoria = aleatorio(0,mokepones.length -1)  //0: desde el indice cero
                                                            //mokepones.length: logitud de la cadena
                                                            //-1: porque la logitud de un array es una menos
    
  //spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre  //el arreglo llama a la mascota correspondiente. El .innerHMTL lo agrega en la parte de mascotas seleccionadas.

  //spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
  //ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques    //guarda los ataques NOTA!

  spanMascotaEnemigo.innerHTML = enemigo.nombre
  ataquesMokeponEnemigo = enemigo.ataques   
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
    }else if(ataquesMokeponEnemigo[ataqueAleatorio].nombre === '💨'){
        ataqueEnemigo.push('AIRE')
        console.log(ataqueEnemigo)
    }else{
        ataqueEnemigo.push('TIERRA')
        console.log(ataqueEnemigo)
    }

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
                 (ataqueJugador[index] === 'TIERRA' &&  ataqueEnemigo[index] === 'AGUA') ||
                 (ataqueJugador[index] === 'AIRE' &&  ataqueEnemigo[index] === 'TIERRA') ||
                 (ataqueJugador[index] === 'FUEGO' &&  ataqueEnemigo[index] === 'AIRE')  ){
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

function pintarCanvas(){
    console.log(mascotaJugadorObjeto)
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadx
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidady
    lienzo.clearRect(0,0,mapa.width,mapa.height )
                        
    lienzo.drawImage(     //Aqui el orden que se pone es importante 
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    
    mascotaJugadorObjeto.pintarMokepon()
    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    pydosEnemigo.pintarMokepon()
    tucapalmaEnemigo.pintarMokepon()
    langostelvisEnemigo.pintarMokepon()

    if(mascotaJugadorObjeto.velocidadx !== 0 || mascotaJugadorObjeto.velocidady !== 0){
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
        revisarColision(pydosEnemigo)
        revisarColision(tucapalmaEnemigo)
        revisarColision(langostelvisEnemigo)

    }

}

function moverDerecha(){
    mascotaJugadorObjeto.velocidadx =  5 //se va a mover 5 px continuamente 
}

function moverIzquierda(){
    mascotaJugadorObjeto.velocidadx = - 5  
}

function moverAbajo(){
    mascotaJugadorObjeto.velocidady = 5  
}

function moverArriba(){
    mascotaJugadorObjeto.velocidady = -5
}

function detenerMovimiendo(){
    mascotaJugadorObjeto.velocidadx = 0
    mascotaJugadorObjeto.velocidady = 0
}

function sePresionoUnaTecla(event){
    console.log(event.key)

    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break;
         case 'ArrowDown':
            moverAbajo()
            break;
        case 'ArrowLeft':
            moverIzquierda()
            break;
        case 'ArrowRight':
            moverDerecha()
            break;
        default:
            break;
    }
}

function iniciarMapa(){
    
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    console.log(mascotaJugadorObjeto, mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener('keydown', sePresionoUnaTecla)

    window.addEventListener('keyup', detenerMovimiendo)
}

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++){
        if (mascotaJugador == mokepones[i].nombre){
                return mokepones[i]
        }
    }
}

function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x 

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x 

    if(                                     //Si algunas de las condiciones se cumple sigifica  que no hubo una colision 
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo 
    ){
        return;                            //No hacer nada y salir de la funcion   
     }
                                          // Estas instrucciones se cumplen porque no se cumplio el if
    detenerMovimiendo()
    clearInterval(intervalo)                //detiene el intervalo que se ejecuta cada 50ms
    console.log('se detecto una colision')
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)          
}

function reiniciarJuego(){
    location.reload() 
}
//confirmar que el html haya cargado todo, despues, llamar 
//iniciarJuego()
window.addEventListener('load', iniciarJuego)