
export const addUser = async (firstName, lastName, username, password, image = " ") => {
    //respuesta de la peticion en postUser
  try{  const postUser =await fetch('https://dummyjson.com/user/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          username,
          password,
          image
        })
      });

    const users = JSON.parse(localStorage.getItem('DBTT'));

    // el resultado se almacena en la variable user
    const user = await postUser.json();
    users.push(user);
    localStorage.setItem('DBTT', JSON.stringify(users));

}catch (error) {
  console.error('Error al agregar el usuario:', error);
}
};


