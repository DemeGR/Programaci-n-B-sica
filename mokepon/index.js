const express  = require("express")//1.-se importa express para poder utilizarlo en el proyecto

const app = express()//2.-se crea una aplicion con express
//url y cómo se respondera a la solicitud
app.get("/",(req/*peticion*/ , res/*respuesta*/ )=>{//3.-cuando se resive una petición en la url raiz que se responda "Hola"
    res.send("Hola")
})

app.listen(8080, ()=>{//4.-que escuche continuamente en el puerto 8080 las peticiones de los cleintes para que le pueda responder
    console.log("Servidor funcionando")
})