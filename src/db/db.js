const mongoose = require('mongoose')
// Conexion a la bd react-auth
mongoose.connect('mongodb://127.0.0.1:27017/react-auth', {
})
    .then(db => console.log('Conectado a React-auth'))
    .catch(err => console.log(err))