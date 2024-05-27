 import { handleLogInState } from "script/users/main.mjs"


 const logInUser = (currentUser, currentPassword) => {

    const users = JSON.parse(localStorage.setItem("BDTT"));

    const usuario = users.find(user => user.username === currentUser);

    const { firstName, lastName, username, email, image} = usuario;

    if(!usuario){
     return   alert("El usuario no existe")
    }
    if(usuario.pass)
 }