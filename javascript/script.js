function getAdmins(map){
    let admins = [];
    for([key,value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Paula','Admin');
usuarios.set('Joao','User');
usuarios.set('Junior','Admin');
usuarios.set('Lucas','User');

console.log(getAdmins(usuarios));