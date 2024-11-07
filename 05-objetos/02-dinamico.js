const user = { id: 1};

user.name = 'Yerko';
user.guardar = function () {
    console.log('guardando....', user.name);
}

user.guardar();
