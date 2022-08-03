function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}
function seleccionarMascotaJugador(){
   let inputHipodoge = document.getElementById('hipodoge')
   let inputCapipepo = document.getElementById('capipepo')
   let inputRatigueya = document.getElementById('ratigueya')

   if(inputHipodoge.checked){
        alert('Seleccionaste a Hipodoge')
   } else if(inputCapipepo.checked){
        alert('Seleccionaste a Capipepo')
   } else if(inputRatigueya.checked){
        alert('Seleccionaste a Ratigueya')
   }else{
        alert('Selecciona a una mascota')
   }
}


//confirmar que el html haya cargado todo, despues, llamar 
//iniciarJuego()
window.addEventListener('load', iniciarJuego)