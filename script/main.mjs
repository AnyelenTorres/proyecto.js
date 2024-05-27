import { addUser } from "./users/addUser.mjs";


//------ Constantes------
const $ = selector => document.querySelector(selector);


const $btnRegistrarse = $("#registrarse");
const $btnFormRegistro = $(".registro");
const $Registrar = $("#btn-registro");
const $btnFormInicio = $(".inicio");
const $btnIniciar = $('#iniciar-sesion');


// ------stateLogin - inicializacion de estado de inicio de sesion------

if(!localStorage.getItem('stateLogin')){
    localStorage.setItem('stateLogin', JSON.stringify({
            state: false,
            user:{
                firstName : "",
                lastName : "",
                username:"",
                email:"",
                image:"",
                cart: []
            }
    }))
}else{
    console.log("Ya está creado el stateLogin");
}


//-----boton nav seccion registro-----

$btnRegistrarse.addEventListener('click', () =>{
    
    $btnFormRegistro.classList.remove('ocultar')
    $btnFormInicio.classList.add('ocultar')
    
})

// -----boton nav seccion inicio------

$btnIniciar.addEventListener('click', () =>{

    $btnFormRegistro.classList.add('ocultar')
    $btnFormInicio.classList.remove('ocultar')

})


//-----guardamos los usuarios que se ha registrado-----

export const handleLogInState = (firstName = "", lastName = "", username = "", email = "", image = "", state = false) => {
    logInState.state = state
    logInState.user.firstName = firstName
    logInState.user.lastName = lastName
    logInState.user.username = username
    logInState.user.email = email
    logInState.user.image = image
    localStorage.setItem('stateLogin', JSON.stringify(logInState))
}