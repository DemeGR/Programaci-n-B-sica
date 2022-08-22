const express  = require("express")//1.-se importa express para poder utilizarlo en el proyecto

const app = express()//2.-se crea una aplicion con express
//url y cómo se respondera a la solicitud

const jugadores = []

class Jugador{
    constructor(id){
        this.id=id
    }
}

app.get("/Unirse",(req/*peticion*/ , res/*respuesta*/ )=>{//3.-cuando se resive una petición en la url raiz que se responda "Hola"
    const id=`${Math.random()}`

    const jugador = new Jugador(id)

    jugadores.push(jugador)

    res.setHeader("Access-Control-Allow-Origin","*"/*cualquier origen es valido */)//permitir acceso

    res.send(id)
})

app.listen(8080, ()=>{//4.-que escuche continuamente en el puerto 8080 las peticiones de los cleintes para que le pueda responder
    console.log("Servidor funcionando")
})