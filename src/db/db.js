const mongoose = require('mongoose')
// Conexion a la coleccion react-auth
mongoose.connect('mongodb://localhost:27017/react-auth', {
})
    .then(db => console.log('Conectado a React-auth'))
    .catch(err => console.log(err))