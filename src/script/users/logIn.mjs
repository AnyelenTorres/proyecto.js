import { handleLogInState } from "../main.mjs"
export const logInUser = (currentUser, currentPassword) => {
    const users = JSON.parse(localStorage.getItem('DBTT'));
   
    const usuario = users.find(user => user.username === currentUser);

    if (!usuario) {
        alert('No se encontró el usuario pasado');
        return false;
    }

    if (usuario.password === currentPassword) {
        const {firstName, lastName, username, email, image} = usuario;
        handleLogInState(firstName, lastName, username, email, image, true);
        return true;
    }

    return false;
}
