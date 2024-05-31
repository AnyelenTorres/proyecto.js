import { getAllUsers } from "./users/getUsers.mjs";
import { addUser } from "./users/addUser.mjs";
import { getAllPost } from "./posts/getAllPost.mjs";
import { logInUser } from "./users/logIn.mjs";
import { getAllProducts } from "./products/getAllProducts.mjs";


//------ CONSTANTES------
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
const $btnLogIn = $("btn-login")
const $logInUser = $("login-user");
const $logInPassword = $("login-password");



// cargar pagina y luego llama a getAllUser
window.onload = () => {
    getAllUsers();

}

// ------stateLogin - inicializacion de estado de INICIO DE SESION------

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


//----------- MOSTRAR TODOS LOS POST del dummyjson-------------------------

$btnPost.addEventListener("click",()=>{
    getAllPost();
}
)

//-----------MOSTRAR LOS PRODUCTOS-----------------------------------------

$btnProducto.addEventListener("click", () =>{
    getAllProducts();
}
)
//-----------------FORM LOGIN-----------------------------------------------


$btnLogIn.addEventListener("click", (e)=>{
  //  e.preventDefault();

  let resLogIn = logInUser($logInUser.value, $logInPassword.value)

    if (resLogIn){
        $btnFormInicio.classList.add("ocultar");
        $home.classList.remove("ocultar");
        $btnProducto.remove("ocultar");
        $btnUser.classList.remove("ocultar");
        $btnCerrarSesion.classList.remove("ocultar");
        $btnRegistrarse.classList.add("ocultar");
        $btnIniciar.classList.add("ocultar");
        $sectionHome.classList.remove("ocultar");


        $sectionHome.innerHTML = `
        <img src=${logInState.user.image} alt="">
		<h1>Bienvenido <span id="home-name-user">${logInState.user.firstName}</span></h1>
        `


        $logInPassword.value="";
        $logInUser.value="";
    
    }else{
        alert("la contraseña o usuario es incorrecto/a.")
    }


})

//-----------CERRAR SESION----------------

$btnCerrarSesion.addEventListener("click", ()=>{
    $btnFormInicio.classList.remove("ocultar");
    $home.classList.add("ocultar");
    $btnProducto.classList.add("ocultar");
    $btnUser.classList.add("ocultar");
    $btnCerrarSesion.classList.add("ocultar");
    $btnRegistrarse.classList.remove("ocultar");
    $btnIniciar.classList.remove("ocultar");
    $sectionHome.classList.add("ocultar");
    handleLogInState();

    console.log(logInState)
    
})

//-----GUARDAMOS LOS USUARIOS REGISTRADOS -----

export const handleLogInState = (firstName = "", lastName = "", username = "", email = "", image = "", state = false) => {
    logInState.state = state
    logInState.user.firstName = firstName
    logInState.user.lastName = lastName
    logInState.user.username = username
    logInState.user.email = email
    logInState.user.image = image
    localStorage.setItem('stateLogin', JSON.stringify(logInState))
}