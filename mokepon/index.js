const express  = require("express")//1.-se importa express para poder utilizarlo en el proyecto
const cors = require("cors")  //libreria que trabaja con esxpress

const app = express()//2.-se crea una aplicion con express
//url y cómo se respondera a la solicitud

app.use(cors()) //se le dice que express que utilice la libreria de cors
app.use(express.json()) //para poder trabajar con post se habillita json
const jugadores = []

class Jugador{
    constructor(id){
        this.id=id
    }

    asignarMokepon(mokepon){//una vez que se tenga la clase, se le aasigna un mmokepon
        this.mokepon= mokepon
    }

    actualizarPosicion(x,y){
        this.x = x
        this.y = y
    }
}

class Mokepon{
    constructor(nombre){
        this.nombre = nombre
    }
}

app.get("/Unirse",(req/*peticion*/ , res/*respuesta*/ )=>{//3.-cuando se resive una petición en la url raiz que se responda "Hola"
    const id=`${Math.random()}`

    const jugador = new Jugador(id)

    jugadores.push(jugador)

    res.setHeader("Access-Control-Allow-Origin","*"/*cualquier origen es valido */)//permitir acceso

    res.send(id)
})

//habilitar peticion
app.post("/mokepon/:jugadorId",(req, res) =>{  //packages
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.mokepon/*vine de la funcion seleccionarMokepon() */ || "" //se extra el nombre del mokepon 
    const mokepon = new Mokepon(nombre)

    const jugadorIndex = jugadores.findIndex((jugador)=> jugadorId === jugador.id)

    if(jugadorIndex >= 0){
        jugadores[jugadorIndex]/*se le agrega un mokepon*/.asignarMokepon(mokepon)
    }

    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

app.post("/mokepon/:jugadorId/posicion",(req,res) =>{
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x  || 0
    const y = req.body.y || 0

    const jugadorIndex = jugadores.findIndex((jugador)=> jugadorId === jugador.id)

    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].actualizarPosicion(x,y)
    }

    res.end()//se da respuesta
})//API que se va a consumir

app.listen(8080, ()=>{//4.-que escuche continuamente en el puerto 8080 las peticiones de los cleintes para que le pueda responder
    console.log("Servidor funcionando")
})