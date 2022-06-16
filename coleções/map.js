function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Anderson', 'Admin');
usuarios.set('Monise', 'User');
usuarios.set('Ramon', 'Admin');

console.log(getAdmins(usuarios));