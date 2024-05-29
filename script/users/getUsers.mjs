export const getAllUsers = async () => {
    try{
        if(!localStorage.getItem("DBTT")){
            const res = await fetch('https://dummyjson.com/users?limit=0')
            const data = await res.json();
            localStorage.setItem("DBTT",JSON.stringify(data.users))
        }else{
            console.log( "la base ya esta creada")
        }

        console.log("los datos estan cargados")
    }
    catch(error){
        console.log("error")
    }
}