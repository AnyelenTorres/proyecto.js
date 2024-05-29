import { addUser } from "./users/addUser.mjs";
import { logInUser } from "./users/logIn.mjs";
import { getAllUsers } from ".users/getUsers.mjs"

//------ Constantes------
const $ = selector => document.querySelector(selector);


const $btnRegistrarse = $("#registrarse");
const $btnFormRegistro = $(".registro");
const $Registrar = $("#btn-registro");
const $btnFormInicio = $(".inicio");
const $btnIniciar = $('#iniciar-sesion');
const $home =$("r-s");
const $btnProducto = $("#show-products");
const $btnUser = $("#show-users");
const $btnCerrarSesion = $("#cerrar-sesion");
const $sectionHome = $("#sect-home");
const $nombre =$("#nombre");
const $apellido =$("#apellido");
const $usuario =$("#usuario");
const $password =$("#password");
const $btnPost = $("#show-posts");
const $btnLogIn = $("")

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


export let logInState = JSON.parse(localStorage.getItem('stateLogin'))

if(logInState.state){
    $btnFormInicio.classList.add("ocultar");
    $home.classList.remove("ocultar");
    $btnProducto.classList.remove("ocultar");
    $btnUser.classList.remove("ocultar");
    $btnCerrarSesion.classList.remove("ocultar");
    $btnRegistrarse.classList.add("ocultar");
    $btnIniciar.classList.add("ocultar");
    $sectionHome.classList.remove("ocultar");
   

    $sectionHome.innerHTML =  `
    <img src= ${logInState.user.image} alt ="" 
    <h1> Bienvenido/a <span id ="home-name-user">${logInState.user.firstName}</span>
    > `


}

//-----------EVENTOS--------------



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

//-----------REGISTRAMOS UN USUARIO----------

$Registrar.addEventListener("click", (e)=>{

    if($nombre.value !== "" && $apellido.value !== "" && $usuario.value !== "" && $password !== ""){
        addUser($nombre.value, $apellido.value, $usuario.value, $password.value);
        alert("Registro exitoso");
        $nombre.value = "";
        $apellido.value ="";
        $password.value ="";
        $usuario.value = "";

        $btnFormRegistro.classList.add("ocultar");
        $btnFormInicio.classList.remove("ocultar");
    }
})


// ----- MOSTRAR TODOS LOS POST del dummyjson

$btnPost.addEventListener("click",()=>{
    getAllPost();
}
)


//----FORM LOGIN-------------


$btnLogIn.addEventListener


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